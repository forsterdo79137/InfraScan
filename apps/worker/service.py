from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import subprocess, tempfile, shutil, os
import boto3

app = FastAPI()


class RunPayload(BaseModel):
  projectId: str
  imagesPrefix: str
  sfmKey: str
  meshKey: str
  outPrefix: str
  modelPath: str | None = None
  jobId: str | None = None


s3 = boto3.resource("s3")


def _split_s3(s3url: str):
  assert s3url.startswith("s3://")
  _, _, rest = s3url.partition("s3://")
  bucket, _, key = rest.partition("/")
  return bucket, key


def _download_prefix(s3prefix: str, local_dir: str):
  bkt, key_prefix = _split_s3(s3prefix)
  bucket = s3.Bucket(bkt)
  for obj in bucket.objects.filter(Prefix=key_prefix):
    if obj.key.endswith("/"):
      continue
    local_path = os.path.join(local_dir, obj.key.split("/")[-1])
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    bucket.download_file(obj.key, local_path)


def _download_file(s3key: str, local_path: str):
  bkt, key = _split_s3(s3key)
  os.makedirs(os.path.dirname(local_path), exist_ok=True)
  s3.Bucket(bkt).download_file(key, local_path)


def _upload_dir(local_dir: str, s3prefix: str):
  bkt, key_prefix = _split_s3(s3prefix)
  bucket = s3.Bucket(bkt)
  for root, _, files in os.walk(local_dir):
    for f in files:
      lp = os.path.join(root, f)
      rel = os.path.relpath(lp, local_dir)
      s3_key = key_prefix.rstrip("/") + "/" + rel.replace("\\", "/")
      bucket.upload_file(lp, s3_key)


@app.post("/run")
def run_job(payload: RunPayload):
  tmp = tempfile.mkdtemp(prefix="job_")
  raw = os.path.join(tmp, "raw")
  out = os.path.join(tmp, "out")
  os.makedirs(raw, exist_ok=True)
  os.makedirs(out, exist_ok=True)

  try:
    _download_prefix(payload.imagesPrefix, raw)
    _download_file(payload.sfmKey, os.path.join(raw, "cameras.sfm"))
    mesh_ext = ".obj" if payload.meshKey.endswith(".obj") else ".ply"
    _download_file(payload.meshKey, os.path.join(raw, "mesh" + mesh_ext))

    args = [
      "python3",
      "runner.py",
      "--imagesDir",
      raw,
      "--sfmPath",
      os.path.join(raw, "cameras.sfm"),
      "--meshPath",
      os.path.join(raw, "mesh" + mesh_ext),
      "--outDir",
      out,
    ]
    if payload.modelPath:
      args += ["--modelPath", payload.modelPath]

    proc = subprocess.run(args, check=True, capture_output=True, text=True)
    logs = proc.stdout + "\n" + proc.stderr

    _upload_dir(out, payload.outPrefix)

    return {"status": "succeeded", "jobId": payload.jobId, "logs": logs}
  except subprocess.CalledProcessError as e:
    raise HTTPException(status_code=500, detail={"status": "failed", "stdout": e.stdout, "stderr": e.stderr})
  except Exception as ex:
    raise HTTPException(status_code=500, detail=str(ex))
  finally:
    shutil.rmtree(tmp, ignore_errors=True)


@app.get("/healthz")
def health():
  try:
    import torch

    cuda = torch.cuda.is_available()
    dev = torch.cuda.get_device_name(0) if cuda else "CPU"
  except Exception:
    cuda = False
    dev = "unknown"
  return {"ok": True, "cuda": cuda, "device": dev}



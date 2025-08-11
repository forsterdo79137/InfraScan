from fastapi import FastAPI
from .config import settings

app = FastAPI(title="InfraScan Worker")


@app.get("/health")
def health():
    return {
        "status": "ok",
        "env": settings.env,
        "region": settings.aws_region,
        "s3_raw": settings.s3_bucket_raw,
        "s3_output": settings.s3_bucket_output,
    }



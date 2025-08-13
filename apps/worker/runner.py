import argparse, os, sys
from pathlib import Path


def ensure_dirs(p: str):
  Path(p).mkdir(parents=True, exist_ok=True)


def ply_to_obj(ply_path: str, obj_path: str):
  import open3d as o3d
  pcd = o3d.io.read_point_cloud(ply_path)
  if len(pcd.points) == 0:
    raise RuntimeError("Empty point cloud, cannot convert to OBJ.")
  pcd.estimate_normals()
  radii = [0.05, 0.1, 0.2]
  try:
    mesh = o3d.geometry.TriangleMesh.create_from_point_cloud_ball_pivoting(
      pcd, o3d.utility.DoubleVector(radii)
    )
  except Exception:
    mesh, _ = o3d.geometry.TriangleMesh.create_from_point_cloud_poisson(pcd, depth=8)
  mesh.remove_duplicated_vertices()
  mesh.remove_degenerate_triangles()
  mesh.remove_non_manifold_edges()
  ensure_dirs(os.path.dirname(obj_path))
  o3d.io.write_triangle_mesh(obj_path, mesh)


def main():
  ap = argparse.ArgumentParser()
  ap.add_argument("--imagesDir", required=True)
  ap.add_argument("--sfmPath", required=True)
  ap.add_argument("--meshPath", required=True)
  ap.add_argument("--outDir", required=True)
  ap.add_argument("--modelPath", required=False)
  args = ap.parse_args()

  ensure_dirs(args.outDir)

  env = os.environ.copy()
  if args.modelPath:
    env["MODEL_PATH"] = args.modelPath

  env["IMAGES_DIR"] = args.imagesDir
  env["SFM_PATH"] = args.sfmPath
  env["MESH_PATH"] = args.meshPath
  env["OUTPUT_DIR"] = args.outDir

  # Replace this with your real script entrypoint
  status = os.system("python3 automatic_crack_edge_detection.py")
  if status != 0:
    sys.exit(status)

  ply_path = os.path.join(args.outDir, "pointcloud_with_markers.ply")
  obj_path = os.path.join(args.outDir, "mesh_with_markers.obj")
  if os.path.exists(ply_path):
    ply_to_obj(ply_path, obj_path)


if __name__ == "__main__":
  main()



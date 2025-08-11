import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  ownerId: z.string().uuid(),
  createdAt: z.string().datetime(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const AssetSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  s3Key: z.string(),
  kind: z.enum(["image", "video", "pointcloud", "other"]),
  metadata: z.record(z.any()).default({}),
  createdAt: z.string().datetime(),
});
export type Asset = z.infer<typeof AssetSchema>;

export const JobSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  assetId: z.string().uuid(),
  status: z.enum(["queued", "running", "failed", "completed"]),
  priority: z.number().int().min(0).default(0),
  createdAt: z.string().datetime(),
  startedAt: z.string().datetime().optional(),
  finishedAt: z.string().datetime().optional(),
  error: z.string().optional(),
});
export type Job = z.infer<typeof JobSchema>;

export const ResultSchema = z.object({
  id: z.string().uuid(),
  jobId: z.string().uuid(),
  s3KeyOutput: z.string(),
  metrics: z.record(z.any()).default({}),
  createdAt: z.string().datetime(),
});
export type Result = z.infer<typeof ResultSchema>;



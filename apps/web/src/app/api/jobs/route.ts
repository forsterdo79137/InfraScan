import { NextRequest, NextResponse } from "next/server";
import { Queue } from "bullmq";
import { z } from "zod";

const schema = z.object({
  projectId: z.string().uuid(),
  imagesPrefix: z.string(),
  sfmKey: z.string(),
  meshKey: z.string(),
});

const queue = new Queue("infrascan", { connection: { url: process.env.REDIS_URL! } });

export async function POST(req: NextRequest) {
  const { projectId, imagesPrefix, sfmKey, meshKey } = schema.parse(await req.json());
  const job = await queue.add("run", { projectId, imagesPrefix, sfmKey, meshKey });
  return NextResponse.json({ jobId: job.id });
}



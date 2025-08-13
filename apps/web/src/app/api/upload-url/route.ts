import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";

const schema = z.object({
  projectId: z.string().uuid(),
  key: z.string(),
  contentType: z.string(),
});

const s3 = new S3Client({ region: process.env.AWS_REGION });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { projectId, key, contentType } = schema.parse(body);

  const cmd = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_BUCKET_RAW!,
    Key: key,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3, cmd, { expiresIn: 60 * 5 });
  return NextResponse.json({ url });
}



import { NextRequest, NextResponse } from "next/server";
import { verifyCognitoJWT } from "@/lib/auth/cognito";

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get("authorization");
    if (!auth?.startsWith("Bearer ")) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const token = auth.slice(7);

    const decoded = await verifyCognitoJWT(
      token,
      process.env.COGNITO_REGION!,
      process.env.COGNITO_USER_POOL_ID!,
    );

    const userSub = decoded.sub as string;
    return NextResponse.json({ ok: true, ownerSub: userSub });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 });
  }
}



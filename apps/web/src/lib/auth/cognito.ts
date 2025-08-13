import jwkToPem from "jwk-to-pem";
import jwt from "jsonwebtoken";

const cache = new Map<string, any>();

export async function verifyCognitoJWT(token: string, region: string, userPoolId: string) {
  const header: any = JSON.parse(Buffer.from(token.split(".")[0], "base64").toString());
  const kid = header.kid;

  const jwksUrl = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
  if (!cache.has(jwksUrl)) {
    const res = await fetch(jwksUrl, { cache: "no-store" });
    cache.set(jwksUrl, await res.json());
  }
  const jwks = cache.get(jwksUrl);
  const jwk = jwks.keys.find((k: any) => k.kid === kid);
  if (!jwk) throw new Error("JWK not found");

  const pem = jwkToPem(jwk);
  const decoded = jwt.verify(token, pem, { algorithms: ["RS256"] });
  return decoded as jwt.JwtPayload;
}



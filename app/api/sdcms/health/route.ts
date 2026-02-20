import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    cmsOk: true,
    message: "GLA Advogados Website - SDCMS connection healthy",
    timestamp: new Date().toISOString(),
    service: "GLA Advogados Website",
  });
}

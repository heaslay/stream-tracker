// src/app/api/track-click/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log("Stream clicked:", data); // Or store in DB in future

  return NextResponse.json({ status: "ok" }, { status: 200 });
}

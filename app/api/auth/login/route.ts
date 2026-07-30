// src/app/api/auth/login/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  return NextResponse.json({
    success: true,
    user: body.email,
  });
}
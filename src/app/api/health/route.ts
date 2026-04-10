import { NextResponse } from "next/server"
import { apiSuccess } from "@/lib/api-response"

export async function GET() {
  return apiSuccess({
    service: "nextjs-template",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 })
}

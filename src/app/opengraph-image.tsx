import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Next.js + shadcn/ui Template by NISIO"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #000000, #434343)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Next.js + shadcn/ui
        </div>
        <div
          style={{
            fontSize: "40px",
            color: "#a1a1aa",
          }}
        >
          Production-Ready Template
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#71717a",
            marginTop: "40px",
          }}
        >
          by NISIO
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

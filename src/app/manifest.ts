import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js + shadcn/ui Template",
    short_name: "Next Template",
    description: "A production-ready Next.js template by NISIO",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}

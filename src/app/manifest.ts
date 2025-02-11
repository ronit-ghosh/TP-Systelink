import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TP Systelink",
    short_name: "TP Systelink",
    description: "ISO Certification Services - Simplifying Standards, Driving Excellence",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#de7d50",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "../images/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}


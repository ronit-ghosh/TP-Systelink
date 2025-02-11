import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TP Systelink - ISO Certification Experts",
  description: "Providing ISO certification services since 2000, ensuring compliance, quality, and industry excellence.",
  openGraph: {
    title: "TP Systelink - ISO Certification Experts",
    description: "Helping businesses achieve ISO 9001, ISO 14001, ISO 27001, and more for global compliance and credibility.",
    url: "https://tp-systelink.vercel.app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/drynqkitl/image/upload/v1738328491/tp_systelink_png_sitecv.png",
        width: 1186,
        height: 1490,
        alt: "TP Systelink - ISO Certification",
      },
    ],
  },
  keywords: [
    "ISO certification",
    "ISO 9001",
    "ISO 14001",
    "ISO 27001",
    "Quality management",
    "Compliance standards",
    "ISO consultant",
    "ISO auditing",
    "Environmental safety",
    "Occupational health",
  ],
  alternates: {
    canonical: "https://tp-systelink.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


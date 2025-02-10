import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TP Systelink - Simplifying Standards, Driving Excellence",
  description: "Empowering success through ISO certification since 2000",
}

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


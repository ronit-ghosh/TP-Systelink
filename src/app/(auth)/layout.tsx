import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"
import { Providers } from "@/lib/providers"

export const metadata = {
  title: 'Login | TP Systelink',
  description: 'Login Page for admins of TP Systelink'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

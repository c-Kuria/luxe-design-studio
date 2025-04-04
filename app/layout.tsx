import { Analytics } from "@vercel/analytics/react"
import type React from "react"
import type { Metadata } from "next"
import {
  Playfair_Display as PlayfairDisplay,
  Cormorant_Garamond as CormorantGaramond,
  Montserrat,
} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Toaster } from "@/components/ui/toaster"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = CormorantGaramond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fanisi Atelier | Interior Design & Construction",
  description:
    "Professional interior design and construction studio specializing in luxury residential and commercial spaces.",
  keywords: [
    "interior design",
    "construction",
    "luxury design",
    "home renovation",
    "commercial design",
    "architecture",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatSupport />
            <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'
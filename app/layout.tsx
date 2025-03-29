import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RKS Fabricators - Excellence in Metal Fabrication & Pharmaceutical Equipment",
  description:
    "RKS Fabricators is a leading manufacturer of high-quality metal fabrication, clean room equipment, and pharmaceutical machinery including Air Showers, LAF systems, Autoclaves, and more.",
  keywords:
    "metal fabrication, pharmaceutical equipment, clean room equipment, air shower, laminar air flow, autoclave, pressure vessel, biosafety tank, stainless steel fabrication",
  authors: [{ name: "RKS Fabricators" }],
  creator: "RKS Fabricators",
  publisher: "RKS Fabricators",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rksfabricators.com/",
    title: "RKS Fabricators - Excellence in Metal Fabrication & Pharmaceutical Equipment",
    description:
      "Leading manufacturer of high-quality metal fabrication, clean room equipment, and pharmaceutical machinery.",
    siteName: "RKS Fabricators",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="verification_code" />
        <link rel="canonical" href="https://www.rksfabricators.com/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
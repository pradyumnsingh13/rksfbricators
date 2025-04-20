import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RKS Fabricators | Baddi, Himachal Pradesh | Metal Fabrication & Pharma Equipment Experts",
  description:
    "RKS Fabricators, based in Baddi, Himachal Pradesh, is a trusted manufacturer of high-quality metal fabrication, clean room equipment, and pharmaceutical machinery like Air Showers, LAF systems, Autoclaves, and more.",
  keywords:
    "RKS Fabricators, Baddi fabricators, Himachal Pradesh fabrication company, metal fabrication Baddi, pharmaceutical equipment Baddi, clean room equipment, air shower, laminar air flow, autoclave, pressure vessel, stainless steel welding, pharma fabrication Baddi",
  authors: [{ name: "RKS Fabricators" }],
  creator: "RKS Fabricators",
  publisher: "RKS Fabricators",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rksfabricators.com/",
    title: "RKS Fabricators | Baddi's Metal & Pharma Equipment Specialists",
    description:
      "Leading fabrication company in Baddi, Himachal Pradesh, manufacturing clean room and pharmaceutical equipment for pharma & industrial use.",
    siteName: "RKS Fabricators",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
    
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
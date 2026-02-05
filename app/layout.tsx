import React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"

import "./globals.css"

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Creative Studio | Video Editor & Thumbnail Designer",
  description:
    "Professional video editing and thumbnail design services. High-energy short-form, cinematic long-form, and click-worthy thumbnails for content creators.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_spaceGrotesk.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

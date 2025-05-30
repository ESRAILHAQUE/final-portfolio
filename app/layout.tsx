import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { ParticlesBackground } from "@/components/particles-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Esrail Haque | Web Developer",
  description: "Portfolio website of Esrail Haque, a Full-Stack MERN Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-white min-h-screen`}>
        <ParticlesBackground />
        <div className="relative z-10">
          <Navigation />
          <SocialLinks />
          {children}
        </div>
      </body>
    </html>
  )
}

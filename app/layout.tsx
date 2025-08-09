import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { SocialLinks } from "@/components/social-links";
import { ParticlesBackground } from "@/components/particles-background";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Esrail Haque | Full-Stack Web Developer",
    template: "%s | Esrail Haque",
  },
  description:
    "Portfolio website of Esrail Haque, a Full-Stack MERN Developer specializing in Next.js, React, Node.js, and MongoDB. View projects, skills, and contact information.",
  generator: "v0.dev",
  applicationName: "Esrail Haque Portfolio",
  authors: [{ name: "Esrail Haque", url: "/" }],
  creator: "Esrail Haque",
  publisher: "Esrail Haque",
  keywords: [
    "Esrail Haque",
    "Esrail",
    "Web Developer",
    "Full-Stack Developer",
    "MERN",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Esrail Haque | Full-Stack Web Developer",
    description:
      "Full-Stack MERN developer portfolio showcasing projects, skills, and contact information.",
    siteName: "Esrail Haque Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Esrail Haque - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esrail Haque | Full-Stack Web Developer",
    description:
      "Full-Stack MERN developer portfolio showcasing projects, skills, and contact information.",
    creator: "@HaqueEsrail",
    images: [
      {
        url: "/profile.png",
        alt: "Esrail Haque - Full-Stack Web Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
  themeColor: "#0d1123",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1123",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-white min-h-screen`}>
        <ParticlesBackground />
        <div className="relative z-10">
          <Navigation />
          <SocialLinks />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}

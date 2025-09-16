import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { AppLayout } from "@/components/layout/app-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shadcnstore.com/cheatsheet"),
  title: "Shadcn UI Cheatsheet - Complete Component Guide & Examples (2024)",
  description:
    "Interactive Shadcn/UI cheatsheet with 45 components, live previews, copy-paste code examples, and props tables. Built with Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "shadcn ui cheatsheet",
    "shadcn components",
    "shadcn ui examples",
    "react components",
    "tailwind components",
    "ui library",
    "component library",
    "shadcn ui guide",
    "radix ui components"
  ],
  authors: [{ name: "SiliconDeck", url: "https://silicondeck.com" }],
  creator: "SiliconDeck",
  publisher: "SiliconDeck",
  robots: "index, follow",
  openGraph: {
    title: "Shadcn UI Cheatsheet - Complete Component Guide",
    description: "Interactive cheatsheet for Shadcn/UI with live previews, examples, and documentation for 46+ components.",
    url: "https://shadcnstore.com/cheatsheet",
    siteName: "Shadcn UI Cheatsheet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shadcn UI Cheatsheet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn UI Cheatsheet - Complete Component Guide",
    description: "Interactive cheatsheet for Shadcn/UI with live previews and examples.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased transition-all duration-200`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}

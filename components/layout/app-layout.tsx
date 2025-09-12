/**
 * Main application layout component
 *
 * This component provides the foundational structure for the entire application
 * including theme provider, global styles, and responsive layout.
 */

"use client"

import { AppLayoutProps } from "@/types"
import { Github, Twitter } from "lucide-react"
import { ThemeProvider } from "next-themes"
import React from "react"

import { DEFAULT_FOOTER_SECTIONS, Footer } from "./footer"
import { Header } from "./header"
import { ThemeCustomizer, ThemeCustomizerTrigger } from "@/components/theme-customizer"

/**
 * Main application layout wrapper
 *
 * Provides theme context and overall page structure
 */
export function AppLayout({ children }: AppLayoutProps) {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)


  const headerProps = {
    socialLinks: [
      {
        platform: "github" as const,
        url: "https://github.com/silicondeck/shadcn-cheatsheet",
        icon: Github,
        label: "GitHub Repository",
      },
      {
        platform: "twitter" as const,
        url: "https://x.com/shadcnstore",
        icon: Twitter,
        label: "Follow on Twitter",
      },
    ],
    onThemeChange: () => {}, // Theme is handled by next-themes provider
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen text-foreground flex flex-col">
        <Header {...headerProps} />
        <main className="flex-1">{children}</main>
        <Footer
          sections={DEFAULT_FOOTER_SECTIONS}
          attribution="Made with ❤️ by ShadcnStore"
          attributionLink="https://shadcnstore.com"
        />
      </div>

      {/* Theme Customizer */}
      <ThemeCustomizerTrigger onClick={() => setThemeCustomizerOpen(true)} />
      <ThemeCustomizer
        open={themeCustomizerOpen}
        onOpenChange={setThemeCustomizerOpen}
      />
    </ThemeProvider>
  )
}

/**
 * Main content wrapper with proper spacing and responsive design
 */
export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  )
}

/**
 * Content section with maximum width and centering
 */
export function ContentSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto max-w-7xl ${className}`}>{children}</section>
  )
}

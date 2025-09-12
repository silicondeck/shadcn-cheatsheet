/**
 * Header navigation component
 *
 * Contains logo, navigation menu, theme toggle, and social links
 */

"use client"

import React from "react"
import Link from "next/link"
import { SocialLink } from "@/types"
import {
  ExternalLink,
  Github,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  Twitter,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/**
 * Shadcn/UI Logo SVG component
 */
function ShadcnLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
    </svg>
  )
}

/**
 * Navigation menu items
 */
const navigationItems = [
  { label: "Home", href: "/", isExternal: false },
  {
    label: "Blocks",
    href: "https://shadcnstore.com/blocks/",
    isExternal: true,
  },
  {
    label: "Admin Dashboard",
    href: "https://shadcnstore.com/templates/dashboard/shadcn-dashboard-landing-template",
    isExternal: true,
  },
  {
    label: "Landing Page",
    href: "https://shadcnstore.com/templates/dashboard/shadcn-dashboard-landing-template/landing",
    isExternal: true,
  },
]

/**
 * GitHub Stars component
 */
function GitHubStars({ repo = "silicondeck/shadcn-cheatsheet" }: { repo?: string }) {
  const [stars, setStars] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        const data = await response.json()
        const starCount = data.stargazers_count

        // Format star count (e.g., 94600 -> "94.6k")
        const formatStars = (count: number): string => {
          if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`
          }
          return count.toString()
        }

        setStars(formatStars(starCount))
      } catch {
        // GitHub API errors disabled for production
        // console.error("Failed to fetch GitHub stars:", error)
        setStars("★")
      } finally {
        setIsLoading(false)
      }
    }

    fetchStars()
  }, [repo])

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border rounded-md hover:bg-muted/50"
      aria-label={`View on GitHub - ${stars} stars`}
    >
      <Github className="size-4" />
      <span className="min-w-[2ch]">{isLoading ? "..." : stars}</span>
    </a>
  )
}

/**
 * Main header navigation component
 */
export function Header({
  socialLinks,
  onThemeChange,
}: {
  socialLinks: SocialLink[]
  onThemeChange: (theme: "light" | "dark") => void
}) {
  const { setTheme } = useTheme()

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    onThemeChange(newTheme)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ShadcnLogo className="size-6" />
            <span className="font-semibold text-lg">Cheatsheet</span>
          </Link>
        </div>

        {/* Centered Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          {navigationItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {item.label}
                <ExternalLink className="size-3" />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: GitHub Stars, Mobile menu, Theme toggle and social links */}
        <div className="flex items-center gap-2 ml-auto">
          {/* GitHub Stars */}
          <div className="hidden sm:block">
            <GitHubStars />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                <SheetHeader className="space-y-2 text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <ShadcnLogo className="size-5" />
                    <span className="font-semibold">Cheatsheet</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-6">
                  {navigationItems.map((item) =>
                    item.isExternal ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="size-4" />
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  )}

                  {/* GitHub Stars in mobile menu */}
                  <div className="px-3 py-2.5 mt-2">
                    <GitHubStars />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle onThemeChange={handleThemeChange} />

          {/* Social Links - Removed GitHub since we have GitHub stars */}
          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks
              .filter((link) => link.platform !== "github")
              .map((link) => (
                <SocialLinkButton key={link.platform} {...link} />
              ))}
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * Theme toggle component
 */
function ThemeToggle({
  onThemeChange,
}: {
  onThemeChange: (theme: "light" | "dark") => void
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark")
      onThemeChange("dark")
    } else {
      setTheme("light")
      onThemeChange("light")
    }
  }

  const getIcon = () => {
    if (!mounted) {
      return <Sun className="h-4 w-4" />
    }

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="h-9 w-9 cursor-pointer"
    >
      {getIcon()}
    </Button>
  )
}

/**
 * Social media link button
 */
function SocialLinkButton({
  url,
  icon: Icon,
  label,
}: Omit<SocialLink, "platform">) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      aria-label={label}
      className="h-9 w-9 cursor-pointer"
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}

/**
 * Default social links configuration
 */
export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/silicondeck/shadcn-cheatsheet",
    icon: Github,
    label: "GitHub",
  },
  {
    platform: "twitter",
    url: "https://x.com/shadcnstore",
    icon: Twitter,
    label: "Twitter",
  },
  {
    platform: "discord",
    url: "https://discord.gg/XEQhPc9a6p",
    icon: MessageCircle,
    label: "Discord",
  },
]

"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Package } from "lucide-react"

// Variation 1: Horizontal Strip Banner (Single Row)
export function HorizontalStripBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 hover:from-primary/15 hover:via-primary/20 hover:to-primary/15 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Icon + Message */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base sm:text-lg text-foreground truncate">
                  Free & Premium Shadcn Blocks and Templates
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate hidden sm:block font-medium">
                  Production-ready components to build faster
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm group-hover:bg-primary/90 group-hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
              <span className="hidden sm:inline">Explore Now</span>
              <span className="sm:hidden">View</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </div>
    </Link>
  )
}

// Variation 2: Compact Card Banner (Two Columns)
export function CompactCardBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label="Explore Free & Premium Shadcn blocks and templates"
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative container mx-auto px-4 py-5">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Content */}
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary/30">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-lg text-foreground mb-1 flex items-center gap-2 flex-wrap">
                  Build Faster with Shadcn Blocks
                  <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
                    Free & Premium
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground mb-2.5 line-clamp-1 font-medium">
                  Production-ready Shadcn UI components and templates
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Ready to use</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Save hours</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex-shrink-0 hidden sm:block">
              <div className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm group-hover:bg-primary/90 group-hover:scale-105 transition-all flex items-center gap-2 shadow-md group-hover:shadow-lg">
                Explore Blocks
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Variation 3: Notification Style Banner (Minimal)
export function NotificationBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label="View Free & Premium Shadcn UI blocks and templates"
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Icon + Compact Message */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-75" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">
                  <span className="hidden sm:inline">🚀 </span>
                  Free & Premium Blocks and Templates Available
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block">
                  Production-ready Shadcn UI components to accelerate your workflow
                </p>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex-shrink-0">
              <div className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm group-hover:bg-primary/90 group-hover:scale-105 transition-all shadow-sm group-hover:shadow-md flex items-center gap-2">
                <span className="hidden sm:inline">Explore</span>
                <span className="sm:hidden">View</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </div>
    </Link>
  )
}

// Variation 4: Featured Showcase Banner (Slightly Taller - 100px)
export function FeaturedShowcaseBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label="Browse Free & Premium Shadcn UI blocks and templates"
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left: Content with Icons */}
            <div className="flex items-start gap-4 min-w-0 flex-1">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary/40">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="font-bold text-xl text-foreground">
                    Ready-to-Use Shadcn Blocks
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500/20 to-primary/20 border border-green-500/30 px-2.5 py-0.5 text-xs font-bold text-foreground">
                    Free & Premium
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  Professional templates and components to ship products faster
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-bold">Instant Integration</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-bold">Production Ready</span>
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground font-bold">50+ Components</span>
                </div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm group-hover:bg-primary/90 group-hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg group-hover:shadow-xl">
                Browse Collection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}

// Default export - Choose your preferred variation
export default function PromoBanner({
  variant = "horizontal"
}: {
  variant?: "horizontal" | "compact" | "notification" | "featured"
}) {
  const bannerVariants = {
    horizontal: HorizontalStripBanner,
    compact: CompactCardBanner,
    notification: NotificationBanner,
    featured: FeaturedShowcaseBanner,
  }

  const BannerComponent = bannerVariants[variant]

  return (
    <div className="w-full">
      <BannerComponent />
    </div>
  )
}

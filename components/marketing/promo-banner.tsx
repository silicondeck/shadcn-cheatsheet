"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Package, Blocks, Star } from "lucide-react"

// Variation 1: Full-Featured Showcase Banner (Primary - Like the image provided)
export function OptimizedShowcaseBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label="Explore Free & Premium Shadcn Blocks and Templates"
    >
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-background via-background/95 to-primary/5 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* LEFT SIDE: Content - All Left Aligned */}
            <div className="flex flex-col space-y-6 px-6 sm:px-8 py-8 sm:py-10 lg:py-12">
              {/* Main Heading with Free & Premium Highlight */}
              <div className="space-y-3 text-left">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground text-left">
                  Optimized Shadcn blocks
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    built for scale
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-left">
                  Supercharge your workflow with 165+ responsive, production-ready Shadcn UI blocks for any modern web project. Built for speed, flexibility, and clarity—so you can focus on what matters most.
                </p>
              </div>

              {/* Free vs Premium Comparison */}
              <div className="grid grid-cols-2 gap-4 py-2 text-left">
                {/* Free Column */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-foreground text-left">Free Components</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
                      <span className="text-left">50+ Pre-built Blocks</span>
                    </li>
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
                      <span className="text-left">Fully Customizable</span>
                    </li>
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
                      <span className="text-left">Copy & Paste Ready</span>
                    </li>
                  </ul>
                </div>

                {/* Premium Column */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-left">Premium Templates</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-left">Full-Page Templates</span>
                    </li>
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-left">Advanced Animations</span>
                    </li>
                    <li className="flex items-start gap-2 text-left">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-left">Priority Updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button - Left Aligned */}
              <div className="pt-4 text-left">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-base group-hover:bg-primary/90 group-hover:scale-105 group-hover:shadow-lg transition-all shadow-md">
                  <Blocks className="h-5 w-5" />
                  <span>Explore Blocks</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Single Preview Image - Full Height No Padding */}
            <div className="relative hidden lg:block h-full min-h-[400px]">
              {/* Single showcase image placeholder - takes full height with rounded corner only on right */}
              <div className="w-full h-full border-l border-primary/10 overflow-hidden group-hover:shadow-lg transition-all rounded-r-2xl">
                <Image
                  src="/image/blocks-image.png"
                  alt="Shadcn Blocks Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority
                />
              </div>

              {/* Floating accent element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}

// Variation 2: Horizontal Strip Banner (Single Row)
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

// Variation 2.5: Compact Showcase Banner (200px height with images)
export function CompactShowcaseBanner() {
  return (
    <Link
      href="https://shadcnstore.com/blocks"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label="Explore Free & Premium Shadcn Blocks and Templates"
    >
      <div className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-background via-background/95 to-primary/5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-[200px] overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-50" />

        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="relative h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-0 h-full items-stretch">
            {/* LEFT SIDE: Content - All Left Aligned */}
            <div className="flex flex-col justify-center space-y-4 px-6 sm:px-8 py-6 text-left">
              {/* Main Heading */}
              <div className="space-y-2 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground text-left">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                    165+ Shadcn Blocks
                  </span>
                  {" "}Ready to Use
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed text-left">
                  Production-ready components and templates to ship faster
                </p>
              </div>

              {/* CTA Button - Left Aligned */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm group-hover:bg-primary/90 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shadow-md">
                  <Blocks className="h-4 w-4" />
                  <span>Explore Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 duration-300 transition-transform" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Single Preview Image - Full Height No Padding */}
            <div className="relative hidden lg:block h-full">
              <div className="h-full w-full  group-hover:shadow-lg transition-all top-22 -right-20 absolute scale-y-250 scale-x-175 rotate-25">
                <Image
                  src="/images/banner-image.png"
                  alt="Shadcn Blocks Preview"
                  fill
                />
              </div>

              {/* Floating accent element with pulse glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}

// Variation 3: Compact Card Banner
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
                <h3 className="font-bold text-lg text-foreground mb-1">
                  Build Faster with Shadcn Blocks
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

// Variation 4: Notification Style Banner (Minimal)
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

// Variation 5: Featured Showcase Banner
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
                <h3 className="font-bold text-xl text-foreground mb-1.5">
                  Ready-to-Use Shadcn Blocks
                </h3>
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
  variant = "optimized"
}: {
  variant?: "optimized" | "horizontal" | "compact-showcase" | "compact" | "notification" | "featured"
}) {
  const bannerVariants = {
    optimized: OptimizedShowcaseBanner,
    horizontal: HorizontalStripBanner,
    "compact-showcase": CompactShowcaseBanner,
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

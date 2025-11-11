"use client"

import React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  HorizontalStripBanner,
  CompactCardBanner,
  NotificationBanner,
  FeaturedShowcaseBanner
} from "@/components/marketing/promo-banner"

export default function BannerDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cheatsheet
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Promo Banner Variations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preview all 4 banner design variations. Click any banner to test the link behavior.
            </p>
          </div>

          <div className="space-y-12">
            {/* Variation 1: Notification Style */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    1. Notification Style
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Height: ~60-80px • Most minimal • Pulse animation • Currently Live
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Active
                  </span>
                </div>
              </div>
              <div className="rounded-lg border-2 border-dashed border-muted p-6 bg-muted/20">
                <NotificationBanner />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Minimal disruption, subtle promotion.
                <strong className="ml-3">Features:</strong> Pulse icon, shimmer hover, compact message, inline CTA
              </div>
            </div>

            {/* Variation 2: Horizontal Strip */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  2. Horizontal Strip
                </h2>
                <p className="text-sm text-muted-foreground">
                  Height: ~60-80px • Balanced layout • Gradient background
                </p>
              </div>
              <div className="rounded-lg border-2 border-dashed border-muted p-6 bg-muted/20">
                <HorizontalStripBanner />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Clean, balanced layout with clear messaging.
                <strong className="ml-3">Features:</strong> Gradient BG, animated shimmer, single row layout
              </div>
            </div>

            {/* Variation 3: Compact Card */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  3. Compact Card
                </h2>
                <p className="text-sm text-muted-foreground">
                  Height: ~80-100px • Two-column layout • Feature badges
                </p>
              </div>
              <div className="rounded-lg border-2 border-dashed border-muted p-6 bg-muted/20">
                <CompactCardBanner />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Balanced information density.
                <strong className="ml-3">Features:</strong> Card design, hover shadow, feature badges, &ldquo;New&rdquo; indicator, CTA button
              </div>
            </div>

            {/* Variation 4: Featured Showcase */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  4. Featured Showcase
                </h2>
                <p className="text-sm text-muted-foreground">
                  Height: ~100-120px • Most detailed • Dotted pattern background
                </p>
              </div>
              <div className="rounded-lg border-2 border-dashed border-muted p-6 bg-muted/20">
                <FeaturedShowcaseBanner />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Maximum engagement and information.
                <strong className="ml-3">Features:</strong> Dotted pattern, gradient effects, multiple benefits, component count, detailed messaging
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-16 rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-medium">Variant</th>
                    <th className="text-left py-3 px-2 font-medium">Height</th>
                    <th className="text-left py-3 px-2 font-medium">Visual Impact</th>
                    <th className="text-left py-3 px-2 font-medium">Info Density</th>
                    <th className="text-left py-3 px-2 font-medium">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-2 font-medium">Notification</td>
                    <td className="py-3 px-2">60-80px</td>
                    <td className="py-3 px-2">⭐ Minimal</td>
                    <td className="py-3 px-2">Low</td>
                    <td className="py-3 px-2">Subtle promotion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 font-medium">Horizontal</td>
                    <td className="py-3 px-2">60-80px</td>
                    <td className="py-3 px-2">⭐⭐ Low</td>
                    <td className="py-3 px-2">Medium</td>
                    <td className="py-3 px-2">Balanced approach</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 font-medium">Compact Card</td>
                    <td className="py-3 px-2">80-100px</td>
                    <td className="py-3 px-2">⭐⭐⭐ Medium</td>
                    <td className="py-3 px-2">High</td>
                    <td className="py-3 px-2">More information</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-medium">Featured</td>
                    <td className="py-3 px-2">100-120px</td>
                    <td className="py-3 px-2">⭐⭐⭐⭐ High</td>
                    <td className="py-3 px-2">Very High</td>
                    <td className="py-3 px-2">Maximum engagement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-8 rounded-lg border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-3">How to Change Variants</h3>
            <p className="text-sm text-muted-foreground mb-4">
              In <code className="px-2 py-1 rounded bg-muted text-foreground">app/page.tsx</code>,
              find the PromoBanner component and change the variant prop:
            </p>
            <div className="rounded-md bg-background border p-4 font-mono text-sm">
              <code>
                {'<PromoBanner variant="'}
                <span className="text-primary">notification</span>
                {'" /> // Options: notification, horizontal, compact, featured'}
              </code>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cheatsheet
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function BottomAEOContent() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* What is Shadcn/UI */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              What is Shadcn/UI?
            </h2>
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
              Shadcn/ui is a component library built on Tailwind CSS and Radix UI primitives.
              It provides copy-paste React components with TypeScript support, customizable themes,
              and accessibility features. Includes 46+ components like Button, Dialog, Form, and Table.
            </p>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-lg mb-2">How is Shadcn/UI different from other UI libraries?</h4>
            <p className="text-muted-foreground">
              Unlike traditional libraries like Material-UI or Ant Design, Shadcn/UI doesn&apos;t install as a dependency.
              Components are copied into your project, giving you complete ownership and customization control.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Do I need to install Shadcn/UI as a package?</h4>
            <p className="text-muted-foreground">
              No, Shadcn/UI components are copied directly into your codebase. You only need Tailwind CSS and
              the specific Radix UI primitives that each component uses.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Can I use Shadcn/UI with Next.js?</h4>
            <p className="text-muted-foreground">
              Yes, Shadcn/UI works perfectly with Next.js (App Router and Pages Router), React, Vite,
              and any React-based framework. It&apos;s framework agnostic.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">How do I customize Shadcn/UI components?</h4>
            <p className="text-muted-foreground">
              Since components live in your codebase, you can modify them directly. Change styles,
              add props, or alter behavior. Use CSS variables for theme customization.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Are Shadcn/UI components accessible?</h4>
            <p className="text-muted-foreground">
              Yes, all components are built on Radix UI primitives, which follow WAI-ARIA guidelines
              and support keyboard navigation, screen readers, and focus management.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

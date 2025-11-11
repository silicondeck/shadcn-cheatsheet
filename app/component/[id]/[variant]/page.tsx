import React, { Suspense } from "react"
import { Metadata } from "next"
import { generateComponentMetadata } from "@/lib/seo-metadata"
import ComponentPageClient from "../component-page-client"

// Generate metadata for SEO - automatically placed in <head> by Next.js
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; variant: string }>
}): Promise<Metadata> {
  const { id: componentId, variant: variantId } = await params

  // Use centralized metadata generator
  return generateComponentMetadata(componentId, variantId)
}

function ComponentPageFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-8"></div>
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

export default async function ComponentVariantPage({
  params
}: {
  params: Promise<{ id: string; variant: string }>
}) {
  const { id, variant } = await params

  return (
    <Suspense fallback={<ComponentPageFallback />}>
      <ComponentPageClient
        componentId={id}
        variantId={variant}
      />
    </Suspense>
  )
}

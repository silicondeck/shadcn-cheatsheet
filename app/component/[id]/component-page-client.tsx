"use client"

import React, { useCallback, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  components as simpleComponents,
  type ComponentInfo,
} from "@/data/components-simple"
import { ComponentDefinition } from "@/types"
import { Toaster } from "sonner"

import { ComponentData } from "@/types/components"
import {
  ComponentCategory,
  ComponentVariant,
  PackageManager,
} from "@/types/core"
import { COMPONENT_DEPENDENCIES, getAllComponentData, createVariantId } from "@/lib/data-adapter"
import { PreviewNavigationManager } from "@/lib/preview-navigation"
import {
  generateClientMetadata,
  findVariantBySlug,
  isDefaultVariant,
  extractVariantSlug,
} from "@/lib/seo-metadata"
import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/ui/component-preview"
import ComponentErrorBoundary from "@/components/ui/error-boundary"
import { PreviewPanel } from "@/components/ui/preview-panel"
import { ComponentSearch } from "@/components/search/component-search"
import { BottomAEOContent } from "@/components/seo/bottom-aeo-content"
import { useDynamicMetaTags } from "@/hooks/use-dynamic-meta-tags"
import JsonLd from "../../structured-data"

// Get component data using adapter
const COMPONENT_DATA = getAllComponentData()

// Create ComponentDefinitions for search engine with proper variants
function createSearchComponents(): ComponentDefinition[] {
  return COMPONENT_DATA.map((comp) => {
    const originalInfo = simpleComponents.find(
      (c: ComponentInfo) => c.id === comp.id
    )

    return {
      id: comp.id,
      name: comp.name,
      description: comp.description,
      category: comp.category as ComponentCategory,
      installation: { command: "", dependencies: [] },
      documentation: {
        url: originalInfo?.documentation?.url || "",
        officialDocs: originalInfo?.documentation?.officialDocs || "",
      },
      imports: { default: "", named: [] },
      variants:
        originalInfo?.examples.map(
          (example: ComponentInfo["examples"][0]) => ({
            id: createVariantId(example, comp.id),
            name: example.name,
            description: example.description,
            code: "",
            props: [],
            preview: {
              interactive: true,
            },
            _registryFile: example.registryName,
          })
        ) || [],
      aliases: [],
      tags: comp.tags || [],
      featured: comp.featured || false,
    }
  }).sort((a, b) => a.name.localeCompare(b.name))
}

// Create components once at module level to prevent memory leaks
const SEARCH_COMPONENTS = createSearchComponents()

const convertToComponentData = (comp: ComponentDefinition): ComponentData => ({
  id: comp.id,
  name: comp.name,
  description: comp.description,
  category: comp.category,
  tags: comp.tags || [comp.category],
  version: "1.0.0",
  lastUpdated: "2024-01-15",
  dependencies: COMPONENT_DEPENDENCIES[comp.id] || [],
  docsUrl: comp.documentation.officialDocs || comp.documentation.url,
  examples: comp.variants.map((variant) => ({
    title: variant.name,
    description: variant.description,
    code: variant.code,
    language: "tsx",
  })),
  variants: comp.variants.map((v) => v.name),
  complexity: "beginner" as const,
  featured: false,
  _originalComponent: comp,
})

export default function ComponentPageClient({
  componentId,
  variantId: propVariantId
}: {
  componentId: string
  variantId?: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [packageManager] = useState<PackageManager>("pnpm")
  const [isCommandSearchOpen, setIsCommandSearchOpen] = useState(false)

  // Create navigation manager only once with useMemo
  const navigationManager = React.useMemo(() => new PreviewNavigationManager([]), [])

  // Find the component - memoize to prevent recalculation
  const componentDef = React.useMemo(() =>
    SEARCH_COMPONENTS.find(c => c.id === componentId),
    [componentId]
  )
  const componentData = React.useMemo(() =>
    componentDef ? convertToComponentData(componentDef) : null,
    [componentDef]
  )

  // Get variant from URL - support both query param (legacy) and prop (new nested route)
  const queryVariantId = searchParams.get('variant')
  const variantId = propVariantId || queryVariantId || undefined

  // Get the original component info for metadata - memoize
  const componentInfo = React.useMemo(() =>
    simpleComponents.find((c: ComponentInfo) => c.id === componentId),
    [componentId]
  )

  // Find variant using centralized utility - memoize
  const currentVariant = React.useMemo(() => {
    if (!variantId || !componentDef || !componentInfo) {
      return componentDef?.variants[0]
    }
    const foundVariant = componentDef.variants.find(v => {
      const variant = findVariantBySlug(componentInfo, variantId)
      return variant && v.id === variant.registryName
    })
    return foundVariant || componentDef.variants[0]
  }, [variantId, componentDef, componentInfo])

  // Check if this is the default variant using centralized utility - memoize
  const isDefault = React.useMemo(() => {
    if (!componentInfo || !currentVariant) return true
    const example = componentInfo.examples.find(ex => ex.registryName === currentVariant.id)
    return isDefaultVariant(componentInfo, example, variantId)
  }, [componentInfo, currentVariant, variantId])

  // Initialize navigation - only update when necessary
  React.useEffect(() => {
    if (componentData) {
      const componentDataList = SEARCH_COMPONENTS.map(convertToComponentData)
      navigationManager.updateComponents(componentDataList)
      navigationManager.initializeNavigation(componentData, currentVariant)
    }
  }, [componentData, currentVariant, navigationManager])

  // Generate dynamic meta tags using centralized utility - memoize
  // These will be injected into <head> by the useDynamicMetaTags hook
  const metadataConfig = React.useMemo(() => {
    if (!componentData || !currentVariant || !componentInfo) return undefined
    return generateClientMetadata(
      componentId,
      componentData.name,
      componentData.description,
      componentData.category || 'component',
      variantId,
      currentVariant.name,
      currentVariant.description,
      isDefault
    )
  }, [componentData, currentVariant, componentInfo, componentId, variantId, isDefault])

  // Update meta tags dynamically in <head> when component or variant changes
  useDynamicMetaTags(metadataConfig || {})

  // Prevent scroll to bottom on mount - keep viewport at top
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  // Handle variant change - use clean URL format
  const handleVariantChange = useCallback(
    (variant: ComponentVariant) => {
      // Extract the variant slug using centralized utility
      const variantSlug = extractVariantSlug(variant.id, componentId)

      // Navigate to clean URL format: /component/[id]/[variant]
      router.push(`/component/${componentId}/${variantSlug}`, { scroll: false })
    },
    [router, componentId]
  )

  // Handle navigation
  const handleNavigate = useCallback((direction: "next" | "prev") => {
    const navState =
      direction === "next"
        ? navigationManager.navigateNext()
        : navigationManager.navigatePrevious()

    if (navState) {
      // Use clean URL format for navigation with centralized utility
      if (navState.variant) {
        const variantSlug = extractVariantSlug(navState.variant.id, navState.component.id)
        router.push(`/component/${navState.component.id}/${variantSlug}`)
      } else {
        router.push(`/component/${navState.component.id}`)
      }
    }
  }, [router, navigationManager])

  // Handle close
  const handleClose = useCallback(() => {
    router.push('/')
  }, [router])

  // Get navigation data - memoize to prevent recalculation
  const navigationData = React.useMemo(() => {
    const currentState = navigationManager.getCurrentState()
    const totalComponents = navigationManager.getTotalComponents()
    return {
      currentIndex: currentState?.componentIndex,
      totalComponents,
    }
  }, [navigationManager])

  if (!componentData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The component &quot;{componentId}&quot; could not be found.
        </p>
        <Button onClick={() => router.push('/')}>
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <>
      <JsonLd />
      <Toaster />

      {/* Component Preview in Panel - No container wrapper */}
      <PreviewPanel
        isOpen={true}
        onClose={handleClose}
        component={componentData}
        onNavigate={handleNavigate}
        packageManager={packageManager}
        currentIndex={navigationData.currentIndex}
        totalComponents={navigationData.totalComponents}
        variantDescription={metadataConfig?.description}
      >
        <ComponentErrorBoundary>
          <ComponentPreview
            component={componentData}
            currentVariant={currentVariant}
            onVariantChange={handleVariantChange}
          />
        </ComponentErrorBoundary>
      </PreviewPanel>

      {/* Command Search */}
      <ComponentSearch
        isOpen={isCommandSearchOpen}
        onOpenChange={setIsCommandSearchOpen}
        components={SEARCH_COMPONENTS}
        originalComponents={simpleComponents}
        onComponentSelect={(comp) => router.push(`/component/${comp.id}`)}
        onCategorySelect={() => {}}
        placeholder="Search components..."
      />

      <BottomAEOContent />
    </>
  )
}

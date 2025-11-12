"use client"

import React, { useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  components as simpleComponents,
  type ComponentInfo,
} from "@/data/components-simple"
import { ComponentDefinition } from "@/types"

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
import { ComponentPreview } from "@/components/ui/component-preview"
import ComponentErrorBoundary from "@/components/ui/error-boundary"
import { PreviewPanel } from "@/components/ui/preview-panel"
import { useDynamicMetaTags } from "@/hooks/use-dynamic-meta-tags"

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

const SEARCH_COMPONENTS = createSearchComponents()

// Cache for converted ComponentData to avoid repeated conversions
const componentDataCache = new Map<string, ComponentData>()

const convertToComponentData = (comp: ComponentDefinition): ComponentData => {
  // Check cache first
  const cached = componentDataCache.get(comp.id)
  if (cached) {
    return cached
  }

  const componentData: ComponentData = {
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
  }

  // Cache the result
  componentDataCache.set(comp.id, componentData)

  return componentData
}

export default function InterceptedComponentModal({
  componentId,
  variantId: propVariantId
}: {
  componentId: string
  variantId?: string
}) {
  const router = useRouter()
  const [packageManager] = React.useState<PackageManager>("pnpm")

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

  // Get the original component info for metadata - memoize
  const componentInfo = React.useMemo(() =>
    simpleComponents.find((c: ComponentInfo) => c.id === componentId),
    [componentId]
  )

  // Find variant using centralized utility - memoize
  const currentVariant = React.useMemo(() => {
    if (!propVariantId || !componentDef || !componentInfo) {
      return componentDef?.variants[0]
    }
    const foundVariant = componentDef.variants.find(v => {
      const variant = findVariantBySlug(componentInfo, propVariantId)
      return variant && v.id === variant.registryName
    })
    return foundVariant || componentDef.variants[0]
  }, [propVariantId, componentDef, componentInfo])

  // Check if this is the default variant using centralized utility - memoize
  const isDefault = React.useMemo(() => {
    if (!componentInfo || !currentVariant) return true
    const example = componentInfo.examples.find(ex => ex.registryName === currentVariant.id)
    return isDefaultVariant(componentInfo, example, propVariantId)
  }, [componentInfo, currentVariant, propVariantId])

  // Initialize navigation - split into two effects for better performance
  // 1. Update components list only once (memoized)
  const componentDataList = React.useMemo(
    () => SEARCH_COMPONENTS.map(convertToComponentData),
    [] // Empty deps - only compute once since SEARCH_COMPONENTS is static
  )

  React.useEffect(() => {
    navigationManager.updateComponents(componentDataList)
  }, [navigationManager, componentDataList])

  // 2. Initialize navigation state when component or variant changes
  React.useEffect(() => {
    if (componentData && currentVariant) {
      navigationManager.initializeNavigation(componentData, currentVariant)
    }
  }, [componentData, currentVariant, navigationManager])

  // Generate dynamic meta tags using centralized utility - memoize
  const metadataConfig = React.useMemo(() => {
    if (!componentData || !currentVariant || !componentInfo) return undefined
    return generateClientMetadata(
      componentId,
      componentData.name,
      componentData.description,
      componentData.category || 'component',
      propVariantId,
      currentVariant.name,
      currentVariant.description,
      isDefault
    )
  }, [componentData, currentVariant, componentInfo, componentId, propVariantId, isDefault])

  // Update meta tags dynamically in <head> when component or variant changes
  useDynamicMetaTags(metadataConfig || {})

  // Handle variant change - use router.replace to avoid history stack buildup
  const handleVariantChange = useCallback(
    (variant: ComponentVariant) => {
      const variantSlug = extractVariantSlug(variant.id, componentId)
      router.replace(`/component/${componentId}/${variantSlug}`, { scroll: false })
    },
    [router, componentId]
  )

  // Handle navigation - use router.replace to avoid history stack buildup
  const handleNavigate = useCallback((direction: "next" | "prev") => {
    const navState =
      direction === "next"
        ? navigationManager.navigateNext()
        : navigationManager.navigatePrevious()

    if (navState) {
      if (navState.variant) {
        const variantSlug = extractVariantSlug(navState.variant.id, navState.component.id)
        router.replace(`/component/${navState.component.id}/${variantSlug}`)
      } else {
        router.replace(`/component/${navState.component.id}`)
      }
    }
  }, [router, navigationManager])

  // Handle close - go back to home
  const handleClose = useCallback(() => {
    router.back()
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
    return null
  }

  return (
    <PreviewPanel
      key={componentId} // Stable key - only changes when component changes, not variant
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
  )
}

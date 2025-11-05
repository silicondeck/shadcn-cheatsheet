"use client"

import React, { useCallback, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  components as simpleComponents,
  type ComponentInfo,
} from "@/data/components-simple"
import { ComponentDefinition } from "@/types"
import { Search } from "lucide-react"
import { Toaster } from "sonner"

import { ComponentData } from "@/types/components"
import {
  ComponentCategory,
  ComponentVariant,
  PackageManager,
} from "@/types/core"
import { COMPONENT_DEPENDENCIES, getAllComponentData } from "@/lib/data-adapter"
import { PreviewNavigationManager } from "@/lib/preview-navigation"
import { Button } from "@/components/ui/button"
import { CategoryBadgeFilter } from "@/components/ui/category-badge-filter"
import { ComponentPreview } from "@/components/ui/component-preview"
import ComponentErrorBoundary from "@/components/ui/error-boundary"
import { PackageManagerTabs } from "@/components/ui/package-manager-tabs"
import { PreviewPanel } from "@/components/ui/preview-panel"
import { MasonryComponentGrid } from "@/components/layout/masonry-component-grid"
import { ComponentSearch } from "@/components/search/component-search"
import { BottomAEOContent } from "@/components/seo/bottom-aeo-content"
import JsonLd from "./structured-data"

// Get component data using adapter
const COMPONENT_DATA = getAllComponentData()

// Create ComponentDefinitions for search engine with proper variants
function createSearchComponents(): ComponentDefinition[] {
  return COMPONENT_DATA.map((comp) => {
    // Get the original ComponentInfo to access examples
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
            id: example.registryName || example.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
            name: example.name,
            description: example.description,
            code: "", // Will be loaded via API
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
  }).sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by component name
}

// Initialize search components
const SEARCH_COMPONENTS = createSearchComponents()

// Initialize navigation manager
const navigationManager = new PreviewNavigationManager([])

// Convert ComponentDefinition to ComponentData format
const convertToComponentData = (comp: ComponentDefinition): ComponentData => ({
  id: comp.id,
  name: comp.name,
  description: comp.description,
  category: comp.category,
  tags: comp.tags || [comp.category], // Use category as fallback tag
  version: "1.0.0",
  lastUpdated: "2024-01-15",
  dependencies: COMPONENT_DEPENDENCIES[comp.id] || [], // Use our dependencies mapping
  docsUrl: comp.documentation.officialDocs || comp.documentation.url, // Use officialDocs first, then fallback to url
  examples: comp.variants.map((variant) => ({
    title: variant.name,
    description: variant.description,
    code: variant.code,
    language: "tsx",
  })),
  variants: comp.variants.map((v) => v.name),
  complexity: "beginner" as const,
  featured: false,
  // Add the original component data for full variant access
  _originalComponent: comp,
})

function HomePageFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [hasRestoredFromURL, setHasRestoredFromURL] = useState(false)

  const [searchResults, setSearchResults] =
    useState<ComponentDefinition[]>(SEARCH_COMPONENTS)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [expandedState, setExpandedState] = useState<Record<string, boolean>>(
    () => {
      // Initialize all components as expanded by default
      const initialState: Record<string, boolean> = {}
      COMPONENT_DATA.forEach((comp) => {
        initialState[comp.id] = true
      })
      return initialState
    }
  )
  const [lastExpandCollapseAction, setLastExpandCollapseAction] = useState<
    "expand" | "collapse" | null
  >("expand") // Track last button clicked
  const [packageManager, setPackageManager] = useState<PackageManager>("pnpm")

  // Command search state
  const [isCommandSearchOpen, setIsCommandSearchOpen] = useState(false)

  // Preview panel state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewComponent, setPreviewComponent] =
    useState<ComponentData | null>(null)
  const [currentVariant, setCurrentVariant] = useState<
    ComponentVariant | undefined
  >(undefined)

  // Initialize navigation manager with current search results
  const initializeNavigation = useCallback(() => {
    const componentDataList = searchResults.map(convertToComponentData)
    navigationManager.updateComponents(componentDataList)
  }, [searchResults])

  // Initialize navigation when search results change
  React.useEffect(() => {
    initializeNavigation()
  }, [initializeNavigation])

  // Handle URL parameters to restore component preview state (only on initial load)
  React.useEffect(() => {
    if (!hasRestoredFromURL) {
      const componentId = searchParams.get('component')
      if (componentId && !isPreviewOpen) {
        const component = COMPONENT_DATA.find(comp => comp.id === componentId)
        if (component) {
          const variantId = searchParams.get('variant')
          let variant: ComponentVariant | undefined

          if (variantId && component._originalComponent?.variants) {
            variant = component._originalComponent.variants.find(v => v.id === variantId)
          }

          setPreviewComponent(component)
          setCurrentVariant(variant)
          navigationManager.initializeNavigation(component, variant)
          setIsPreviewOpen(true)
        }
      }
      setHasRestoredFromURL(true)
    }
  }, [searchParams, isPreviewOpen, hasRestoredFromURL])

  // Keyboard shortcut for command search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsCommandSearchOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Get unique categories and their counts
  const getCategories = useCallback(() => {
    const categoryCounts: Record<string, number> = {}
    COMPONENT_DATA.forEach((comp) => {
      if (comp.category) {
        categoryCounts[comp.category] = (categoryCounts[comp.category] || 0) + 1
      }
    })
    return {
      categories: Object.keys(categoryCounts).sort(),
      counts: categoryCounts,
    }
  }, [])

  const { categories, counts: categoryCounts } = getCategories()

  // Filter components by category
  const filterByCategory = useCallback(
    (components: ComponentDefinition[], category: string) => {
      if (category === "all") return components
      return components.filter((comp) => comp.category === category)
    },
    []
  )

  // Combined search and category filtering
  const getFilteredResults = useCallback(() => {
    let results = SEARCH_COMPONENTS

    // Apply category filter
    results = filterByCategory(results, selectedCategory)

    // Results are already sorted alphabetically in SEARCH_COMPONENTS

    return results
  }, [selectedCategory, filterByCategory])

  // Update search results when filters change
  React.useEffect(() => {
    const filtered = getFilteredResults()
    setSearchResults(filtered)

    // Maintain expanded state for new results - expand by default
    setExpandedState((prev) => {
      const newExpandedState = { ...prev }
      filtered.forEach((comp) => {
        if (!(comp.id in newExpandedState)) {
          newExpandedState[comp.id] = true // Default to expanded
        }
      })
      return newExpandedState
    })
  }, [getFilteredResults])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    // Results will be updated by the useEffect that watches selectedCategory
  }

  // Toggle expanded state for a component
  const handleToggleExpanded = (id: string) => {
    setExpandedState((prev: Record<string, boolean>) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Handle component preview with URL update
  const handlePreview = useCallback(
    (component: ComponentData, variant?: ComponentVariant) => {
      setPreviewComponent(component)
      setCurrentVariant(variant)

      // Initialize navigation
      navigationManager.initializeNavigation(component, variant)

      setIsPreviewOpen(true)

      // Update URL with component parameter for SEO and bookmarking
      const url = new URL(window.location.href)
      url.searchParams.set('component', component.id)
      if (variant) {
        url.searchParams.set('variant', variant.id)
      } else {
        url.searchParams.delete('variant')
      }

      // Use replace to avoid adding to browser history for every component click
      // Disable scroll to prevent scrolling to top when opening component details
      router.replace(url.toString(), { scroll: false })
    },
    [router]
  )

  // Get current navigation index and total
  const getCurrentNavigationData = useCallback(() => {
    const currentState = navigationManager.getCurrentState()
    const totalComponents = navigationManager.getTotalComponents()
    return {
      currentIndex: currentState?.componentIndex,
      totalComponents,
    }
  }, [])

  // Handle component selection from command search
  const handleComponentSelect = useCallback(
    (component: ComponentDefinition) => {
      // If the selected component is not in the current filtered category,
      // switch to "all" category or the component's category to show it
      if (selectedCategory !== "all" && component.category !== selectedCategory) {
        setSelectedCategory("all")
      }

      // Convert to ComponentData and preview
      const componentData = convertToComponentData(component)
      handlePreview(componentData)
    },
    [handlePreview, selectedCategory]
  )

  // Handle category selection from command search
  const handleCommandCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  // Handle preview panel navigation
  const handlePreviewNavigation = useCallback((direction: "next" | "prev") => {
    const navState =
      direction === "next"
        ? navigationManager.navigateNext()
        : navigationManager.navigatePrevious()

    if (navState) {
      setPreviewComponent(navState.component)
      setCurrentVariant(navState.variant)

      // Update URL to reflect the new component/variant
      const url = new URL(window.location.href)
      url.searchParams.set('component', navState.component.id)
      if (navState.variant) {
        url.searchParams.set('variant', navState.variant.id)
      } else {
        url.searchParams.delete('variant')
      }

      // Update URL without scrolling to maintain user's position
      router.replace(url.toString(), { scroll: false })
    }
  }, [router])

  // Handle preview panel close with URL cleanup
  const handlePreviewClose = useCallback(() => {
    setIsPreviewOpen(false)
    setPreviewComponent(null)
    setCurrentVariant(undefined)

    // Clean up URL parameters
    const url = new URL(window.location.href)
    url.searchParams.delete('component')
    url.searchParams.delete('variant')

    // Use push instead of replace to allow back button navigation
    // Disable scroll to prevent scrolling to top when closing preview
    router.push(url.toString(), { scroll: false })
  }, [router])

  // Handle variant change within preview
  const handleVariantChange = useCallback(
    (variant: ComponentVariant) => {
      setCurrentVariant(variant)
      if (previewComponent) {
        navigationManager.initializeNavigation(previewComponent, variant)

        // Update URL to reflect the new variant selection
        const url = new URL(window.location.href)
        url.searchParams.set('component', previewComponent.id)
        url.searchParams.set('variant', variant.id)

        // Update URL without scrolling to maintain user's position
        router.replace(url.toString(), { scroll: false })
      }
    },
    [previewComponent, router]
  )

  return (
    <>
      {/* JSON-LD structured data */}
      <JsonLd />

      <Toaster />

            {/* Hero Section with Background */}
            <div className="relative">
              <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Shadcn/UI Cheatsheet
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    A comprehensive, interactive reference for shadcn/ui components
                    with live previews, code examples, and instant copy functionality.
                  </p>

                  {/* Search Button */}
                  <div className="max-w-2xl mx-auto mb-8">
                    <Button
                      variant="outline"
                      className="w-full max-w-sm mx-auto flex items-center justify-between text-muted-foreground h-10 px-4 cursor-pointer"
                      onClick={() => setIsCommandSearchOpen(true)}
                    >
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        <span>Search components...</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          <span className="text-xs">⌘</span>K
                        </kbd>
                      </div>
                    </Button>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                    <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {categories.length}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Categories
                      </div>
                    </div>
                    <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {COMPONENT_DATA.length}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Components
                      </div>
                    </div>
                    <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {COMPONENT_DATA.reduce((acc, comp) => {
                          const originalInfo = simpleComponents.find(
                            (c: ComponentInfo) => c.id === comp.id
                          )
                          return acc + (originalInfo?.examples.length || 0)
                        }, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Variants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
              {/* Controls */}
              <div className="flex flex-wrap 2xl:justify-between md:justify-center gap-4 mb-8">
                {/* Category Badge Filter */}
                <CategoryBadgeFilter
                  value={selectedCategory}
                  onValueChange={handleCategoryChange}
                  categories={categories}
                  componentCounts={categoryCounts}
                />

                <div className="flex gap-2">
                  {/* Package Manager Tabs */}
                  <PackageManagerTabs
                    value={packageManager}
                    onValueChange={setPackageManager}
                  />

                  {/* Quick Actions */}
                  <div className="flex rounded-lg">
                    <Button
                      onClick={() => {
                        // Expand all
                        const newExpandedState: Record<string, boolean> = {}
                        searchResults.forEach((comp) => {
                          newExpandedState[comp.id] = true
                        })
                        setExpandedState(newExpandedState)
                        setLastExpandCollapseAction("expand")
                      }}
                      variant={
                        lastExpandCollapseAction === "expand" ? "default" : "outline"
                      }
                      className={`flex-1 rounded-r-none cursor-pointer ${searchResults.every((comp) => expandedState[comp.id]) ? "border border-primary" : ""}`}
                    >
                      Expand All
                    </Button>
                    <Button
                      onClick={() => {
                        // Collapse all
                        setExpandedState({})
                        setLastExpandCollapseAction("collapse")
                      }}
                      variant={
                        lastExpandCollapseAction === "collapse"
                          ? "default"
                          : "outline"
                      }
                      className={`flex-1 rounded-l-none cursor-pointer ${searchResults.every((comp) => !expandedState[comp.id]) ? "border border-primary" : ""}`}
                    >
                      Collapse All
                    </Button>
                  </div>
                </div>
              </div>

              {/* Component Grid */}
              {searchResults.length > 0 ? (
                <MasonryComponentGrid
                  components={searchResults.map((component) =>
                    convertToComponentData(component)
                  )}
                  viewMode="grid"
                  expandedComponents={
                    new Set(
                      Object.keys(expandedState).filter((id) => expandedState[id])
                    )
                  }
                  onToggleExpanded={handleToggleExpanded}
                  onPreview={handlePreview}
                  onCategoryClick={handleCategoryChange}
                  packageManager={packageManager}
                />
              ) : (
                /* No Results */
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No components found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try using the search command or selecting a different category.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("all")
                    }}
                    className="cursor-pointer"
                  >
                    Show All Components
                  </Button>
                </div>
              )}

              {/* Preview Panel */}
              <PreviewPanel
                isOpen={isPreviewOpen}
                onClose={handlePreviewClose}
                component={previewComponent}
                onNavigate={handlePreviewNavigation}
                packageManager={packageManager}
                currentIndex={getCurrentNavigationData().currentIndex}
                totalComponents={getCurrentNavigationData().totalComponents}
              >
                {previewComponent && (
                  <ComponentErrorBoundary>
                    <ComponentPreview
                      component={previewComponent}
                      currentVariant={currentVariant}
                      onVariantChange={handleVariantChange}
                    />
                  </ComponentErrorBoundary>
                )}
              </PreviewPanel>

              {/* Command Search */}
              <ComponentSearch
                isOpen={isCommandSearchOpen}
                onOpenChange={setIsCommandSearchOpen}
                components={SEARCH_COMPONENTS}
                originalComponents={simpleComponents}
                onComponentSelect={handleComponentSelect}
                onCategorySelect={handleCommandCategorySelect}
                placeholder="Search components..."
              />
            </div>

            {/* Bottom AEO Content */}
            <BottomAEOContent />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<HomePageFallback />}>
      <HomeContent />
    </Suspense>
  )
}

"use client"

import React, { Suspense, useEffect, useRef, useState } from "react"

import { ComponentData } from "@/types/components"
import { ComponentVariant, PackageManager, ViewMode } from "@/types/core"
import { useTrackComponentRender } from "@/lib/performance"
import ComponentErrorBoundary from "@/components/ui/error-boundary"
import { ComponentCardSkeleton } from "@/components/cards/component-card-skeleton"
import LazyComponentCard from "@/components/cards/lazy-component-card"

/**
 * Props for the MasonryComponentGrid component
 */
interface MasonryComponentGridProps {
  /** Array of component data to display */
  components: ComponentData[]
  /** Current view mode for components */
  viewMode: ViewMode
  /** Set of expanded component IDs */
  expandedComponents: Set<string>
  /** Callback for toggling component expansion */
  onToggleExpanded: (id: string) => void
  /** Callback for component preview */
  onPreview: (component: ComponentData, variant?: ComponentVariant) => void
  /** Callback for category clicks */
  onCategoryClick: (category: string) => void
  /** Current package manager */
  packageManager: PackageManager
}

/**
 * Hook to calculate responsive column count
 */
function useResponsiveColumns() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth
      if (width >= 1536) {
        // 2xl: 4 columns
        setColumns(4)
      } else if (width >= 1280) {
        // xl: 3 columns
        setColumns(3)
      } else if (width >= 768) {
        // md: 2 columns
        setColumns(2)
      } else {
        // sm: 1 column
        setColumns(1)
      }
    }

    calculateColumns()
    window.addEventListener("resize", calculateColumns)
    return () => window.removeEventListener("resize", calculateColumns)
  }, [])

  return columns
}

/**
 * Masonry component grid with responsive columns and optimal spacing
 *
 * This component implements a true masonry layout where components are arranged
 * in columns with minimal vertical gaps, similar to Pinterest-style layouts.
 */
export function MasonryComponentGrid({
  components,
  viewMode,
  expandedComponents,
  onToggleExpanded,
  onPreview,
  onCategoryClick,
  packageManager,
}: MasonryComponentGridProps) {
  // Monitor performance of the grid rendering
  useTrackComponentRender()

  const columns = useResponsiveColumns()
  const containerRef = useRef<HTMLDivElement>(null)

  if (components.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        No components found
      </div>
    )
  }

  // Distribute components across columns for masonry layout
  const distributeComponents = () => {
    const columnArrays: ComponentData[][] = Array.from(
      { length: columns },
      () => []
    )

    // For better distribution when components have different heights (especially expanded ones),
    // we use a round-robin approach but can be enhanced to consider actual heights
    components.forEach((component, index) => {
      const columnIndex = index % columns
      columnArrays[columnIndex].push(component)
    })

    return columnArrays
  }

  const columnArrays = distributeComponents()

  return (
    <div
      ref={containerRef}
      className="flex gap-4"
      style={{
        minHeight: "200px",
      }}
    >
      {columnArrays.map((columnComponents, columnIndex) => (
        <div key={columnIndex} className="flex-1 flex flex-col gap-4">
          {columnComponents.map((component) => (
            <ComponentErrorBoundary key={component.id}>
              <Suspense fallback={<ComponentCardSkeleton />}>
                <LazyComponentCard
                  component={component}
                  viewMode={viewMode}
                  isExpanded={expandedComponents.has(component.id)}
                  onToggleExpanded={onToggleExpanded}
                  onPreview={onPreview}
                  onCategoryClick={onCategoryClick}
                  packageManager={packageManager}
                />
              </Suspense>
            </ComponentErrorBoundary>
          ))}
        </div>
      ))}
    </div>
  )
}

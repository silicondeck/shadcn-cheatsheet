/**
 * Live Component Preview compatible with the old UI
 * Uses our new registry pattern under the hood
 */

"use client"

import React, { useCallback, useEffect, useState } from "react"

import { loadRegistryComponent } from "@/lib/registry-client"

interface LiveComponentPreviewProps {
  componentId: string
  registryName?: string
}

export default function LiveComponentPreview({
  componentId,
  registryName,
}: LiveComponentPreviewProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Debug log disabled for production
  // console.log('LiveComponentPreview props:', { componentId, registryName })

  // Map componentId to registry name if not provided
  const getRegistryName = useCallback(
    (id: string): string => {
      // Use the provided registryName first
      if (registryName) {
        // Registry name logging disabled for production
        // console.log('Using provided registryName:', registryName)
        return registryName
      }

      // Convert component IDs like "button" to "button-demo"
      // Try to find a matching registry component
      const mappings: Record<string, string> = {
        button: "button-demo",
        card: "card-demo",
        input: "input-demo",
        checkbox: "checkbox-demo",
        accordion: "accordion-demo",
        alert: "alert-demo",
        badge: "badge-demo",
        avatar: "avatar-demo",
        separator: "separator-demo",
      }

      const mapped = mappings[id] || `${id}-demo`
      // Mapping logging disabled for production
      // console.log('Mapped componentId', id, 'to registryName:', mapped)
      return mapped
    },
    [registryName]
  )

  useEffect(() => {
    const loadComponent = async () => {
      try {
        setLoading(true)
        setError(null)

        const name = getRegistryName(componentId)
        const loadedComponent = await loadRegistryComponent(name)
        setComponent(() => loadedComponent)
      } catch (err) {
        // Component loading errors disabled for production
        // console.error("Error loading component:", componentId, registryName, err)
        setError(
          err instanceof Error ? err.message : "Failed to load component"
        )
      } finally {
        setLoading(false)
      }
    }

    if (componentId) {
      loadComponent()
    }
  }, [componentId, registryName, getRegistryName])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-muted-foreground">
          Loading component...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-destructive">
        <div className="text-center">
          <div className="text-sm font-medium">Failed to load component</div>
          <div className="text-xs text-muted-foreground mt-1">{error}</div>
        </div>
      </div>
    )
  }

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground">
        Component not available
      </div>
    )
  }

  // Components that need scrollable container (tall forms, long content)
  const scrollableComponents = [
    'field-demo',
    'field-fieldset',
    'field-group',
    'field-responsive',
    'form-demo',
    'card-with-form',
    'dialog-demo',
    'sheet-demo',
    'drawer-demo',
  ]

  // Components that need overflow visible (dropdowns, menus, tooltips)
  const overflowVisibleComponents = [
    'navigation-menu-demo',
    'dropdown-menu-demo',
    'context-menu-demo',
    'menubar-demo',
    'hover-card-demo',
    'popover-demo',
    'command-demo',
    'combobox-demo',
    'select-demo',
    'date-picker-demo',
  ]

  const needsScroll = scrollableComponents.includes(registryName || '')
  const needsOverflowVisible = overflowVisibleComponents.includes(registryName || '')

  // Default: center content, no scroll
  // If needs scroll: start alignment + scroll
  // If needs overflow visible: center + overflow visible
  const containerClass = needsScroll
    ? "flex items-start justify-center h-full min-h-[200px] bg-background rounded border border-dashed p-5 overflow-auto"
    : needsOverflowVisible
      ? "flex items-center justify-center h-full min-h-[200px] bg-background rounded border border-dashed p-5 overflow-visible"
      : "flex items-center justify-center h-full min-h-[200px] bg-background rounded border border-dashed p-5"

  return (
    <div className={containerClass}>
      <Component />
    </div>
  )
}

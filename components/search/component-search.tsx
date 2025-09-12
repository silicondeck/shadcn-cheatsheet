/**
 * Component Search Command Palette
 *
 * Advanced search interface using cmdk with component previews
 * Inspired by Framer's command palette design
 */

"use client"

import React, { useCallback, useEffect, useState } from "react"
import { ComponentInfo } from "@/data/components-simple"
import { ComponentDefinition } from "@/types"
import {
  Box,
  ChevronRight,
  Database,
  Hash,
  Layers,
  Layout,
  Navigation,
  Search,
  Settings,
  Square,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

interface ComponentSearchProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  components: ComponentDefinition[]
  originalComponents: ComponentInfo[]
  onComponentSelect: (component: ComponentDefinition) => void
  onCategorySelect: (category: string) => void
  placeholder?: string
}

// Category icons mapping
const CATEGORY_ICONS = {
  form: Settings,
  display: Box,
  feedback: Hash,
  navigation: Navigation,
  layout: Layout,
  data: Database,
  overlay: Square,
  utility: Layers,
} as const

// Category colors for badges
const CATEGORY_COLORS = {
  form: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
  display:
    "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
  feedback:
    "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
  navigation:
    "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
  layout:
    "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800",
  data: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800",
  overlay:
    "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
  utility:
    "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800",
} as const

export function ComponentSearch({
  isOpen,
  onOpenChange,
  components,
  originalComponents,
  onComponentSelect,
  onCategorySelect,
  placeholder = "Search components...",
}: ComponentSearchProps) {
  const [search, setSearch] = useState("")
  const commandListRef = React.useRef<HTMLDivElement>(null)

  // Reset search when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setSearch("")
    }
  }, [isOpen])

  // Reset scroll position when search changes or when dialog opens
  useEffect(() => {
    if (commandListRef.current) {
      commandListRef.current.scrollTop = 0
    }
  }, [search, isOpen])

  // Filter and group components based on search
  const groupedComponents = React.useMemo(() => {
    const groups: Record<string, ComponentDefinition[]> = {}

    // If no search, show all components
    let filteredComponents = components

    // If there's a search term, filter components
    if (search.trim()) {
      const searchTerm = search.toLowerCase().trim()

      // Prioritize exact name matches first
      const nameMatches: ComponentDefinition[] = []
      const descriptionMatches: ComponentDefinition[] = []
      const categoryMatches: ComponentDefinition[] = []

      components.forEach((component) => {
        const name = component.name.toLowerCase()
        const description = component.description.toLowerCase()
        const category = component.category.toLowerCase()

        if (name.includes(searchTerm)) {
          nameMatches.push(component)
        } else if (description.includes(searchTerm)) {
          descriptionMatches.push(component)
        } else if (category.includes(searchTerm)) {
          categoryMatches.push(component)
        }
      })

      // Combine results with name matches first
      filteredComponents = [
        ...nameMatches,
        ...descriptionMatches,
        ...categoryMatches,
      ]
    }

    // Group filtered components by category
    filteredComponents.forEach((component) => {
      const category = component.category || "utility"
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(component)
    })

    // Sort components within each group alphabetically, but prioritize name matches
    if (search.trim()) {
      const searchTerm = search.toLowerCase().trim()
      Object.keys(groups).forEach((category) => {
        groups[category].sort((a, b) => {
          const aNameMatch = a.name.toLowerCase().includes(searchTerm)
          const bNameMatch = b.name.toLowerCase().includes(searchTerm)

          // If one has name match and other doesn't, prioritize name match
          if (aNameMatch && !bNameMatch) return -1
          if (!aNameMatch && bNameMatch) return 1

          // Otherwise sort alphabetically
          return a.name.localeCompare(b.name)
        })
      })
    } else {
      // Default alphabetical sort when no search
      Object.keys(groups).forEach((category) => {
        groups[category].sort((a, b) => a.name.localeCompare(b.name))
      })
    }

    return groups
  }, [components, search])

  // Get categories with counts
  const categories = React.useMemo(() => {
    const categoryStats: Record<string, number> = {}

    originalComponents.forEach((comp) => {
      const category = comp.category || "utility"
      categoryStats[category] = (categoryStats[category] || 0) + 1
    })

    return Object.entries(categoryStats)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => a.category.localeCompare(b.category))
  }, [originalComponents])

  // Handle search with immediate scroll reset
  const handleSearchChange = useCallback((value: string) => {
    setSearch(value)
    // Reset scroll immediately when search changes
    if (commandListRef.current) {
      commandListRef.current.scrollTop = 0
    }
  }, [])

  // Handle component selection
  const handleComponentSelect = useCallback(
    (component: ComponentDefinition) => {
      onComponentSelect(component)
      onOpenChange(false)
    },
    [onComponentSelect, onOpenChange]
  )

  // Handle category selection
  const handleCategorySelect = useCallback(
    (category: string) => {
      onCategorySelect(category)
      onOpenChange(false)
    },
    [onCategorySelect, onOpenChange]
  )

  // Get total variants count
  const getTotalVariants = useCallback(
    (component: ComponentDefinition) => {
      const originalInfo = originalComponents.find((c) => c.id === component.id)
      return originalInfo?.examples.length || 0
    },
    [originalComponents]
  )

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={onOpenChange}
      className="max-w-2xl"
    >
      <Command
        className="rounded-lg border shadow-md"
        shouldFilter={false} // Disable built-in filtering since we handle it manually
      >
        <CommandInput
          placeholder={placeholder}
          value={search}
          onValueChange={handleSearchChange}
          className="border-0"
        />
        <CommandList ref={commandListRef} className="max-h-[400px]">
          <CommandEmpty>
            <div className="flex flex-col items-center gap-2 py-6">
              <Search className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No components found.
              </p>
            </div>
          </CommandEmpty>

          {/* Categories */}
          {!search && (
            <CommandGroup heading="Browse by Category">
              {categories.map(({ category, count }) => {
                const Icon =
                  CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] ||
                  Layers
                const colorClass =
                  CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] ||
                  CATEGORY_COLORS.utility

                return (
                  <CommandItem
                    key={category}
                    value={category}
                    onSelect={() => handleCategorySelect(category)}
                    className="flex items-center justify-between p-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium capitalize">{category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={cn("text-xs", colorClass)}
                      >
                        {count}
                      </Badge>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          )}

          {/* Components */}
          {Object.entries(groupedComponents).map(
            ([category, categoryComponents], index) => (
              <React.Fragment key={`category-${category}`}>
                {index > 0 && (
                  <CommandSeparator key={`separator-${category}`} />
                )}
                <CommandGroup
                  heading={`${category.charAt(0).toUpperCase()}${category.slice(1)} Components`}
                >
                  {categoryComponents.map((component) => {
                    const Icon =
                      CATEGORY_ICONS[
                        component.category as keyof typeof CATEGORY_ICONS
                      ] || Box
                    const variantCount = getTotalVariants(component)
                    const colorClass =
                      CATEGORY_COLORS[
                        component.category as keyof typeof CATEGORY_COLORS
                      ] || CATEGORY_COLORS.utility

                    return (
                      <CommandItem
                        key={component.id}
                        value={component.name} // Only use component name for matching
                        onSelect={() => handleComponentSelect(component)}
                        className="flex items-center justify-between p-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <div className="font-medium">{component.name}</div>
                            <div className="text-xs text-muted-foreground truncate">
                              {component.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge variant="outline" className="text-xs">
                            {variantCount} variant
                            {variantCount !== 1 ? "s" : ""}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={cn("text-xs", colorClass)}
                          >
                            {component.category}
                          </Badge>
                        </div>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </React.Fragment>
            )
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

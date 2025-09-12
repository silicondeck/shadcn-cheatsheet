/**
 * Advanced search engine with fuzzy matching and alias support
 *
 * Provides fast, accurate search with intelligent suggestions using Fuse.js
 */

import { ComponentDefinition, SearchOptions, SearchResult } from "@/types"
import Fuse, { type IFuseOptions } from "fuse.js"

/**
 * Search aliases mapping common terms to component names
 */
export const SEARCH_ALIASES: Record<string, string[]> = {
  // Button aliases
  btn: ["button"],
  cta: ["button"],
  submit: ["button"],
  action: ["button"],

  // Input aliases
  form: ["input", "select", "textarea"],
  field: ["input"],
  textbox: ["input"],
  text: ["input"],

  // Dialog aliases
  modal: ["dialog"],
  popup: ["dialog"],
  overlay: ["dialog"],
  alert: ["dialog", "alert-dialog"],

  // Card aliases
  panel: ["card"],
  box: ["card"],
  container: ["card"],

  // Badge aliases
  tag: ["badge"],
  label: ["badge"],
  chip: ["badge"],
  pill: ["badge"],

  // Navigation aliases
  nav: ["navigation-menu"],
  menu: ["navigation-menu", "dropdown-menu"],
  tabs: ["tabs"],

  // Layout aliases
  grid: ["card"],
  layout: ["separator"],
  divider: ["separator"],

  // Data aliases
  table: ["table"],
  list: ["table"],
  data: ["table"],

  // Feedback aliases
  notification: ["toast"],
  message: ["toast", "alert"],
  loading: ["skeleton"],
  spinner: ["skeleton"],
  progress: ["progress"],
}

/**
 * Fuse.js configuration for optimal search performance
 */
const FUSE_OPTIONS: IFuseOptions<ComponentDefinition> = {
  keys: [
    { name: "name", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.2 },
    { name: "tags", weight: 0.1 },
  ],
  threshold: 0.4, // Balance between fuzzy and strict matching
  distance: 100,
  minMatchCharLength: 1,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
}

/**
 * Search engine class providing advanced search capabilities
 */
export class SearchEngine {
  private fuse: Fuse<ComponentDefinition>
  private components: ComponentDefinition[]

  constructor(components: ComponentDefinition[]) {
    this.components = components
    this.fuse = new Fuse(components, FUSE_OPTIONS)
  }

  /**
   * Perform fuzzy search with alias expansion
   */
  search(query: string, options: SearchOptions = {}): SearchResult[] {
    if (!query.trim()) {
      return this.components.map((component, index) => ({
        item: component,
        score: 1,
        matches: [],
        refIndex: index,
      }))
    }

    // Normalize and expand query with aliases
    const normalizedQuery = this.normalizeQuery(query)
    const expandedQueries = this.expandAliases(normalizedQuery)

    // Search for each expanded query and combine results
    const allResults = new Map<string, SearchResult>()

    for (const expandedQuery of expandedQueries) {
      const results = this.fuse.search(expandedQuery, {
        limit: options.limit || 50,
      })

      results.forEach((result) => {
        const key = result.item.name
        const existingResult = allResults.get(key)

        if (!existingResult || result.score! < existingResult.score!) {
          allResults.set(key, {
            item: result.item,
            score: result.score || 0,
            matches:
              result.matches?.map((match) => ({
                key: match.key || "",
                value: match.value,
                indices: match.indices,
              })) || [],
            refIndex: result.refIndex,
          })
        }
      })
    }

    // Sort by score and apply limit
    const sortedResults = Array.from(allResults.values())
      .sort((a, b) => a.score! - b.score!)
      .slice(0, options.limit || 50)

    return sortedResults
  }

  /**
   * Get search suggestions based on partial input
   */
  getSuggestions(query: string, limit: number = 5): string[] {
    if (query.length < 2) return []

    const results = this.search(query, { limit: limit * 2 })
    const suggestions = new Set<string>()

    // Add exact component names
    results.forEach((result) => {
      if (suggestions.size < limit) {
        suggestions.add(result.item.name)
      }
    })

    // Add relevant aliases
    Object.keys(SEARCH_ALIASES).forEach((alias) => {
      if (
        alias.toLowerCase().includes(query.toLowerCase()) &&
        suggestions.size < limit
      ) {
        suggestions.add(alias)
      }
    })

    return Array.from(suggestions).slice(0, limit)
  }

  /**
   * Search within a specific category
   */
  searchInCategory(
    query: string,
    category: string,
    options: SearchOptions = {}
  ): SearchResult[] {
    const categoryComponents = this.components.filter(
      (component) => component.category.toLowerCase() === category.toLowerCase()
    )

    const categoryFuse = new Fuse(categoryComponents, FUSE_OPTIONS)
    const results = categoryFuse.search(query, {
      limit: options.limit || 50,
    })

    return results.map((result) => ({
      item: result.item,
      score: result.score || 0,
      matches:
        result.matches?.map((match) => ({
          key: match.key || "",
          value: match.value,
          indices: match.indices,
        })) || [],
      refIndex: result.refIndex,
    }))
  }

  /**
   * Get components by tag
   */
  searchByTag(tag: string): ComponentDefinition[] {
    return this.components.filter((component) =>
      component.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
  }

  /**
   * Update the search index with new components
   */
  updateIndex(components: ComponentDefinition[]): void {
    this.components = components
    this.fuse = new Fuse(components, FUSE_OPTIONS)
  }

  /**
   * Normalize search query (lowercase, trim, etc.)
   */
  private normalizeQuery(query: string): string {
    return query.toLowerCase().trim()
  }

  /**
   * Expand query using aliases
   */
  private expandAliases(query: string): string[] {
    const queries = [query]

    // Check if query matches any alias
    const aliasMatches = SEARCH_ALIASES[query]
    if (aliasMatches) {
      queries.push(...aliasMatches)
    }

    // Check for partial alias matches
    Object.entries(SEARCH_ALIASES).forEach(([alias, targets]) => {
      if (alias.includes(query) || query.includes(alias)) {
        queries.push(...targets)
      }
    })

    return [...new Set(queries)] // Remove duplicates
  }
}

/**
 * Debounced search function for performance optimization
 */
export function createDebouncedSearch(
  searchFn: (query: string) => SearchResult[],
  delay: number = 300
) {
  let timeoutId: NodeJS.Timeout

  return (query: string): Promise<SearchResult[]> => {
    return new Promise((resolve) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        resolve(searchFn(query))
      }, delay)
    })
  }
}

/**
 * Get text segments with match highlighting information
 */
export function getHighlightSegments(
  text: string,
  matches: SearchResult["matches"] = []
): Array<{ text: string; isHighlighted: boolean }> {
  if (!matches || matches.length === 0) {
    return [{ text, isHighlighted: false }]
  }

  // Find all match indices
  const indices: Array<readonly [number, number]> = []
  matches.forEach((match) => {
    if (match.indices) {
      indices.push(...match.indices)
    }
  })

  if (indices.length === 0) {
    return [{ text, isHighlighted: false }]
  }

  // Sort and merge overlapping indices
  const sortedIndices = indices
    .sort((a, b) => a[0] - b[0])
    .reduce((merged: Array<readonly [number, number]>, current) => {
      if (merged.length === 0) {
        merged.push(current)
      } else {
        const last = merged[merged.length - 1]
        if (current[0] <= last[1] + 1) {
          // Create a new tuple with the merged range
          merged[merged.length - 1] = [
            last[0],
            Math.max(last[1], current[1]),
          ] as const
        } else {
          merged.push(current)
        }
      }
      return merged
    }, [])

  // Build segments
  const segments: Array<{ text: string; isHighlighted: boolean }> = []
  let lastIndex = 0

  sortedIndices.forEach(([start, end]) => {
    // Add text before highlight
    if (start > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, start),
        isHighlighted: false,
      })
    }

    // Add highlighted text
    segments.push({
      text: text.slice(start, end + 1),
      isHighlighted: true,
    })

    lastIndex = end + 1
  })

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      text: text.slice(lastIndex),
      isHighlighted: false,
    })
  }

  return segments
}

/**
 * Get search keyboard shortcuts
 */
export const SEARCH_SHORTCUTS = {
  OPEN: "cmd+k,ctrl+k",
  CLOSE: "Escape",
  NAVIGATE_DOWN: "ArrowDown",
  NAVIGATE_UP: "ArrowUp",
  SELECT: "Enter",
} as const

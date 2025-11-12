/**
 * Custom hook for loading source code from registry
 * Uses our new API endpoint pattern with in-memory caching
 */

"use client"

import { useEffect, useState } from "react"

import { getApiUrl } from "@/lib/api-utils"

// In-memory cache for registry source code
// Key: registry name, Value: { content: string, timestamp: number }
interface CacheEntry {
  content: string
  timestamp: number
}

const sourceCodeCache = new Map<string, CacheEntry>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes cache validity

/**
 * Check if cache entry is still valid
 */
function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < CACHE_DURATION
}

/**
 * Get source code from cache if valid
 */
function getCachedSourceCode(registryName: string): string | null {
  const cached = sourceCodeCache.get(registryName)
  if (cached && isCacheValid(cached)) {
    return cached.content
  }
  return null
}

/**
 * Store source code in cache
 */
function setCachedSourceCode(registryName: string, content: string): void {
  sourceCodeCache.set(registryName, {
    content,
    timestamp: Date.now(),
  })
}

export function useRegistrySourceCode(registryName?: string) {
  const [sourceCode, setSourceCode] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!registryName) {
      setSourceCode("")
      setLoading(false)
      setError(null)
      return
    }

    const loadSourceCode = async () => {
      try {
        setLoading(true)
        setError(null)

        // Extract the registry name from file path if needed
        const name = registryName.includes("/")
          ? registryName.split("/").pop()?.replace(".tsx", "") || registryName
          : registryName

        // Check cache first
        const cachedContent = getCachedSourceCode(name)
        if (cachedContent !== null) {
          setSourceCode(cachedContent)
          setLoading(false)
          return
        }

        // Source loading logs disabled for production
        // console.log(`Loading source code for: ${name}`)
        const response = await fetch(getApiUrl(`registry/source?name=${name}`))

        if (!response.ok) {
          // API errors disabled for production
          // console.error(`API error for ${name}:`, response.status, response.statusText)
          throw new Error(`Failed to load source code: ${response.statusText}`)
        }

        const data = await response.json()
        const content = data.content || ""
        
        // Store in cache
        setCachedSourceCode(name, content)
        
        // Source loading success logs disabled for production
        // console.log(`Loaded source code for ${name}:`, data.content ? 'Success' : 'No content')
        setSourceCode(content)
      } catch (err) {
        // Source loading errors disabled for production
        // console.error(`Error loading source code for ${registryName}:`, err)
        setError(err instanceof Error ? err.message : "Unknown error")
        setSourceCode("")
      } finally {
        setLoading(false)
      }
    }

    loadSourceCode()
  }, [registryName])

  return { sourceCode, loading, error }
}

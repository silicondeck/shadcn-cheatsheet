/**
 * Custom hook for loading source code from registry
 * Uses our new API endpoint pattern
 */

"use client"

import { useEffect, useState } from "react"

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

        // Source loading logs disabled for production
        // console.log(`Loading source code for: ${name}`)
        const response = await fetch(`/api/registry/source?name=${name}`)

        if (!response.ok) {
          // API errors disabled for production
          // console.error(`API error for ${name}:`, response.status, response.statusText)
          throw new Error(`Failed to load source code: ${response.statusText}`)
        }

        const data = await response.json()
        // Source loading success logs disabled for production
        // console.log(`Loaded source code for ${name}:`, data.content ? 'Success' : 'No content')
        setSourceCode(data.content || "")
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

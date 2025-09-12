/**
 * Registry type definitions based on official shadcn/ui structure
 * These types match the exact structure used in the official shadcn/ui registry
 */

export interface RegistryEntry {
  name: string
  type: "registry:example" | "registry:ui" | "registry:block" | "registry:lib"
  registryDependencies?: string[]
  dependencies?: string[]
  devDependencies?: string[]
  files: string[]
  cssVars?: Record<string, string>
  tailwind?: {
    config?: {
      content?: string[]
      theme?: {
        extend?: Record<string, unknown>
      }
      plugins?: string[]
    }
  }
  docs?: string
  category?: string
  subcategory?: string
  chunks?: Array<{
    name: string
    code: string
  }>
}

export type Registry = RegistryEntry[]

export interface RegistryIndex {
  name: string
  type: "registry:index"
  files: string[]
}

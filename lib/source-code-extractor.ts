/**
 * Registry Source Code Extractor
 *
 * Extracts source code from registry files to display in the code panels
 */

import fs, { existsSync } from "fs"
import path from "path"

interface SourceCodeMap {
  [componentId: string]: string
}

/**
 * Read source code from registry files
 * This runs at build time or server-side to extract actual source code
 */
export async function extractRegistrySourceCode(): Promise<SourceCodeMap> {
  const sourceCodeMap: SourceCodeMap = {}

  try {
    const registryDir = path.join(process.cwd(), "registry/default/examples")

    // Check if registry directory exists
    if (!existsSync(registryDir)) {
      // Registry directory warnings disabled for production
      // console.warn("Registry directory not found:", registryDir)
      return {}
    }

    const files = fs.readdirSync(registryDir)

    for (const file of files) {
      if (file.endsWith("-demo.tsx")) {
        const componentId = file.replace(".tsx", "")
        const filePath = path.join(registryDir, file)

        try {
          const sourceCode = fs.readFileSync(filePath, "utf-8")
          sourceCodeMap[componentId] = sourceCode
        } catch {
          // Source code read warnings disabled for production
          // console.warn(`Failed to read source code for ${componentId}:`, error)
        }
      }
    }

    return sourceCodeMap
  } catch {
    // Registry extraction errors disabled for production
    // console.error("Failed to extract registry source code:", error)
    return {}
  }
}

/**
 * Server-side function to get source code for a specific component
 */
export function getComponentSourceCode(componentId: string): string | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "registry/default/examples",
      `${componentId}.tsx`
    )

    if (!fs.existsSync(filePath)) {
      return null
    }

    return fs.readFileSync(filePath, "utf-8")
  } catch {
    // Source code reading errors disabled for production
    // console.error(`Failed to read source code for ${componentId}:`, error)
    return null
  }
}

/**
 * Static source code map for client-side usage
 * This should be generated at build time and imported by client components
 */
export const STATIC_SOURCE_CODE_MAP: SourceCodeMap = {
  // This will be populated by a build script or server-side generation
}

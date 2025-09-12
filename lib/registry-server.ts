/**
 * Server-side registry functions
 * These functions run on the server and can use Node.js APIs like fs
 */

import { promises as fs } from "fs"
import path from "path"

import { registry, type RegistryItem } from "./registry"

/**
 * Get registry item content from filesystem (server-side only)
 * This follows the exact same pattern as shadcn/ui official repo
 */
export async function getRegistryItemContent(name: string): Promise<{
  item: RegistryItem
  content: string
} | null> {
  const item = registry[name]
  if (!item) {
    return null
  }

  try {
    // Get the first file path (most examples have single file)
    const filePath = item.files[0]
    const fullPath = path.join(process.cwd(), filePath)

    // Read file content
    let content = await fs.readFile(fullPath, "utf8")

    // Process content (remove meta variables, fix imports)
    content = processContent(content)

    return {
      item,
      content,
    }
  } catch {
    // Registry server errors disabled for production
    // console.error(`Error reading registry item ${name}:`, error)
    return null
  }
}

/**
 * Process content to clean up meta variables and imports
 * Following official shadcn/ui processing pattern
 */
function processContent(content: string): string {
  // Remove meta variables if any
  content = content.replace(/export const meta.*?;?\n/, "")

  // Fix component imports to use relative paths
  content = content.replace(/@\/components\/ui\//g, "@/components/ui/")

  return content.trim()
}

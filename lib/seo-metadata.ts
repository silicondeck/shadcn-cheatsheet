import { Metadata } from "next"
import { components as simpleComponents, type ComponentInfo } from "@/data/components-simple"

/**
 * Configuration for generating component metadata
 */
export interface ComponentMetadataConfig {
  componentId: string
  variantId?: string
  component: ComponentInfo
  variant?: ComponentInfo["examples"][0]
  isDefaultVariant: boolean
}

/**
 * SEO constants
 */
export const SEO_CONSTANTS = {
  baseUrl: "https://shadcnstore.com/cheatsheet",
  siteName: "Shadcn Store",
  defaultImage: "/og-image.png",
  imageWidth: 1200,
  imageHeight: 630,
  locale: "en_US",
  robots: "index, follow" as const,
} as const

/**
 * Find variant from component examples by matching registry name or slug
 * This function is flexible to handle various slug formats:
 * - Full registryName: "button-with-icon"
 * - Slug without component prefix: "with-icon"
 * - Last word only: "icon"
 */
export function findVariantBySlug(
  component: ComponentInfo,
  variantId: string
): ComponentInfo["examples"][0] | undefined {
  return component.examples.find(ex => {
    // Try direct match with registryName
    if (ex.registryName === variantId) return true

    // Try matching after removing component prefix (e.g., "badge-outline" with slug "outline")
    if (ex.registryName.startsWith(component.id + '-')) {
      const variantPart = ex.registryName.slice(component.id.length + 1) // Remove "component-" prefix
      if (variantPart === variantId) return true
    }

    // Fallback: Try matching the last part of registryName (for legacy/edge cases)
    const registryParts = ex.registryName.split('-')
    if (registryParts.length > 1 && registryParts[registryParts.length - 1] === variantId) {
      return true
    }

    return false
  })
}

/**
 * Extract variant slug from variant ID
 * Removes the component name prefix to get the variant-specific slug
 * Examples:
 * - "button-icon" with component "button" -> "icon"
 * - "button-with-icon" with component "button" -> "with-icon"
 * - "badge-outline" with component "badge" -> "outline"
 */
export function extractVariantSlug(variantId: string, componentId?: string): string {
  // If we have componentId, remove it as prefix
  if (componentId && variantId.startsWith(componentId + '-')) {
    return variantId.slice(componentId.length + 1) // Remove "component-" prefix
  }

  // Fallback: just return the variantId as-is (it's already the slug)
  return variantId
}

/**
 * Check if variant is the default (first) variant
 */
export function isDefaultVariant(
  component: ComponentInfo,
  variant?: ComponentInfo["examples"][0],
  variantId?: string
): boolean {
  if (!variant || !variantId) return true
  return variant.registryName === component.examples[0]?.registryName
}

/**
 * Build SEO-optimized title
 */
export function buildTitle(
  componentName: string,
  variantName: string | undefined,
  isDefault: boolean
): string {
  return isDefault
    ? `Shadcn ${componentName} - Shadcn Store`
    : `Shadcn ${componentName} | ${variantName} - Shadcn Store`
}

/**
 * Build SEO-optimized description
 */
export function buildDescription(
  componentDescription: string,
  componentName: string,
  variantDescription: string | undefined
): string {
  // Always use the variant's specific description if available
  // Fall back to component description only if variant description is missing
  const baseDescription = variantDescription || componentDescription

  const description = baseDescription ? baseDescription.trim() : `Explore the ${componentName} component from Shadcn UI.`

  return `${description}`
}

/**
 * Build SEO keywords array
 */
export function buildKeywords(
  componentName: string,
  componentCategory: string,
  variantName: string | undefined,
  isDefault: boolean
): string[] {
  const baseKeywords = [
    `shadcn ${componentName.toLowerCase()}`,
    `${componentName.toLowerCase()} component`,
    `react ${componentName.toLowerCase()}`,
    `${componentName.toLowerCase()} example`,
    `${componentName.toLowerCase()} ui`,
    componentCategory,
    "shadcn ui",
    "react components",
    "tailwind css",
  ]

  // Add variant-specific keywords only for non-default variants
  if (!isDefault && variantName) {
    baseKeywords.push(
      `${componentName.toLowerCase()} ${variantName.toLowerCase()}`,
      variantName.toLowerCase()
    )
  }

  return baseKeywords
}

/**
 * Build canonical URL
 * Includes trailing slash to match Next.js routing behavior
 */
export function buildCanonicalUrl(
  componentId: string,
  variantSlug?: string
): string {
  return variantSlug
    ? `${SEO_CONSTANTS.baseUrl}/component/${componentId}/${variantSlug}/`
    : `${SEO_CONSTANTS.baseUrl}/component/${componentId}/`
}

/**
 * Build Open Graph image alt text
 */
export function buildOgImageAlt(
  componentName: string,
  variantName?: string
): string {
  return variantName
    ? `${componentName} - ${variantName} Preview`
    : `${componentName} Component Preview`
}

/**
 * Generate complete metadata configuration for a component/variant
 */
export function generateComponentMetadata(
  componentId: string,
  variantId?: string
): Metadata {
  // Find component
  const component = simpleComponents.find(c => c.id === componentId)

  if (!component) {
    return {
      title: "Component Not Found - Shadcn UI Cheatsheet",
      description: "The requested component could not be found.",
    }
  }

  // Find variant if specified
  const variant = variantId
    ? findVariantBySlug(component, variantId)
    : component.examples[0]

  // Use first variant as fallback
  const selectedVariant = variant || component.examples[0]

  // Check if this is the default variant
  const isDefault = isDefaultVariant(component, selectedVariant, variantId)

  // Build all metadata components
  const title = buildTitle(component.name, selectedVariant?.name, isDefault)
  const description = buildDescription(
    component.description,
    component.name,
    selectedVariant?.description
  )
  const keywords = buildKeywords(
    component.name,
    component.category,
    selectedVariant?.name,
    isDefault
  )
  const variantSlug = variantId ? extractVariantSlug(variantId, componentId) : undefined
  const canonicalUrl = buildCanonicalUrl(componentId, variantSlug)
  const ogImageAlt = buildOgImageAlt(component.name, selectedVariant?.name)

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SEO_CONSTANTS.siteName,
      locale: SEO_CONSTANTS.locale,
      type: "website",
      images: [
        {
          url: SEO_CONSTANTS.defaultImage,
          width: SEO_CONSTANTS.imageWidth,
          height: SEO_CONSTANTS.imageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SEO_CONSTANTS.defaultImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: SEO_CONSTANTS.robots,
  }
}

/**
 * Build metadata config for client-side dynamic meta tags
 */
export interface ClientMetadataConfig {
  title?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  canonicalUrl?: string
}

/**
 * Generate client-side metadata configuration
 */
export function generateClientMetadata(
  componentId: string,
  componentName: string,
  componentDescription: string,
  componentCategory: string,
  variantId?: string,
  variantName?: string,
  variantDescription?: string,
  isDefault: boolean = true
): ClientMetadataConfig {
  const title = buildTitle(componentName, variantName, isDefault)
  const description = buildDescription(
    componentDescription,
    componentName,
    variantDescription
  )
  const keywords = buildKeywords(componentName, componentCategory, variantName, isDefault)
  const variantSlug = variantId ? extractVariantSlug(variantId) : undefined
  const canonicalUrl = buildCanonicalUrl(componentId, variantSlug)

  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonicalUrl,
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl,
  }
}

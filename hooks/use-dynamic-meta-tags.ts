import { useEffect } from 'react'

interface MetaTagsConfig {
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
 * Hook to dynamically update meta tags in the document head
 * Used for client-side navigation where meta tags need to be updated
 */
export function useDynamicMetaTags(config: MetaTagsConfig) {
  useEffect(() => {
    // Store original values to restore on cleanup
    const originalTitle = document.title
    const originalMeta: Array<{ element: HTMLMetaElement; content: string }> = []

    // Update title
    if (config.title) {
      document.title = config.title
    }

    // Helper to update or create meta tag
    const updateMetaTag = (selector: string, content: string, property?: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement

      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', property)
        } else {
          const name = selector.match(/name="([^"]+)"/)?.[1]
          if (name) meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      } else {
        // Store original content for cleanup
        originalMeta.push({ element: meta, content: meta.content })
      }

      meta.content = content
    }

    // Update description
    if (config.description) {
      updateMetaTag('meta[name="description"]', config.description)
    }

    // Update keywords
    if (config.keywords && config.keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', config.keywords.join(', '))
    }

    // Update OpenGraph tags
    if (config.ogTitle) {
      updateMetaTag('meta[property="og:title"]', config.ogTitle, 'og:title')
    }
    if (config.ogDescription) {
      updateMetaTag('meta[property="og:description"]', config.ogDescription, 'og:description')
    }
    if (config.ogUrl) {
      updateMetaTag('meta[property="og:url"]', config.ogUrl, 'og:url')
    }

    // Update Twitter Card tags
    if (config.twitterTitle) {
      updateMetaTag('meta[name="twitter:title"]', config.twitterTitle)
    }
    if (config.twitterDescription) {
      updateMetaTag('meta[name="twitter:description"]', config.twitterDescription)
    }

    // Update canonical URL
    if (config.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      const originalCanonical = canonical?.href

      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }

      canonical.href = config.canonicalUrl

      // Cleanup canonical
      return () => {
        if (originalCanonical) {
          canonical.href = originalCanonical
        }
      }
    }

    // Cleanup function
    return () => {
      document.title = originalTitle

      // Restore original meta tag values
      originalMeta.forEach(({ element, content }) => {
        element.content = content
      })
    }
  }, [config])
}

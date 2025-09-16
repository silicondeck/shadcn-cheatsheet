/**
 * Utility to create API URLs that work with and without basePath
 */

/**
 * Get the current basePath from the URL
 * Returns empty string in development, '/cheatsheet' in production
 */
function getBasePath(): string {
  if (typeof window === 'undefined') {
    // Server-side: return empty string as Next.js handles basePath automatically
    return ''
  }

  // Client-side: detect basePath from current location
  const pathname = window.location.pathname
  if (pathname.startsWith('/cheatsheet')) {
    return '/cheatsheet'
  }

  return ''
}

/**
 * Create a full API URL for client-side fetching
 * Automatically handles basePath in production
 */
export function getApiUrl(endpoint: string): string {
  // Remove leading slash to ensure proper concatenation
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  const basePath = getBasePath()

  return `${basePath}/api/${cleanEndpoint}`
}

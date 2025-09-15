/**
 * Utility to create API URLs that work with and without basePath
 */

/**
 * Create a full API URL for client-side fetching
 * Next.js automatically handles basePath for relative URLs
 */
export function getApiUrl(endpoint: string): string {
  // Remove leading slash to ensure relative URL
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  return `/api/${cleanEndpoint}`
}

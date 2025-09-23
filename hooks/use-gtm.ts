/**
 * React hooks for Google Tag Manager tracking
 *
 * Provides convenient hooks for tracking events in React components
 */

'use client'

import { useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackComponentInteraction,
  trackSearch,
  trackThemeChange,
  trackComponentView,
  trackCodeCopy,
  trackPageView,
  trackPerformance,
  trackCustomEvent,
  isGTMEnabled,
  type GTMEvent,
} from '@/lib/gtm'

/**
 * Hook for tracking component interactions
 */
export const useComponentTracking = () => {
  const trackClick = useCallback((componentName: string, additionalData?: Record<string, string | number>) => {
    trackComponentInteraction({
      component_name: componentName,
      action: 'click',
      ...additionalData,
    })
  }, [])

  const trackHover = useCallback((componentName: string, additionalData?: Record<string, string | number>) => {
    trackComponentInteraction({
      component_name: componentName,
      action: 'hover',
      ...additionalData,
    })
  }, [])

  const trackFocus = useCallback((componentName: string, additionalData?: Record<string, string | number>) => {
    trackComponentInteraction({
      component_name: componentName,
      action: 'focus',
      ...additionalData,
    })
  }, [])

  return {
    trackClick,
    trackHover,
    trackFocus,
    trackComponentView,
    trackCodeCopy,
  }
}

/**
 * Hook for tracking search events
 */
export const useSearchTracking = () => {
  const trackSearchQuery = useCallback((searchTerm: string, resultsCount: number) => {
    trackSearch({
      search_term: searchTerm,
      results_count: resultsCount,
    })
  }, [])

  return {
    trackSearchQuery,
  }
}

/**
 * Hook for tracking theme changes
 */
export const useThemeTracking = () => {
  const trackThemeSwitch = useCallback((theme: string) => {
    trackThemeChange(theme)
  }, [])

  return {
    trackThemeSwitch,
  }
}

/**
 * Hook for automatic page view tracking
 */
export const usePageTracking = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (isGTMEnabled() && pathname) {
      // Track page view when pathname changes
      trackPageView(pathname, document.title)
    }
  }, [pathname])
}

/**
 * Hook for performance tracking
 */
export const usePerformanceTracking = () => {
  const trackLoadTime = useCallback((componentName: string, loadTime: number) => {
    trackPerformance(`${componentName}_load_time`, loadTime)
  }, [])

  const trackInteractionTime = useCallback((componentName: string, interactionTime: number) => {
    trackPerformance(`${componentName}_interaction_time`, interactionTime)
  }, [])

  const trackRenderTime = useCallback((componentName: string, renderTime: number) => {
    trackPerformance(`${componentName}_render_time`, renderTime)
  }, [])

  return {
    trackLoadTime,
    trackInteractionTime,
    trackRenderTime,
  }
}

/**
 * Hook for custom event tracking
 */
export const useCustomTracking = () => {
  const track = useCallback((eventData: GTMEvent) => {
    trackCustomEvent(eventData)
  }, [])

  return {
    track,
  }
}

/**
 * Master hook that combines all tracking capabilities
 */
export const useGTMTracking = () => {
  const componentTracking = useComponentTracking()
  const searchTracking = useSearchTracking()
  const themeTracking = useThemeTracking()
  const performanceTracking = usePerformanceTracking()
  const customTracking = useCustomTracking()

  // Auto-enable page tracking
  usePageTracking()

  return {
    ...componentTracking,
    ...searchTracking,
    ...themeTracking,
    ...performanceTracking,
    ...customTracking,
    isGTMEnabled: isGTMEnabled(),
  }
}

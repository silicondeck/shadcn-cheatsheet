/**
 * Google Tag Manager (GTM) utilities for event tracking
 *
 * This module provides helper functions to send custom events to GTM dataLayer
 * for tracking user interactions and performance metrics in the shadcn cheatsheet app.
 */

import { sendGTMEvent } from '@next/third-parties/google'

// Types for better type safety
export interface GTMEvent {
  event: string
  [key: string]: string | number | boolean | undefined
}

export interface ComponentInteractionEvent extends GTMEvent {
  event: 'component_interaction'
  component_name: string
  action: string
  category?: string
  value?: string | number
}

export interface SearchEvent extends GTMEvent {
  event: 'search'
  search_term: string
  results_count: number
}

export interface ThemeChangeEvent extends GTMEvent {
  event: 'theme_change'
  theme: string
}

export interface ComponentViewEvent extends GTMEvent {
  event: 'component_view'
  component_name: string
  view_type: 'card' | 'detail' | 'preview'
}

export interface CodeCopyEvent extends GTMEvent {
  event: 'code_copy'
  component_name: string
  code_type: 'component' | 'usage' | 'installation'
}

/**
 * Track component interactions (clicks, hovers, etc.)
 */
export const trackComponentInteraction = ({
  component_name,
  action,
  category = 'component',
  value,
}: Omit<ComponentInteractionEvent, 'event'>) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'component_interaction',
    component_name,
    action,
    category,
    ...(value && { value }),
  })
}

/**
 * Track search queries and results
 */
export const trackSearch = ({
  search_term,
  results_count,
}: Omit<SearchEvent, 'event'>) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'search',
    search_term,
    results_count,
  })
}

/**
 * Track theme changes
 */
export const trackThemeChange = (theme: string) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'theme_change',
    theme,
  })
}

/**
 * Track component views
 */
export const trackComponentView = ({
  component_name,
  view_type,
}: Omit<ComponentViewEvent, 'event'>) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'component_view',
    component_name,
    view_type,
  })
}

/**
 * Track code copying events
 */
export const trackCodeCopy = ({
  component_name,
  code_type,
}: Omit<CodeCopyEvent, 'event'>) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'code_copy',
    component_name,
    code_type,
  })
}

/**
 * Track page views (for SPA navigation)
 */
export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'page_view',
    page_path,
    ...(page_title && { page_title }),
  })
}

/**
 * Track performance metrics
 */
export const trackPerformance = (metric_name: string, value: number, unit = 'ms') => {
  if (typeof window === 'undefined') return

  sendGTMEvent({
    event: 'performance_metric',
    metric_name,
    value,
    unit,
  })
}

/**
 * Track custom events with flexible structure
 */
export const trackCustomEvent = (eventData: GTMEvent) => {
  if (typeof window === 'undefined') return

  sendGTMEvent(eventData)
}

/**
 * Utility to check if GTM is enabled
 */
export const isGTMEnabled = () => {
  return Boolean(process.env.NEXT_PUBLIC_GTM_ID)
}

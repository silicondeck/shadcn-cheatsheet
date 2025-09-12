"use client"

import { useEffect, useRef } from "react"

/**
 * Performance monitoring utilities for tracki  // Track LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((_list) => {
    // const entries = list.getEntries()
    // const lastEntry = entries[entries.length - 1]

    // LCP logging disabled for production
    // if (process.env.NODE_ENV === "development") {
    //   console.log(`📊 LCP: ${lastEntry.startTime.toFixed(2)}ms`)
    // }
  })nt render performance
 */

// Type extensions for performance APIs
interface PerformanceMemory {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

interface PerformanceTracker {
  renderCount: number
}

/**
 * Hook to measure component render time
 */
export const useTrackComponentRender = (): PerformanceTracker => {
  const renderStartTime = useRef<number>(0)
  const renderCount = useRef<number>(0)

  useEffect(() => {
    renderStartTime.current = performance.now()
    renderCount.current += 1

    // Performance monitoring disabled for cleaner console
    // const renderTime = performance.now() - renderStartTime.current
    // if (process.env.NODE_ENV === "development") {
    //   console.log(
    //     `🔍 ${componentName} render #${renderCount.current}: ${renderTime.toFixed(2)}ms`
    //   )
    // }
  })

  return {
    renderCount: renderCount.current,
  }
}

/**
 * Measure and log a specific operation performance
 *
 * @param operation - Function to measure
 * @returns Result of the operation
 */
export async function measureOperation<T>(
  operation: () => T | Promise<T>
): Promise<T> {
  // const startTime = performance.now()

  try {
    const result = await operation()
    // const duration = performance.now() - startTime

    // Performance logging disabled for production
    // if (process.env.NODE_ENV === "development") {
    //   console.log(`⚡ ${operationName}: ${duration.toFixed(2)}ms`)
    // }

    return result
  } catch (error) {
    // const duration = performance.now() - startTime

    // Performance error logging disabled for production
    // if (process.env.NODE_ENV === "development") {
    //   console.error(
    //     `❌ ${operationName} failed after ${duration.toFixed(2)}ms:`,
    //     error
    //   )
    // }

    throw error
  }
}

/**
 * Performance observer for tracking Largest Contentful Paint and other metrics
 */
export function initializePerformanceObserver() {
  if (typeof window === "undefined" || !window.PerformanceObserver) {
    return
  }

  // Track LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver(() => {
    // LCP logging disabled for production
  })

  try {
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
  } catch {
    // LCP observer errors disabled for production
    // console.warn("LCP observer not supported:", error)
  }

  // Track FID (First Input Delay)  
  const fidObserver = new PerformanceObserver(() => {
    // FID logging disabled for production
  })

  try {
    fidObserver.observe({ entryTypes: ["first-input"] })
  } catch {
    // FID observer errors disabled for production
    // console.warn("FID observer not supported:", error)
  }

    // Track CLS (Cumulative Layout Shift)
  const clsObserver = new PerformanceObserver((list) => {
    // let clsValue = 0
    const entries = list.getEntries()

    entries.forEach((entry) => {
      const layoutShiftEntry = entry as LayoutShiftEntry
      if (!layoutShiftEntry.hadRecentInput) {
        // clsValue += layoutShiftEntry.value
      }
    })

    // CLS logging disabled for production
    // if (process.env.NODE_ENV === "development") {
    //   console.log(`📊 CLS: ${clsValue.toFixed(4)}`)
    // }
  })

  try {
    clsObserver.observe({ entryTypes: ["layout-shift"] })
  } catch {
    // CLS observer errors disabled for production
    // console.warn("CLS observer not supported:", error)
  }
}

/**
 * Simple memory usage monitor
 */
export function logMemoryUsage() {
  if (typeof window === "undefined") {
    return
  }

  const extendedPerformance = window.performance as ExtendedPerformance

  if (!extendedPerformance.memory) {
    return
  }

  // const memory = extendedPerformance.memory

  // Memory logging disabled for production
  // if (process.env.NODE_ENV === "development") {
  //   console.log(`🧠 ${label}:`, {
  //     used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
  //     total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
  //     limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
  //   })
  // }
}

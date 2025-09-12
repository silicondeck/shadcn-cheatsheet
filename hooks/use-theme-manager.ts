"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { colorThemes } from '@/config/theme-data'
import type { ThemePreset } from '@/types/theme-customizer'

export function useThemeManager() {
  const { theme, setTheme } = useTheme()
  const [brandColorsValues, setBrandColorsValues] = React.useState<Record<string, string>>({})

  // Simple, reliable theme detection - just follow the theme provider
  const isDarkMode = React.useMemo(() => {
    if (theme === "dark") return true
    if (theme === "light") return false
    return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  }, [theme])

  const resetTheme = React.useCallback(() => {
    // Comprehensive reset of ALL possible CSS variables that could be set by themes
    const root = document.documentElement
    const allPossibleVars = [
      // Standard shadcn/ui variables
      'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
      'primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
      'accent', 'accent-foreground', 'destructive', 'destructive-foreground', 'border', 'input',
      'ring', 'radius',

      // Chart variables
      'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5',

      // Font variables that might be in imported themes
      'font-sans', 'font-serif', 'font-mono',

      // Shadow variables from imported themes
      'shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl',

      // Spacing variables
      'spacing', 'tracking-normal',

      // Additional variables that might be set by advanced themes
      'card-header', 'card-content', 'card-footer', 'muted-background', 'accent-background',
      'destructive-background', 'warning', 'warning-foreground', 'success', 'success-foreground',
      'info', 'info-foreground'
    ]

    // Remove all possible CSS variables
    allPossibleVars.forEach(varName => {
      root.style.removeProperty(`--${varName}`)
    })

    // Also remove any inline styles that might have been set (comprehensive cleanup)
    const inlineStyles = root.style
    for (let i = inlineStyles.length - 1; i >= 0; i--) {
      const property = inlineStyles[i]
      if (property.startsWith('--')) {
        root.style.removeProperty(property)
      }
    }
  }, [])

  const applyTheme = React.useCallback((themeValue: string, darkMode: boolean) => {
    const theme = colorThemes.find(t => t.value === themeValue)
    if (!theme) return

    // Reset and apply theme variables
    resetTheme()
    const styles = darkMode ? theme.preset.styles.dark : theme.preset.styles.light
    const root = document.documentElement

    Object.entries(styles).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, String(value))
    })

    // Update brand colors values when theme changes - convert oklch to hex for color picker
    setBrandColorsValues({})
  }, [resetTheme])

  const applyTweakcnTheme = React.useCallback((themePreset: ThemePreset, darkMode: boolean) => {
    // Reset and apply theme variables
    resetTheme()
    const styles = darkMode ? themePreset.styles.dark : themePreset.styles.light
    const root = document.documentElement

    Object.entries(styles).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, String(value))
    })

    // Clear brand colors values for tweakcn themes
    setBrandColorsValues({})
  }, [resetTheme])

  const applyRadius = (radius: string) => {
    document.documentElement.style.setProperty('--radius', radius)
  }

  const handleColorChange = (cssVar: string, value: string) => {
    document.documentElement.style.setProperty(cssVar, value)
  }

  return {
    theme,
    setTheme,
    isDarkMode,
    brandColorsValues,
    setBrandColorsValues,
    resetTheme,
    applyTheme,
    applyTweakcnTheme,
    applyRadius,
    handleColorChange
  }
}

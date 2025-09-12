/**
 * User preferences management system with localStorage persistence
 *
 * This utility provides a robust system     } catch {
      // Preference validation errors disabled for production
      // console.warn(`Error in preference listener for ${key}:`, error)
    }managing user preferences
 * with automatic persistence, validation, and fallback handling.
 */

import { PackageManager, ThemeMode, UserPreferences, ViewMode } from "@/types"

// Default preferences
const DEFAULT_PREFERENCES: UserPreferences = {
  packageManager: "pnpm",
  theme: "system",
  viewMode: "grid",
}

// Storage keys
const STORAGE_KEYS = {
  PREFERENCES: "shadcn-cheatsheet-preferences",
  PACKAGE_MANAGER: "shadcn-cheatsheet-package-manager",
  THEME: "shadcn-cheatsheet-theme",
  VIEW_MODE: "shadcn-cheatsheet-view-mode",
  LAST_VISITED: "shadcn-cheatsheet-last-visited",
} as const

// Event listeners for preference changes
type PreferenceChangeListener<T = unknown> = (value: T) => void
const preferenceListeners = new Map<string, PreferenceChangeListener[]>()

/**
 * Check if localStorage is available
 */
function isLocalStorageAvailable(): boolean {
  try {
    const test = "__localStorage_test__"
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

/**
 * Safely get item from localStorage
 */
function getStorageItem(key: string): string | null {
  if (!isLocalStorageAvailable()) {
    return null
  }

  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/**
 * Safely set item in localStorage
 */
function setStorageItem(key: string, value: string): boolean {
  if (!isLocalStorageAvailable()) {
    return false
  }

  try {
    localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Safely remove item from localStorage
 */
function removeStorageItem(key: string): boolean {
  if (!isLocalStorageAvailable()) {
    return false
  }

  try {
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

/**
 * Validate preference values
 */
function validatePreference<T>(key: string, value: T): boolean {
  switch (key) {
    case "packageManager":
      return ["pnpm", "npm", "yarn", "bun"].includes(value as string)
    case "theme":
      return ["light", "dark", "system"].includes(value as string)
    case "viewMode":
      return ["expanded", "collapsed"].includes(value as string)
    case "lastVisited":
      return typeof value === "string" || value === undefined
    default:
      return true
  }
}

/**
 * Notify preference change listeners
 */
function notifyListeners<T>(key: string, value: T): void {
  const listeners = preferenceListeners.get(key) || []
  listeners.forEach((listener) => {
    try {
      listener(value)
    } catch {
      // Preference listener errors disabled for production
      // console.warn(`Error in preference listener for ${key}:`, error)
    }
  })
}

/**
 * Preferences Manager Class
 */
export class PreferencesManager {
  /**
   * Get preference value with fallback to default
   */
  static getPreference<T>(key: keyof UserPreferences, defaultValue: T): T {
    const storageKey = this.getStorageKey(key)
    const stored = getStorageItem(storageKey)

    if (stored === null) {
      return defaultValue
    }

    try {
      const parsed = JSON.parse(stored)

      // Validate the preference value
      if (!validatePreference(key, parsed)) {
        // Invalid preference warnings disabled for production
        // console.warn(`Invalid preference value for ${key}:`, parsed)
        return defaultValue
      }

      return parsed
    } catch {
      return defaultValue
    }
  }

  /**
   * Set preference value with validation and persistence
   */
  static setPreference<T>(key: keyof UserPreferences, value: T): boolean {
    // Validate the value
    if (!validatePreference(key, value)) {
      // Invalid preference warnings disabled for production
      // console.warn(`Invalid preference value for ${key}:`, value)
      return false
    }

    const storageKey = this.getStorageKey(key)
    const success = setStorageItem(storageKey, JSON.stringify(value))

    if (success) {
      // Notify listeners
      notifyListeners(key, value)
    }

    return success
  }

  /**
   * Remove preference (revert to default)
   */
  static removePreference(key: keyof UserPreferences): boolean {
    const storageKey = this.getStorageKey(key)
    const success = removeStorageItem(storageKey)

    if (success) {
      // Notify listeners with default value
      const defaultValue = DEFAULT_PREFERENCES[key]
      notifyListeners(key, defaultValue)
    }

    return success
  }

  /**
   * Clear all preferences
   */
  static clearAllPreferences(): boolean {
    const keys = Object.keys(STORAGE_KEYS) as Array<keyof typeof STORAGE_KEYS>
    let allSuccess = true

    keys.forEach((key) => {
      const storageKey = STORAGE_KEYS[key]
      const success = removeStorageItem(storageKey)
      if (!success) {
        allSuccess = false
      }
    })

    if (allSuccess) {
      // Notify all listeners with default values
      Object.entries(DEFAULT_PREFERENCES).forEach(([key, value]) => {
        notifyListeners(key, value)
      })
    }

    return allSuccess
  }

  /**
   * Get all preferences as an object
   */
  static getAllPreferences(): UserPreferences {
    return {
      packageManager: this.getPreference(
        "packageManager",
        DEFAULT_PREFERENCES.packageManager
      ),
      theme: this.getPreference("theme", DEFAULT_PREFERENCES.theme),
      viewMode: this.getPreference("viewMode", DEFAULT_PREFERENCES.viewMode),
      lastVisited: this.getPreference(
        "lastVisited",
        DEFAULT_PREFERENCES.lastVisited
      ),
    }
  }

  /**
   * Set multiple preferences at once
   */
  static setMultiplePreferences(
    preferences: Partial<UserPreferences>
  ): boolean {
    let allSuccess = true

    Object.entries(preferences).forEach(([key, value]) => {
      if (value !== undefined) {
        const success = this.setPreference(key as keyof UserPreferences, value)
        if (!success) {
          allSuccess = false
        }
      }
    })

    return allSuccess
  }

  /**
   * Subscribe to preference changes
   */
  static subscribe<T>(
    key: keyof UserPreferences,
    listener: PreferenceChangeListener<T>
  ): () => void {
    const listeners = preferenceListeners.get(key) || []
    listeners.push(listener as PreferenceChangeListener)
    preferenceListeners.set(key, listeners)

    // Return unsubscribe function
    return () => {
      const currentListeners = preferenceListeners.get(key) || []
      const index = currentListeners.indexOf(
        listener as PreferenceChangeListener
      )
      if (index > -1) {
        currentListeners.splice(index, 1)
        preferenceListeners.set(key, currentListeners)
      }
    }
  }

  /**
   * Export preferences as JSON string
   */
  static exportPreferences(): string {
    return JSON.stringify(this.getAllPreferences(), null, 2)
  }

  /**
   * Import preferences from JSON string
   */
  static importPreferences(jsonString: string): boolean {
    try {
      const preferences = JSON.parse(jsonString) as Partial<UserPreferences>
      return this.setMultiplePreferences(preferences)
    } catch {
      return false
    }
  }

  /**
   * Get storage key for preference
   */
  private static getStorageKey(key: keyof UserPreferences): string {
    switch (key) {
      case "packageManager":
        return STORAGE_KEYS.PACKAGE_MANAGER
      case "theme":
        return STORAGE_KEYS.THEME
      case "viewMode":
        return STORAGE_KEYS.VIEW_MODE
      case "lastVisited":
        return STORAGE_KEYS.LAST_VISITED
      default:
        return STORAGE_KEYS.PREFERENCES
    }
  }
}

/**
 * Convenience functions for common preferences
 */
export const preferences = {
  // Package Manager
  getPackageManager: (): PackageManager =>
    PreferencesManager.getPreference(
      "packageManager",
      DEFAULT_PREFERENCES.packageManager
    ),

  setPackageManager: (manager: PackageManager): boolean =>
    PreferencesManager.setPreference("packageManager", manager),

  // Theme
  getTheme: (): ThemeMode =>
    PreferencesManager.getPreference("theme", DEFAULT_PREFERENCES.theme),

  setTheme: (theme: ThemeMode): boolean =>
    PreferencesManager.setPreference("theme", theme),

  // View Mode
  getViewMode: (): ViewMode =>
    PreferencesManager.getPreference("viewMode", DEFAULT_PREFERENCES.viewMode),

  setViewMode: (mode: ViewMode): boolean =>
    PreferencesManager.setPreference("viewMode", mode),

  // Last Visited
  getLastVisited: (): string | undefined =>
    PreferencesManager.getPreference("lastVisited", undefined),

  setLastVisited: (componentId: string): boolean =>
    PreferencesManager.setPreference("lastVisited", componentId),

  // Utilities
  isStorageAvailable: isLocalStorageAvailable,

  subscribe: PreferencesManager.subscribe.bind(PreferencesManager),

  getAll: PreferencesManager.getAllPreferences.bind(PreferencesManager),

  clear: PreferencesManager.clearAllPreferences.bind(PreferencesManager),
}

// Export default preferences for reference
export { DEFAULT_PREFERENCES }
export default PreferencesManager

/**
 * Component prop interfaces for all React components in the application
 *
 * These interfaces define the props for layout components, common components,
 * and utility components used throughout the shadcn/ui cheatsheet.
 */

import React from "react"

import {
  ComponentDefinition,
  ComponentVariant,
  ExpandedState,
  NavigationContext,
  PackageManager,
  SearchFilters,
  ThemeMode,
  ViewMode,
} from "./core"

// ============================================================================
// COMPONENT DATA TYPES
// ============================================================================

/**
 * Component data structure for shadcn/ui components
 */
export interface ComponentData {
  id: string
  name: string
  description: string
  category?: string
  tags?: string[]
  version?: string
  lastUpdated?: string
  dependencies?: string[]
  docsUrl?: string
  examples?: CodeExample[]
  variants?: string[]
  props?: ComponentProp[]
  installation?: InstallationInfo
  complexity?: "beginner" | "intermediate" | "advanced"
  featured?: boolean
  // Optional reference to original component for full variant access
  _originalComponent?: ComponentDefinition
}

/**
 * Code example structure
 */
export interface CodeExample {
  title: string
  description?: string
  code: string
  language?: string
  framework?: string
}

/**
 * Component prop definition
 */
export interface ComponentProp {
  name: string
  type: string
  required?: boolean
  default?: string
  description?: string
}

/**
 * Installation information
 */
export interface InstallationInfo {
  command: string
  dependencies?: string[]
  setup?: string[]
}

// ============================================================================
// LAYOUT COMPONENT PROPS
// ============================================================================

/**
 * Props for the main app layout wrapper
 */
export interface AppLayoutProps {
  /** Child components to render */
  children: React.ReactNode
}

/**
 * Props for the header navigation component
 */
export interface HeaderProps {
  /** Logo text or image */
  logo: string
  /** Application title */
  title: string
  /** Social media links */
  socialLinks: SocialLink[]
  /** Current theme */
  theme: ThemeMode
  /** Theme change handler */
  onThemeChange: (theme: ThemeMode) => void
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  /** Platform identifier */
  platform: "github" | "twitter" | "discord"
  /** URL to the social media page */
  url: string
  /** Icon component for the platform */
  icon: React.ComponentType<{ className?: string }>
  /** Accessible label */
  label: string
}

/**
 * Props for the footer component
 */
export interface FooterProps {
  /** Footer sections with links */
  sections: FooterSection[]
  /** Newsletter signup component */
  newsletter?: React.ReactNode
  /** Attribution text */
  attribution: string
  /** Attribution link */
  attributionLink: string
}

/**
 * Footer section configuration
 */
export interface FooterSection {
  /** Section title */
  title: string
  /** Links in this section */
  links: FooterLink[]
}

/**
 * Footer link configuration
 */
export interface FooterLink {
  /** Link label */
  label: string
  /** Link URL */
  href: string
  /** Whether link opens in new tab */
  external?: boolean
}

// ============================================================================
// COMMON COMPONENT PROPS
// ============================================================================

/**
 * Props for the search bar component
 */
export interface SearchBarProps {
  /** Current search value */
  value: string
  /** Change handler for search input */
  onChange: (value: string) => void
  /** Search submission handler */
  onSearch?: (query: string) => void
  /** Clear handler */
  onClear?: () => void
  /** Search suggestions */
  suggestions?: string[]
  /** Loading state */
  isLoading?: boolean
  /** Auto-focus the input */
  autoFocus?: boolean
  /** Debounce delay in milliseconds */
  debounceMs?: number
  /** CSS class name */
  className?: string
  /** Placeholder text */
  placeholder?: string
}

/**
 * Props for the control panel component
 */
export interface ControlPanelProps {
  /** Current search query */
  searchQuery: string
  /** Search change handler */
  onSearchChange: (query: string) => void
  /** Search submission handler */
  onSearch?: (query: string) => void
  /** Search suggestions */
  searchSuggestions?: string[]
  /** Search loading state */
  isSearchLoading?: boolean
  /** Current package manager */
  packageManager: PackageManager
  /** Package manager change handler */
  onPackageManagerChange: (manager: PackageManager) => void
  /** Current view mode */
  viewMode: ViewMode
  /** View mode change handler */
  onViewModeChange: (mode: ViewMode) => void
  /** Current expanded state */
  expandedState?: ExpandedState
  /** Expanded state change handler */
  onExpandedStateChange?: (state: ExpandedState) => void
  /** Total number of components */
  totalComponents?: number
  /** Number of filtered components */
  filteredComponents?: number
  /** CSS class name */
  className?: string
}

/**
 * Props for individual component cards
 */
export interface ComponentCardProps {
  /** Component data */
  component: ComponentDefinition
  /** Current package manager for install commands */
  packageManager: PackageManager
  /** View mode (expanded/collapsed) */
  viewMode: ViewMode
  /** Whether this card is expanded */
  isExpanded: boolean
  /** Variant click handler */
  onVariantClick: (variant: ComponentVariant) => void
  /** Copy install command handler */
  onCopyInstall: (command: string) => void
  /** Copy import statement handler */
  onCopyImport: (importStatement: string) => void
  /** Copy usage code handler */
  onCopyUsage: (code: string) => void
  /** Documentation link click handler */
  onDocsClick: (url: string) => void
}

/**
 * Props for component variant display
 */
export interface VariantDisplayProps {
  /** Variants to display */
  variants: ComponentVariant[]
  /** Variant click handler */
  onVariantClick: (variant: ComponentVariant) => void
  /** Whether to show thumbnails */
  showThumbnails?: boolean
  /** Maximum variants to show before "show more" */
  maxVisible?: number
}

// ============================================================================
// PREVIEW PANEL PROPS
// ============================================================================

/**
 * Props for the preview panel component
 */
export interface PreviewPanelProps {
  /** Whether the panel is open */
  isOpen: boolean
  /** Component being previewed */
  component?: ComponentDefinition
  /** Variant being previewed */
  variant?: ComponentVariant
  /** Current editable code */
  editableCode?: string
  /** Navigation context */
  navigationContext: NavigationContext
  /** Close panel handler */
  onClose: () => void
  /** Code change handler */
  onCodeChange: (code: string) => void
  /** Navigate to next component/variant */
  onNext: () => void
  /** Navigate to previous component/variant */
  onPrevious: () => void
  /** Copy code handler */
  onCopyCode: (code: string) => void
}

/**
 * Props for the live preview area
 */
export interface LivePreviewProps {
  /** Component to preview */
  component: ComponentDefinition
  /** Variant to preview */
  variant: ComponentVariant
  /** Code to render */
  code: string
  /** Error state */
  error?: string
  /** Loading state */
  loading?: boolean
}

/**
 * Props for the code editor
 */
export interface CodeEditorProps {
  /** Current code value */
  value: string
  /** Code change handler */
  onChange: (value: string) => void
  /** Programming language for syntax highlighting */
  language: string
  /** Whether the editor is read-only */
  readOnly?: boolean
  /** Editor theme */
  theme?: "light" | "dark"
  /** Show line numbers */
  showLineNumbers?: boolean
}

// ============================================================================
// UTILITY COMPONENT PROPS
// ============================================================================

/**
 * Props for copy-to-clipboard button
 */
export interface CopyButtonProps {
  /** Text to copy */
  text: string
  /** Button variant */
  variant?: "default" | "ghost" | "outline"
  /** Button size */
  size?: "sm" | "md" | "lg"
  /** Success message */
  successMessage?: string
  /** Custom icon */
  icon?: React.ComponentType<{ className?: string }>
  /** Additional CSS classes */
  className?: string
}

/**
 * Props for theme toggle component
 */
export interface ThemeToggleProps {
  /** Current theme */
  theme: ThemeMode
  /** Theme change handler */
  onThemeChange: (theme: ThemeMode) => void
  /** Button size */
  size?: "sm" | "md" | "lg"
  /** Show labels */
  showLabels?: boolean
}

/**
 * Props for package manager selector
 */
export interface PackageManagerSelectorProps {
  /** Current package manager */
  value: PackageManager
  /** Change handler */
  onChange: (manager: PackageManager) => void
  /** Available options */
  options: PackageManager[]
  /** Disabled state */
  disabled?: boolean
}

/**
 * Props for search filters
 */
export interface SearchFiltersProps {
  /** Current filters */
  filters: SearchFilters
  /** Filter change handler */
  onFiltersChange: (filters: SearchFilters) => void
  /** Available categories */
  availableCategories: string[]
  /** Available tags */
  availableTags: string[]
}

/**
 * Props for navigation breadcrumbs
 */
export interface NavigationBreadcrumbsProps {
  /** Navigation context */
  context: NavigationContext
  /** Component name */
  componentName: string
  /** Variant name */
  variantName?: string
}

// ============================================================================
// HOOK PROPS AND RETURN TYPES
// ============================================================================

/**
 * Return type for useLocalStorage hook
 */
export interface UseLocalStorageReturn<T> {
  /** Current value */
  value: T
  /** Set new value */
  setValue: (value: T | ((prev: T) => T)) => void
  /** Remove value from storage */
  removeValue: () => void
}

/**
 * Return type for useDebounce hook
 */
export interface UseDebounceReturn<T> {
  /** Debounced value */
  debouncedValue: T
  /** Whether debouncing is in progress */
  isDebouncing: boolean
}

/**
 * Options for usePreferences hook
 */
export interface UsePreferencesOptions {
  /** Storage key prefix */
  keyPrefix?: string
  /** Default preferences */
  defaults: Partial<Record<string, unknown>>
}

/**
 * Return type for usePreferences hook
 */
export interface UsePreferencesReturn {
  /** Get preference value */
  getPreference: <T>(key: string, defaultValue: T) => T
  /** Set preference value */
  setPreference: <T>(key: string, value: T) => void
  /** Remove preference */
  removePreference: (key: string) => void
  /** Clear all preferences */
  clearPreferences: () => void
}

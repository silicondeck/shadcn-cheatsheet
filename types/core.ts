/**
 * Core type definitions for the Shadcn/UI Cheatsheet application
 *
 * These interfaces define the structure of component data, application state,
 * and all other TypeScript contracts used throughout the application.
 */

// ============================================================================
// COMPONENT DATA TYPES
// ============================================================================

/**
 * Defines the structure of a shadcn/ui component with all its variants
 */
export interface ComponentDefinition {
  /** Unique identifier for the component */
  id: string
  /** Display name of the component */
  name: string
  /** Brief description of what the component does */
  description: string
  /** Category this component belongs to */
  category: ComponentCategory
  /** Installation information */
  installation: {
    /** CLI command to install the component */
    command: string
    /** Additional dependencies required */
    dependencies: string[]
  }
  /** Documentation links */
  documentation: {
    /** shadcn/ui official documentation URL */
    url: string
    /** Direct link to component docs */
    officialDocs: string
  }
  /** Import statements for the component */
  imports: {
    /** Default import statement */
    default: string
    /** Named imports array */
    named: string[]
  }
  /** All variants of this component */
  variants: ComponentVariant[]
  /** Search aliases for better discoverability */
  aliases: string[]
  /** Tags for filtering and categorization */
  tags: string[]
}

/**
 * Defines a specific variant of a component
 */
export interface ComponentVariant {
  /** Unique identifier within the component */
  id: string
  /** Display name of the variant */
  name: string
  /** Description of this specific variant */
  description: string
  /** The actual React/TypeScript code */
  code: string
  /** Props specific to this variant */
  props: PropDefinition[]
  /** Preview configuration */
  preview: {
    /** Optional thumbnail URL */
    thumbnail?: string
    /** Whether this variant supports interactive preview */
    interactive: boolean
  }
  /** Optional registry file reference for new modular system */
  _registryFile?: string
}

/**
 * Defines a component prop with its metadata
 */
export interface PropDefinition {
  /** Name of the prop */
  name: string
  /** TypeScript type of the prop */
  type: string
  /** Whether this prop is required */
  required: boolean
  /** Default value if any */
  default?: unknown
  /** Description of what this prop does */
  description: string
}

/**
 * Component categories for organization
 */
export type ComponentCategory =
  | "forms"
  | "layout"
  | "navigation"
  | "feedback"
  | "data-display"
  | "overlay"
  | "utility"
  | "other"

// ============================================================================
// APPLICATION STATE TYPES
// ============================================================================

/**
 * Global application state structure
 */
export interface AppState {
  /** Current theme setting */
  theme: ThemeMode
  /** Currently selected package manager */
  packageManager: PackageManager
  /** Current view mode for component cards */
  viewMode: ViewMode
  /** Search-related state */
  search: SearchState
  /** Preview panel state */
  preview: PreviewState
  /** UI state */
  ui: UIState
  /** User preferences */
  preferences: UserPreferences
}

/**
 * Search functionality state
 */
export interface SearchState {
  /** Current search query */
  query: string
  /** Applied filters */
  filters: SearchFilters
  /** Current search results */
  results: ComponentDefinition[]
}

/**
 * Search options for filtering and limiting results
 */
export interface SearchOptions {
  /** Maximum number of results to return */
  limit?: number
  /** Category filter */
  category?: string
  /** Tag filter */
  tags?: string[]
}

/**
 * Search result with relevance scoring
 */
export interface SearchResult {
  /** The matched component */
  item: ComponentDefinition
  /** Relevance score (lower is better) */
  score?: number
  /** Matching text segments */
  matches?: SearchMatch[]
  /** Reference index in original dataset */
  refIndex: number
}

/**
 * Search match highlighting information
 */
export interface SearchMatch {
  /** Matched field key */
  key: string
  /** Matched text value */
  value?: string
  /** Character indices of matches */
  indices?: ReadonlyArray<readonly [number, number]>
}

/**
 * Preview panel state and navigation context
 */
export interface PreviewState {
  /** Whether the panel is currently open */
  isOpen: boolean
  /** Currently previewed component */
  component?: ComponentDefinition
  /** Currently previewed variant */
  variant?: ComponentVariant
  /** User-edited code in the editor */
  editableCode?: string
  /** Navigation context for next/previous functionality */
  navigationContext: NavigationContext
}

/**
 * Navigation context for component/variant traversal
 */
export interface NavigationContext {
  /** Index of current component in the full list */
  currentComponentIndex: number
  /** Total number of components */
  totalComponents: number
  /** Index of current variant within the component */
  currentVariantIndex: number
  /** Total variants in current component */
  totalVariants: number
  /** Whether user can navigate to next item */
  canGoNext: boolean
  /** Whether user can navigate to previous item */
  canGoPrevious: boolean
  /** Human-readable current position */
  currentPosition: string
}

/**
 * UI state for layout and interactions
 */
export interface UIState {
  /** Whether sidebar is open (future use) */
  sidebarOpen: boolean
  /** Current number of grid columns */
  gridColumns: number
  /** Whether all cards are expanded */
  allCardsExpanded: boolean
}

/**
 * User preferences that persist across sessions
 */
export interface UserPreferences {
  /** Preferred package manager */
  packageManager: PackageManager
  /** Preferred theme */
  theme: ThemeMode
  /** Preferred view mode */
  viewMode: ViewMode
  /** Last visited component ID */
  lastVisited?: string
}

/**
 * Search filters for refining results
 */
export interface SearchFilters {
  /** Filter by component categories */
  categories: ComponentCategory[]
  /** Filter by tags */
  tags: string[]
  /** Only show components with variants */
  hasVariants: boolean
}

// ============================================================================
// ENUM TYPES
// ============================================================================

/**
 * Supported package managers
 */
export type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

/**
 * Theme modes
 */
export type ThemeMode = "light" | "dark" | "system"

/**
 * View modes for component display layout
 */
export type ViewMode = "grid" | "list"

/**
 * Expanded state for component cards
 */
export type ExpandedState = "expanded" | "collapsed" | "mixed"

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Result type for operations that can fail
 */
export type Result<T, E = Error> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: E
    }

/**
 * Callback function type for state updates
 */
export type StateUpdater<T> = (prevState: T) => T

/**
 * Event handler types
 */
export interface EventHandlers {
  onComponentClick: (
    component: ComponentDefinition,
    variant?: ComponentVariant
  ) => void
  onVariantClick: (
    component: ComponentDefinition,
    variant: ComponentVariant
  ) => void
  onSearchQueryChange: (query: string) => void
  onPackageManagerChange: (manager: PackageManager) => void
  onThemeChange: (theme: ThemeMode) => void
  onViewModeChange: (mode: ViewMode) => void
  onPreviewClose: () => void
  onNavigateNext: () => void
  onNavigatePrevious: () => void
}

/**
 * Configuration for copy-to-clipboard operations
 */
export interface CopyConfig {
  /** Text to copy */
  text: string
  /** Success message to show */
  successMessage?: string
  /** Error message to show */
  errorMessage?: string
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  /** Duration in milliseconds */
  duration: number
  /** CSS easing function */
  easing: string
  /** Delay before animation starts */
  delay?: number
}

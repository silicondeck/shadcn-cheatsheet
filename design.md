# Technical Design Specification - Shadcn/UI Cheatsheet

**Project**: Cutting-edge shadcn/ui cheatsheet with exceptional UX  
**Version**: 1.0  
**Date**: September 2, 2025

## System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Layer  │    │  Application    │    │   Data Layer    │
│                 │    │     Layer       │    │                 │
│ • React 19      │◄──►│ • Next.js 15    │◄──►│ • Static JSON   │
│ • Tailwind 4.x  │    │ • App Router    │    │ • Component     │
│ • shadcn/ui v3  │    │ • SSG           │    │   Definitions   │
│ • Lucide Icons  │    │ • TypeScript    │    │ • Asset Files   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Component Layout System

### Responsive Grid Architecture

The application uses an intelligent responsive grid system that adapts to both screen size and content quantity:

#### Grid Configuration

```typescript
const BASE_GRID_CONFIG = {
  xs: { maxColumns: 1, gap: 16 }, // 320px+
  sm: { maxColumns: 2, gap: 16 }, // 640px+
  md: { maxColumns: 3, gap: 20 }, // 768px+
  lg: { maxColumns: 4, gap: 24 }, // 1024px+
  xl: { maxColumns: 4, gap: 24 }, // 1280px+
  "2xl": { maxColumns: 4, gap: 28 }, // 1536px+
}
```

#### Smart Column Calculation

- **Formula**: `columns = Math.min(maxColumns, itemCount)`
- **Prevents Empty Columns**: No wasted space when filtering results
- **Content-Aware**: Adapts layout based on available items
- **Performance Optimized**: Uses CSS Grid over CSS columns

#### Responsive Behavior Examples

- **Large screen (1400px) + 3 items**: Uses 3 columns (not 4)
- **Large screen (1400px) + 50 items**: Uses 4 columns (fully utilized)
- **Medium screen (900px) + 2 items**: Uses 2 columns (not 3)
- **Small screen (700px)**: Maximum 2 columns regardless of item count

### Component Card System

```
App Layout
├── Header (Navigation)
│   ├── Logo & Title
│   ├── Theme Toggle
│   └── Social Links
├── Main Content
│   ├── Control Panel
│   │   ├── Search Bar
│   │   ├── Package Manager Selector
│   │   └── View Toggle
│   ├── Component Grid
│   │   └── Component Cards[]
│   └── Preview Panel (Slide-out)
│       ├── Live Preview
│       └── Code Editor
└── Footer
    ├── Product Links (4 columns)
    ├── Newsletter Signup
    └── Attribution
```

## Data Models

### Component Definition Schema

```typescript
interface ComponentDefinition {
  id: string
  name: string
  description: string
  category: ComponentCategory
  installation: {
    command: string
    dependencies: string[]
  }
  documentation: {
    url: string
    officialDocs: string
  }
  imports: {
    default: string
    named: string[]
  }
  variants: ComponentVariant[]
  aliases: string[]
  tags: string[]
}

interface ComponentVariant {
  id: string
  name: string
  description: string
  code: string
  props: PropDefinition[]
  preview: {
    thumbnail?: string
    interactive: boolean
  }
}

interface PropDefinition {
  name: string
  type: string
  required: boolean
  default?: any
  description: string
}

type ComponentCategory =
  | "forms"
  | "layout"
  | "navigation"
  | "feedback"
  | "data-display"
  | "overlay"
  | "utility"
```

### Application State Schema

```typescript
interface AppState {
  theme: "light" | "dark" | "system"
  packageManager: "pnpm" | "npm" | "yarn" | "bun"
  viewMode: "expanded" | "collapsed"
  search: {
    query: string
    filters: SearchFilters
    results: ComponentDefinition[]
  }
  preview: {
    isOpen: boolean
    component?: ComponentDefinition
    variant?: ComponentVariant
    editableCode?: string
    navigationContext: {
      currentIndex: number
      totalComponents: number
      currentVariantIndex: number
      totalVariants: number
    }
  }
  ui: {
    sidebarOpen: boolean
    gridColumns: number
    allCardsExpanded: boolean
  }
  preferences: {
    packageManager: "pnpm" | "npm" | "yarn" | "bun"
    theme: "light" | "dark" | "system"
    viewMode: "expanded" | "collapsed"
    lastVisited?: string
  }
}

interface SearchFilters {
  categories: ComponentCategory[]
  tags: string[]
  hasVariants: boolean
}
```

## Data Flow Architecture

### Search Flow

```
User Input → Search Component → Fuzzy Search Engine → Filter Engine → Results Grid
    ↓              ↑                    ↑                   ↑             ↓
Debounced      Query State         Alias Resolution    Category Filter   Re-render
```

### Preview Panel Flow

```
Variant Click → Open Panel → Load Component → Render Preview → Enable Editing
      ↓             ↓            ↓              ↓              ↓
  Component     Slide Animation  Component     Live Preview   Code Editor
   Context      (300ms)         Definition     Rendering      Updates
```

### Theme Management Flow

```
Theme Toggle → Update Context → Apply CSS Variables → Persist to Storage → Re-render
     ↓             ↓                 ↓                    ↓              ↓
 User Action   React Context    Tailwind Classes    localStorage    All Components
```

## Component Interfaces

### Core Layout Components

```typescript
// App Layout
interface AppLayoutProps {
  children: React.ReactNode
}

// Header Component
interface HeaderProps {
  logo: string
  title: string
  socialLinks: SocialLink[]
}

interface SocialLink {
  platform: "github" | "twitter" | "discord"
  url: string
  icon: React.ComponentType
}

// Control Panel
interface ControlPanelProps {
  onSearch: (query: string) => void
  onPackageManagerChange: (manager: PackageManager) => void
  onViewModeChange: (mode: ViewMode) => void
  searchQuery: string
  packageManager: PackageManager
  viewMode: ViewMode
}

// Component Grid
interface ComponentGridProps {
  components: ComponentDefinition[]
  viewMode: ViewMode
  onVariantClick: (
    component: ComponentDefinition,
    variant: ComponentVariant
  ) => void
  gridColumns: number
}

// Component Card
interface ComponentCardProps {
  component: ComponentDefinition
  packageManager: PackageManager
  viewMode: ViewMode
  onVariantClick: (variant: ComponentVariant) => void
  onCopyInstall: () => void
  onCopyImport: () => void
  onCopyUsage: (code: string) => void
}

// Preview Panel
interface PreviewPanelProps {
  isOpen: boolean
  component?: ComponentDefinition
  variant?: ComponentVariant
  onClose: () => void
  onCodeChange: (code: string) => void
  onNext: () => void
  onPrevious: () => void
  navigationContext: {
    canGoNext: boolean
    canGoPrevious: boolean
    currentPosition: string // e.g., "Button (2/5) - Secondary"
  }
}
```

### Utility Interfaces

```typescript
// Search Engine
interface SearchEngine {
  search(
    query: string,
    components: ComponentDefinition[]
  ): ComponentDefinition[]
  addAlias(alias: string, componentName: string): void
  setFuzzyThreshold(threshold: number): void
}

// Code Processor
interface CodeProcessor {
  formatCode(code: string, language: string): string
  extractImports(code: string): string[]
  generateUsageExample(
    component: ComponentDefinition,
    variant: ComponentVariant
  ): string
}

// Clipboard Manager
interface ClipboardManager {
  copy(text: string): Promise<boolean>
  showFeedback(message: string, type: "success" | "error"): void
}

// User Preferences Manager
interface PreferencesManager {
  save(key: string, value: any): void
  load<T>(key: string, defaultValue: T): T
  clear(): void
  subscribe(key: string, callback: (value: any) => void): () => void
}

// Component Navigation Manager
interface NavigationManager {
  getCurrentIndex(
    component: ComponentDefinition,
    components: ComponentDefinition[]
  ): number
  getVariantIndex(
    variant: ComponentVariant,
    component: ComponentDefinition
  ): number
  getNext(
    currentComponent: ComponentDefinition,
    currentVariant?: ComponentVariant
  ): {
    component: ComponentDefinition
    variant?: ComponentVariant
  } | null
  getPrevious(
    currentComponent: ComponentDefinition,
    currentVariant?: ComponentVariant
  ): {
    component: ComponentDefinition
    variant?: ComponentVariant
  } | null
  getNavigationContext(
    component: ComponentDefinition,
    variant: ComponentVariant | undefined,
    allComponents: ComponentDefinition[]
  ): NavigationContext
}

interface NavigationContext {
  canGoNext: boolean
  canGoPrevious: boolean
  currentPosition: string
  totalComponents: number
  currentComponentIndex: number
  currentVariantIndex: number
  totalVariants: number
}
```

## Technical Implementation Decisions

### Decision Record - State Management

**Decision**: Use React Context + useReducer for global state management  
**Context**: Need centralized state for theme, search, preview panel, and user preferences  
**Options**:

- Zustand (simpler API, smaller bundle)
- Redux Toolkit (powerful but complex)
- React Context (built-in, sufficient for scope)

**Rationale**: React Context provides sufficient state management for this application's scope without additional dependencies. The state is not complex enough to warrant external libraries.

**Impact**: Reduced bundle size, simpler architecture, easier maintenance  
**Review**: Re-evaluate if state complexity increases significantly

### Decision Record - Component Data Source

**Decision**: Static JSON files with TypeScript interfaces  
**Context**: Need comprehensive component data for all shadcn/ui components  
**Options**:

- API from shadcn/ui registry (dynamic but dependent)
- Static JSON (fast, reliable, controllable)
- Embedded in code (hard to maintain)

**Rationale**: Static JSON provides reliability, fast loading, and complete control over data structure while enabling easy updates.

**Impact**: Faster initial load, no external dependencies, manual updates required  
**Review**: Consider API integration if official registry provides suitable endpoints

### Decision Record - Animation Library

**Decision**: CSS-based animations with Tailwind utilities  
**Context**: Need smooth transitions for panel sliding and micro-interactions  
**Options**:

- Framer Motion (powerful but large bundle)
- CSS Transitions (lightweight, sufficient)
- React Spring (smooth animations, moderate size)

**Rationale**: CSS transitions provide sufficient animation capabilities for the required interactions while keeping bundle size minimal.

**Impact**: Smaller bundle, simpler implementation, good performance  
**Review**: Consider Framer Motion if complex animations are needed later

### Decision Record - User Preferences Persistence

**Decision**: Use localStorage with React Context for user preferences management  
**Context**: Need to persist user preferences (package manager, theme, view mode) across sessions  
**Options**:

- localStorage only (simple but no reactivity)
- Cookies (SSR-friendly but limited size)
- localStorage + Context (reactive and persistent)
- External state management (overkill for preferences)

**Rationale**: localStorage with React Context provides both persistence and reactivity while keeping the implementation simple and avoiding external dependencies.

**Impact**: Seamless user experience, preferences maintained across sessions, no external dependencies  
**Review**: Consider migration to cookies if SSR requirements change

### Decision Record - Component Navigation Strategy

**Decision**: Sequential navigation with variant-aware traversal  
**Context**: Need intuitive next/previous navigation through components and variants in preview panel  
**Options**:

- Flat component list (ignores variants)
- Variant-aware navigation (respects component hierarchy)
- Category-based navigation (groups by component type)

**Rationale**: Variant-aware navigation provides the most intuitive user experience by respecting the relationship between components and their variants.

**Impact**: Enhanced user experience, logical navigation flow, consistent with component hierarchy  
**Review**: Monitor user feedback for navigation patterns

## Performance Considerations

### Code Splitting Strategy

```typescript
// Route-based splitting (already handled by Next.js App Router)
const HomePage = lazy(() => import("./pages/HomePage"))

// Component-based splitting for large components
const PreviewPanel = lazy(() => import("./components/PreviewPanel"))
const CodeEditor = lazy(() => import("./components/CodeEditor"))

// Third-party library splitting
const SearchEngine = lazy(() => import("./utils/search"))
```

### Asset Optimization

```typescript
// Image optimization strategy
interface AssetOptimization {
  icons: "inline-svg" // Lucide icons as inline SVG
  componentPreviews: "lazy-loaded-webp" // Component thumbnails
  staticAssets: "next-image-optimization" // Next.js Image component
}

// Bundle optimization
interface BundleOptimization {
  treeshaking: true
  compression: "gzip + brotli"
  caching: "aggressive-static-assets"
  preloading: "critical-resources-only"
}
```

### Search Performance

```typescript
interface SearchOptimization {
  indexing: "pre-built-index" // Build search index at compile time
  debouncing: 300 // Milliseconds
  resultsLimit: 50 // Maximum results shown
  fuzzyThreshold: 0.6 // Fuse.js threshold
}
```

## Error Handling Strategy

### Error Boundaries

```typescript
interface ErrorBoundaryStrategy {
  levels: {
    app: "global-error-boundary"
    page: "page-level-boundary"
    component: "component-specific-boundary"
  }
  fallbacks: {
    app: "error-page"
    component: "error-message"
    network: "retry-button"
  }
}
```

### Error Types and Responses

| Error Type             | Detection                        | Response                          | Recovery                    |
| ---------------------- | -------------------------------- | --------------------------------- | --------------------------- |
| Component Load Failure | Try-catch around dynamic imports | Show error message + retry button | Reload component            |
| Search Engine Failure  | Search function error            | Show "Search unavailable"         | Fallback to basic filtering |
| Clipboard API Failure  | Navigator.clipboard error        | Show manual copy instructions     | Provide text selection      |
| Theme Toggle Failure   | Context state error              | Fallback to system theme          | Reset theme state           |
| Preview Panel Error    | Component render error           | Show error in panel               | Close panel option          |

## Security Considerations

### Content Security Policy

```typescript
interface CSPHeaders {
  "default-src": ["'self'"]
  "script-src": ["'self'", "'unsafe-inline'"] // For Next.js
  "style-src": ["'self'", "'unsafe-inline'"] // For Tailwind
  "img-src": ["'self'", "data:", "https:"]
  "connect-src": ["'self'"]
  "font-src": ["'self'"]
}
```

### Input Sanitization

```typescript
interface InputSanitization {
  search: "html-escape + length-limit"
  codeEditor: "syntax-validation + safe-eval"
  userPreferences: "type-validation + sanitization"
}
```

## Testing Strategy

### Unit Testing Coverage

```typescript
interface TestingStrategy {
  components: {
    coverage: ">90%"
    focus: "user-interactions + state-changes"
    tools: "Jest + React Testing Library"
  }
  utilities: {
    coverage: ">95%"
    focus: "edge-cases + error-handling"
    tools: "Jest + custom-test-utils"
  }
  integration: {
    coverage: "critical-user-flows"
    focus: "search + preview-panel + theme-switching"
    tools: "Playwright + Jest"
  }
}
```

### Performance Testing

```typescript
interface PerformanceTests {
  loadTime: "Lighthouse CI integration"
  searchPerformance: "Large dataset testing (1000+ components)"
  animationPerformance: "Frame rate monitoring"
  memoryLeaks: "Long-running session testing"
}
```

## Deployment Architecture

### Build Process

```typescript
interface BuildProcess {
  steps: [
    "TypeScript compilation",
    "Component data validation",
    "Asset optimization",
    "Bundle generation",
    "Static export",
    "Performance audit",
  ]
  outputs: {
    static: "optimized HTML/CSS/JS"
    assets: "compressed images + fonts"
    manifest: "service worker + PWA config"
  }
}
```

### Hosting Strategy

```typescript
interface HostingStrategy {
  platform: "Vercel" | "Netlify" | "GitHub Pages"
  cdn: "automatic-edge-deployment"
  caching: {
    static: "1-year"
    html: "1-hour"
    api: "no-cache"
  }
  monitoring: {
    performance: "Core Web Vitals tracking"
    errors: "Error boundary reporting"
    usage: "Analytics integration"
  }
}
```

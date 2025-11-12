/**
 * Data Adapter: Converts ComponentInfo to ComponentDefinition and ComponentData
 * This ensures clean separation between data source and UI expectations
 */

import {
  components as simpleComponents,
  type ComponentInfo,
} from "@/data/components-simple"
import { ComponentCategory, ComponentData, ComponentDefinition } from "@/types"

/**
 * Convert example name to URL-friendly variant ID
 * Prefer registryName if available, otherwise convert name to kebab-case
 *
 * This is the single source of truth for variant ID generation and should be used
 * throughout the application to ensure consistency
 */
export function createVariantId(example: ComponentInfo["examples"][0], componentId: string): string {
  // Use registry name if available (already kebab-case and semantic)
  if (example.registryName) {
    return example.registryName
  }

  // Fallback: convert example name to kebab-case
  const kebabName = example.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  // If name is generic like "default", use component prefix
  if (kebabName === 'default' || kebabName === 'demo') {
    return `${componentId}-default`
  }

  return kebabName
}

/**
 * Component dependencies mapping based on official shadcn/ui registry
 */
export const COMPONENT_DEPENDENCIES: Record<string, string[]> = {
  accordion: ["@radix-ui/react-accordion"],
  alert: [],
  "alert-dialog": ["@radix-ui/react-alert-dialog"],
  "aspect-ratio": ["@radix-ui/react-aspect-ratio"],
  avatar: ["@radix-ui/react-avatar"],
  badge: [],
  breadcrumb: [],
  button: ["@radix-ui/react-slot"],
  "button-group": [],
  calendar: ["react-day-picker@latest", "date-fns"],
  card: [],
  carousel: ["embla-carousel-react"],
  chart: ["recharts@2.15.4", "lucide-react"],
  checkbox: ["@radix-ui/react-checkbox"],
  collapsible: ["@radix-ui/react-collapsible"],
  command: ["cmdk"],
  "context-menu": ["@radix-ui/react-context-menu"],
  dialog: ["@radix-ui/react-dialog"],
  drawer: ["vaul"],
  "dropdown-menu": ["@radix-ui/react-dropdown-menu"],
  empty: [],
  field: [],
  form: [
    "@radix-ui/react-label",
    "@radix-ui/react-slot",
    "@hookform/resolvers",
    "zod",
    "react-hook-form",
  ],
  "hover-card": ["@radix-ui/react-hover-card"],
  input: [],
  "input-group": [],
  "input-otp": ["input-otp"],
  item: [],
  kbd: [],
  label: ["@radix-ui/react-label"],
  menubar: ["@radix-ui/react-menubar"],
  "native-select": [],
  "navigation-menu": ["@radix-ui/react-navigation-menu"],
  pagination: [],
  popover: ["@radix-ui/react-popover"],
  progress: ["@radix-ui/react-progress"],
  "radio-group": ["@radix-ui/react-radio-group"],
  resizable: ["react-resizable-panels"],
  "scroll-area": ["@radix-ui/react-scroll-area"],
  select: ["@radix-ui/react-select"],
  separator: ["@radix-ui/react-separator"],
  sheet: ["@radix-ui/react-dialog"],
  sidebar: ["@radix-ui/react-slot"],
  skeleton: [],
  slider: ["@radix-ui/react-slider"],
  sonner: ["sonner", "next-themes"],
  spinner: ["class-variance-authority"],
  switch: ["@radix-ui/react-switch"],
  table: [],
  tabs: ["@radix-ui/react-tabs"],
  textarea: [],
  toggle: ["@radix-ui/react-toggle"],
  "toggle-group": ["@radix-ui/react-toggle-group"],
  tooltip: ["@radix-ui/react-tooltip"],
}

/**
 * Cache for converted ComponentDefinition to avoid repeated conversions
 * Key: component ID, Value: ComponentDefinition
 */
const componentDefinitionCache = new Map<string, ComponentDefinition>()

/**
 * Convert ComponentInfo to ComponentDefinition for search engine
 *
 * Transforms simple component metadata into a comprehensive definition
 * suitable for the search engine and component display system.
 * Results are cached to improve performance on repeated conversions.
 *
 * @param comp - The source component information from components-simple.ts
 * @returns ComponentDefinition with enriched data including dependencies and variants
 */
export function convertToComponentDefinition(
  comp: ComponentInfo
): ComponentDefinition {
  // Check cache first
  const cached = componentDefinitionCache.get(comp.id)
  if (cached) {
    return cached
  }

  const dependencies = COMPONENT_DEPENDENCIES[comp.id] || []

  const componentDefinition: ComponentDefinition = {
    id: comp.id,
    name: comp.name,
    description: comp.description,
    category: comp.category as ComponentCategory,
    installation: {
      command: `npx shadcn@latest add ${comp.id}`,
      dependencies,
    },
    documentation: {
      url: comp.documentation?.url || "",
      officialDocs: comp.documentation?.officialDocs || "",
    },
    imports: {
      default: "",
      named: [],
    },
    variants: comp.examples.map((example) => ({
      id: createVariantId(example, comp.id),
      name: example.name,
      description: example.description,
      code: "", // Will be loaded via API
      props: [],
      preview: {
        interactive: true,
      },
      _registryFile: example.registryName,
    })),
    aliases: [],
    tags: [],
  }

  // Cache the result
  componentDefinitionCache.set(comp.id, componentDefinition)

  return componentDefinition
}

/**
 * Cache for converted ComponentData to avoid repeated conversions
 * Key: component ID, Value: ComponentData
 */
const componentDataCache = new Map<string, ComponentData>()

/**
 * Convert ComponentInfo to ComponentData for UI components
 *
 * Transforms component metadata into the format expected by UI components
 * such as ComponentCard. Includes dependency resolution and example formatting.
 * Results are cached to improve performance on repeated conversions.
 *
 * @param comp - The source component information
 * @returns ComponentData formatted for UI consumption
 */
export function convertToComponentData(comp: ComponentInfo): ComponentData {
  // Check cache first
  const cached = componentDataCache.get(comp.id)
  if (cached) {
    return cached
  }

  const dependencies = COMPONENT_DEPENDENCIES[comp.id] || []

  const componentData: ComponentData = {
    id: comp.id,
    name: comp.name,
    description: comp.description,
    category: comp.category,
    dependencies: dependencies.length > 0 ? dependencies : undefined,
    docsUrl: comp.documentation?.officialDocs || comp.documentation?.url,
    variants: comp.examples.map((example) => example.name),
    // Add original component for variant access
    _originalComponent: convertToComponentDefinition(comp),
  }

  // Cache the result
  componentDataCache.set(comp.id, componentData)

  return componentData
}

/**
 * Get all components as ComponentDefinition[] for search engine
 */
export function getAllComponentDefinitions(): ComponentDefinition[] {
  return simpleComponents.map(convertToComponentDefinition)
}

/**
 * Get all components as ComponentData[] for UI consumption
 *
 * @returns Array of ComponentData objects ready for display in UI components
 */
export function getAllComponentData(): ComponentData[] {
  return simpleComponents.map(convertToComponentData)
}

/**
 * Get component by ID from the simple components collection
 *
 * @param id - The component identifier
 * @returns ComponentInfo if found, undefined otherwise
 */
export function getComponentById(id: string): ComponentInfo | undefined {
  return simpleComponents.find((comp) => comp.id === id)
}

/**
 * Get component definition by ID with full search engine data
 *
 * @param id - The component identifier
 * @returns ComponentDefinition if found, undefined otherwise
 */
export function getComponentDefinitionById(
  id: string
): ComponentDefinition | undefined {
  const comp = getComponentById(id)
  return comp ? convertToComponentDefinition(comp) : undefined
}

/**
 * Get component data by ID
 */
export function getComponentDataById(id: string): ComponentData | undefined {
  const comp = getComponentById(id)
  return comp ? convertToComponentData(comp) : undefined
}

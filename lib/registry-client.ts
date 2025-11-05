/**
 * Client-side registry functions
 * These functions run in the browser and don't use Node.js APIs
 */

import { ComponentType } from "react"

import { registry, type RegistryItem } from "./registry"

/**
 * Dynamic component loader for live previews (client-side only)
 * Maps registry names to dynamic imports
 */
const registryComponents: Record<
  string,
  () => Promise<Record<string, unknown>>
> = {
  // Accordion
  "accordion-demo": () => import("@/registry/default/examples/accordion-demo"),

  // Alert
  "alert-demo": () => import("@/registry/default/examples/alert-demo"),
  "alert-destructive": () =>
    import("@/registry/default/examples/alert-destructive"),
  "alert-dialog-demo": () =>
    import("@/registry/default/examples/alert-dialog-demo"),

  // Aspect Ratio
  "aspect-ratio-demo": () =>
    import("@/registry/default/examples/aspect-ratio-demo"),

  // Avatar
  "avatar-demo": () => import("@/registry/default/examples/avatar-demo"),

  // Badge
  "badge-demo": () => import("@/registry/default/examples/badge-demo"),
  "badge-destructive": () =>
    import("@/registry/default/examples/badge-destructive"),
  "badge-outline": () => import("@/registry/default/examples/badge-outline"),
  "badge-secondary": () =>
    import("@/registry/default/examples/badge-secondary"),

  // Breadcrumb
  "breadcrumb-demo": () =>
    import("@/registry/default/examples/breadcrumb-demo"),
  "breadcrumb-dropdown": () =>
    import("@/registry/default/examples/breadcrumb-dropdown"),
  "breadcrumb-ellipsis": () =>
    import("@/registry/default/examples/breadcrumb-ellipsis"),
  "breadcrumb-link": () =>
    import("@/registry/default/examples/breadcrumb-link"),
  "breadcrumb-responsive": () =>
    import("@/registry/default/examples/breadcrumb-responsive"),
  "breadcrumb-separator": () =>
    import("@/registry/default/examples/breadcrumb-separator"),

  // Button
  "button-as-child": () =>
    import("@/registry/default/examples/button-as-child"),
  "button-demo": () => import("@/registry/default/examples/button-demo"),
  "button-destructive": () =>
    import("@/registry/default/examples/button-destructive"),
  "button-ghost": () => import("@/registry/default/examples/button-ghost"),
  "button-icon": () => import("@/registry/default/examples/button-icon"),
  "button-link": () => import("@/registry/default/examples/button-link"),
  "button-loading": () => import("@/registry/default/examples/button-loading"),
  "button-outline": () => import("@/registry/default/examples/button-outline"),
  "button-secondary": () =>
    import("@/registry/default/examples/button-secondary"),
  "button-with-icon": () =>
    import("@/registry/default/examples/button-with-icon"),

  // Button Group
  "button-group-demo": () => import("@/registry/default/examples/button-group-demo"),
  "button-group-dropdown": () => import("@/registry/default/examples/button-group-dropdown"),
  "button-group-input": () => import("@/registry/default/examples/button-group-input"),
  "button-group-input-group": () => import("@/registry/default/examples/button-group-input-group"),
  "button-group-nested": () => import("@/registry/default/examples/button-group-nested"),
  "button-group-orientation": () => import("@/registry/default/examples/button-group-orientation"),
  "button-group-popover": () => import("@/registry/default/examples/button-group-popover"),
  "button-group-select": () => import("@/registry/default/examples/button-group-select"),
  "button-group-separator": () => import("@/registry/default/examples/button-group-separator"),
  "button-group-size": () => import("@/registry/default/examples/button-group-size"),
  "button-group-split": () => import("@/registry/default/examples/button-group-split"),

  // Calendar
  'calendar-demo': () => import('@/registry/default/examples/calendar-demo'),
  'calendar-form': () => import('@/registry/default/examples/calendar-form'),
  'calendar-persian': () => import('@/registry/default/examples/calendar-persian'),
  'calendar-picker': () => import('@/registry/default/examples/calendar-picker'),
  'calendar-range': () => import('@/registry/default/examples/calendar-range'),
  'calendar-month-year': () => import('@/registry/default/examples/calendar-month-year'),

  // Card
  "card-demo": () => import("@/registry/default/examples/card-demo"),
  "card-with-form": () => import("@/registry/default/examples/card-with-form"),

  // Carousel
  'carousel-api': () => import('@/registry/default/examples/carousel-api'),
  'carousel-demo': () => import('@/registry/default/examples/carousel-demo'),
  'carousel-orientation': () => import('@/registry/default/examples/carousel-orientation'),
  'carousel-plugins': () => import('@/registry/default/examples/carousel-plugins'),
  'carousel-size': () => import('@/registry/default/examples/carousel-size'),
  'carousel-spacing': () => import('@/registry/default/examples/carousel-spacing'),

  // Chart
  "chart-bar-demo": () => import("@/registry/default/examples/chart-bar-demo"),
  "chart-bar-demo-axis": () =>
    import("@/registry/default/examples/chart-bar-demo-axis"),
  "chart-bar-demo-grid": () =>
    import("@/registry/default/examples/chart-bar-demo-grid"),
  "chart-bar-demo-legend": () =>
    import("@/registry/default/examples/chart-bar-demo-legend"),
  "chart-bar-demo-tooltip": () =>
    import("@/registry/default/examples/chart-bar-demo-tooltip"),
  "chart-tooltip-demo": () =>
    import("@/registry/default/examples/chart-tooltip-demo"),

  // Checkbox
  "checkbox-demo": () => import("@/registry/default/examples/checkbox-demo"),
  "checkbox-disabled": () =>
    import("@/registry/default/examples/checkbox-disabled"),
  "checkbox-form-multiple": () =>
    import("@/registry/default/examples/checkbox-form-multiple"),
  "checkbox-form-single": () =>
    import("@/registry/default/examples/checkbox-form-single"),
  "checkbox-with-text": () =>
    import("@/registry/default/examples/checkbox-with-text"),

  // Collapsible
  "collapsible-demo": () =>
    import("@/registry/default/examples/collapsible-demo"),

  // Combobox
  "combobox-demo": () => import("@/registry/default/examples/combobox-demo"),
  "combobox-dropdown-menu": () =>
    import("@/registry/default/examples/combobox-dropdown-menu"),
  "combobox-form": () => import("@/registry/default/examples/combobox-form"),
  "combobox-popover": () =>
    import("@/registry/default/examples/combobox-popover"),
  "combobox-responsive": () =>
    import("@/registry/default/examples/combobox-responsive"),

  // Command
  "command-demo": () => import("@/registry/default/examples/command-demo"),
  "command-dialog": () => import("@/registry/default/examples/command-dialog"),

  // Context Menu
  "context-menu-demo": () =>
    import("@/registry/default/examples/context-menu-demo"),

  // Data Table
  "data-table-demo": () =>
    import("@/registry/default/examples/data-table-demo"),

  // Date Picker
  "date-picker-demo": () =>
    import("@/registry/default/examples/date-picker-demo"),
  "date-picker-form": () =>
    import("@/registry/default/examples/date-picker-form"),
  "date-picker-with-presets": () =>
    import("@/registry/default/examples/date-picker-with-presets"),
  "date-picker-with-range": () =>
    import("@/registry/default/examples/date-picker-with-range"),

  // Dialog
  "dialog-close-button": () =>
    import("@/registry/default/examples/dialog-close-button"),
  "dialog-demo": () => import("@/registry/default/examples/dialog-demo"),

  // Drawer
  "drawer-demo": () => import("@/registry/default/examples/drawer-demo"),
  "drawer-dialog": () => import("@/registry/default/examples/drawer-dialog"),

  // Dropdown Menu
  "dropdown-menu-checkboxes": () =>
    import("@/registry/default/examples/dropdown-menu-checkboxes"),
  "dropdown-menu-demo": () =>
    import("@/registry/default/examples/dropdown-menu-demo"),
  "dropdown-menu-radio-group": () =>
    import("@/registry/default/examples/dropdown-menu-radio-group"),

  // Hover Card
  "hover-card-demo": () =>
    import("@/registry/default/examples/hover-card-demo"),

  // Input
  "input-demo": () => import("@/registry/default/examples/input-demo"),
  "input-disabled": () => import("@/registry/default/examples/input-disabled"),
  "input-file": () => import("@/registry/default/examples/input-file"),
  "input-form": () => import("@/registry/default/examples/input-form"),
  "input-otp-controlled": () =>
    import("@/registry/default/examples/input-otp-controlled"),
  "input-otp-demo": () => import("@/registry/default/examples/input-otp-demo"),
  "input-otp-form": () => import("@/registry/default/examples/input-otp-form"),
  "input-otp-pattern": () =>
    import("@/registry/default/examples/input-otp-pattern"),
  "input-otp-separator": () =>
    import("@/registry/default/examples/input-otp-separator"),
  "input-with-button": () =>
    import("@/registry/default/examples/input-with-button"),
  "input-with-label": () =>
    import("@/registry/default/examples/input-with-label"),
  "input-with-text": () =>
    import("@/registry/default/examples/input-with-text"),

  // Label
  "label-demo": () => import("@/registry/default/examples/label-demo"),

  // Menubar
  "menubar-demo": () => import("@/registry/default/examples/menubar-demo"),

  // Mode Toggle
  "mode-toggle": () => import("@/registry/default/examples/mode-toggle"),

  // Navigation Menu
  "navigation-menu-demo": () =>
    import("@/registry/default/examples/navigation-menu-demo"),

  // Pagination
  "pagination-demo": () =>
    import("@/registry/default/examples/pagination-demo"),

  // Popover
  "popover-demo": () => import("@/registry/default/examples/popover-demo"),

  // Progress
  "progress-demo": () => import("@/registry/default/examples/progress-demo"),

  // Radio Group
  "radio-group-demo": () =>
    import("@/registry/default/examples/radio-group-demo"),
  "radio-group-form": () =>
    import("@/registry/default/examples/radio-group-form"),

  // Resizable
  "resizable-demo": () => import("@/registry/default/examples/resizable-demo"),
  "resizable-demo-with-handle": () =>
    import("@/registry/default/examples/resizable-demo-with-handle"),
  "resizable-handle": () =>
    import("@/registry/default/examples/resizable-handle"),
  "resizable-vertical": () =>
    import("@/registry/default/examples/resizable-vertical"),

  // Scroll Area
  "scroll-area-demo": () =>
    import("@/registry/default/examples/scroll-area-demo"),
  "scroll-area-horizontal-demo": () =>
    import("@/registry/default/examples/scroll-area-horizontal-demo"),

  // Select
  "select-demo": () => import("@/registry/default/examples/select-demo"),
  "select-form": () => import("@/registry/default/examples/select-form"),
  "select-scrollable": () =>
    import("@/registry/default/examples/select-scrollable"),

  // Separator
  "separator-demo": () => import("@/registry/default/examples/separator-demo"),

  // Empty
  "empty-demo": () => import("@/registry/default/examples/empty-demo"),
  "empty-avatar": () => import("@/registry/default/examples/empty-avatar"),
  "empty-avatar-group": () => import("@/registry/default/examples/empty-avatar-group"),
  "empty-background": () => import("@/registry/default/examples/empty-background"),
  "empty-icon": () => import("@/registry/default/examples/empty-icon"),
  "empty-input-group": () => import("@/registry/default/examples/empty-input-group"),
  "empty-outline": () => import("@/registry/default/examples/empty-outline"),

  // Field
  "field-demo": () => import("@/registry/default/examples/field-demo"),
  "field-fieldset": () => import("@/registry/default/examples/field-fieldset"),
  "field-input": () => import("@/registry/default/examples/field-input"),
  "field-select": () => import("@/registry/default/examples/field-select"),
  "field-textarea": () => import("@/registry/default/examples/field-textarea"),
  "field-radio": () => import("@/registry/default/examples/field-radio"),
  "field-checkbox": () => import("@/registry/default/examples/field-checkbox"),
  "field-switch": () => import("@/registry/default/examples/field-switch"),
  "field-slider": () => import("@/registry/default/examples/field-slider"),
  "field-choice-card": () => import("@/registry/default/examples/field-choice-card"),
  "field-group": () => import("@/registry/default/examples/field-group"),
  "field-responsive": () => import("@/registry/default/examples/field-responsive"),

  // Input Group
  "input-group-demo": () => import("@/registry/default/examples/input-group-demo"),
  "input-group-button": () => import("@/registry/default/examples/input-group-button"),
  "input-group-button-group": () => import("@/registry/default/examples/input-group-button-group"),
  "input-group-custom": () => import("@/registry/default/examples/input-group-custom"),
  "input-group-dropdown": () => import("@/registry/default/examples/input-group-dropdown"),
  "input-group-icon": () => import("@/registry/default/examples/input-group-icon"),
  "input-group-label": () => import("@/registry/default/examples/input-group-label"),
  "input-group-text": () => import("@/registry/default/examples/input-group-text"),
  "input-group-textarea": () => import("@/registry/default/examples/input-group-textarea"),
  "input-group-spinner": () => import("@/registry/default/examples/input-group-spinner"),
  "input-group-tooltip": () => import("@/registry/default/examples/input-group-tooltip"),

  // Item
  "item-demo": () => import("@/registry/default/examples/item-demo"),
  "item-avatar": () => import("@/registry/default/examples/item-avatar"),
  "item-dropdown": () => import("@/registry/default/examples/item-dropdown"),
  "item-group": () => import("@/registry/default/examples/item-group"),
  "item-header": () => import("@/registry/default/examples/item-header"),
  "item-icon": () => import("@/registry/default/examples/item-icon"),
  "item-image": () => import("@/registry/default/examples/item-image"),
  "item-link": () => import("@/registry/default/examples/item-link"),
  "item-size": () => import("@/registry/default/examples/item-size"),
  "item-variant": () => import("@/registry/default/examples/item-variant"),

  // Kbd
  "kbd-demo": () => import("@/registry/default/examples/kbd-demo"),
  "kbd-button": () => import("@/registry/default/examples/kbd-button"),
  "kbd-group": () => import("@/registry/default/examples/kbd-group"),
  "kbd-input-group": () => import("@/registry/default/examples/kbd-input-group"),
  "kbd-tooltip": () => import("@/registry/default/examples/kbd-tooltip"),

  // Native Select
  "native-select-demo": () => import("@/registry/default/examples/native-select-demo"),
  "native-select-disabled": () => import("@/registry/default/examples/native-select-disabled"),
  "native-select-groups": () => import("@/registry/default/examples/native-select-groups"),
  "native-select-invalid": () => import("@/registry/default/examples/native-select-invalid"),

  // Spinner
  "spinner-demo": () => import("@/registry/default/examples/spinner-demo"),
  "spinner-basic": () => import("@/registry/default/examples/spinner-basic"),
  "spinner-badge": () => import("@/registry/default/examples/spinner-badge"),
  "spinner-button": () => import("@/registry/default/examples/spinner-button"),
  "spinner-color": () => import("@/registry/default/examples/spinner-color"),
  "spinner-custom": () => import("@/registry/default/examples/spinner-custom"),
  "spinner-empty": () => import("@/registry/default/examples/spinner-empty"),
  "spinner-input-group": () => import("@/registry/default/examples/spinner-input-group"),
  "spinner-item": () => import("@/registry/default/examples/spinner-item"),
  "spinner-size": () => import("@/registry/default/examples/spinner-size"),

  // Sheet
  "sheet-demo": () => import("@/registry/default/examples/sheet-demo"),
  "sheet-side": () => import("@/registry/default/examples/sheet-side"),

  // Skeleton
  "skeleton-card": () => import("@/registry/default/examples/skeleton-card"),
  "skeleton-demo": () => import("@/registry/default/examples/skeleton-demo"),

  // Slider
  "slider-demo": () => import("@/registry/default/examples/slider-demo"),

  // Sonner
  "sonner-demo": () => import("@/registry/default/examples/sonner-demo"),

  // Switch
  "switch-demo": () => import("@/registry/default/examples/switch-demo"),
  "switch-form": () => import("@/registry/default/examples/switch-form"),

  // Table
  "table-demo": () => import("@/registry/default/examples/table-demo"),

  // Tabs
  "tabs-demo": () => import("@/registry/default/examples/tabs-demo"),

  // Textarea
  "textarea-demo": () => import("@/registry/default/examples/textarea-demo"),
  "textarea-disabled": () =>
    import("@/registry/default/examples/textarea-disabled"),
  "textarea-form": () => import("@/registry/default/examples/textarea-form"),
  "textarea-with-button": () =>
    import("@/registry/default/examples/textarea-with-button"),
  "textarea-with-label": () =>
    import("@/registry/default/examples/textarea-with-label"),
  "textarea-with-text": () =>
    import("@/registry/default/examples/textarea-with-text"),

  // Toggle
  "toggle-demo": () => import("@/registry/default/examples/toggle-demo"),
  "toggle-disabled": () =>
    import("@/registry/default/examples/toggle-disabled"),
  "toggle-group-demo": () =>
    import("@/registry/default/examples/toggle-group-demo"),
  "toggle-group-disabled": () =>
    import("@/registry/default/examples/toggle-group-disabled"),
  "toggle-group-lg": () =>
    import("@/registry/default/examples/toggle-group-lg"),
  "toggle-group-outline": () =>
    import("@/registry/default/examples/toggle-group-outline"),
  "toggle-group-single": () =>
    import("@/registry/default/examples/toggle-group-single"),
  "toggle-group-sm": () =>
    import("@/registry/default/examples/toggle-group-sm"),
  "toggle-lg": () => import("@/registry/default/examples/toggle-lg"),
  "toggle-outline": () => import("@/registry/default/examples/toggle-outline"),
  "toggle-sm": () => import("@/registry/default/examples/toggle-sm"),
  "toggle-with-text": () =>
    import("@/registry/default/examples/toggle-with-text"),

  // Tooltip
  "tooltip-demo": () => import("@/registry/default/examples/tooltip-demo"),

  // Typography
  "typography-blockquote": () =>
    import("@/registry/default/examples/typography-blockquote"),
  "typography-demo": () =>
    import("@/registry/default/examples/typography-demo"),
  "typography-h1": () => import("@/registry/default/examples/typography-h1"),
  "typography-h2": () => import("@/registry/default/examples/typography-h2"),
  "typography-h3": () => import("@/registry/default/examples/typography-h3"),
  "typography-h4": () => import("@/registry/default/examples/typography-h4"),
  "typography-inline-code": () =>
    import("@/registry/default/examples/typography-inline-code"),
  "typography-large": () =>
    import("@/registry/default/examples/typography-large"),
  "typography-lead": () =>
    import("@/registry/default/examples/typography-lead"),
  "typography-list": () =>
    import("@/registry/default/examples/typography-list"),
  "typography-muted": () =>
    import("@/registry/default/examples/typography-muted"),
  "typography-p": () => import("@/registry/default/examples/typography-p"),
  "typography-small": () =>
    import("@/registry/default/examples/typography-small"),
  "typography-table": () =>
    import("@/registry/default/examples/typography-table"),
}

/**
 * Check if a component exists in the registry
 */
export function hasRegistryComponent(name: string): boolean {
  return name in registryComponents
}

/**
 * Load a component dynamically for live preview (client-side only)
 */
export async function loadRegistryComponent(
  name: string
): Promise<ComponentType> {
  const loader = registryComponents[name]
  if (!loader) {
    throw new Error(`Component ${name} not found in registry`)
  }

  try {
    const componentModule = await loader()
    return (componentModule.default ||
      componentModule[Object.keys(componentModule)[0]]) as ComponentType
  } catch (error) {
    // Component loading errors disabled for production
    // console.error(`Error loading component ${name}:`, error)
    throw error
  }
}

/**
 * Get all available registry items (metadata only)
 */
export function getAvailableComponents(): RegistryItem[] {
  return Object.values(registry)
}

/**
 * Get registry item metadata (without file content)
 */
export function getRegistryItem(name: string): RegistryItem | null {
  return registry[name] || null
}

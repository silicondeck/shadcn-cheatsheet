/**
 * Registry for shadcn/ui components - Official Pattern
 * Complete registry with all 144+ components following shadcn/ui official repo structure
 */

export interface RegistryItem {
  name: string
  description: string
  dependencies?: string[]
  registryDependencies?: string[]
  files: string[]
  source?: string
  category?: string
  subcategory?: string
}

export interface Registry {
  [key: string]: RegistryItem
}

/**
 * Complete shadcn/ui component registry
 * This follows the exact same pattern as the official repo with all available components
 */
export const registry: Registry = {
  // Accordion
  "accordion-demo": {
    name: "accordion-demo",
    description: "An accordion demo.",
    files: ["registry/default/examples/accordion-demo.tsx"],
  },

  // Alert
  "alert-demo": {
    name: "alert-demo",
    description: "An alert demo.",
    files: ["registry/default/examples/alert-demo.tsx"],
  },
  "alert-destructive": {
    name: "alert-destructive",
    description: "A destructive alert.",
    files: ["registry/default/examples/alert-destructive.tsx"],
  },

  // Alert Dialog
  "alert-dialog-demo": {
    name: "alert-dialog-demo",
    description: "An alert dialog demo.",
    files: ["registry/default/examples/alert-dialog-demo.tsx"],
  },

  // Aspect Ratio
  "aspect-ratio-demo": {
    name: "aspect-ratio-demo",
    description: "An aspect ratio demo.",
    files: ["registry/default/examples/aspect-ratio-demo.tsx"],
  },

  // Avatar
  "avatar-demo": {
    name: "avatar-demo",
    description: "An avatar demo.",
    files: ["registry/default/examples/avatar-demo.tsx"],
  },

  // Badge
  "badge-demo": {
    name: "badge-demo",
    description: "A badge demo.",
    files: ["registry/default/examples/badge-demo.tsx"],
  },
  "badge-destructive": {
    name: "badge-destructive",
    description: "A destructive badge.",
    files: ["registry/default/examples/badge-destructive.tsx"],
  },
  "badge-outline": {
    name: "badge-outline",
    description: "An outline badge.",
    files: ["registry/default/examples/badge-outline.tsx"],
  },
  "badge-secondary": {
    name: "badge-secondary",
    description: "A secondary badge.",
    files: ["registry/default/examples/badge-secondary.tsx"],
  },

  // Breadcrumb
  "breadcrumb-demo": {
    name: "breadcrumb-demo",
    description: "A breadcrumb demo.",
    files: ["registry/default/examples/breadcrumb-demo.tsx"],
  },
  "breadcrumb-dropdown": {
    name: "breadcrumb-dropdown",
    description: "A breadcrumb with dropdown.",
    files: ["registry/default/examples/breadcrumb-dropdown.tsx"],
  },
  "breadcrumb-ellipsis": {
    name: "breadcrumb-ellipsis",
    description: "A breadcrumb with ellipsis.",
    files: ["registry/default/examples/breadcrumb-ellipsis.tsx"],
  },
  "breadcrumb-link": {
    name: "breadcrumb-link",
    description: "A breadcrumb link demo.",
    files: ["registry/default/examples/breadcrumb-link.tsx"],
  },
  "breadcrumb-responsive": {
    name: "breadcrumb-responsive",
    description: "A responsive breadcrumb.",
    files: ["registry/default/examples/breadcrumb-responsive.tsx"],
  },
  "breadcrumb-separator": {
    name: "breadcrumb-separator",
    description: "A breadcrumb with separator.",
    files: ["registry/default/examples/breadcrumb-separator.tsx"],
  },

  // Button
  "button-as-child": {
    name: "button-as-child",
    description: "A button as child demo.",
    files: ["registry/default/examples/button-as-child.tsx"],
  },
  "button-demo": {
    name: "button-demo",
    description: "A button demo.",
    files: ["registry/default/examples/button-demo.tsx"],
  },
  "button-destructive": {
    name: "button-destructive",
    description: "A destructive button.",
    files: ["registry/default/examples/button-destructive.tsx"],
  },
  "button-ghost": {
    name: "button-ghost",
    description: "A ghost button.",
    files: ["registry/default/examples/button-ghost.tsx"],
  },
  "button-icon": {
    name: "button-icon",
    description: "A button with icon.",
    files: ["registry/default/examples/button-icon.tsx"],
  },
  "button-link": {
    name: "button-link",
    description: "A link button.",
    files: ["registry/default/examples/button-link.tsx"],
  },
  "button-loading": {
    name: "button-loading",
    description: "A loading button.",
    files: ["registry/default/examples/button-loading.tsx"],
  },
  "button-outline": {
    name: "button-outline",
    description: "An outline button.",
    files: ["registry/default/examples/button-outline.tsx"],
  },
  "button-secondary": {
    name: "button-secondary",
    description: "A secondary button.",
    files: ["registry/default/examples/button-secondary.tsx"],
  },
  "button-with-icon": {
    name: "button-with-icon",
    description: "A button with icon.",
    files: ["registry/default/examples/button-with-icon.tsx"],
  },

  // Calendar
  "calendar-demo": {
    name: "calendar-demo",
    description: "A calendar demo.",
    files: ["registry/default/examples/calendar-demo.tsx"],
  },
  "calendar-form": {
    name: "calendar-form",
    description: "A calendar form demo.",
    files: ["registry/default/examples/calendar-form.tsx"],
  },
  "calendar-persian": {
    name: "calendar-persian",
    description: "A Persian calendar demo.",
    files: ["registry/default/examples/calendar-persian.tsx"],
  },
  "calendar-picker": {
    name: "calendar-picker",
    description: "A calendar date picker.",
    files: ["registry/default/examples/calendar-picker.tsx"],
  },
  "calendar-range": {
    name: "calendar-range",
    description: "A calendar with date range selection.",
    files: ["registry/default/examples/calendar-range.tsx"],
  },
  "calendar-month-year": {
    name: "calendar-month-year",
    description: "A calendar with month and year dropdowns.",
    files: ["registry/default/examples/calendar-month-year.tsx"],
  },


  // Card
  "card-demo": {
    name: "card-demo",
    description: "A card demo.",
    files: ["registry/default/examples/card-demo.tsx"],
  },
  "card-with-form": {
    name: "card-with-form",
    description: "A card with form.",
    files: ["registry/default/examples/card-with-form.tsx"],
  },

  // Carousel
  "carousel-demo": {
    name: "carousel-demo",
    description: "A carousel demo.",
    files: ["registry/default/examples/carousel-demo.tsx"],
  },
  "carousel-api": {
    name: "carousel-api",
    description: "A carousel API demo.",
    files: ["registry/default/examples/carousel-api.tsx"],
  },
  "carousel-orientation": {
    name: "carousel-orientation",
    description: "A carousel orientation demo.",
    files: ["registry/default/examples/carousel-orientation.tsx"],
  },
  "carousel-plugins": {
    name: "carousel-plugins",
    description: "A carousel plugins demo.",
    files: ["registry/default/examples/carousel-plugins.tsx"],
  },
  "carousel-size": {
    name: "carousel-size",
    description: "A carousel size demo.",
    files: ["registry/default/examples/carousel-size.tsx"],
  },
  "carousel-spacing": {
    name: "carousel-spacing",
    description: "A carousel spacing demo.",
    files: ["registry/default/examples/carousel-spacing.tsx"],
  },

  // Checkbox
  "checkbox-demo": {
    name: "checkbox-demo",
    description: "A checkbox demo.",
    files: ["registry/default/examples/checkbox-demo.tsx"],
  },
  "checkbox-disabled": {
    name: "checkbox-disabled",
    description: "A disabled checkbox.",
    files: ["registry/default/examples/checkbox-disabled.tsx"],
  },
  "checkbox-form-multiple": {
    name: "checkbox-form-multiple",
    description: "Multiple checkboxes in form.",
    files: ["registry/default/examples/checkbox-form-multiple.tsx"],
  },
  "checkbox-form-single": {
    name: "checkbox-form-single",
    description: "Single checkbox in form.",
    files: ["registry/default/examples/checkbox-form-single.tsx"],
  },
  "checkbox-with-text": {
    name: "checkbox-with-text",
    description: "A checkbox with text.",
    files: ["registry/default/examples/checkbox-with-text.tsx"],
  },

  // Collapsible
  "collapsible-demo": {
    name: "collapsible-demo",
    description: "A collapsible demo.",
    files: ["registry/default/examples/collapsible-demo.tsx"],
  },

  // Combobox
  "combobox-demo": {
    name: "combobox-demo",
    description: "A combobox demo.",
    files: ["registry/default/examples/combobox-demo.tsx"],
  },
  "combobox-dropdown-menu": {
    name: "combobox-dropdown-menu",
    description: "A combobox dropdown menu.",
    files: ["registry/default/examples/combobox-dropdown-menu.tsx"],
  },
  "combobox-form": {
    name: "combobox-form",
    description: "A combobox in form.",
    files: ["registry/default/examples/combobox-form.tsx"],
  },
  "combobox-popover": {
    name: "combobox-popover",
    description: "A combobox popover.",
    files: ["registry/default/examples/combobox-popover.tsx"],
  },
  "combobox-responsive": {
    name: "combobox-responsive",
    description: "A responsive combobox.",
    files: ["registry/default/examples/combobox-responsive.tsx"],
  },

  // Command
  "command-demo": {
    name: "command-demo",
    description: "A command demo.",
    files: ["registry/default/examples/command-demo.tsx"],
  },
  "command-dialog": {
    name: "command-dialog",
    description: "A command dialog.",
    files: ["registry/default/examples/command-dialog.tsx"],
  },

  // Context Menu
  "context-menu-demo": {
    name: "context-menu-demo",
    description: "A context menu demo.",
    files: ["registry/default/examples/context-menu-demo.tsx"],
  },

  // Data Table
  "data-table-demo": {
    name: "data-table-demo",
    description: "A data table demo.",
    files: ["registry/default/examples/data-table-demo.tsx"],
  },

  // Date Picker
  "date-picker-demo": {
    name: "date-picker-demo",
    description: "A date picker demo.",
    files: ["registry/default/examples/date-picker-demo.tsx"],
  },
  "date-picker-form": {
    name: "date-picker-form",
    description: "A date picker in form.",
    files: ["registry/default/examples/date-picker-form.tsx"],
  },
  "date-picker-with-presets": {
    name: "date-picker-with-presets",
    description: "A date picker with presets.",
    files: ["registry/default/examples/date-picker-with-presets.tsx"],
  },
  "date-picker-with-range": {
    name: "date-picker-with-range",
    description: "A date picker with range.",
    files: ["registry/default/examples/date-picker-with-range.tsx"],
  },

  // Dialog
  "dialog-close-button": {
    name: "dialog-close-button",
    description: "A dialog with close button.",
    files: ["registry/default/examples/dialog-close-button.tsx"],
  },
  "dialog-demo": {
    name: "dialog-demo",
    description: "A dialog demo.",
    files: ["registry/default/examples/dialog-demo.tsx"],
  },

  // Drawer
  "drawer-demo": {
    name: "drawer-demo",
    description: "A drawer demo.",
    files: ["registry/default/examples/drawer-demo.tsx"],
  },
  "drawer-dialog": {
    name: "drawer-dialog",
    description: "A drawer dialog.",
    files: ["registry/default/examples/drawer-dialog.tsx"],
  },

  // Dropdown Menu
  "dropdown-menu-checkboxes": {
    name: "dropdown-menu-checkboxes",
    description: "A dropdown menu with checkboxes.",
    files: ["registry/default/examples/dropdown-menu-checkboxes.tsx"],
  },
  "dropdown-menu-demo": {
    name: "dropdown-menu-demo",
    description: "A dropdown menu demo.",
    files: ["registry/default/examples/dropdown-menu-demo.tsx"],
  },
  "dropdown-menu-radio-group": {
    name: "dropdown-menu-radio-group",
    description: "A dropdown menu with radio group.",
    files: ["registry/default/examples/dropdown-menu-radio-group.tsx"],
  },

  // Form
  "form-demo": {
    name: "form-demo",
    description: "A form demo.",
    files: ["registry/default/examples/form-demo.tsx"],
  },

  // Hover Card
  "hover-card-demo": {
    name: "hover-card-demo",
    description: "A hover card demo.",
    files: ["registry/default/examples/hover-card-demo.tsx"],
  },

  // Input
  "input-demo": {
    name: "input-demo",
    description: "An input demo.",
    files: ["registry/default/examples/input-demo.tsx"],
  },
  "input-disabled": {
    name: "input-disabled",
    description: "A disabled input.",
    files: ["registry/default/examples/input-disabled.tsx"],
  },
  "input-file": {
    name: "input-file",
    description: "A file input.",
    files: ["registry/default/examples/input-file.tsx"],
  },
  "input-form": {
    name: "input-form",
    description: "An input in form.",
    files: ["registry/default/examples/input-form.tsx"],
  },
  "input-with-button": {
    name: "input-with-button",
    description: "An input with button.",
    files: ["registry/default/examples/input-with-button.tsx"],
  },
  "input-with-label": {
    name: "input-with-label",
    description: "An input with label.",
    files: ["registry/default/examples/input-with-label.tsx"],
  },
  "input-with-text": {
    name: "input-with-text",
    description: "An input with text.",
    files: ["registry/default/examples/input-with-text.tsx"],
  },

  // Input OTP
  "input-otp-controlled": {
    name: "input-otp-controlled",
    description: "A controlled input OTP.",
    files: ["registry/default/examples/input-otp-controlled.tsx"],
  },
  "input-otp-demo": {
    name: "input-otp-demo",
    description: "An input OTP demo.",
    files: ["registry/default/examples/input-otp-demo.tsx"],
  },
  "input-otp-pattern": {
    name: "input-otp-pattern",
    description: "An input OTP with pattern.",
    files: ["registry/default/examples/input-otp-pattern.tsx"],
  },
  "input-otp-separator": {
    name: "input-otp-separator",
    description: "An input OTP with separator.",
    files: ["registry/default/examples/input-otp-separator.tsx"],
  },

  // Label
  "label-demo": {
    name: "label-demo",
    description: "A label demo.",
    files: ["registry/default/examples/label-demo.tsx"],
  },

  // Menubar
  "menubar-demo": {
    name: "menubar-demo",
    description: "A menubar demo.",
    files: ["registry/default/examples/menubar-demo.tsx"],
  },

  // Navigation Menu
  "navigation-menu-demo": {
    name: "navigation-menu-demo",
    description: "A navigation menu demo.",
    files: ["registry/default/examples/navigation-menu-demo.tsx"],
  },

  // Pagination
  "pagination-demo": {
    name: "pagination-demo",
    description: "A pagination demo.",
    files: ["registry/default/examples/pagination-demo.tsx"],
  },

  // Popover
  "popover-demo": {
    name: "popover-demo",
    description: "A popover demo.",
    files: ["registry/default/examples/popover-demo.tsx"],
  },

  // Progress
  "progress-demo": {
    name: "progress-demo",
    description: "A progress demo.",
    files: ["registry/default/examples/progress-demo.tsx"],
  },

  // Radio Group
  "radio-group-demo": {
    name: "radio-group-demo",
    description: "A radio group demo.",
    files: ["registry/default/examples/radio-group-demo.tsx"],
  },
  "radio-group-form": {
    name: "radio-group-form",
    description: "A radio group in form.",
    files: ["registry/default/examples/radio-group-form.tsx"],
  },

  // Resizable
  "resizable-demo": {
    name: "resizable-demo",
    description: "A resizable demo.",
    files: ["registry/default/examples/resizable-demo.tsx"],
  },
  "resizable-demo-with-handle": {
    name: "resizable-demo-with-handle",
    description: "A resizable demo with handle.",
    files: ["registry/default/examples/resizable-demo-with-handle.tsx"],
  },
  "resizable-vertical": {
    name: "resizable-vertical",
    description: "A vertical resizable demo.",
    files: ["registry/default/examples/resizable-vertical.tsx"],
  },

  // Scroll Area
  "scroll-area-demo": {
    name: "scroll-area-demo",
    description: "A scroll area demo.",
    files: ["registry/default/examples/scroll-area-demo.tsx"],
  },
  "scroll-area-horizontal-demo": {
    name: "scroll-area-horizontal-demo",
    description: "A horizontal scroll area demo.",
    files: ["registry/default/examples/scroll-area-horizontal-demo.tsx"],
  },

  // Select
  "select-demo": {
    name: "select-demo",
    description: "A select demo.",
    files: ["registry/default/examples/select-demo.tsx"],
  },
  "select-form": {
    name: "select-form",
    description: "A select in form.",
    files: ["registry/default/examples/select-form.tsx"],
  },
  "select-scrollable": {
    name: "select-scrollable",
    description: "A scrollable select.",
    files: ["registry/default/examples/select-scrollable.tsx"],
  },

  // Separator
  "separator-demo": {
    name: "separator-demo",
    description: "A separator demo.",
    files: ["registry/default/examples/separator-demo.tsx"],
  },

  // Sheet
  "sheet-demo": {
    name: "sheet-demo",
    description: "A sheet demo.",
    files: ["registry/default/examples/sheet-demo.tsx"],
  },
  "sheet-side": {
    name: "sheet-side",
    description: "A sheet from side.",
    files: ["registry/default/examples/sheet-side.tsx"],
  },

  // Skeleton
  "skeleton-card": {
    name: "skeleton-card",
    description: "A skeleton card.",
    files: ["registry/default/examples/skeleton-card.tsx"],
  },
  "skeleton-demo": {
    name: "skeleton-demo",
    description: "A skeleton demo.",
    files: ["registry/default/examples/skeleton-demo.tsx"],
  },

  // Slider
  "slider-demo": {
    name: "slider-demo",
    description: "A slider demo.",
    files: ["registry/default/examples/slider-demo.tsx"],
  },

  // Sonner
  "sonner-demo": {
    name: "sonner-demo",
    description: "A sonner demo.",
    files: ["registry/default/examples/sonner-demo.tsx"],
  },

  // Switch
  "switch-demo": {
    name: "switch-demo",
    description: "A switch demo.",
    files: ["registry/default/examples/switch-demo.tsx"],
  },
  "switch-form": {
    name: "switch-form",
    description: "A switch in form.",
    files: ["registry/default/examples/switch-form.tsx"],
  },

  // Table
  "table-demo": {
    name: "table-demo",
    description: "A table demo.",
    files: ["registry/default/examples/table-demo.tsx"],
  },

  // Tabs
  "tabs-demo": {
    name: "tabs-demo",
    description: "A tabs demo.",
    files: ["registry/default/examples/tabs-demo.tsx"],
  },

  // Textarea
  "textarea-demo": {
    name: "textarea-demo",
    description: "A textarea demo.",
    files: ["registry/default/examples/textarea-demo.tsx"],
  },
  "textarea-disabled": {
    name: "textarea-disabled",
    description: "A disabled textarea.",
    files: ["registry/default/examples/textarea-disabled.tsx"],
  },
  "textarea-form": {
    name: "textarea-form",
    description: "A textarea in form.",
    files: ["registry/default/examples/textarea-form.tsx"],
  },
  "textarea-with-button": {
    name: "textarea-with-button",
    description: "A textarea with button.",
    files: ["registry/default/examples/textarea-with-button.tsx"],
  },
  "textarea-with-label": {
    name: "textarea-with-label",
    description: "A textarea with label.",
    files: ["registry/default/examples/textarea-with-label.tsx"],
  },
  "textarea-with-text": {
    name: "textarea-with-text",
    description: "A textarea with text.",
    files: ["registry/default/examples/textarea-with-text.tsx"],
  },

  // Toast
  "toast-demo": {
    name: "toast-demo",
    description: "A toast demo.",
    files: ["registry/default/examples/toast-demo.tsx"],
  },
  "toast-destructive": {
    name: "toast-destructive",
    description: "A destructive toast.",
    files: ["registry/default/examples/toast-destructive.tsx"],
  },
  "toast-simple": {
    name: "toast-simple",
    description: "A simple toast.",
    files: ["registry/default/examples/toast-simple.tsx"],
  },
  "toast-with-action": {
    name: "toast-with-action",
    description: "A toast with action.",
    files: ["registry/default/examples/toast-with-action.tsx"],
  },
  "toast-with-title": {
    name: "toast-with-title",
    description: "A toast with title.",
    files: ["registry/default/examples/toast-with-title.tsx"],
  },

  // Toggle
  "toggle-demo": {
    name: "toggle-demo",
    description: "A toggle demo.",
    files: ["registry/default/examples/toggle-demo.tsx"],
  },
  "toggle-disabled": {
    name: "toggle-disabled",
    description: "A disabled toggle.",
    files: ["registry/default/examples/toggle-disabled.tsx"],
  },
  "toggle-lg": {
    name: "toggle-lg",
    description: "A large toggle.",
    files: ["registry/default/examples/toggle-lg.tsx"],
  },
  "toggle-outline": {
    name: "toggle-outline",
    description: "An outline toggle.",
    files: ["registry/default/examples/toggle-outline.tsx"],
  },
  "toggle-sm": {
    name: "toggle-sm",
    description: "A small toggle.",
    files: ["registry/default/examples/toggle-sm.tsx"],
  },
  "toggle-with-text": {
    name: "toggle-with-text",
    description: "A toggle with text.",
    files: ["registry/default/examples/toggle-with-text.tsx"],
  },

  // Toggle Group
  "toggle-group-demo": {
    name: "toggle-group-demo",
    description: "A toggle group demo.",
    files: ["registry/default/examples/toggle-group-demo.tsx"],
  },
  "toggle-group-disabled": {
    name: "toggle-group-disabled",
    description: "A disabled toggle group.",
    files: ["registry/default/examples/toggle-group-disabled.tsx"],
  },
  "toggle-group-lg": {
    name: "toggle-group-lg",
    description: "A large toggle group.",
    files: ["registry/default/examples/toggle-group-lg.tsx"],
  },
  "toggle-group-outline": {
    name: "toggle-group-outline",
    description: "An outline toggle group.",
    files: ["registry/default/examples/toggle-group-outline.tsx"],
  },
  "toggle-group-single": {
    name: "toggle-group-single",
    description: "A single toggle group.",
    files: ["registry/default/examples/toggle-group-single.tsx"],
  },
  "toggle-group-sm": {
    name: "toggle-group-sm",
    description: "A small toggle group.",
    files: ["registry/default/examples/toggle-group-sm.tsx"],
  },

  // Tooltip
  "tooltip-demo": {
    name: "tooltip-demo",
    description: "A tooltip demo.",
    files: ["registry/default/examples/tooltip-demo.tsx"],
  },

  // Typography
  "typography-blockquote": {
    name: "typography-blockquote",
    description: "Typography blockquote demo.",
    files: ["registry/default/examples/typography-blockquote.tsx"],
  },
  "typography-demo": {
    name: "typography-demo",
    description: "A typography demo.",
    files: ["registry/default/examples/typography-demo.tsx"],
  },
  "typography-h1": {
    name: "typography-h1",
    description: "Typography H1 demo.",
    files: ["registry/default/examples/typography-h1.tsx"],
  },
  "typography-h2": {
    name: "typography-h2",
    description: "Typography H2 demo.",
    files: ["registry/default/examples/typography-h2.tsx"],
  },
  "typography-h3": {
    name: "typography-h3",
    description: "Typography H3 demo.",
    files: ["registry/default/examples/typography-h3.tsx"],
  },
  "typography-h4": {
    name: "typography-h4",
    description: "Typography H4 demo.",
    files: ["registry/default/examples/typography-h4.tsx"],
  },
  "typography-inline-code": {
    name: "typography-inline-code",
    description: "Typography inline code demo.",
    files: ["registry/default/examples/typography-inline-code.tsx"],
  },
  "typography-large": {
    name: "typography-large",
    description: "Typography large demo.",
    files: ["registry/default/examples/typography-large.tsx"],
  },
  "typography-lead": {
    name: "typography-lead",
    description: "Typography lead demo.",
    files: ["registry/default/examples/typography-lead.tsx"],
  },
  "typography-list": {
    name: "typography-list",
    description: "Typography list demo.",
    files: ["registry/default/examples/typography-list.tsx"],
  },
  "typography-muted": {
    name: "typography-muted",
    description: "Typography muted demo.",
    files: ["registry/default/examples/typography-muted.tsx"],
  },
  "typography-p": {
    name: "typography-p",
    description: "Typography paragraph demo.",
    files: ["registry/default/examples/typography-p.tsx"],
  },
  "typography-small": {
    name: "typography-small",
    description: "Typography small demo.",
    files: ["registry/default/examples/typography-small.tsx"],
  },
  "typography-table": {
    name: "typography-table",
    description: "Typography table demo.",
    files: ["registry/default/examples/typography-table.tsx"],
  },
}

/**
 * Get registry item by name
 */
export function getRegistryItem(name: string): RegistryItem | null {
  return registry[name] || null
}

/**
 * Get all registry items
 */
export function getAllRegistryItems(): RegistryItem[] {
  return Object.values(registry)
}

/**
 * Get registry items by category
 */
export function getRegistryItemsByCategory(category: string): RegistryItem[] {
  return Object.values(registry).filter((item) => item.category === category)
}

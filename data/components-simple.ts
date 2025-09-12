/**
 * Simple component definitions for shadcn/ui cheatsheet
 * Following official shadcn/ui pattern - metadata only
 */

export interface ComponentInfo {
  id: string
  name: string
  description: string
  category:
    | "form"
    | "display"
    | "feedback"
    | "navigation"
    | "layout"
    | "data"
    | "overlay"
    | "utility"
  documentation: {
    url: string
    officialDocs: string
  }
  examples: Array<{
    name: string
    description: string
    registryName: string
  }>
}

/**
 * Component definitions - simple metadata approach
 */
export const components: ComponentInfo[] = [
  {
    id: "accordion",
    name: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/accordion",
      officialDocs: "https://ui.shadcn.com/docs/components/accordion",
    },
    examples: [
      {
        name: "Default",
        description: "A basic accordion example.",
        registryName: "accordion-demo",
      },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    description: "Displays a callout for user attention.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert",
      officialDocs: "https://ui.shadcn.com/docs/components/alert",
    },
    examples: [
      {
        name: "Default",
        description: "A basic alert example.",
        registryName: "alert-demo",
      },
      {
        name: "Destructive",
        description: "A destructive alert variant.",
        registryName: "alert-destructive",
      },
    ],
  },
  {
    id: "button",
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/button",
      officialDocs: "https://ui.shadcn.com/docs/components/button",
    },
    examples: [
      {
        name: "Default",
        description: "A basic button example.",
        registryName: "button-demo",
      },
      {
        name: "Secondary",
        description: "A secondary button variant.",
        registryName: "button-secondary",
      },
      {
        name: "Destructive",
        description: "A destructive button variant.",
        registryName: "button-destructive",
      },
      {
        name: "Outline",
        description: "An outline button variant.",
        registryName: "button-outline",
      },
      {
        name: "Ghost",
        description: "A ghost button variant.",
        registryName: "button-ghost",
      },
      {
        name: "Link",
        description: "A link button variant.",
        registryName: "button-link",
      },
      {
        name: 'Icon',
        description: 'An icon button.',
        registryName: 'button-icon'
      },
      {
        name: 'With Icon',
        description: 'A button with an icon.',
        registryName: 'button-with-icon'
      },
      {
        name: "Loading",
        description: "A loading button state.",
        registryName: "button-loading",
      },
    ],
  },
  {
    id: "card",
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/card",
      officialDocs: "https://ui.shadcn.com/docs/components/card",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic card example.',
        registryName: 'card-demo'
      },
    ]
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/checkbox",
      officialDocs: "https://ui.shadcn.com/docs/components/checkbox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic checkbox example.',
        registryName: 'checkbox-demo'
      },
      {
        name: 'Form',
        description: 'A form with multiple checkboxes example.',
        registryName: 'checkbox-form-multiple'
      }
    ]
  },
  {
    id: "input",
    name: "Input",
    description:
      "Displays a form input field or a component that looks like an input field.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input",
      officialDocs: "https://ui.shadcn.com/docs/components/input",
    },
    examples: [
      {
        name: "Default",
        description: "A basic input example.",
        registryName: "input-demo",
      },
      {
        name: "File",
        description: "A file input example.",
        registryName: "input-file",
      },
      {
        name: "Disabled",
        description: "A disabled input example.",
        registryName: "input-disabled",
      },
      {
        name: "With Label",
        description: "An input example with label.",
        registryName: "input-with-label",
      },
      {
        name: "With Button",
        description: "A input example with button.",
        registryName: "input-with-button",
      },
      {
        name: "Form",
        description: "A form with multiple inputs.",
        registryName: "input-form",
      },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/badge",
      officialDocs: "https://ui.shadcn.com/docs/components/badge",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic badge example.',
        registryName: 'badge-demo'
      },
      {
        name: 'Secondary',
        description: 'A secondary badge variant.',
        registryName: 'badge-secondary'
      },
      {
        name: 'Destructive',
        description: 'A destructive badge variant.',
        registryName: 'badge-destructive'
      },
      {
        name: 'Outline',
        description: 'An outline badge variant.',
        registryName: 'badge-outline'
      }
    ]
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/avatar",
      officialDocs: "https://ui.shadcn.com/docs/components/avatar",
    },
    examples: [
      {
        name: "Default",
        description: "A basic avatar example.",
        registryName: "avatar-demo",
      },
    ],
  },
  {
    id: "separator",
    name: "Separator",
    description: "Visually or semantically separates content.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/separator",
      officialDocs: "https://ui.shadcn.com/docs/components/separator",
    },
    examples: [
      {
        name: "Default",
        description: "A basic separator example.",
        registryName: "separator-demo",
      },
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert-dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/alert-dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A basic alert dialog example.",
        registryName: "alert-dialog-demo",
      },
    ],
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Displays content within a desired ratio.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/aspect-ratio",
      officialDocs: "https://ui.shadcn.com/docs/components/aspect-ratio",
    },
    examples: [
      {
        name: "Default",
        description: "A basic aspect ratio example.",
        registryName: "aspect-ratio-demo",
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/breadcrumb",
      officialDocs: "https://ui.shadcn.com/docs/components/breadcrumb",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic breadcrumb example.',
        registryName: 'breadcrumb-demo'
      },
      {
        name: 'Custom separator',
        description: 'A breadcrumb example with a custom separator.',
        registryName: 'breadcrumb-separator'
      },
      {
        name: 'With Dropdown',
        description: 'A breadcrumb example with a dropdown menu.',
        registryName: 'breadcrumb-dropdown'
      },
      {
        name: 'Collapsed',
        description: 'When the breadcrumb is too long.',
        registryName: 'breadcrumb-ellipsis'
      },
      {
        name: 'Link Component',
        description: 'To use a custom link component.',
        registryName: 'breadcrumb-link'
      },
      {
        name: 'Responsive',
        description: 'An example of a responsive breadcrumb.',
        registryName: 'breadcrumb-responsive'
      },
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    description:
      "A date field component that allows users to enter and edit date.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/calendar",
      officialDocs: "https://ui.shadcn.com/docs/components/calendar",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic calendar example.',
        registryName: 'calendar-demo'
      },
      {
        name: 'Persian calendar',
        description: 'A Persian calendar example.',
        registryName: 'calendar-persian'
      },
      {
        name: 'Range Calendar',
        description: 'A range calendar example.',
        registryName: 'calendar-range'
      },
      {
        name: 'Month and Year Selector',
        description: 'A calendar example with month and year dropdown selectors.',
        registryName: 'calendar-month-year'
      },
      {
        name: 'Date and Time Picker',
        description: 'A date and time picker example.',
        registryName: 'calendar-picker'
      },
      {
        name: 'Form',
        description: 'A form example with calendar input.',
        registryName: 'calendar-form'
      },
    ]
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "A carousel component for displaying a series of content.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/carousel",
      officialDocs: "https://ui.shadcn.com/docs/components/carousel",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic carousel example.',
        registryName: 'carousel-demo'
      },
      {
        name: 'Size',
        description: 'An example to set the size of the items.',
        registryName: 'carousel-size'
      },
      {
        name: 'Spacing',
        description: 'An example to set the spacing between the items.',
        registryName: 'carousel-spacing'
      },
      {
        name: 'Orientation',
        description: 'An example to set the orientation of the carousel.',
        registryName: 'carousel-orientation'
      },
      {
        name: 'API',
        description: 'An example to demonstrate the API of the carousel.',
        registryName: 'carousel-api'
      },
      {
        name: 'Plugins',
        description: 'An example to demonstrate the plugins usage for carousel.',
        registryName: 'carousel-plugins'
      },
    ]
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/collapsible",
      officialDocs: "https://ui.shadcn.com/docs/components/collapsible",
    },
    examples: [
      {
        name: "Default",
        description: "A basic collapsible example.",
        registryName: "collapsible-demo",
      },
    ],
  },
  {
    id: "combobox",
    name: "Combobox",
    description:
      "Autocomplete input and command palette with a list of suggestions.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/combobox",
      officialDocs: "https://ui.shadcn.com/docs/components/combobox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic combobox example.',
        registryName: 'combobox-demo'
      },
      {
        name: 'Popover',
        description: 'A popover combobox example.',
        registryName: 'combobox-popover'
      },
      {
        name: 'Dropdown',
        description: 'A dropdown combobox example.',
        registryName: 'combobox-dropdown-menu'
      },
      {
        name: 'Form',
        description: 'A form combobox example.',
        registryName: 'combobox-form'
      }
    ]
  },
  {
    id: "command",
    name: "Command",
    description: "Fast, composable, unstyled command menu for React.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/command",
      officialDocs: "https://ui.shadcn.com/docs/components/command",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic command example.',
        registryName: 'command-demo'
      },
      {
        name: 'Dialog',
        description: 'A dialog command example.',
        registryName: 'command-dialog'
      }
    ]
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description:
      "Displays a menu to the user - such as a set of actions or functions - triggered by a button.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/context-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/context-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A basic context menu example.",
        registryName: "context-menu-demo",
      },
    ],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "A date picker component with range and presets.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/date-picker",
      officialDocs: "https://ui.shadcn.com/docs/components/date-picker",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic date picker example.',
        registryName: 'date-picker-demo'
      },
      {
        name: 'Form',
        description: 'A form date picker example.',
        registryName: 'date-picker-form'
      }
    ]
  },
  {
    id: "dialog",
    name: "Dialog",
    description:
      "A window overlaid on either the primary window or another dialog window.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A basic dialog example.",
        registryName: "dialog-demo",
      },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "A drawer component for React.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/drawer",
      officialDocs: "https://ui.shadcn.com/docs/components/drawer",
    },
    examples: [
      {
        name: "Default",
        description: "A basic drawer example.",
        registryName: "drawer-demo",
      },
    ],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description:
      "Displays a menu to the user - such as a set of actions or functions - triggered by a button.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dropdown-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/dropdown-menu",
    },
    examples: [
      {
        name: 'Default',
        description: 'A basic dropdown menu example.',
        registryName: 'dropdown-menu-demo'
      },
      {
        name: 'Checkboxes',
        description: 'A dropdown menu example with checkboxes.',
        registryName: 'dropdown-menu-checkboxes'
      },
      {
        name: 'Radio Group',
        description: 'A dropdown menu example with a radio group.',
        registryName: 'dropdown-menu-radio-group'
      }
    ]
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description:
      "For sighted users to preview content available behind a link.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/hover-card",
      officialDocs: "https://ui.shadcn.com/docs/components/hover-card",
    },
    examples: [
      {
        name: "Default",
        description: "A basic hover card example.",
        registryName: "hover-card-demo",
      },
    ],
  },
  {
    id: "input-otp",
    name: "Input OTP",
    description:
      "Accessible one-time password component with copy paste functionality.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input-otp",
      officialDocs: "https://ui.shadcn.com/docs/components/input-otp",
    },
    examples: [
      {
        name: "Default",
        description: "A basic input OTP example.",
        registryName: "input-otp-demo",
      },
      {
        name: "Pattern",
        description: "A patterned input OTP example.",
        registryName: "input-otp-pattern",
      },
      {
        name: "Separator",
        description: "A separated with separator for input OTP example.",
        registryName: "input-otp-separator",
      },
      {
        name: "Controlled",
        description: "An input OTP example to control the input value.",
        registryName: "input-otp-controlled",
      },
      {
        name: "Form",
        description: "A form with input OTP example.",
        registryName: "input-otp-form",
      }
    ],
  },
  {
    id: "label",
    name: "Label",
    description: "Renders an accessible label associated with controls.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/label",
      officialDocs: "https://ui.shadcn.com/docs/components/label",
    },
    examples: [
      {
        name: "Default",
        description: "A basic label example.",
        registryName: "label-demo",
      },
    ],
  },
  {
    id: "menubar",
    name: "Menubar",
    description: "A visually persistent menu common in desktop applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/menubar",
      officialDocs: "https://ui.shadcn.com/docs/components/menubar",
    },
    examples: [
      {
        name: "Default",
        description: "A basic menubar example.",
        registryName: "menubar-demo",
      },
    ],
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    description: "A collection of links for navigating websites.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/navigation-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/navigation-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A basic navigation menu example.",
        registryName: "navigation-menu-demo",
      },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Pagination with page navigation, next and previous links.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/pagination",
      officialDocs: "https://ui.shadcn.com/docs/components/pagination",
    },
    examples: [
      {
        name: "Default",
        description: "A basic pagination example.",
        registryName: "pagination-demo",
      },
    ],
  },
  {
    id: "popover",
    name: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/popover",
      officialDocs: "https://ui.shadcn.com/docs/components/popover",
    },
    examples: [
      {
        name: "Default",
        description: "A basic popover example.",
        registryName: "popover-demo",
      },
    ],
  },
  {
    id: "progress",
    name: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/progress",
      officialDocs: "https://ui.shadcn.com/docs/components/progress",
    },
    examples: [
      {
        name: "Default",
        description: "A basic progress example.",
        registryName: "progress-demo",
      },
    ],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/radio-group",
      officialDocs: "https://ui.shadcn.com/docs/components/radio-group",
    },
    examples: [
      {
        name: "Default",
        description: "A basic radio group example.",
        registryName: "radio-group-demo",
      },
      {
        name: "Form",
        description: "A form with radio group example.",
        registryName: "radio-group-form",
      }
    ],
  },
  {
    id: "resizable",
    name: "Resizable",
    description:
      "Accessible resizable panel groups and layouts with keyboard support.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/resizable",
      officialDocs: "https://ui.shadcn.com/docs/components/resizable",
    },
    examples: [
      {
        name: "Default",
        description: "A basic resizable example.",
        registryName: "resizable-demo",
      },
      {
        name: "Vertical",
        description: "A vertical resizable example.",
        registryName: "resizable-vertical",
      },
      {
        name: "Handle",
        description: "A resizable example with handle.",
        registryName: "resizable-handle",
      },
      {
        name: "With Handles",
        description: "A vertical & horizontal resizable example with handle.",
        registryName: "resizable-demo-with-handle",
      }
    ],
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description:
      "Augments native scroll functionality for custom, cross-browser styling.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/scroll-area",
      officialDocs: "https://ui.shadcn.com/docs/components/scroll-area",
    },
    examples: [
      {
        name: "Default",
        description: "A basic scroll area example.",
        registryName: "scroll-area-demo",
      },
      {
        name: "Horizontal",
        description: "A basic horizontal scroll area example.",
        registryName: "scroll-area-horizontal-demo",
      }
    ],
  },
  {
    id: "select",
    name: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/select",
      officialDocs: "https://ui.shadcn.com/docs/components/select",
    },
    examples: [
      {
        name: "Default",
        description: "A basic select example.",
        registryName: "select-demo",
      },
      {
        name: "Scrollable",
        description: "A scrollable select example.",
        registryName: "select-scrollable",
      },
      {
        name: "Form",
        description: "A basic select example with form.",
        registryName: "select-form",
      },
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    description:
      "Extends the Dialog component to display content that complements the main content of the screen.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sheet",
      officialDocs: "https://ui.shadcn.com/docs/components/sheet",
    },
    examples: [
      {
        name: "Default",
        description: "A basic sheet example.",
        registryName: "sheet-demo",
      },
      {
        name: "Side",
        description: "A basic sheet example.",
        registryName: "sheet-side",
      }
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/skeleton",
      officialDocs: "https://ui.shadcn.com/docs/components/skeleton",
    },
    examples: [
      {
        name: "Default",
        description: "A basic skeleton example.",
        registryName: "skeleton-demo",
      },
    ],
  },
  {
    id: "slider",
    name: "Slider",
    description:
      "An input where the user selects a value from within a given range.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/slider",
      officialDocs: "https://ui.shadcn.com/docs/components/slider",
    },
    examples: [
      {
        name: "Default",
        description: "A basic slider example.",
        registryName: "slider-demo",
      },
    ],
  },
  {
    id: "sonner",
    name: "Sonner (Toast)",
    description: "A succinct message that is displayed temporarily.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sonner",
      officialDocs: "https://ui.shadcn.com/docs/components/sonner",
    },
    examples: [
      {
        name: "Default",
        description: "A basic sonner example.",
        registryName: "sonner-demo",
      },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/switch",
      officialDocs: "https://ui.shadcn.com/docs/components/switch",
    },
    examples: [
      {
        name: "Default",
        description: "A basic switch example.",
        registryName: "switch-demo",
      },
      {
        name: "Form",
        description: "A switch example with form.",
        registryName: "switch-form",
      }
    ],
  },
  {
    id: "table",
    name: "Table",
    description: "A responsive table component.",
    category: "data",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/table",
      officialDocs: "https://ui.shadcn.com/docs/components/table",
    },
    examples: [
      {
        name: "Default",
        description: "A basic table example.",
        registryName: "table-demo",
      },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tabs",
      officialDocs: "https://ui.shadcn.com/docs/components/tabs",
    },
    examples: [
      {
        name: "Default",
        description: "A basic tabs example.",
        registryName: "tabs-demo",
      },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    description:
      "Displays a form textarea or a component that looks like a textarea.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/textarea",
      officialDocs: "https://ui.shadcn.com/docs/components/textarea",
    },
    examples: [
      {
        name: "Default",
        description: "A basic textarea example.",
        registryName: "textarea-demo",
      },
      {
        name: "Disabled",
        description: "A disabled textarea example.",
        registryName: "textarea-disabled",
      },
      {
        name: "With label",
        description: "A textarea with label example.",
        registryName: "textarea-with-label",
      },
      {
        name: "With text",
        description: "A textarea with text example.",
        registryName: "textarea-with-text",
      },
      {
        name: "With button",
        description: "A textarea with button example.",
        registryName: "textarea-with-button",
      },
      {
        name: "Form",
        description: "A textarea form example.",
        registryName: "textarea-form",
      }
    ],
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle",
    },
    examples: [
      {
        name: "Default",
        description: "A basic toggle example.",
        registryName: "toggle-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle example.",
        registryName: "toggle-outline",
      },
      {
        name: "Small",
        description: "A small toggle example.",
        registryName: "toggle-sm",
      },
      {
        name: "Large",
        description: "A large toggle example.",
        registryName: "toggle-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle example.",
        registryName: "toggle-disabled",
      }
    ],
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    description: "A set of two-state buttons that can be toggled on or off.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle-group",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle-group",
    },
    examples: [
      {
        name: "Default",
        description: "A basic toggle group example.",
        registryName: "toggle-group-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle example.",
        registryName: "toggle-group-outline",
      },
      {
        name: "Small",
        description: "A small toggle example.",
        registryName: "toggle-group-sm",
      },
      {
        name: "Large",
        description: "A large toggle example.",
        registryName: "toggle-group-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle example.",
        registryName: "toggle-group-disabled",
      }
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tooltip",
      officialDocs: "https://ui.shadcn.com/docs/components/tooltip",
    },
    examples: [
      {
        name: "Default",
        description: "A basic tooltip example.",
        registryName: "tooltip-demo",
      },
    ],
  },
]

/**
 * Get all components for the application
 */
export function getAllComponentsSync(): ComponentInfo[] {
  return components
}

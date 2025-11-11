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
      "The Accordion component from Shadcn UI is a vertically stacked, collapsible React component built with Tailwind CSS for modern web applications. Perfect for Next.js projects, this accessible UI element organizes content into expandable sections, allowing users to show and hide information efficiently. Fully customizable with Radix UI primitives, the Shadcn accordion supports single or multiple open panels, smooth animations, and responsive design. Ideal for FAQs, documentation, settings panels, and any interface requiring organized, space-efficient content display in React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/accordion",
      officialDocs: "https://ui.shadcn.com/docs/components/accordion",
    },
    examples: [
      {
        name: "Default",
        description: "A basic accordion example demonstrating collapsible content panels with smooth animations and keyboard navigation support.",
        registryName: "accordion-demo",
      },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    description: "The Alert component from Shadcn UI is a versatile React notification element designed with Tailwind CSS for displaying important messages in Next.js applications. This accessible component supports multiple variants including default, destructive, and success states, making it perfect for error messages, warnings, and informational callouts. Built on open-source primitives, the Shadcn alert includes customizable icons, titles, and descriptions, ensuring clear user communication. Fully responsive and themeable, it integrates seamlessly into modern design systems and React workflows for effective user feedback.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert",
      officialDocs: "https://ui.shadcn.com/docs/components/alert",
    },
    examples: [
      {
        name: "Default",
        description: "A standard informational alert with icon and description for general notifications and messages.",
        registryName: "alert-demo",
      },
      {
        name: "Destructive",
        description: "A destructive alert variant styled for error messages and critical warnings with red accent colors.",
        registryName: "alert-destructive",
      },
    ],
  },
  {
    id: "button",
    name: "Button",
    description: "The Button component from Shadcn UI is a highly customizable React element built with Tailwind CSS, offering multiple variants for modern Next.js applications. Supporting primary, secondary, destructive, outline, ghost, and link styles, this accessible component adapts to any design system. Each button variant includes different sizes, loading states, and icon support, making it perfect for forms, CTAs, and interactive UI elements. Fully responsive and keyboard-navigable, the Shadcn button integrates seamlessly into React workflows, providing developers with a flexible, production-ready solution for creating engaging user interfaces.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/button",
      officialDocs: "https://ui.shadcn.com/docs/components/button",
    },
    examples: [
      {
        name: "Default",
        description: "A standard primary button with solid background, ideal for main call-to-action elements and form submissions.",
        registryName: "button-demo",
      },
      {
        name: "Secondary",
        description: "A secondary button variant with muted styling, perfect for alternative actions and less prominent interactions.",
        registryName: "button-secondary",
      },
      {
        name: "Destructive",
        description: "A destructive button variant with red accent, designed for delete actions and critical operations requiring confirmation.",
        registryName: "button-destructive",
      },
      {
        name: "Outline",
        description: "An outline button variant with border styling, providing a subtle appearance for secondary navigation and optional actions.",
        registryName: "button-outline",
      },
      {
        name: "Ghost",
        description: "A ghost button variant with minimal styling and hover effects, ideal for toolbar actions and subtle interactions.",
        registryName: "button-ghost",
      },
      {
        name: "Link",
        description: "A link-styled button variant that appears as text, perfect for inline navigation and non-primary actions.",
        registryName: "button-link",
      },
      {
        name: 'Icon',
        description: 'A compact icon-only button for toolbar actions, navigation controls, and space-efficient interfaces.',
        registryName: 'button-icon'
      },
      {
        name: 'With Icon',
        description: 'A button with integrated icon and text label, enhancing visual communication and user understanding.',
        registryName: 'button-with-icon'
      },
      {
        name: "Loading",
        description: "A button with loading spinner state, displaying async operation progress and preventing duplicate submissions.",
        registryName: "button-loading",
      },
    ],
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "The Button Group component from Shadcn UI is a flexible React container built with Tailwind CSS that groups related buttons with consistent styling and spacing. Perfect for Next.js applications, this component supports horizontal and vertical orientations, size variants, and integration with dropdowns, inputs, and popovers. The accessible button group maintains visual hierarchy while reducing layout complexity in toolbars, forms, and navigation elements. Fully customizable with separators, nested groups, and responsive behavior, it provides developers with a clean solution for organizing multiple action buttons in modern design systems.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/button-group",
      officialDocs: "https://ui.shadcn.com/docs/components/button-group",
    },
    examples: [
      {
        name: "Default",
        description: "A basic button group demonstrating horizontally aligned buttons with consistent spacing and visual connection.",
        registryName: "button-group-demo",
      },
      {
        name: "Dropdown",
        description: "A button group integrated with dropdown menu for split-button actions and contextual options.",
        registryName: "button-group-dropdown",
      },
      {
        name: "Input",
        description: "A button group combined with input field for search bars and action-input combinations.",
        registryName: "button-group-input",
      },
      {
        name: "Input Group",
        description: "An advanced button group with multiple input elements for complex form layouts and data entry.",
        registryName: "button-group-input-group",
      },
      {
        name: "Nested",
        description: "Nested button groups demonstrating hierarchical organization and complex toolbar layouts.",
        registryName: "button-group-nested",
      },
      {
        name: "Orientation",
        description: "Button groups showcasing both horizontal and vertical orientations for flexible layout options.",
        registryName: "button-group-orientation",
      },
      {
        name: "Popover",
        description: "A button group with integrated popover for additional content and contextual information.",
        registryName: "button-group-popover",
      },
      {
        name: "Select",
        description: "A button group combined with select dropdown for filtered actions and option selection.",
        registryName: "button-group-select",
      },
      {
        name: "Separator",
        description: "A button group with visual separators for clear section division and action grouping.",
        registryName: "button-group-separator",
      },
      {
        name: "Size",
        description: "Button groups demonstrating different size variants from small to large for various UI contexts.",
        registryName: "button-group-size",
      },
      {
        name: "Split",
        description: "A split button group combining primary action with dropdown menu for related secondary options.",
        registryName: "button-group-split",
      },
    ],
  },
  {
    id: "card",
    name: "Card",
    description: "The Card component from Shadcn UI is a versatile React container built with Tailwind CSS for displaying grouped content in Next.js applications. Featuring a structured layout with header, content, and footer sections, this accessible component is perfect for product displays, user profiles, blog posts, and dashboard widgets. Fully customizable with shadows, borders, and hover effects, the Shadcn card integrates seamlessly into modern design systems. Responsive and themeable, it provides developers with a clean, reusable pattern for organizing information in visually appealing card-based layouts.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/card",
      officialDocs: "https://ui.shadcn.com/docs/components/card",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard card layout with header, body content, and footer sections for structured information display.',
        registryName: 'card-demo'
      },
    ]
  },
  {
    id: "empty",
    name: "Empty",
    description: "The Empty component from Shadcn UI is a feedback React element built with Tailwind CSS for Next.js applications, designed to communicate empty states with clarity and visual appeal. This customizable component displays when lists, search results, or data collections have no content to show, featuring icons, descriptive text, and optional call-to-action buttons. Perfect for empty shopping carts, no search results, zero notifications, and blank dashboards, the Shadcn empty state improves user experience by providing context and guidance rather than showing blank spaces. With multiple style variants including outlined, background, icon-based, and avatar styles, this component helps developers create informative and engaging empty states that encourage user action in modern React applications.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/empty",
      officialDocs: "https://ui.shadcn.com/docs/components/empty",
    },
    examples: [
      {
        name: "Default",
        description: "A standard empty state with icon and message for displaying no-content scenarios in lists and collections.",
        registryName: "empty-demo",
      },
      {
        name: "Avatar",
        description: "An empty state featuring an avatar for user-related empty scenarios like no followers or team members.",
        registryName: "empty-avatar",
      },
      {
        name: "Avatar Group",
        description: "An empty state with multiple avatars for group-related scenarios like empty teams or collaboration spaces.",
        registryName: "empty-avatar-group",
      },
      {
        name: "Background",
        description: "An empty state with decorative background for enhanced visual appeal and brand consistency.",
        registryName: "empty-background",
      },
      {
        name: "Icon",
        description: "An empty state emphasizing an icon for clearer visual communication of the empty context.",
        registryName: "empty-icon",
      },
      {
        name: "Input Group",
        description: "An empty state with integrated input for encouraging immediate action like creating first item or searching.",
        registryName: "empty-input-group",
      },
      {
        name: "Outline",
        description: "An empty state with outlined styling for subtle, minimal empty state presentation.",
        registryName: "empty-outline",
      },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "The Checkbox component from Shadcn UI is an accessible React form element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This customizable component supports form validation, controlled and uncontrolled modes, and keyboard navigation, making it perfect for multi-select interfaces, preference settings, and task lists. With built-in indeterminate state support and seamless integration with React Hook Form and other form libraries, the Shadcn checkbox provides developers with a robust, WCAG-compliant solution for boolean input controls. Features smooth animations and supports custom icons for enhanced user experience.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/checkbox",
      officialDocs: "https://ui.shadcn.com/docs/components/checkbox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard checkbox with label for form inputs, preferences, and boolean selections.',
        registryName: 'checkbox-demo'
      },
      {
        name: 'Form',
        description: 'A form with multiple checkboxes demonstrating group validation and complex selection patterns.',
        registryName: 'checkbox-form-multiple'
      },
      {
        name: 'Single Form',
        description: 'A form with a single checkbox demonstrating basic validation and selection patterns.',
        registryName: 'checkbox-form-single'
      },
      {
        name: 'Disabled',
        description: 'A disabled checkbox demonstrating non-interactive state for read-only or locked fields.',
        registryName: 'checkbox-disabled'
      },
    ]
  },
  {
    id: "input",
    name: "Input",
    description: "The Input component from Shadcn UI is a versatile React form element built with Tailwind CSS for Next.js applications, providing developers with accessible text input capabilities. Supporting multiple input types including text, email, password, number, and file uploads, this component integrates seamlessly with React Hook Form and other validation libraries. Features include custom styling, disabled states, prefix/suffix icons, and error handling. Perfect for login forms, search bars, data entry interfaces, and complex form workflows, the Shadcn input offers full keyboard navigation and ARIA support for screen readers. Responsive and customizable, it adapts to any design system while maintaining consistent behavior across browsers.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input",
      officialDocs: "https://ui.shadcn.com/docs/components/input",
    },
    examples: [
      {
        name: "Default",
        description: "A standard text input field for basic text entry and data collection.",
        registryName: "input-demo",
      },
      {
        name: "File",
        description: "A file upload input for document selection and media uploads with custom styling.",
        registryName: "input-file",
      },
      {
        name: "Disabled",
        description: "A disabled input demonstrating non-interactive state for read-only or locked fields.",
        registryName: "input-disabled",
      },
      {
        name: "With Label",
        description: "An input with associated label demonstrating proper form accessibility and semantic HTML structure.",
        registryName: "input-with-label",
      },
      {
        name: "With Button",
        description: "An input combined with a button for search bars, submission fields, and action-based input patterns.",
        registryName: "input-with-button",
      },
      {
        name: "Form",
        description: "A complete form implementation with multiple inputs, validation, and error handling using React Hook Form.",
        registryName: "input-form",
      },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    description: "The Badge component from Shadcn UI is a compact React element built with Tailwind CSS for highlighting status, labels, and metadata in Next.js applications. Supporting multiple variants including default, secondary, destructive, and outline styles, this accessible component is perfect for notification counts, status indicators, tags, and category labels. Fully customizable with different sizes and colors, the Shadcn badge integrates seamlessly into buttons, cards, and lists. Responsive and lightweight, it provides developers with a versatile solution for adding visual emphasis and contextual information to modern React interfaces.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/badge",
      officialDocs: "https://ui.shadcn.com/docs/components/badge",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard badge with solid background for general labels, tags, and status indicators.',
        registryName: 'badge-demo'
      },
      {
        name: 'Secondary',
        description: 'A secondary badge variant with muted styling for less prominent labels and metadata.',
        registryName: 'badge-secondary'
      },
      {
        name: 'Destructive',
        description: 'A destructive badge variant with red accent for errors, warnings, and critical status indicators.',
        registryName: 'badge-destructive'
      },
      {
        name: 'Outline',
        description: 'An outline badge variant with border styling for subtle emphasis and secondary information.',
        registryName: 'badge-outline'
      }
    ]
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "The Avatar component from Shadcn UI is a user representation React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component displays user profile images with automatic fallback to initials or placeholder icons when images fail to load. Perfect for user profiles, comment sections, team member lists, and social interfaces, the Shadcn avatar supports multiple sizes, custom colors, group layouts, and status indicators. With built-in image lazy loading, alt text support for accessibility, and circular or rounded styling options, this component provides developers with a professional solution for user identity representation in modern React applications.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/avatar",
      officialDocs: "https://ui.shadcn.com/docs/components/avatar",
    },
    examples: [
      {
        name: "Default",
        description: "A standard avatar with user image and fallback initials for profile representation and user identification.",
        registryName: "avatar-demo",
      },
    ],
  },
  {
    id: "separator",
    name: "Separator",
    description: "The Separator component from Shadcn UI is a divider React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component creates visual or semantic boundaries between content sections, menu items, or interface elements with horizontal or vertical orientation. Perfect for organizing layouts, separating navigation items, dividing form sections, and improving content hierarchy, the Shadcn separator supports custom colors, thickness, and semantic HTML with proper ARIA attributes. Lightweight and flexible, this component provides developers with a clean solution for content organization and visual structure in modern React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/separator",
      officialDocs: "https://ui.shadcn.com/docs/components/separator",
    },
    examples: [
      {
        name: "Default",
        description: "A standard horizontal separator dividing content sections with subtle styling for clean visual hierarchy.",
        registryName: "separator-demo",
      },
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description: "The Alert Dialog component from Shadcn UI is a critical modal React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component interrupts user workflow to display important messages, confirmations, or warnings that require immediate attention and response. Perfect for destructive actions, irreversible operations, critical warnings, and user confirmations, the Shadcn alert dialog features focus trapping, keyboard navigation with ESC support, and backdrop click prevention to ensure users acknowledge important information. With built-in ARIA attributes for screen reader compatibility and customizable action buttons, this WCAG-compliant component provides developers with a robust solution for critical user interactions in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert-dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/alert-dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A standard alert dialog with important messaging and confirmation buttons for critical user decisions and destructive actions.",
        registryName: "alert-dialog-demo",
      },
    ],
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description: "The Aspect Ratio component from Shadcn UI is a layout React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This utility component maintains consistent width-to-height proportions for images, videos, iframes, and embedded content across different screen sizes and responsive layouts. Perfect for video players, image galleries, map embeds, and media content that requires specific dimensions, the Shadcn aspect ratio prevents layout shifts and content distortion. Supporting common ratios like 16:9, 4:3, 1:1, and custom proportions, this component provides developers with a reliable solution for responsive media containers in modern React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/aspect-ratio",
      officialDocs: "https://ui.shadcn.com/docs/components/aspect-ratio",
    },
    examples: [
      {
        name: "Default",
        description: "A standard aspect ratio container maintaining 16:9 proportions for videos and images in responsive layouts.",
        registryName: "aspect-ratio-demo",
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "The Breadcrumb component from Shadcn UI is a navigation React element built with Tailwind CSS for Next.js applications, displaying hierarchical page paths to improve user orientation and navigation. This accessible component shows the current page's location within the site structure with clickable links to parent pages, enhancing usability for deep content hierarchies. Perfect for e-commerce categories, documentation sites, multi-level dashboards, and complex web applications, the Shadcn breadcrumb supports separators, collapsed items, and responsive behavior. With semantic HTML markup and ARIA attributes for screen readers, this component provides developers with a WCAG-compliant wayfinding solution for modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/breadcrumb",
      officialDocs: "https://ui.shadcn.com/docs/components/breadcrumb",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard breadcrumb navigation showing hierarchical page structure with home and nested paths.',
        registryName: 'breadcrumb-demo'
      },
      {
        name: 'Custom separator',
        description: 'A breadcrumb with custom separator icons for personalized visual style and brand consistency.',
        registryName: 'breadcrumb-separator'
      },
      {
        name: 'With Dropdown',
        description: 'A breadcrumb with dropdown menu for collapsed navigation levels and space-efficient deep hierarchies.',
        registryName: 'breadcrumb-dropdown'
      },
      {
        name: 'Collapsed',
        description: 'A breadcrumb with ellipsis collapse for long paths, showing first, last, and truncated middle items.',
        registryName: 'breadcrumb-ellipsis'
      },
      {
        name: 'Link Component',
        description: 'A breadcrumb using custom Next.js Link component for client-side navigation and route prefetching.',
        registryName: 'breadcrumb-link'
      },
      {
        name: 'Responsive',
        description: 'A responsive breadcrumb adapting to mobile screens with truncation and touch-friendly interactions.',
        registryName: 'breadcrumb-responsive'
      },
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "The Calendar component from Shadcn UI is a date selection React element built with React DayPicker and styled with Tailwind CSS for Next.js applications. This accessible form component allows users to view and select dates with an interactive monthly grid interface featuring keyboard navigation and locale support. Perfect for booking systems, date pickers, event schedulers, and date range selectors, the Shadcn calendar supports single dates, date ranges, multiple selections, disabled dates, and custom styling. With built-in internationalization for different calendar systems including Persian calendars, timezone handling, and ARIA attributes for screen readers, this component provides developers with a comprehensive date selection solution for modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/calendar",
      officialDocs: "https://ui.shadcn.com/docs/components/calendar",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard calendar with month view for single date selection in forms and date pickers.',
        registryName: 'calendar-demo'
      },
      {
        name: 'Persian calendar',
        description: 'A Persian (Jalali) calendar variant with localized date system for international applications.',
        registryName: 'calendar-persian'
      },
      {
        name: 'Range Calendar',
        description: 'A date range selector calendar for booking periods, date spans, and interval selection.',
        registryName: 'calendar-range'
      },
      {
        name: 'Month and Year Selector',
        description: 'A calendar with dropdown month and year selectors for quick navigation to distant dates.',
        registryName: 'calendar-month-year'
      },
      {
        name: 'Date and Time Picker',
        description: 'A combined date and time picker for scheduling appointments and timestamp selection.',
        registryName: 'calendar-picker'
      },
      {
        name: 'Form',
        description: 'A calendar integrated with React Hook Form demonstrating validation and form state management.',
        registryName: 'calendar-form'
      },
    ]
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "The Carousel component from Shadcn UI is an interactive slideshow React element built with Embla Carousel and styled with Tailwind CSS for Next.js applications. This accessible component displays multiple content items in a scrollable, swipeable interface with navigation controls and automatic playback options. Perfect for image galleries, product showcases, testimonials, and featured content sections, the Shadcn carousel supports horizontal and vertical orientations, custom spacing, loop behavior, and responsive breakpoints. With built-in touch gestures for mobile devices, keyboard navigation, and plugin support for autoplay and pagination, this component provides developers with a versatile solution for creating engaging content sliders in modern React applications.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/carousel",
      officialDocs: "https://ui.shadcn.com/docs/components/carousel",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard carousel slider with navigation arrows for browsing multiple content items and images.',
        registryName: 'carousel-demo'
      },
      {
        name: 'Size',
        description: 'A carousel demonstrating custom item sizing for cards, images, and content of varying dimensions.',
        registryName: 'carousel-size'
      },
      {
        name: 'Spacing',
        description: 'A carousel with adjustable spacing between slides for comfortable viewing and visual separation.',
        registryName: 'carousel-spacing'
      },
      {
        name: 'Orientation',
        description: 'A carousel showcasing both horizontal and vertical scroll orientations for flexible layout options.',
        registryName: 'carousel-orientation'
      },
      {
        name: 'API',
        description: 'A carousel demonstrating programmatic control with API methods for custom navigation and interactions.',
        registryName: 'carousel-api'
      },
      {
        name: 'Plugins',
        description: 'A carousel with Embla plugins for autoplay, pagination indicators, and advanced slideshow features.',
        registryName: 'carousel-plugins'
      },
    ]
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "The Collapsible component from Shadcn UI is an expandable content React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component toggles visibility of content sections with smooth animations, allowing users to show and hide information on demand. Perfect for FAQ sections, advanced settings panels, expandable lists, and progressive disclosure interfaces, the Shadcn collapsible supports controlled and uncontrolled modes, custom triggers, and keyboard navigation. With built-in ARIA attributes for screen reader support and animated transitions, this component provides developers with a clean solution for organizing and revealing optional content in modern React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/collapsible",
      officialDocs: "https://ui.shadcn.com/docs/components/collapsible",
    },
    examples: [
      {
        name: "Default",
        description: "A standard collapsible panel with toggle button for expanding and collapsing content sections smoothly.",
        registryName: "collapsible-demo",
      },
    ],
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "The Combobox component from Shadcn UI is an autocomplete search React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component combines a text input with a filterable dropdown list, enabling users to search and select from large datasets efficiently. Perfect for country selectors, product searches, user mentions, and command palettes, the Shadcn combobox supports keyboard navigation, fuzzy search, custom filtering, and async data loading. With built-in ARIA attributes, popover and dropdown variants, and seamless integration with React Hook Form, this component provides developers with a powerful solution for searchable select inputs in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/combobox",
      officialDocs: "https://ui.shadcn.com/docs/components/combobox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard combobox with search input and filterable dropdown for efficient option selection from large lists.',
        registryName: 'combobox-demo'
      },
      {
        name: 'Popover',
        description: 'A combobox with popover layout displaying searchable options in a floating overlay for space-efficient interfaces.',
        registryName: 'combobox-popover'
      },
      {
        name: 'Dropdown',
        description: 'A combobox with dropdown menu style for integrated search and selection in form fields.',
        registryName: 'combobox-dropdown-menu'
      },
      {
        name: 'Form',
        description: 'A combobox integrated with React Hook Form demonstrating validation and form state management for searchable selects.',
        registryName: 'combobox-form'
      }
    ]
  },
  {
    id: "command",
    name: "Command",
    description: "The Command component from Shadcn UI is a fast command palette React element built with cmdk library and styled with Tailwind CSS for Next.js applications. This accessible component provides keyboard-driven navigation for executing actions, searching content, and accessing application features quickly. Perfect for admin dashboards, developer tools, productivity apps, and power-user interfaces, the Shadcn command menu supports fuzzy search, grouped items, keyboard shortcuts, and custom actions. With built-in ARIA attributes, dialog mode for spotlight search, and responsive filtering, this component provides developers with a professional solution for command-driven workflows and efficient navigation in modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/command",
      officialDocs: "https://ui.shadcn.com/docs/components/command",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard command menu with search and grouped actions for quick keyboard-driven navigation and command execution.',
        registryName: 'command-demo'
      },
      {
        name: 'Dialog',
        description: 'A command palette in dialog mode with spotlight-style search overlay for global application navigation and actions.',
        registryName: 'command-dialog'
      }
    ]
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "The Context Menu component from Shadcn UI is a right-click activated menu React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component displays contextual actions and options when users right-click or long-press on elements, providing quick access to relevant commands. Perfect for file managers, image editors, data tables, and desktop-like web applications, the Shadcn context menu supports nested submenus, keyboard navigation, checkboxes, radio groups, and custom content. With built-in ARIA attributes, touch support for mobile devices, and click-outside-to-close behavior, this component provides developers with a powerful solution for contextual interactions in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/context-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/context-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A standard context menu activated by right-click showing contextual actions and commands for selected elements.",
        registryName: "context-menu-demo",
      },
    ],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "The Date Picker component from Shadcn UI is a calendar-based date selection React element built with React DayPicker and styled with Tailwind CSS for Next.js applications. This accessible component combines a popover trigger with an interactive calendar for intuitive date input in forms. Perfect for booking systems, event scheduling, date filtering, and form inputs requiring date selection, the Shadcn date picker supports single dates, date ranges, presets for common selections, and disabled dates. With built-in integration with React Hook Form, keyboard navigation, and customizable date formats, this component provides developers with a user-friendly solution for date input fields in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/date-picker",
      officialDocs: "https://ui.shadcn.com/docs/components/date-picker",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard date picker with popover calendar for selecting single dates in forms and input fields.',
        registryName: 'date-picker-demo'
      },
      {
        name: 'Form',
        description: 'A date picker integrated with React Hook Form demonstrating validation and form state management for date inputs.',
        registryName: 'date-picker-form'
      }
    ]
  },
  {
    id: "field",
    name: "Field",
    description: "The Field component from Shadcn UI is a form field wrapper React element built with Tailwind CSS for Next.js applications, providing consistent labeling, error messaging, and help text for form controls. This accessible component creates structured form layouts with proper label associations, validation states, and error displays. Perfect for complex forms, data entry interfaces, and settings panels, the Shadcn field supports all input types including checkboxes, radio buttons, selects, and custom controls. With built-in responsive layouts, required indicators, and ARIA attributes, this component provides developers with a comprehensive solution for building accessible, well-structured forms in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/field",
      officialDocs: "https://ui.shadcn.com/docs/components/field",
    },
    examples: [
      {
        name: "Default",
        description: "A field demo.",
        registryName: "field-demo",
      },
      {
        name: "Checkbox",
        description: "A field with checkbox.",
        registryName: "field-checkbox",
      },
      {
        name: "Choice Card",
        description: "A field with choice card.",
        registryName: "field-choice-card",
      },
      {
        name: "Fieldset",
        description: "A field with fieldset.",
        registryName: "field-fieldset",
      },
      {
        name: "Group",
        description: "A field group.",
        registryName: "field-group",
      },
      {
        name: "Input",
        description: "A field with input.",
        registryName: "field-input",
      },
      {
        name: "Radio",
        description: "A field with radio.",
        registryName: "field-radio",
      },
      {
        name: "Responsive",
        description: "A responsive field.",
        registryName: "field-responsive",
      },
      {
        name: "Select",
        description: "A field with select.",
        registryName: "field-select",
      },
      {
        name: "Slider",
        description: "A field with slider.",
        registryName: "field-slider",
      },
      {
        name: "Switch",
        description: "A field with switch.",
        registryName: "field-switch",
      },
      {
        name: "Textarea",
        description: "A field with textarea.",
        registryName: "field-textarea",
      },
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "The Dialog component from Shadcn UI is a modal overlay React component built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component creates focused user interactions by displaying content above the primary interface with backdrop dimming and focus trapping. Perfect for confirmations, forms, alerts, and complex interactions, the Shadcn dialog supports keyboard navigation with ESC to close and Tab key focus management. Features include customizable sizes, smooth animations, scroll locking, and portal rendering. Fully WCAG-compliant with ARIA attributes, the dialog provides developers with a robust solution for modal workflows, user prompts, and layered content presentation in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A standard modal dialog with header, content area, and action buttons for confirmations and user interactions.",
        registryName: "dialog-demo",
      },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "The Drawer component from Shadcn UI is a slide-in panel React element built with Vaul library and styled with Tailwind CSS for Next.js applications. This accessible component displays content from the edge of the screen with smooth slide-in animations, commonly used for mobile navigation and secondary content. Perfect for mobile menus, filter panels, shopping carts, and settings panels, the Shadcn drawer supports multiple directions (left, right, top, bottom), drag-to-close gestures, and nested scrolling. With built-in focus management, ARIA attributes, and responsive behavior, this component provides developers with a mobile-friendly solution for slide-out navigation and overlay content in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/drawer",
      officialDocs: "https://ui.shadcn.com/docs/components/drawer",
    },
    examples: [
      {
        name: "Default",
        description: "A standard drawer panel sliding from screen edge with drag-to-close for mobile navigation and secondary content.",
        registryName: "drawer-demo",
      },
    ],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "The Dropdown Menu component from Shadcn UI is a versatile React overlay built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component displays contextual actions, navigation options, and grouped menu items triggered by buttons or other interactive elements. Perfect for user menus, context actions, settings panels, and navigation shortcuts, the Shadcn dropdown menu supports nested submenus, keyboard navigation with Arrow keys, radio groups, checkboxes, and separators for visual organization. With built-in ARIA attributes, focus management, and click-outside-to-close behavior, this component provides developers with a professional solution for action menus and command palettes in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dropdown-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/dropdown-menu",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard dropdown menu with actions and options for user interactions and contextual commands.',
        registryName: 'dropdown-menu-demo'
      },
      {
        name: 'Checkboxes',
        description: 'A dropdown menu with checkbox items for multi-select options like filtering and preferences.',
        registryName: 'dropdown-menu-checkboxes'
      },
      {
        name: 'Radio Group',
        description: 'A dropdown menu with radio group items for single-select options like sorting and view modes.',
        registryName: 'dropdown-menu-radio-group'
      }
    ]
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description: "The Hover Card component from Shadcn UI is a preview popup React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component displays rich content previews when users hover over links or interactive elements, providing contextual information without navigation. Perfect for user profile previews, link previews, product quick views, and content summaries, the Shadcn hover card supports custom positioning, delay timing, and rich media content. With built-in ARIA attributes, keyboard navigation, and smart positioning to stay within viewport bounds, this component provides developers with an elegant solution for progressive disclosure and content previews in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/hover-card",
      officialDocs: "https://ui.shadcn.com/docs/components/hover-card",
    },
    examples: [
      {
        name: "Default",
        description: "A standard hover card displaying rich content preview on hover for user profiles and contextual information.",
        registryName: "hover-card-demo",
      },
    ],
  },
  {
    id: "input-group",
    name: "Input Group",
    description: "The Input Group component from Shadcn UI is a composite form control React element built with Tailwind CSS for Next.js applications, combining inputs with addons, buttons, and icons in unified layouts. This accessible component creates enhanced input fields with prefixes, suffixes, and integrated actions for improved user experience. Perfect for search bars with buttons, currency inputs with symbols, URL fields with protocol indicators, and measurement inputs with unit labels, the Shadcn input group supports dropdowns, spinners, tooltips, and custom content. With responsive behavior and consistent styling, this component provides developers with a flexible solution for complex input patterns in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input-group",
      officialDocs: "https://ui.shadcn.com/docs/components/input-group",
    },
    examples: [
      {
        name: "Default",
        description: "An input group demo.",
        registryName: "input-group-demo",
      },
      {
        name: "Button",
        description: "An input group with button.",
        registryName: "input-group-button",
      },
      {
        name: "Custom",
        description: "A custom input group.",
        registryName: "input-group-custom",
      },
      {
        name: "Dropdown",
        description: "An input group with dropdown.",
        registryName: "input-group-dropdown",
      },
      {
        name: "Icon",
        description: "An input group with icon.",
        registryName: "input-group-icon",
      },
      {
        name: "Label",
        description: "An input group with label.",
        registryName: "input-group-label",
      },
      {
        name: "Spinner",
        description: "An input group with spinner.",
        registryName: "input-group-spinner",
      },
      {
        name: "Text",
        description: "An input group with text.",
        registryName: "input-group-text",
      },
      {
        name: "Textarea",
        description: "An input group with textarea.",
        registryName: "input-group-textarea",
      },
      {
        name: "Tooltip",
        description: "An input group with tooltip.",
        registryName: "input-group-tooltip",
      },
    ],
  },
  {
    id: "input-otp",
    name: "Input OTP",
    description: "The Input OTP component from Shadcn UI is a one-time password input React element built with input-otp library and styled with Tailwind CSS for Next.js applications. This accessible component creates segmented input fields for entering verification codes, PINs, and one-time passwords with automatic focus management. Perfect for two-factor authentication, SMS verification, email confirmations, and security codes, the Shadcn input OTP supports custom patterns, separators, paste functionality, and controlled modes. With built-in ARIA attributes, keyboard navigation, and integration with React Hook Form, this component provides developers with a secure, user-friendly solution for OTP entry in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input-otp",
      officialDocs: "https://ui.shadcn.com/docs/components/input-otp",
    },
    examples: [
      {
        name: "Default",
        description: "A standard OTP input with segmented fields for entering verification codes and one-time passwords.",
        registryName: "input-otp-demo",
      },
      {
        name: "Pattern",
        description: "An OTP input with custom validation patterns for specific code formats and character requirements.",
        registryName: "input-otp-pattern",
      },
      {
        name: "Separator",
        description: "An OTP input with visual separators between segments for improved readability and code grouping.",
        registryName: "input-otp-separator",
      },
      {
        name: "Controlled",
        description: "A controlled OTP input for programmatic value management and custom validation logic.",
        registryName: "input-otp-controlled",
      },
      {
        name: "Form",
        description: "An OTP input integrated with React Hook Form for validation and secure authentication flows.",
        registryName: "input-otp-form",
      }
    ],
  },
  {
    id: "item",
    name: "Item",
    description: "The Item component from Shadcn UI is a versatile list item React element built with Tailwind CSS for Next.js applications, providing consistent layouts for content lists and menu items. This accessible component supports various content types including text, icons, avatars, images, and actions in structured layouts. Perfect for contact lists, navigation menus, notification feeds, and data lists, the Shadcn item supports multiple size variants, clickable links, dropdown integration, and custom content arrangements. With responsive behavior and semantic HTML structure, this component provides developers with a flexible building block for list-based interfaces in modern React applications.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/item",
      officialDocs: "https://ui.shadcn.com/docs/components/item",
    },
    examples: [
      {
        name: "Default",
        description: "An item demo.",
        registryName: "item-demo",
      },
      {
        name: "Avatar",
        description: "An item with avatar.",
        registryName: "item-avatar",
      },
      {
        name: "Dropdown",
        description: "An item with dropdown.",
        registryName: "item-dropdown",
      },
      {
        name: "Group",
        description: "An item group.",
        registryName: "item-group",
      },
      {
        name: "Header",
        description: "An item with header.",
        registryName: "item-header",
      },
      {
        name: "Icon",
        description: "An item with icon.",
        registryName: "item-icon",
      },
      {
        name: "Image",
        description: "An item with image.",
        registryName: "item-image",
      },
      {
        name: "Link",
        description: "An item link.",
        registryName: "item-link",
      },
      {
        name: "Size",
        description: "Item with different sizes.",
        registryName: "item-size",
      },
      {
        name: "Variant",
        description: "Item with different variants.",
        registryName: "item-variant",
      },
    ],
  },
  {
    id: "label",
    name: "Label",
    description: "The Label component from Shadcn UI is a form label React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component creates semantic associations between labels and form controls, improving usability and accessibility. Perfect for all form inputs, checkboxes, radio buttons, and custom form controls, the Shadcn label automatically focuses associated inputs when clicked and provides proper ARIA relationships. With customizable styling, required indicators, and error states, this WCAG-compliant component provides developers with an essential building block for accessible forms in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/label",
      officialDocs: "https://ui.shadcn.com/docs/components/label",
    },
    examples: [
      {
        name: "Default",
        description: "A standard form label with proper semantic association to input controls for accessibility and usability.",
        registryName: "label-demo",
      },
    ],
  },
  {
    id: "kbd",
    name: "Kbd",
    description: "The Kbd component from Shadcn UI is a keyboard key display React element built with Tailwind CSS for Next.js applications, visually representing keyboard shortcuts and key combinations. This accessible component styles keyboard key indicators with platform-appropriate styling for documentation, tooltips, and UI hints. Perfect for keyboard shortcut guides, command palettes, help documentation, and accessibility instructions, the Shadcn kbd supports key grouping, modifier keys (Ctrl, Alt, Shift), and custom styling. With semantic HTML and clear visual hierarchy, this component provides developers with a professional solution for displaying keyboard interactions in modern React applications.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/kbd",
      officialDocs: "https://ui.shadcn.com/docs/components/kbd",
    },
    examples: [
      {
        name: "Default",
        description: "A kbd demo.",
        registryName: "kbd-demo",
      },
      {
        name: "Button",
        description: "A kbd with button.",
        registryName: "kbd-button",
      },
      {
        name: "Group",
        description: "A kbd group.",
        registryName: "kbd-group",
      },
      {
        name: "Input Group",
        description: "A kbd with input group.",
        registryName: "kbd-input-group",
      },
      {
        name: "Tooltip",
        description: "A kbd with tooltip.",
        registryName: "kbd-tooltip",
      },
    ],
  },
  {
    id: "menubar",
    name: "Menubar",
    description: "The Menubar component from Shadcn UI is a persistent menu bar React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component displays a horizontal set of menu triggers commonly found in desktop applications like File, Edit, View menus. Perfect for application toolbars, document editors, and desktop-style web applications, the Shadcn menubar supports nested submenus, keyboard navigation, checkboxes, radio groups, and separators. With built-in ARIA attributes for screen reader support and cross-platform keyboard shortcuts, this component provides developers with a professional solution for application-style menu systems in modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/menubar",
      officialDocs: "https://ui.shadcn.com/docs/components/menubar",
    },
    examples: [
      {
        name: "Default",
        description: "A standard menubar with File, Edit, View menus for desktop-style application navigation and commands.",
        registryName: "menubar-demo",
      },
    ],
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    description: "The Navigation Menu component from Shadcn UI is a hierarchical navigation React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component creates dropdown-enabled main navigation with support for nested menus, mega menus, and content-rich dropdowns. Perfect for website headers, main navigation bars, and complex menu systems, the Shadcn navigation menu supports keyboard navigation with Arrow keys, hover and click triggers, and responsive behavior. With built-in ARIA attributes, viewport awareness, and smooth animations, this component provides developers with a professional solution for primary site navigation in modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/navigation-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/navigation-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A standard navigation menu with dropdowns for hierarchical site navigation and main menu systems.",
        registryName: "navigation-menu-demo",
      },
    ],
  },
  {
    id: "native-select",
    name: "Native Select",
    description: "The Native Select component from Shadcn UI is a styled native dropdown React element built with Tailwind CSS for Next.js applications, providing enhanced styling for standard HTML select elements. This accessible component maintains native browser functionality while applying consistent design system styling. Perfect for forms requiring native select behavior, mobile-optimized dropdowns, and simple option selection, the Shadcn native select supports option groups, disabled states, validation styling, and form integration. With full browser compatibility, native mobile keyboards, and semantic HTML, this component provides developers with a lightweight, accessible alternative to custom select components in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/native-select",
      officialDocs: "https://ui.shadcn.com/docs/components/native-select",
    },
    examples: [
      {
        name: "Default",
        description: "A native select demo.",
        registryName: "native-select-demo",
      },
      {
        name: "Disabled",
        description: "A disabled native select.",
        registryName: "native-select-disabled",
      },
      {
        name: "Groups",
        description: "A native select with groups.",
        registryName: "native-select-groups",
      },
      {
        name: "Invalid",
        description: "A native select with invalid state.",
        registryName: "native-select-invalid",
      },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "The Pagination component from Shadcn UI is a navigation control React element built with Tailwind CSS for Next.js applications, enabling users to navigate through paginated content efficiently. This accessible component displays page numbers, previous/next buttons, and optional first/last links with clear visual indicators for the current page. Perfect for search results, product listings, blog archives, and data tables, the Shadcn pagination supports customizable page counts, truncation with ellipsis, and responsive behavior. With built-in ARIA attributes for screen readers and keyboard navigation, this component provides developers with a user-friendly solution for multi-page navigation in modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/pagination",
      officialDocs: "https://ui.shadcn.com/docs/components/pagination",
    },
    examples: [
      {
        name: "Default",
        description: "A standard pagination control with page numbers and navigation arrows for browsing paginated content and lists.",
        registryName: "pagination-demo",
      },
    ],
  },
  {
    id: "popover",
    name: "Popover",
    description: "The Popover component from Shadcn UI is a floating content container built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible React component displays rich, interactive content like forms, menus, and detailed information triggered by user interaction with buttons or other elements. Perfect for date pickers, color selectors, user profiles, and complex filter interfaces, the Shadcn popover supports custom positioning, controlled and uncontrolled modes, and click-outside-to-close behavior. With built-in focus management, ARIA attributes, and smart positioning to stay within viewport bounds, this component provides developers with a versatile solution for contextual overlays and progressive disclosure in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/popover",
      officialDocs: "https://ui.shadcn.com/docs/components/popover",
    },
    examples: [
      {
        name: "Default",
        description: "A standard popover with rich content for displaying forms, filters, and interactive elements on trigger.",
        registryName: "popover-demo",
      },
    ],
  },
  {
    id: "progress",
    name: "Progress",
    description: "The Progress component from Shadcn UI is a progress indicator React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component visualizes task completion with an animated horizontal bar showing percentage or indeterminate progress states. Perfect for file uploads, form submissions, loading operations, and multi-step workflows, the Shadcn progress bar supports custom colors, sizes, and animation speeds. With built-in ARIA attributes for screen reader announcements and smooth transitions, this component provides developers with a clear, accessible solution for communicating progress and loading states in modern React applications.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/progress",
      officialDocs: "https://ui.shadcn.com/docs/components/progress",
    },
    examples: [
      {
        name: "Default",
        description: "A standard progress bar showing task completion percentage for uploads, downloads, and loading operations.",
        registryName: "progress-demo",
      },
    ],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description: "The Radio Group component from Shadcn UI is a single-selection form control React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component allows users to select one option from a set of mutually exclusive choices with clear visual indicators. Perfect for payment methods, shipping options, subscription plans, and survey questions, the Shadcn radio group supports horizontal and vertical layouts, disabled options, and custom styling. With built-in keyboard navigation using Arrow keys, ARIA attributes for screen readers, and seamless integration with React Hook Form, this WCAG-compliant component provides developers with a robust solution for single-choice selections in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/radio-group",
      officialDocs: "https://ui.shadcn.com/docs/components/radio-group",
    },
    examples: [
      {
        name: "Default",
        description: "A standard radio group for single-selection from mutually exclusive options in forms and surveys.",
        registryName: "radio-group-demo",
      },
      {
        name: "Form",
        description: "A radio group integrated with React Hook Form demonstrating validation and form state management for option selection.",
        registryName: "radio-group-form",
      }
    ],
  },
  {
    id: "resizable",
    name: "Resizable",
    description: "The Resizable component from Shadcn UI is an adjustable panel layout React element built with react-resizable-panels and styled with Tailwind CSS for Next.js applications. This accessible component creates draggable split-pane layouts where users can resize sections by dragging handles between panels. Perfect for code editors, file browsers, dashboard layouts, and multi-column interfaces, the Shadcn resizable supports horizontal and vertical orientations, min/max constraints, and collapsible panels. With built-in keyboard navigation, custom drag handles, and persistent sizing, this component provides developers with a powerful solution for flexible, user-customizable layouts in modern React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/resizable",
      officialDocs: "https://ui.shadcn.com/docs/components/resizable",
    },
    examples: [
      {
        name: "Default",
        description: "A standard resizable panel layout with draggable dividers for user-customizable split-pane interfaces.",
        registryName: "resizable-demo",
      },
      {
        name: "Vertical",
        description: "A vertical resizable layout stacking panels top-to-bottom with adjustable heights for multi-row interfaces.",
        registryName: "resizable-vertical",
      },
      {
        name: "Handle",
        description: "A resizable layout with custom drag handle styling for enhanced visual feedback and brand consistency.",
        registryName: "resizable-handle",
      },
      {
        name: "With Handles",
        description: "A complex resizable layout combining vertical and horizontal panels with styled drag handles for advanced layouts.",
        registryName: "resizable-demo-with-handle",
      }
    ],
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description: "The Scroll Area component from Shadcn UI is a custom scrollbar React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component replaces native scrollbars with consistent, cross-browser styled scrollbars that match your design system. Perfect for chat interfaces, code editors, dropdown menus, and content panels with overflow, the Shadcn scroll area supports horizontal and vertical scrolling, custom scrollbar styling, and smooth scrolling behavior. With built-in accessibility features and responsive behavior, this component provides developers with a professional solution for custom scrollable containers in modern React applications.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/scroll-area",
      officialDocs: "https://ui.shadcn.com/docs/components/scroll-area",
    },
    examples: [
      {
        name: "Default",
        description: "A standard vertical scroll area with custom-styled scrollbars for content overflow and list displays.",
        registryName: "scroll-area-demo",
      },
      {
        name: "Horizontal",
        description: "A horizontal scroll area for wide content, tables, and side-scrolling interfaces with custom scrollbar styling.",
        registryName: "scroll-area-horizontal-demo",
      }
    ],
  },
  {
    id: "select",
    name: "Select",
    description: "The Select component from Shadcn UI is a dropdown menu React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible form control provides developers with a polished alternative to native select elements, featuring custom styling, keyboard navigation, and search capabilities. Perfect for forms, filters, and option selection interfaces, the Shadcn select supports grouping, disabled options, placeholder text, and controlled/uncontrolled modes. With built-in scrolling for long lists and seamless integration with React Hook Form, this component offers full ARIA support and responsive behavior. Ideal for settings panels, data entry forms, and any interface requiring elegant option selection in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/select",
      officialDocs: "https://ui.shadcn.com/docs/components/select",
    },
    examples: [
      {
        name: "Default",
        description: "A standard select dropdown with options for basic form selection and data entry.",
        registryName: "select-demo",
      },
      {
        name: "Scrollable",
        description: "A scrollable select with many options demonstrating virtualization and efficient rendering for large datasets.",
        registryName: "select-scrollable",
      },
      {
        name: "Form",
        description: "A select integrated with React Hook Form demonstrating validation and form state management.",
        registryName: "select-form",
      },
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "The Sheet component from Shadcn UI is a side panel overlay React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component extends the Dialog functionality to display supplementary content from screen edges without leaving the current page context. Perfect for filter panels, shopping carts, detailed views, and navigation drawers, the Shadcn sheet supports multiple positions (left, right, top, bottom), scroll locking, and nested content. With built-in focus management, ARIA attributes, and smooth slide-in animations, this component provides developers with a flexible solution for contextual side panels in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sheet",
      officialDocs: "https://ui.shadcn.com/docs/components/sheet",
    },
    examples: [
      {
        name: "Default",
        description: "A standard sheet panel sliding from screen edge for supplementary content and contextual information.",
        registryName: "sheet-demo",
      },
      {
        name: "Side",
        description: "A sheet panel demonstrating multiple slide-in directions (left, right, top, bottom) for flexible positioning.",
        registryName: "sheet-side",
      }
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "The Skeleton component from Shadcn UI is a loading placeholder React element built with Tailwind CSS for Next.js applications, displaying animated placeholders while content loads. This accessible component creates shimmer effects that match the shape and size of loading content, improving perceived performance and user experience. Perfect for loading states in dashboards, lists, profile cards, and data-heavy interfaces, the Shadcn skeleton supports custom shapes, sizes, and animation speeds. With responsive behavior and customizable styling, this component provides developers with a professional solution for content loading states that reduce layout shift in modern React applications.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/skeleton",
      officialDocs: "https://ui.shadcn.com/docs/components/skeleton",
    },
    examples: [
      {
        name: "Default",
        description: "A standard skeleton loader with shimmer animation for content placeholders during data fetching and loading states.",
        registryName: "skeleton-demo",
      },
    ],
  },
  {
    id: "slider",
    name: "Slider",
    description: "The Slider component from Shadcn UI is a range input React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component allows users to select numeric values by dragging a handle along a track, perfect for volume controls, price ranges, and adjustable settings. Supporting single and multi-thumb configurations, min/max values, and step increments, the Shadcn slider integrates seamlessly with React Hook Form for form validation. With built-in keyboard navigation, ARIA attributes for screen readers, and customizable styling, this component provides developers with a smooth, interactive solution for range selection in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/slider",
      officialDocs: "https://ui.shadcn.com/docs/components/slider",
    },
    examples: [
      {
        name: "Default",
        description: "A standard range slider for numeric value selection with draggable handle for settings and adjustments.",
        registryName: "slider-demo",
      },
    ],
  },
  {
    id: "sonner",
    name: "Sonner (Toast)",
    description: "The Sonner Toast component from Shadcn UI is a notification React element built with the Sonner library and styled with Tailwind CSS for Next.js applications. This accessible component displays temporary messages, alerts, and notifications with smooth animations and automatic dismissal. Perfect for success confirmations, error messages, undo actions, and system notifications, the Shadcn toast supports multiple variants (success, error, warning), custom durations, and action buttons. With built-in stacking, promise handling for async operations, and customizable positioning, this component provides developers with a modern, elegant solution for toast notifications in modern React applications.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sonner",
      officialDocs: "https://ui.shadcn.com/docs/components/sonner",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toast notification with temporary message display for success confirmations and system alerts.",
        registryName: "sonner-demo",
      },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    description: "The Switch component from Shadcn UI is a toggle control React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component provides a binary on/off control with smooth animations and clear visual states. Perfect for settings panels, feature toggles, notification preferences, and form options, the Shadcn switch supports controlled and uncontrolled modes, disabled states, and keyboard navigation. With built-in ARIA attributes for screen reader support and seamless integration with React Hook Form, this WCAG-compliant component provides developers with an elegant alternative to checkboxes for boolean settings in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/switch",
      officialDocs: "https://ui.shadcn.com/docs/components/switch",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle switch for binary on/off controls in settings and preferences with smooth animations.",
        registryName: "switch-demo",
      },
      {
        name: "Form",
        description: "A switch integrated with React Hook Form demonstrating validation and form state management for toggle controls.",
        registryName: "switch-form",
      }
    ],
  },
  {
    id: "table",
    name: "Table",
    description: "The Table component from Shadcn UI is a responsive data display React element built with Tailwind CSS for Next.js applications, providing developers with semantic HTML table structures enhanced with modern styling. Perfect for dashboards, admin panels, data grids, and reporting interfaces, this component supports sorting, pagination, row selection, and custom cell rendering. With built-in responsive behavior that adapts to mobile screens, the Shadcn table integrates seamlessly with TanStack Table (React Table) for advanced features like filtering, grouping, and virtualization. Accessible with proper ARIA labels and keyboard navigation, it offers a professional solution for displaying structured data in modern React applications.",
    category: "data",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/table",
      officialDocs: "https://ui.shadcn.com/docs/components/table",
    },
    examples: [
      {
        name: "Default",
        description: "A standard data table with headers, rows, and cells for displaying structured information and datasets.",
        registryName: "table-demo",
      },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "The Tabs component from Shadcn UI is a navigation React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component organizes content into multiple panels with a tab interface, displaying one section at a time while maintaining clean, organized layouts. Perfect for settings pages, product details, documentation, and multi-view interfaces, the Shadcn tabs support keyboard navigation with Arrow keys, custom styling, and controlled/uncontrolled modes. With built-in ARIA attributes for screen reader support and smooth transitions between panels, this component provides developers with a professional solution for content organization and navigation in modern React applications.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tabs",
      officialDocs: "https://ui.shadcn.com/docs/components/tabs",
    },
    examples: [
      {
        name: "Default",
        description: "A standard tabs interface with multiple panels for organizing related content into switchable views.",
        registryName: "tabs-demo",
      },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "The Textarea component from Shadcn UI is a multi-line text input React element built with Tailwind CSS for Next.js applications, providing developers with accessible long-form text entry capabilities. Supporting auto-resize, character limits, and validation states, this component integrates seamlessly with React Hook Form and other form libraries. Perfect for comments, descriptions, feedback forms, and message inputs, the Shadcn textarea offers custom styling, disabled states, placeholder text, and error handling. With full keyboard navigation, ARIA support for screen readers, and responsive behavior, this component provides developers with a robust solution for multi-line text input in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/textarea",
      officialDocs: "https://ui.shadcn.com/docs/components/textarea",
    },
    examples: [
      {
        name: "Default",
        description: "A standard multi-line textarea for comments, descriptions, and long-form text entry in forms.",
        registryName: "textarea-demo",
      },
      {
        name: "Disabled",
        description: "A disabled textarea demonstrating non-interactive state for read-only content and locked fields.",
        registryName: "textarea-disabled",
      },
      {
        name: "With label",
        description: "A textarea with associated label demonstrating proper form accessibility and semantic HTML structure.",
        registryName: "textarea-with-label",
      },
      {
        name: "With text",
        description: "A textarea with helper text providing guidance, character counts, or additional context for users.",
        registryName: "textarea-with-text",
      },
      {
        name: "With button",
        description: "A textarea combined with action button for message submission and quick-action input patterns.",
        registryName: "textarea-with-button",
      },
      {
        name: "Form",
        description: "A textarea integrated with React Hook Form demonstrating validation and form state management for multi-line inputs.",
        registryName: "textarea-form",
      }
    ],
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "The Toggle component from Shadcn UI is a two-state button React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component switches between pressed and unpressed states, commonly used for formatting controls and filter options. Perfect for text editors, toolbar buttons, view switchers, and formatting controls like bold/italic, the Shadcn toggle supports multiple size variants, outline styles, and disabled states. With built-in ARIA attributes for screen reader support and keyboard navigation, this component provides developers with a clean solution for stateful button controls in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle button for two-state controls like bold text, favorites, and feature toggles.",
        registryName: "toggle-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle variant with border styling for subtle two-state button controls.",
        registryName: "toggle-outline",
      },
      {
        name: "Small",
        description: "A small toggle button for compact interfaces and toolbar controls with limited space.",
        registryName: "toggle-sm",
      },
      {
        name: "Large",
        description: "A large toggle button for prominent controls and touch-friendly mobile interfaces.",
        registryName: "toggle-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle demonstrating non-interactive state for locked or unavailable features.",
        registryName: "toggle-disabled",
      }
    ],
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    description: "The Toggle Group component from Shadcn UI is a group of toggle buttons React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component allows single or multiple selection among grouped options, commonly used for view modes and formatting toolbars. Perfect for text alignment controls, view switchers (list/grid), filter groups, and formatting toolbars, the Shadcn toggle group supports single and multiple selection modes, size variants, and custom spacing. With built-in ARIA attributes for screen reader support and keyboard navigation, this component provides developers with a professional solution for grouped stateful controls in modern React applications.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle-group",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle-group",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle group for single or multiple selection among related options like view modes and filters.",
        registryName: "toggle-group-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle group variant with border styling for subtle grouped controls.",
        registryName: "toggle-group-outline",
      },
      {
        name: "Small",
        description: "A small toggle group for compact toolbars and interfaces with limited space.",
        registryName: "toggle-group-sm",
      },
      {
        name: "Large",
        description: "A large toggle group for prominent controls and touch-friendly mobile interfaces.",
        registryName: "toggle-group-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle group demonstrating non-interactive state for locked options.",
        registryName: "toggle-group-disabled",
      },
      {
        name: "Spacing",
        description: "A toggle group with custom spacing between items for visual separation and clarity.",
        registryName: "toggle-group-spacing",
      }
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "The Tooltip component from Shadcn UI is a floating information popup built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible React component displays contextual help text, labels, and additional information when users hover over or focus on interactive elements. Perfect for icon buttons, truncated text, feature hints, and UI guidance, the Shadcn tooltip supports custom positioning, delay timing, and keyboard navigation. With built-in ARIA attributes for screen reader support and smart positioning to avoid viewport edges, this component provides developers with a WCAG-compliant solution for progressive disclosure and user assistance in modern React interfaces.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tooltip",
      officialDocs: "https://ui.shadcn.com/docs/components/tooltip",
    },
    examples: [
      {
        name: "Default",
        description: "A standard tooltip with informational text appearing on hover for UI hints and contextual help.",
        registryName: "tooltip-demo",
      },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "A loading spinner component for indicating async operations and loading states.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/spinner",
      officialDocs: "https://ui.shadcn.com/docs/components/spinner",
    },
    examples: [
      {
        name: "Default",
        description: "A spinner demo.",
        registryName: "spinner-demo",
      },
      {
        name: "Badge",
        description: "A spinner with badge.",
        registryName: "spinner-badge",
      },
      {
        name: "Basic",
        description: "A basic spinner.",
        registryName: "spinner-basic",
      },
      {
        name: "Button",
        description: "A spinner with button.",
        registryName: "spinner-button",
      },
      {
        name: "Color",
        description: "Spinner with different colors.",
        registryName: "spinner-color",
      },
      {
        name: "Custom",
        description: "A custom spinner.",
        registryName: "spinner-custom",
      },
      {
        name: "Empty",
        description: "An empty spinner.",
        registryName: "spinner-empty",
      },
      {
        name: "Input Group",
        description: "A spinner with input group.",
        registryName: "spinner-input-group",
      },
      {
        name: "Item",
        description: "A spinner with item.",
        registryName: "spinner-item",
      },
      {
        name: "Size",
        description: "Spinner with different sizes.",
        registryName: "spinner-size",
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


# Promo Banner Component Documentation

## Overview

The `PromoBanner` component is a set of attractive, low-profile banner designs created to drive traffic from the Shadcn UI Cheatsheet to the premium blocks and templates store at https://shadcnstore.com/blocks.

## Features

- ✨ **4 Distinct Design Variations** - Choose the style that best fits your layout
- 📱 **Fully Responsive** - Mobile-first design with proper breakpoints
- ♿ **Accessible** - ARIA labels, keyboard navigation, screen reader friendly
- 🎨 **Theme-Aware** - Works seamlessly with light and dark modes
- ⚡ **Performance Optimized** - Minimal bundle size, fast loading
- 🎯 **Clickable Surface** - Entire banner is clickable with hover effects

## Installation

The component is already integrated in the project. Simply import and use it:

```tsx
import PromoBanner from "@/components/marketing/promo-banner"
```

## Usage

### Basic Usage (Default - Notification Style)

```tsx
<PromoBanner />
```

### Choose a Specific Variant

```tsx
{/* Notification Style - Most minimal (60-80px height) */}
<PromoBanner variant="notification" />

{/* Horizontal Strip - Single row (60-80px height) */}
<PromoBanner variant="horizontal" />

{/* Compact Card - Two columns (80-100px height) */}
<PromoBanner variant="compact" />

{/* Featured Showcase - Most detailed (100-120px height) */}
<PromoBanner variant="featured" />
```

## Banner Variations

### 1. Notification Style Banner (Default)
**Height:** ~60-80px  
**Best For:** Minimal disruption, subtle promotion  
**Features:**
- Pulse animation on icon
- Shimmer effect on hover
- Compact single-line message
- Inline CTA

```tsx
<PromoBanner variant="notification" />
```

**Visual Hierarchy:**
```
[Icon with pulse] Premium Blocks & Templates Available — Description → [View →]
```

---

### 2. Horizontal Strip Banner
**Height:** ~60-80px  
**Best For:** Clean, balanced layout with clear messaging  
**Features:**
- Gradient background
- Animated shimmer effect on hover
- Icon + message + CTA button in single row
- Responsive text hiding on mobile

```tsx
<PromoBanner variant="horizontal" />
```

**Visual Hierarchy:**
```
[Icon] Premium Shadcn Blocks & Templates     [Explore Now →]
       Production-ready components...
```

---

### 3. Compact Card Banner
**Height:** ~80-100px  
**Best For:** Balanced information density  
**Features:**
- Card-style design with hover shadow
- Multiple feature badges (Ready to use, Save hours)
- Prominent CTA button (hidden on mobile)
- "New" badge indicator

```tsx
<PromoBanner variant="compact" />
```

**Visual Hierarchy:**
```
[Icon] Build Faster with Premium Blocks [New]    [Explore Blocks →]
       Production-ready components
       ⚡ Ready to use  ✨ Save hours
```

---

### 4. Featured Showcase Banner
**Height:** ~100-120px  
**Best For:** Maximum engagement and information  
**Features:**
- Dotted background pattern
- Gradient border and hover effects
- Multiple benefit indicators
- Component count badge
- Most detailed messaging

```tsx
<PromoBanner variant="featured" />
```

**Visual Hierarchy:**
```
[Large Icon] Ready-to-Use Shadcn Blocks [Premium]
             Professional templates and components to ship faster
             ⚡ Instant Integration  ✨ Production Ready  •  50+ Components
                                                    [Browse Collection →]
```

---

## Responsive Behavior

All variants adapt gracefully across different screen sizes:

### Mobile (< 640px)
- Text truncates appropriately
- Icons scale down
- Supporting text hides on smaller variants
- CTA text becomes icon-only on narrowest variants

### Tablet (640px - 1024px)
- Full text visible
- Balanced spacing
- Icons maintain size

### Desktop (> 1024px)
- Full experience with all details
- Hover effects fully visible
- Optimal spacing and typography

## Styling & Customization

### Theme Integration

The banners use Tailwind CSS and integrate with your theme system:

```tsx
// Uses theme-aware colors
bg-card              // Card background
text-foreground      // Primary text
text-muted-foreground // Secondary text
border               // Border color
bg-primary           // Primary brand color
text-primary         // Primary text color
```

### Custom Styling

Wrap the component to add custom styles:

```tsx
<div className="max-w-4xl mx-auto my-8">
  <PromoBanner variant="horizontal" />
</div>
```

### Modify Link Target

To change the destination URL, edit the component file:

```tsx
// In promo-banner.tsx
<Link
  href="https://your-custom-url.com"
  target="_blank"
  rel="noopener noreferrer"
>
```

## Accessibility

All banner variants include:

- **Semantic HTML**: Proper use of `<Link>` and ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Descriptive ARIA labels
- **Focus States**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant

```tsx
<Link
  aria-label="Explore premium Shadcn blocks and templates"
  // ... other props
>
```

## Performance

- **Bundle Size**: ~5KB gzipped (all variants)
- **No External Dependencies**: Uses only Lucide icons (already in project)
- **CSS Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Can be lazy-loaded if below fold

## Analytics & Tracking

To track banner clicks, you can add analytics:

```tsx
<Link
  href="https://shadcnstore.com/blocks"
  onClick={() => {
    // Your analytics code
    gtag('event', 'banner_click', {
      banner_variant: 'notification',
      destination: 'blocks_page'
    })
  }}
>
```

## A/B Testing

To A/B test different variants:

```tsx
const variants = ['notification', 'horizontal', 'compact', 'featured'] as const
const randomVariant = variants[Math.floor(Math.random() * variants.length)]

<PromoBanner variant={randomVariant} />
```

## Design Decisions

### Why Multiple Variations?

1. **Notification Style**: For sites that want minimal visual impact
2. **Horizontal Strip**: Best balance of visibility and space efficiency
3. **Compact Card**: When you need more information but still compact
4. **Featured Showcase**: Maximum engagement when space allows

### Color & Branding

All variants use:
- Primary brand color for accents
- Neutral backgrounds to avoid overwhelming
- Subtle gradients for visual interest
- Hover states for interaction feedback

### Animation Philosophy

- **Subtle by default**: Animations are smooth and non-distracting
- **Hover-triggered**: Major effects only show on interaction
- **Performance-first**: All animations use CSS transforms

## Integration Best Practices

### Placement Recommendations

1. **After Hero/Stats**: Current placement is optimal
2. **Between Content Sections**: Natural break in content
3. **Before Footer**: Last chance for conversion

### Avoid Placing

- At the very top (pushes content down)
- In the middle of related content
- Too close to other CTAs

### Testing Checklist

- [ ] Verify link opens in new tab
- [ ] Test on mobile, tablet, desktop
- [ ] Check light and dark mode
- [ ] Validate keyboard navigation
- [ ] Test with screen reader
- [ ] Verify hover states work
- [ ] Check loading performance

## Example Implementation

Here's how it's currently integrated in `app/page.tsx`:

```tsx
import PromoBanner from "@/components/marketing/promo-banner"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        {/* ... stats cards ... */}
        
        {/* Promo Banner - Notification variant for minimal disruption */}
        <div className="max-w-4xl mx-auto mb-8">
          <PromoBanner variant="notification" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* ... component grid ... */}
      </div>
    </>
  )
}
```

## Troubleshooting

### Banner not visible
- Check z-index if overlapped by other elements
- Verify container has proper width

### Styles not applying
- Ensure Tailwind is configured properly
- Check for CSS conflicts

### Link not working
- Verify `target="_blank"` for external links
- Check `rel="noopener noreferrer"` for security

### Animations choppy
- Reduce animation complexity on low-end devices
- Consider `prefers-reduced-motion` media query

## Future Enhancements

Potential improvements for future versions:

1. **Dismissible Option**: Allow users to close/hide the banner
2. **Session Storage**: Remember if user dismissed banner
3. **Custom Content Props**: Pass title, description as props
4. **Analytics Built-in**: Built-in click tracking
5. **Scheduled Display**: Show banner at specific times/dates
6. **Personalization**: Different messages for returning users

## License

Part of the Shadcn UI Cheatsheet project.

## Support

For issues or questions, please refer to the main project repository.

---

**Current Integration:** Notification variant is live on the homepage  
**Last Updated:** November 10, 2025  
**Maintained by:** Shadcn Store Team

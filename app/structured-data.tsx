import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://shadcnstore.com/cheatsheet",
  },
}

// Add JSON-LD structured data
export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://shadcnstore.com/cheatsheet#website",
        "url": "https://shadcnstore.com/cheatsheet",
        "name": "Shadcn UI Cheatsheet",
        "description": "Interactive cheatsheet for Shadcn/UI components with live previews and examples",
        "publisher": {
          "@id": "https://shadcnstore.com/cheatsheet#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://shadcnstore.com/cheatsheet#organization",
        "name": "SiliconDeck",
        "url": "https://silicondeck.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shadcnstore.com/cheatsheet/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://shadcnstore.com/cheatsheet#webpage",
        "url": "https://shadcnstore.com/cheatsheet",
        "name": "Shadcn UI Cheatsheet - Complete Component Guide & Examples",
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-12",
        "isPartOf": {
          "@id": "https://shadcnstore.com/cheatsheet#website"
        },
        "about": {
          "@type": "SoftwareApplication",
          "name": "Shadcn/UI",
          "description": "Component library built on Radix UI and Tailwind CSS"
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Shadcn UI Components",
          "description": "Complete list of Shadcn/UI components with examples",
          "numberOfItems": 46,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Button Component",
              "url": "https://shadcnstore.com/cheatsheet?component=button"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Dialog Component",
              "url": "https://shadcnstore.com/cheatsheet?component=dialog"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Shadcn/UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shadcn/UI is a component library built on Tailwind CSS and Radix UI primitives. Unlike traditional libraries, you copy components directly into your project, giving you full control over styling and behavior."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Shadcn/UI components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the shadcn-ui CLI to add components: npx shadcn-ui@latest add [component-name]. This copies the component files directly into your project."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize Shadcn/UI components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, since components are copied into your project, you have complete control. Modify styling, add props, or change behavior as needed."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

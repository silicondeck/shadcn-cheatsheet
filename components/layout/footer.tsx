/**
 * Footer component
 *
 * Contains organized links, newsletter signup, and attribution
 */

"use client"

import { FooterLink, FooterProps, FooterSection } from "@/types"
import { ExternalLink, MessageCircle, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Main footer component
 */
export function Footer({
  sections,
  attribution,
  attributionLink,
}: FooterProps) {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">

          {/* Community Section */}
          <div className="sm:col-span-3 lg:col-span-2">
            <ShadcnStoreCommunity />
          </div>

          {sections.map((section, index) => (
            <FooterSectionComponent key={index} {...section} />
          ))}
        </div>

        {/* Bottom section with attribution */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div
              className="text-sm text-muted-foreground"
              suppressHydrationWarning
            >
              © {new Date().getFullYear()} Shadcn Cheatsheet, <a
                href="https://shadcnstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
              >ShadcnStore</a>. All rights
              reserved.
            </div>
            <div className="text-sm">
              <a
                href={attributionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {attribution}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/**
 * Individual footer section component
 */
function FooterSectionComponent({ title, links }: FooterSection) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLinkComponent {...link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Individual footer link component
 */
function FooterLinkComponent({ label, href, external }: FooterLink) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      {...linkProps}
    >
      {label}
      {external && <ExternalLink className="h-3 w-3" />}
    </a>
  )
}

/**
 * ShadcnStore Community section
 */
export function ShadcnStoreCommunity() {
  const socialLinks = [
    {
      label: "Discord",
      href: "https://discord.gg/XEQhPc9a6p",
      icon: MessageCircle,
    },
    // {
    //   label: "LinkedIn",
    //   href: "#",
    //   icon: Linkedin,
    // },
    {
      label: "GitHub",
      href: "https://github.com/silicondeck/shadcn-cheatsheet",
      icon: Github,
    },
    {
      label: "Twitter",
      href: "https://x.com/shadcnstore",
      svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
</svg>,
    },
  ]

  return (
    <div className="lg:mr-16">
      <div className="flex items-center space-x-2 mb-4 max-lg:justify-center">
        <a href="https://shadcnstore.com" target='_blank' className="flex items-center space-x-2 cursor-pointer">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 24.75C26.4142 24.75 26.75 24.4142 26.75 24C26.75 23.5858 26.4142 23.25 26 23.25V24.75ZM26 23.25H11V24.75H26V23.25ZM8.75 21V15H7.25V21H8.75ZM11 23.25C9.75736 23.25 8.75 22.2426 8.75 21H7.25C7.25 23.0711 8.92893 24.75 11 24.75V23.25Z"
              fill="currentColor"
            />
            <path
              d="M1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4C0.75 4.41421 1.08579 4.75 1.5 4.75V3.25ZM1.5 4.75H6V3.25H1.5V4.75ZM7.25 6V21H8.75V6H7.25ZM6 4.75C6.69036 4.75 7.25 5.30964 7.25 6H8.75C8.75 4.48122 7.51878 3.25 6 3.25V4.75Z"
              fill="currentColor"
            />
            <path
              d="M22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 20.5858 22.4142 20.25 22 20.25V21.75ZM22 20.25H11V21.75H22V20.25ZM8.75 18V12H7.25V18H8.75ZM11 20.25C9.75736 20.25 8.75 19.2426 8.75 18H7.25C7.25 20.0711 8.92893 21.75 11 21.75V20.25Z"
              fill="currentColor"
            />
            <path
              d="M27.2057 19.754C27.0654 20.1438 26.6357 20.346 26.246 20.2057C25.8562 20.0654 25.654 19.6357 25.7943 19.246L27.2057 19.754ZM30.0361 9.67744L29.3305 9.4234L29.3305 9.4234L30.0361 9.67744ZM25.7943 19.246L29.3305 9.4234L30.7418 9.93148L27.2057 19.754L25.7943 19.246ZM28.1543 7.75L8 7.75V6.25L28.1543 6.25V7.75ZM29.3305 9.4234C29.6237 8.60882 29.0201 7.75 28.1543 7.75V6.25C30.059 6.25 31.3869 8.13941 30.7418 9.93148L29.3305 9.4234Z"
              fill="currentColor"
            />
            <path
              d="M13.5 21.75C13.0858 21.75 12.75 21.4142 12.75 21C12.75 20.5858 13.0858 20.25 13.5 20.25V21.75ZM26.7111 19.009L27.4174 19.2613L27.4174 19.2613L26.7111 19.009ZM13.5 20.25H23.8858V21.75H13.5V20.25ZM26.0048 18.7568L27.7937 13.7477L29.2063 14.2523L27.4174 19.2613L26.0048 18.7568ZM23.8858 20.25C24.8367 20.25 25.6849 19.6522 26.0048 18.7568L27.4174 19.2613C26.8843 20.7537 25.4706 21.75 23.8858 21.75V20.25Z"
              fill="currentColor"
            />
            <path d="M21.1694 10.5806L14.5651 17.1849" stroke="currentColor" />
            <path d="M22.1694 14.5806L18.5632 18.1868" stroke="currentColor" />
            <circle cx="13.1" cy="26.1" r="1.7" stroke="currentColor" />
            <circle cx="22.1" cy="26.1" r="1.7" stroke="currentColor" />
          </svg>
          <span className="font-bold text-xl">ShadcnStore</span>
        </a>
      </div>
      <p className="text-muted-foreground mb-6 max-lg:text-center max-lg:flex max-lg:justify-center">
        Accelerating web development with curated blocks, templates, landing pages, and admin dashboards designed for modern developers.
      </p>
      <div className="flex space-x-4 max-lg:justify-center">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              asChild
              className="h-9 w-9 p-0"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
              >
                {link.svg ? (
                  link.svg
                ) : IconComponent ? (
                  <IconComponent className="h-4 w-4" />
                ) : null}
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Newsletter signup component
 */
export function NewsletterSignup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    // Newsletter signup logging disabled for production
    // console.log("Newsletter signup submitted")
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Get the latest component updates and tips.
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
            required
          />
          <Button type="submit" size="sm" suppressHydrationWarning>
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  )
}

/**
 * Default footer sections configuration
 */
export const DEFAULT_FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Our Products",
    links: [
      { label: "ShadcnStore", href: "https://shadcnstore.com", external: true },
      {
        label: "Free Landing",
        href: "https://shadcnstore.com/templates/dashboard/shadcn-dashboard-landing-template/landing",
        external: true,
      },
      {
        label: "Free Dashboard",
        href: "https://shadcnstore.com/templates/dashboard/shadcn-dashboard-landing-template/dashboard",
        external: true,
      },
    ],
  },
  {
    title: "Pro Blocks",
    links: [
      {
        label: "Blocks",
        href: "https://shadcnstore.com/blocks",
        external: true,
      },
      {
        label: "Application",
        href: "https://shadcnstore.com/blocks/application",
        external: true,
      },
      {
        label: "E-commerce",
        href: "https://shadcnstore.com/blocks/e-commerce",
        external: true,
      },
      {
        label: "Marketing",
        href: "https://shadcnstore.com/blocks/marketing",
        external: true,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Components",
        href: "https://ui.shadcn.com/docs/components",
        external: true,
      },
      {
        label: "Theming",
        href: "https://ui.shadcn.com/docs/theming",
        external: true,
      },
      {
        label: "Registry",
        href: "https://ui.shadcn.com/docs/registry",
        external: true,
      },
      {
        label: "MCP Server",
        href: "https://ui.shadcn.com/docs/mcp",
        external: true,
      }
    ],
  },
]

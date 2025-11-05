"use client"

import React, { useCallback, useState } from "react"
import {
  Code,
  Copy,
  ExternalLink,
  Import,
  Package,
  Palette,
} from "lucide-react"
import { toast } from "sonner"

import { ComponentData } from "@/types/components"
import { ComponentVariant, ViewMode } from "@/types/core"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/**
 * Props for the ComponentCard component
 *
 * @interface ComponentCardProps
 */
export interface ComponentCardProps {
  /** Component data containing metadata, examples, and dependencies */
  component: ComponentData
  /** Current view mode for the component display */
  viewMode: ViewMode
  /** Whether the card is expanded to show detailed information */
  isExpanded?: boolean
  /** Callback fired when card expansion state changes */
  onToggleExpanded?: (id: string) => void
  /** Callback fired when user wants to preview a component variant */
  onPreview?: (component: ComponentData, variant?: ComponentVariant) => void
  /** Callback fired when user clicks on a category badge */
  onCategoryClick?: (category: string) => void
  /** Package manager to use for installation commands */
  packageManager?: "pnpm" | "npm" | "yarn" | "bun"
  /** Additional CSS classes for styling */
  className?: string
}

/**
 * ComponentCard displays shadcn/ui component information with interactive features
 *
 * Provides a comprehensive view of component details including:
 * - Component metadata (name, description, category)
 * - Installation commands for different package managers
 * - Code examples and variants
 * - Dependencies list with copy functionality
 * - Live preview integration
 *
 * @component
 * @example
 * ```tsx
 * <ComponentCard
 *   component={componentData}
 *   isExpanded={true}
 *   onToggleExpanded={handleToggle}
 *   packageManager="pnpm"
 * />
 * ```
 */
export const ComponentCard: React.FC<ComponentCardProps> = ({
  component,
  isExpanded = true, // Set default to true
  onToggleExpanded,
  onPreview,
  onCategoryClick,
  packageManager = "pnpm",
  className = "",
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [variantSourceCodes, setVariantSourceCodes] = useState<
    Record<string, string>
  >({})

  // Generate install command based on package manager
  const getInstallCommand = useCallback(
    (component: ComponentData) => {
      const commands = {
        npm: `npx shadcn@latest add ${component.id}`,
        yarn: `yarn shadcn@latest add ${component.id}`,
        pnpm: `pnpm dlx shadcn@latest add ${component.id}`,
        bun: `bunx --bun shadcn@latest add ${component.id}`,
      }
      return commands[packageManager]
    },
    [packageManager]
  )

  // Generate import statement for a variant
  const getImportStatement = useCallback(
    (component: ComponentData, variant?: ComponentVariant) => {
      const baseName = component.name
      if (variant) {
        return `import { ${baseName} } from "@/components/ui/${component.id}"`
      }
      return `import { ${baseName} } from "@/components/ui/${component.id}"`
    },
    []
  )

  // Fetch variant source code on demand
  const fetchVariantSourceCode = useCallback(
    async (variant: ComponentVariant) => {
      if (!variant._registryFile) return ""

      // Check if already cached
      if (variantSourceCodes[variant.id]) {
        return variantSourceCodes[variant.id]
      }

      try {
        const response = await fetch(
          `/api/registry/source?name=${variant._registryFile}`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch source code")
        }
        const data = await response.json()
        const sourceCode = data.content || ""

        // Cache the source code
        setVariantSourceCodes((prev) => ({
          ...prev,
          [variant.id]: sourceCode,
        }))

        return sourceCode
      } catch {
        toast.error("Failed to load source code")
        return ""
      }
    },
    [variantSourceCodes]
  )

  // Copy text to clipboard with feedback
  const copyToClipboard = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(label)
      toast.success(`${label} copied to clipboard!`)

      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedItem(null), 2000)
    } catch {
      toast.error(`Failed to copy ${label}`)
      // Copy errors disabled for production
    }
  }, [])

  return (
    <TooltipProvider>
      <div className={`relative group ${className}`}>
        <Card className="border shadow-md transition-all duration-200 hover:shadow-lg gap-0 py-0">
          {/* Card Header - Clickable for expand/collapse */}
          <CardHeader
            className={`!p-4 gap-0 cursor-pointer transition-all duration-200 ${
              isExpanded ? "border-b" : ""
            }`}
            onClick={() => onToggleExpanded && onToggleExpanded(component.id)}
          >
            <div className="flex 2xl:items-center items-start gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2 flex-1">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {component.name}
                </CardTitle>

                {/* Category Badge moved to header position */}
                {component.category && (
                  <Badge
                    variant="outline"
                    className="text-xs mr-1 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (component.category) {
                        onCategoryClick?.(component.category)
                      }
                    }}
                  >
                    <Palette className="w-3 h-3 mr-1" />
                    {component.category}
                  </Badge>
                )}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        copyToClipboard(
                          getInstallCommand(component),
                          "Install Command"
                        )
                      }}
                      className="flex-1 cursor-pointer"
                      disabled={copiedItem === "Install Command"}
                    >
                      <Package className="!w-4.5 !h-4.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy {packageManager} installation command</p>
                  </TooltipContent>
                </Tooltip>

                {component.docsUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(component.docsUrl, "_blank")
                        }}
                        className="flex-1 cursor-pointer"
                      >
                        <ExternalLink className="!w-4.5 !h-4.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open official documentation</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {/* {onToggleExpanded && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onToggleExpanded(component.id)}
                        className="h-8 w-8 p-0 cursor-pointer"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isExpanded ? 'Collapse details' : 'Expand details'}</p>
                    </TooltipContent>
                  </Tooltip>
                )} */}
              </div>
            </div>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="px-4">
            {/* Primary Actions */}
            {/* <div className="flex gap-2 mb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => copyToClipboard(getInstallCommand(component), 'Install Command')}
                        className="flex-1 cursor-pointer"
                    disabled={copiedItem === 'Install Command'}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    {copiedItem === 'Install Command' ? 'Copied!' : 'Install'}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy {packageManager} installation command</p>
                </TooltipContent>
              </Tooltip>

              {component.docsUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => window.open(component.docsUrl, '_blank')}
                      className="flex-1 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Docs
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open official documentation</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div> */}

            {/* Expandable Content */}
            <div
              className={`
              transition-all duration-300 ease-in-out overflow-hidden
              ${isExpanded ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0"}
            `}
            >
              {/* All Variants */}
              {component._originalComponent?.variants &&
                component._originalComponent.variants.length > 0 && (
                  <div
                    className={`${component.dependencies && component.dependencies.length > 0 ? "mb-4" : ""}`}
                  >
                    <div className="space-y-2">
                      {component._originalComponent.variants.map(
                        (variant: ComponentVariant) => (
                          <div
                            key={variant.id}
                            className="px-3 py-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                              if (onPreview) {
                                // Pass the component with specific variant context
                                onPreview(component, variant)
                              }
                              // Variant preview logging disabled for production
                              // console.log(
                              //   "Opening variant preview:",
                              //   variant.name
                              // )
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-sm">
                                {variant.name}
                              </span>
                              <div className="flex gap-1">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        copyToClipboard(
                                          getImportStatement(
                                            component,
                                            variant
                                          ),
                                          `${variant.name} Import`
                                        )
                                      }}
                                      className="h-6 w-6 p-0 cursor-pointer"
                                    >
                                      <Import className="w-3 h-3" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy import statement</p>
                                  </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={async (e) => {
                                        e.stopPropagation()
                                        const sourceCode =
                                          await fetchVariantSourceCode(variant)
                                        if (sourceCode) {
                                          copyToClipboard(
                                            sourceCode,
                                            `${variant.name} Usage`
                                          )
                                        }
                                      }}
                                      className="h-6 w-6 p-0 cursor-pointer"
                                    >
                                      <Code className="w-3 h-3" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy component usage</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Dependencies */}
              {component.dependencies && component.dependencies.length > 0 && (
                <div>
                  <Separator className="my-4" />
                  <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                    <Package className="w-4 h-4 mr-2" />
                    Dependencies
                  </h4>
                  <div className="space-y-1">
                    {component.dependencies.map((dep: string) => (
                      <div
                        key={dep}
                        className="flex items-center justify-between"
                      >
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {dep}
                        </code>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(dep, "Dependency")}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy dependency name</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}

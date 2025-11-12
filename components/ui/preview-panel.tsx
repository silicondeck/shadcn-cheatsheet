"use client"

import React, { useEffect } from "react"
import { Blocks, ChevronLeft, ChevronRight, Copy, ExternalLink, LayoutTemplate, X } from "lucide-react"
import { toast } from "sonner"

import { ComponentData } from "@/types/components"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface PreviewPanelProps {
  isOpen: boolean
  onClose: () => void
  component: ComponentData | null
  onNavigate?: (direction: "next" | "prev") => void
  children?: React.ReactNode
  packageManager?: "npm" | "yarn" | "pnpm" | "bun"
  currentIndex?: number
  totalComponents?: number
  variantDescription?: string // Add variant description prop
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  isOpen,
  onClose,
  component,
  onNavigate,
  children,
  packageManager = "npm",
  currentIndex,
  totalComponents,
  variantDescription, // Destructure the new prop
}) => {
  // Generate install command based on package manager
  const getInstallCommand = (component: ComponentData) => {
    const commands = {
      npm: `npx shadcn@latest add ${component.id}`,
      yarn: `yarn dlx shadcn@latest add ${component.id}`,
      pnpm: `pnpm dlx shadcn@latest add ${component.id}`,
      bun: `bunx shadcn@latest add ${component.id}`,
    }
    return commands[packageManager]
  }

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(`${label} copied to clipboard!`)
    } catch {
      toast.error(`Failed to copy ${label}`)
      // Copy errors disabled for production
      // console.error("Copy failed:", error)
    }
  }

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyNavigation = (event: KeyboardEvent) => {
      if (!onNavigate) return

      // Only handle navigation if not focused on input elements
      const activeElement = document.activeElement
      const isInputFocused =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement as HTMLElement).contentEditable === "true")

      if (isInputFocused) return

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        event.stopPropagation()
        onNavigate("prev")
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        event.stopPropagation()
        onNavigate("next")
      }
    }

    // Prevent scroll on mount - ensure we stay at the same area of page
    document.body.style.overflow = 'hidden'

    // Add single event listener
    document.addEventListener("keydown", handleKeyNavigation)

    return () => {
      document.removeEventListener("keydown", handleKeyNavigation)
      document.body.style.overflow = ''
    }
  }, [isOpen, onNavigate])

  return (
    <TooltipProvider>
      <Sheet key={component?.id} open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="right"
          className="w-[85%] max-w-none p-0 [&>button]:hidden gap-0 md:w-[75%] sm:max-w-none h-screen flex flex-col"
          style={{
            maxWidth: "none",
            height: "100vh",
          }}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SheetHeader className="p-4 border-b bg-muted/50 flex-shrink-0">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-4 flex-1">
                {/* Title and category badge */}
                <div className="flex items-center gap-3">
                  <SheetTitle className="text-lg font-semibold">
                    {component?.name || "Component Preview"}
                  </SheetTitle>
                  {component?.category && (
                    <Badge variant="outline" className="text-xs">
                      {component.category}
                    </Badge>
                  )}
                </div>

                {/* Navigation context with keyboard hints */}
                {/* {navigationContext && (
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-muted-foreground">
                      {navigationContext}
                    </p>
                  </div>
                )} */}
                {/* Component counter */}
                {currentIndex !== undefined &&
                  totalComponents !== undefined && (
                    <div className="px-3 py-1.5 text-xs text-muted-foreground bg-muted rounded border min-w-[80px] text-center">
                      {currentIndex + 1} of {totalComponents} Components
                    </div>
                  )}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Button size="sm" onClick={() => window.open('https://shadcnstore.com/blocks', '_blank')} className="cursor-pointer !px-4.5">
                  <Blocks className="w-4 h-4" />
                  Blocks
                </Button>
                <Button size="sm" onClick={() => window.open('https://shadcnstore.com/templates', '_blank')} className="cursor-pointer !px-4.5">
                  <LayoutTemplate className="w-4 h-4" />
                  Templates
                </Button>
                {/* Installation button */}
                {component && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            getInstallCommand(component),
                            "Install Command"
                          )
                        }
                        className="cursor-pointer"
                        autoFocus={false}
                        tabIndex={-1}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Installation
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{getInstallCommand(component)}</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {/* Navigation section */}
                {onNavigate && (
                  <div className="flex items-center gap-1">
                    {/* Previous button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onNavigate("prev")}
                          className="h-8 w-8 p-0 cursor-pointer"
                          autoFocus={false}
                          tabIndex={-1}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Previous component (←)</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Component counter */}
                    {/* {currentIndex !== undefined && totalComponents !== undefined && (
                      <div className="px-3 py-1.5 text-xs text-muted-foreground bg-muted rounded border min-w-[80px] text-center">
                        {currentIndex + 1} of {totalComponents}
                      </div>
                    )} */}

                    {/* Next button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onNavigate("next")}
                          className="h-8 w-8 p-0 cursor-pointer"
                          autoFocus={false}
                          tabIndex={-1}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Next component (→)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}

                {/* Docs link */}
                {component?.docsUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(component.docsUrl, "_blank")}
                        className="h-8 w-8 p-0 cursor-pointer"
                        autoFocus={false}
                        tabIndex={-1}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open documentation</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {/* add close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onClose()}
                  className="cursor-pointer h-8 w-8"
                  autoFocus={false}
                  tabIndex={-1}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Variant Description - displayed below the header */}
            {variantDescription && (
              <p className="text-sm text-muted-foreground">
                {variantDescription}
              </p>
            )}
          </SheetHeader>

          {/* Panel Content */}
          <div className="flex-1 overflow-hidden">{children}</div>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  )
}

export default PreviewPanel

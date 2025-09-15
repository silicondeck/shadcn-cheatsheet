"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Code2, Copy, Eye } from "lucide-react"
import { toast } from "sonner"

import { ComponentData } from "@/types/components"
import { ComponentVariant } from "@/types/core"
import { useRegistrySourceCode } from "@/hooks/use-registry-source"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CodeHighlighter from "@/components/ui/code-highlighter"
import LiveComponentPreview from "@/components/ui/live-component-preview"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface ComponentPreviewProps {
  component: ComponentData
  currentVariant?: ComponentVariant
  onVariantChange?: (variant: ComponentVariant) => void
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  component,
  currentVariant,
  onVariantChange,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  // Get the current variant or fallback to first variant
  const displayVariant =
    currentVariant || component._originalComponent?.variants?.[0]

  // Check if we should load source code from registry file
  const registryFile = displayVariant?._registryFile
  const { sourceCode: registrySourceCode, error: sourceCodeError } = useRegistrySourceCode(registryFile)

  // Get the current code to display - prefer registry source code over static code
  const currentCode = registryFile
    ? registrySourceCode
    : displayVariant?.code || ""

  // Log errors if any
  React.useEffect(() => {
    if (sourceCodeError) {
      if (sourceCodeError) {
    // Source code errors disabled for production
    // console.error('ComponentPreview source code error:', sourceCodeError, 'for registry file:', registryFile)
  }
    }
  }, [sourceCodeError, registryFile])

  // Copy to clipboard functionality - now uses current editable content
  const copyToClipboard = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(label)
      toast.success(`${label} copied to clipboard!`)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch {
      toast.error(`Failed to copy ${label}`)
      // Copy errors disabled for production
      // console.error("Copy failed:", error)
    }
  }, [])

  // Copy current code
  const copyCurrentCode = useCallback(async () => {
    await copyToClipboard(currentCode, "Component Code")
  }, [currentCode, copyToClipboard])

  // Reset copied state when variant changes
  useEffect(() => {
    setCopiedItem(null)
  }, [displayVariant?.id])

  if (!component) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>No component selected</p>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="h-full flex flex-col">
        {/* Variants Selection */}
        {component._originalComponent?.variants &&
          component._originalComponent.variants.length > 1 && (
            <div className="p-4 border-b flex-shrink-0">
              <h4 className="text-sm font-medium mb-3">Variants</h4>
              <div className="flex flex-wrap gap-2">
                {component._originalComponent.variants.map(
                  (variant: ComponentVariant) => (
                    <Button
                      key={variant.id}
                      variant={
                        displayVariant?.id === variant.id
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => onVariantChange?.(variant)}
                      className={`cursor-pointer ${displayVariant?.id === variant.id ? "border border-primary" : ""}`}
                    >
                      {variant.name}
                    </Button>
                  )
                )}
              </div>
            </div>
          )}
        {/* Preview and Code - Side by Side (Desktop) / Stacked (Mobile) */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0">
          {/* Live Preview Section - 50% width on desktop */}
          <div className="flex-1 lg:w-1/2 border-b lg:border-b-0 lg:border-r flex flex-col min-h-0">
            <div className="p-4 py-5.5 border-b bg-muted/30 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <h4 className="text-sm font-medium">Live Preview</h4>
              </div>
            </div>
            <div className="p-4 flex-1 lg:min-h-[300px] overflow-auto lg:overflow-visible">
              <LiveComponentPreview
                key={displayVariant?._registryFile || component.id}
                componentId={component.id}
                registryName={displayVariant?._registryFile}
              />
            </div>
          </div>

          {/* Code Section - 50% width on desktop */}
          <div className="flex-1 lg:w-1/2 flex flex-col min-h-0">
            <div className="p-4 border-b bg-muted/30 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <h4 className="text-sm font-medium">
                    {displayVariant?.name
                      ? `${displayVariant.name} - Usage Example`
                      : "Usage Example"}
                  </h4>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyCurrentCode}
                      disabled={copiedItem === "Component Code"}
                      className="cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="ms-2 sm:block hidden">
                        {copiedItem === "Component Code" ? "Copied!" : "Copy"}
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy current code snippet</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
              {displayVariant ? (
                <div className="">
                  <CodeHighlighter
                    code={currentCode}
                    language="tsx"
                    className="p-4 min-w-max"
                  />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <p>No code available</p>
                </div>
              )}
            </div>
          </div>
        </div>{" "}
        {/* Dependencies */}
        {component.dependencies && component.dependencies.length > 0 && (
          <div className="p-4 border-t flex-shrink-0 bg-background z-10">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium">Dependencies</h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const dependenciesText =
                        component.dependencies?.join("\n") || ""
                      copyToClipboard(dependenciesText, "Dependencies")
                    }}
                    className="cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="ml-2 sm:block hidden">Copy All</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy all dependencies</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-2">
              {component.dependencies.map((dep: string) => (
                <Badge
                  key={dep}
                  variant="outline"
                  className="font-mono text-xs"
                >
                  {dep}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export default ComponentPreview

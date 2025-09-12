/**
 * Control Panel Component
 *
 * Comprehensive control panel with search, package manager selector, and view controls
 */

"use client"

import React, { useState } from "react"
import { ControlPanelProps, PackageManager } from "@/types"
import { ChevronDown, ChevronUp, Grid3X3, List, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SearchBar } from "@/components/search/search-bar"

/**
 * Main control panel component
 */
export function ControlPanel({
  searchQuery,
  onSearchChange,
  onSearch,
  searchSuggestions = [],
  isSearchLoading = false,
  packageManager,
  onPackageManagerChange,
  viewMode,
  onViewModeChange,
  expandedState,
  onExpandedStateChange,
  totalComponents,
  filteredComponents,
  className,
}: ControlPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandAll = () => {
    onExpandedStateChange?.("expanded")
  }

  const handleCollapseAll = () => {
    onExpandedStateChange?.("collapsed")
  }

  const getExpandButtonText = () => {
    switch (expandedState) {
      case "expanded":
        return "Collapse All"
      case "collapsed":
        return "Expand All"
      default:
        return "Expand All"
    }
  }

  const getExpandButtonIcon = () => {
    switch (expandedState) {
      case "expanded":
        return <ChevronUp className="h-4 w-4" />
      case "collapsed":
        return <ChevronDown className="h-4 w-4" />
      default:
        return <ChevronDown className="h-4 w-4" />
    }
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Primary Controls Row */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search Section */}
        <div className="flex-1 max-w-2xl">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            onSearch={onSearch}
            suggestions={searchSuggestions}
            isLoading={isSearchLoading}
            placeholder="Search components... (try 'btn', 'modal', 'card')"
            className="w-full"
          />
        </div>

        {/* Actions Section */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Results Counter */}
          <div className="text-sm text-muted-foreground">
            {filteredComponents !== undefined && (
              <span>
                {filteredComponents} of {totalComponents} components
              </span>
            )}
          </div>

          {/* Advanced Controls Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden"
          >
            <Settings className="h-4 w-4 mr-2" />
            Controls
          </Button>
        </div>
      </div>

      {/* Secondary Controls Row */}
      <div
        className={cn(
          "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
          !isExpanded && "hidden lg:flex"
        )}
      >
        {/* Left Section - View Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">View:</span>
            <div className="flex rounded-md border">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("grid")}
                className="rounded-r-none border-r"
              >
                <Grid3X3 className="h-4 w-4" />
                <span className="ml-1 hidden sm:inline">Grid</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
                <span className="ml-1 hidden sm:inline">List</span>
              </Button>
            </div>
          </div>

          {/* Expand/Collapse All */}
          <Button
            variant="outline"
            size="sm"
            onClick={
              expandedState === "expanded" ? handleCollapseAll : handleExpandAll
            }
            className="flex items-center gap-2"
          >
            {getExpandButtonIcon()}
            {getExpandButtonText()}
          </Button>
        </div>

        {/* Right Section - Package Manager */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Package Manager:</span>
          <PackageManagerSelector
            value={packageManager}
            onValueChange={onPackageManagerChange}
          />
        </div>
      </div>

      {/* Search Status */}
      {searchQuery && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline">Search: &ldquo;{searchQuery}&rdquo;</Badge>
          {filteredComponents !== undefined && (
            <span>• {filteredComponents} results</span>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * Package manager selector component
 */
export function PackageManagerSelector({
  value,
  onValueChange,
  className,
}: {
  value: PackageManager
  onValueChange: (value: PackageManager) => void
  className?: string
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={cn("w-32", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="npm">npm</SelectItem>
        <SelectItem value="yarn">yarn</SelectItem>
        <SelectItem value="pnpm">pnpm</SelectItem>
        <SelectItem value="bun">bun</SelectItem>
      </SelectContent>
    </Select>
  )
}

/**
 * Compact control panel for smaller screens
 */
export function CompactControlPanel({
  searchQuery,
  onSearchChange,
  onSearch,
  searchSuggestions,
  isSearchLoading,
  packageManager,
  onPackageManagerChange,
  className,
}: Pick<
  ControlPanelProps,
  | "searchQuery"
  | "onSearchChange"
  | "onSearch"
  | "searchSuggestions"
  | "isSearchLoading"
  | "packageManager"
  | "onPackageManagerChange"
  | "className"
>) {
  return (
    <div className={cn("w-full space-y-3", className)}>
      {/* Search */}
      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
        onSearch={onSearch}
        suggestions={searchSuggestions}
        isLoading={isSearchLoading}
        placeholder="Search..."
        className="w-full"
      />

      {/* Package Manager */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Package Manager:</span>
        <PackageManagerSelector
          value={packageManager}
          onValueChange={onPackageManagerChange}
        />
      </div>
    </div>
  )
}

/**
 * Control panel keyboard shortcuts
 */
export const CONTROL_PANEL_SHORTCUTS = {
  SEARCH: "cmd+k,ctrl+k",
  TOGGLE_VIEW: "cmd+shift+v,ctrl+shift+v",
  EXPAND_ALL: "cmd+e,ctrl+e",
  COLLAPSE_ALL: "cmd+shift+e,ctrl+shift+e",
} as const

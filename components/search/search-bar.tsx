/**
 * Search Bar Component
 *
 * Advanced search input with keyboard shortcuts, suggestions, and debounced search
 */

"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { SearchBarProps } from "@/types"
import { Loader2, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Search bar with advanced features and keyboard shortcuts
 */
export function SearchBar({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "Search components...",
  suggestions = [],
  isLoading = false,
  autoFocus = false,
  debounceMs = 300,
  className,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Auto focus on mount if specified
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  // Keyboard shortcuts (Ctrl+K / Cmd+K to focus)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Debounced search effect
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (value.trim()) {
      debounceRef.current = setTimeout(() => {
        onSearch?.(value)
      }, debounceMs)
    }

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [value, onSearch, debounceMs])

  // Show/hide suggestions based on focus and availability
  useEffect(() => {
    const shouldShow =
      isFocused && suggestions.length > 0 && value.trim().length > 0
    setShowSuggestions(shouldShow)
    if (!shouldShow) {
      setSelectedSuggestionIndex(-1)
    }
  }, [isFocused, suggestions.length, value])

  // Handle input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
      setSelectedSuggestionIndex(-1)
    },
    [onChange]
  )

  // Handle input focus
  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  // Handle input blur with delay to allow suggestion clicks
  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setIsFocused(false)
    }, 200)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showSuggestions) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedSuggestionIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : 0
          )
          break

        case "ArrowUp":
          e.preventDefault()
          setSelectedSuggestionIndex((prev) =>
            prev > 0 ? prev - 1 : suggestions.length - 1
          )
          break

        case "Enter":
          e.preventDefault()
          if (selectedSuggestionIndex >= 0) {
            const selectedSuggestion = suggestions[selectedSuggestionIndex]
            onChange(selectedSuggestion)
            onSearch?.(selectedSuggestion)
          } else {
            onSearch?.(value)
          }
          setShowSuggestions(false)
          inputRef.current?.blur()
          break

        case "Escape":
          setShowSuggestions(false)
          inputRef.current?.blur()
          break
      }
    },
    [
      showSuggestions,
      suggestions,
      selectedSuggestionIndex,
      onChange,
      onSearch,
      value,
    ]
  )

  // Handle suggestion click
  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      onChange(suggestion)
      onSearch?.(suggestion)
      setShowSuggestions(false)
      inputRef.current?.focus()
    },
    [onChange, onSearch]
  )

  // Handle clear
  const handleClear = useCallback(() => {
    onChange("")
    onClear?.()
    inputRef.current?.focus()
  }, [onChange, onClear])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "pl-9 pr-20",
            showSuggestions && "rounded-b-none border-b-0"
          )}
        />

        {/* Loading indicator */}
        {isLoading && (
          <Loader2 className="absolute right-12 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}

        {/* Clear button */}
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0 hover:bg-transparent cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}

        {/* Keyboard shortcut hint */}
        {!isFocused && !value && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full rounded-b-md border border-t-0 bg-popover shadow-md"
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {suggestions.map((suggestion: string, index: number) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={cn(
                  "flex w-full items-center px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  index === selectedSuggestionIndex &&
                    "bg-accent text-accent-foreground"
                )}
              >
                <Search className="mr-2 h-3 w-3 text-muted-foreground" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Compact search bar for smaller spaces
 */
export function CompactSearchBar({
  className,
  ...props
}: Omit<SearchBarProps, "suggestions">) {
  return (
    <SearchBar
      {...props}
      className={cn("max-w-sm", className)}
      placeholder="Search..."
    />
  )
}

/**
 * Search keyboard shortcut display component
 */
export function SearchShortcut({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 text-xs text-muted-foreground",
        className
      )}
    >
      <span>Press</span>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
      <span>to search</span>
    </div>
  )
}

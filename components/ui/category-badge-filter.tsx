"use client"

import React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface CategoryBadgeFilterProps {
  value: string
  onValueChange: (value: string) => void
  categories: string[]
  componentCounts?: Record<string, number>
  className?: string
}

// Category display names (simplified - no icons or descriptions)
const CATEGORY_LABELS = {
  all: "All",
  layout: "Layout",
  forms: "Forms",
  "data-display": "Data",
  navigation: "Navigation",
  overlay: "Overlay",
  feedback: "Feedback",
} as const

export const CategoryBadgeFilter: React.FC<CategoryBadgeFilterProps> = ({
  value,
  onValueChange,
  categories,
  componentCounts = {},
  className = "",
}) => {
  // Add 'all' option to categories and sort
  const allCategories = ["all", ...categories.sort()]

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {allCategories.map((category) => {
        const label =
          CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] || category
        const count =
          category === "all"
            ? Object.values(componentCounts).reduce((sum, c) => sum + c, 0)
            : componentCounts[category]
        const isActive = value === category

        return (
          <Button
            key={category}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onValueChange(category)}
            className={`
              cursor-pointer transition-all duration-200 flex items-center gap-2 group
              ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md border border-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              }
            `}
          >
            <span>{label}</span>
            {count !== undefined && count > 0 && (
              <Badge
                variant="secondary"
                className={`
                  text-xs h-5 px-1.5 ml-1
                  ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-accent text-accent-foreground group-hover:bg-primary/10 transition-all duration-200"
                  }
                `}
              >
                {count}
              </Badge>
            )}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryBadgeFilter

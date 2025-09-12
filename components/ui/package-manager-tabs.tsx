"use client"

import React from "react"

import { PackageManager } from "@/types/core"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface PackageManagerTabsProps {
  value: PackageManager
  onValueChange: (value: PackageManager) => void
  className?: string
}

export const PackageManagerTabs: React.FC<PackageManagerTabsProps> = ({
  value,
  onValueChange,
  className = "",
}) => {
  return (
    <Tabs
      value={value}
      onValueChange={(newValue) => onValueChange(newValue as PackageManager)}
      className={className}
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="pnpm" className="text-xs cursor-pointer">
          pnpm
        </TabsTrigger>
        <TabsTrigger value="npm" className="text-xs cursor-pointer">
          npm
        </TabsTrigger>
        <TabsTrigger value="yarn" className="text-xs cursor-pointer">
          yarn
        </TabsTrigger>
        <TabsTrigger value="bun" className="text-xs cursor-pointer">
          bun
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default PackageManagerTabs

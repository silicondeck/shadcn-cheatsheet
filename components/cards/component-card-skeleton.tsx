import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton loader for ComponentCard while lazy component loads
 *
 * Provides a visual placeholder that matches the ComponentCard layout
 * to prevent layout shift during component loading.
 */
export function ComponentCardSkeleton() {
  return (
    <Card className="border shadow-md">
      <CardHeader className="!p-4 gap-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            {/* Component name skeleton */}
            <Skeleton className="h-6 w-32" />
            {/* Category badge skeleton */}
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          {/* Action buttons skeleton */}
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        {/* Description skeleton */}
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  )
}

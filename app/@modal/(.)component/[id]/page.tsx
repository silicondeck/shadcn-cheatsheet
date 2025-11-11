import React, { Suspense } from "react"
import InterceptedComponentModal from "./intercepted-component-modal"

function ComponentPageFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-8"></div>
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

export default async function InterceptedComponentPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Suspense fallback={<ComponentPageFallback />}>
      <InterceptedComponentModal componentId={id} />
    </Suspense>
  )
}

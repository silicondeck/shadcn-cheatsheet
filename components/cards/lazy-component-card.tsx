import { lazy } from "react"

import { ComponentCardProps } from "./component-card"

/**
 * Lazy-loaded ComponentCard for improved performance
 *
 * This version only loads the full ComponentCard component when it's needed,
 * reducing the initial bundle size and improving page load times.
 */
const LazyComponentCard = lazy(() =>
  import("./component-card").then((module) => ({
    default: module.ComponentCard,
  }))
)

export default LazyComponentCard
export type { ComponentCardProps }

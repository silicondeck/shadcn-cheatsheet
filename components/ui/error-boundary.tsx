import React, { Component, ReactNode } from "react"
import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface Props {
  children?: ReactNode
  fallback?: React.ComponentType<{ error?: Error; retry?: () => void }>
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Default error fallback component
 *
 * @param props - Error details and retry function
 */
const DefaultErrorFallback: React.FC<{ error?: Error; retry?: () => void }> = ({
  error,
  retry,
}) => (
  <Alert variant="destructive" className="m-4">
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>Something went wrong</AlertTitle>
    <AlertDescription className="mt-2">
      <p className="mb-3">
        {error?.message ||
          "An unexpected error occurred while loading this component."}
      </p>
      {retry && (
        <Button variant="outline" size="sm" onClick={retry}>
          Try again
        </Button>
      )}
    </AlertDescription>
  </Alert>
)

/**
 * ComponentErrorBoundary catches JavaScript errors in child components
 * and displays a fallback UI instead of crashing the entire application.
 *
 * Designed specifically for handling component preview and loading errors
 * in the shadcn/ui cheatsheet application.
 *
 * @component
 * @example
 * ```tsx
 * <ComponentErrorBoundary fallback={CustomErrorComponent}>
 *   <ComponentPreview component={component} />
 * </ComponentErrorBoundary>
 * ```
 */
export class ComponentErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  public componentDidCatch() {
    // Error reporting disabled for production
    // console.error("ComponentErrorBoundary caught an error:", error, errorInfo)

    // In a real app, you might want to send this to an error reporting service
    // if (typeof window !== "undefined") {
    //   console.error("Error details:", { error, errorInfo })
    // }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback || DefaultErrorFallback
      return <Fallback error={this.state.error} retry={this.handleRetry} />
    }

    return this.props.children
  }
}

export default ComponentErrorBoundary

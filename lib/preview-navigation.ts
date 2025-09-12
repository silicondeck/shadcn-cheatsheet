import { ComponentData } from "@/types/components"
import { ComponentVariant } from "@/types/core"

export interface NavigationState {
  componentIndex: number
  variantIndex: number
  component: ComponentData
  variant?: ComponentVariant
  context: string
}

export class PreviewNavigationManager {
  private components: ComponentData[]
  private currentState: NavigationState | null = null

  constructor(components: ComponentData[]) {
    this.components = components
  }

  // Initialize navigation with a specific component
  initializeNavigation(
    component: ComponentData,
    variant?: ComponentVariant
  ): NavigationState {
    let componentIndex = this.components.findIndex(
      (c) => c.id === component.id
    )

    // If component is not in the current navigation list (e.g., filtered out by category)
    // temporarily add it to the navigation list for preview purposes
    if (componentIndex === -1) {
      // Component not in current navigation list, adding temporarily for preview
      this.components.push(component)
      componentIndex = this.components.length - 1
    }

    const variants = component._originalComponent?.variants || []
    const variantIndex = variant
      ? variants.findIndex((v) => v.id === variant.id)
      : 0

    this.currentState = {
      componentIndex,
      variantIndex: Math.max(0, variantIndex),
      component,
      variant: variants[Math.max(0, variantIndex)],
      context: this.generateContext(componentIndex),
    }

    return this.currentState
  }

  // Navigate to next item (component only)
  navigateNext(): NavigationState | null {
    if (!this.currentState) return null

    const { componentIndex } = this.currentState

    // Move to next component
    if (componentIndex < this.components.length - 1) {
      const newComponentIndex = componentIndex + 1
      const newComponent = this.components[newComponentIndex]
      const newVariants = newComponent._originalComponent?.variants || []

      this.currentState = {
        componentIndex: newComponentIndex,
        variantIndex: 0,
        component: newComponent,
        variant: newVariants[0],
        context: this.generateContext(newComponentIndex),
      }
      return this.currentState
    }

    // At the end, stay at current position
    return this.currentState
  }

  // Navigate to previous item (component only)
  navigatePrevious(): NavigationState | null {
    if (!this.currentState) return null

    const { componentIndex } = this.currentState

    // Move to previous component
    if (componentIndex > 0) {
      const newComponentIndex = componentIndex - 1
      const newComponent = this.components[newComponentIndex]
      const newVariants = newComponent._originalComponent?.variants || []

      this.currentState = {
        componentIndex: newComponentIndex,
        variantIndex: 0,
        component: newComponent,
        variant: newVariants[0],
        context: this.generateContext(newComponentIndex),
      }
      return this.currentState
    }

    // At the beginning, stay at current position
    return this.currentState
  }

  // Get current navigation state
  getCurrentState(): NavigationState | null {
    return this.currentState
  }

  // Check if we can navigate in either direction
  canNavigateNext(): boolean {
    if (!this.currentState) return false

    const { componentIndex, variantIndex, component } = this.currentState
    const variants = component._originalComponent?.variants || []

    // Can navigate if there are more variants or more components
    return (
      variantIndex < variants.length - 1 ||
      componentIndex < this.components.length - 1
    )
  }

  canNavigatePrevious(): boolean {
    if (!this.currentState) return false

    const { componentIndex, variantIndex } = this.currentState

    // Can navigate if we're not at the first variant of the first component
    return componentIndex > 0 || variantIndex > 0
  }

  // Generate context string for display - simplified to show only component position
  private generateContext(componentIndex: number): string {
    const totalComponents = this.components.length
    return `${componentIndex + 1}/${totalComponents} Components`
  }

  // Update components list (useful when search results change)
  updateComponents(components: ComponentData[]): void {
    this.components = components
    this.currentState = null // Reset state when components change
  }

  // Find component by ID
  findComponent(componentId: string): ComponentData | undefined {
    return this.components.find((c) => c.id === componentId)
  }

  // Get total navigation items count
  getTotalItemsCount(): number {
    return this.components.reduce((total, component) => {
      const variantCount = component._originalComponent?.variants?.length || 1
      return total + variantCount
    }, 0)
  }

  // Get total components count
  getTotalComponents(): number {
    return this.components.length
  }
}

export default PreviewNavigationManager

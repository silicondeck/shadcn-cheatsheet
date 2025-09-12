export interface ThemePreset {
  label?: string
  createdAt?: string
  styles: {
    light: Record<string, string>
    dark: Record<string, string>
  }
}

export interface ColorTheme {
  name: string
  value: string
  preset: ThemePreset
}

export interface RadiusOption {
  name: string
  value: string
}

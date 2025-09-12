"use client"

import { Dices, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useThemeManager } from '@/hooks/use-theme-manager'
import { useCircularTransition } from '@/hooks/use-circular-transition'
import { colorThemes, tweakcnThemes } from '@/config/theme-data'
import { radiusOptions } from '@/config/theme-customizer-constants'
import React from 'react'
import "./circular-transition.css"

interface ThemeTabProps {
  selectedTheme: string
  setSelectedTheme: (theme: string) => void
  selectedTweakcnTheme: string
  setSelectedTweakcnTheme: (theme: string) => void
  selectedRadius: string
  setSelectedRadius: (radius: string) => void
}

export function ThemeTab({
  selectedTheme,
  setSelectedTheme,
  selectedTweakcnTheme,
  setSelectedTweakcnTheme,
  selectedRadius,
  setSelectedRadius
}: ThemeTabProps) {
  const {
    isDarkMode,
    setBrandColorsValues,
    applyTheme,
    applyTweakcnTheme,
    applyRadius
  } = useThemeManager()

  const { toggleTheme } = useCircularTransition()

  const handleRandomShadcn = () => {
    // Apply a random shadcn theme
    const randomTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
    setSelectedTheme(randomTheme.value)
    setSelectedTweakcnTheme("") // Clear tweakcn selection
    setBrandColorsValues({}) // Clear brand colors state
    applyTheme(randomTheme.value, isDarkMode)
  }

  const handleRandomTweakcn = () => {
    // Apply a random tweakcn theme
    const randomTheme = tweakcnThemes[Math.floor(Math.random() * tweakcnThemes.length)]
    setSelectedTweakcnTheme(randomTheme.value)
    setSelectedTheme("") // Clear shadcn selection
    setBrandColorsValues({}) // Clear brand colors state
    applyTweakcnTheme(randomTheme.preset, isDarkMode)
  }

  const handleRadiusSelect = (radius: string) => {
    setSelectedRadius(radius)
    applyRadius(radius)
  }

  const handleLightMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode === false) return
    toggleTheme(event)
  }

  const handleDarkMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode === true) return
    toggleTheme(event)
  }

  return (
    <div className="p-4 space-y-6">
      {/* Shadcn UI Theme Presets */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Theme Presets</Label>
          <Button variant="outline" size="sm" onClick={handleRandomShadcn} className="cursor-pointer">
            <Dices className="h-3.5 w-3.5 mr-1.5" />
            Random
          </Button>
        </div>

        <Select value={selectedTheme} onValueChange={(value) => {
          setSelectedTheme(value)
          setSelectedTweakcnTheme("") // Clear tweakcn selection
          setBrandColorsValues({}) // Clear brand colors state
          applyTheme(value, isDarkMode)
        }}>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Choose Theme" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <div className="p-2">
              {colorThemes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.primary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.secondary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.accent }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.muted }}
                      />
                    </div>
                    <span>{theme.name}</span>
                  </div>
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Tweakcn Theme Presets */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Tweakcn Theme Presets</Label>
          <Button variant="outline" size="sm" onClick={handleRandomTweakcn} className="cursor-pointer">
            <Dices className="h-3.5 w-3.5 mr-1.5" />
            Random
          </Button>
        </div>

        <Select value={selectedTweakcnTheme} onValueChange={(value) => {
          setSelectedTweakcnTheme(value)
          setSelectedTheme("") // Clear shadcn selection
          setBrandColorsValues({}) // Clear brand colors state
          const selectedPreset = tweakcnThemes.find(t => t.value === value)?.preset
          if (selectedPreset) {
            applyTweakcnTheme(selectedPreset, isDarkMode)
          }
        }}>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Choose Tweakcn Theme" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <div className="p-2">
              {tweakcnThemes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.primary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.secondary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.accent }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.muted }}
                      />
                    </div>
                    <span>{theme.name}</span>
                  </div>
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Radius Selection */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Radius</Label>
        <div className="grid grid-cols-5 gap-2">
          {radiusOptions.map((option) => (
            <div
              key={option.value}
              className={`relative cursor-pointer rounded-md p-3 border transition-colors ${
                selectedRadius === option.value
                  ? "border-primary"
                  : "border-border hover:border-border/60"
              }`}
              onClick={() => handleRadiusSelect(option.value)}
            >
              <div className="text-center">
                <div className="text-xs font-medium">{option.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Mode Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Mode</Label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={!isDarkMode ? "secondary" : "outline"}
            size="sm"
            onClick={handleLightMode}
            className="cursor-pointer"
          >
            <Sun className="h-4 w-4 mr-1" />
            Light
          </Button>
          <Button
            variant={isDarkMode ? "secondary" : "outline"}
            size="sm"
            onClick={handleDarkMode}
            className="cursor-pointer"
          >
            <Moon className="h-4 w-4 mr-1" />
            Dark
          </Button>
        </div>
      </div>
    </div>
  )
}

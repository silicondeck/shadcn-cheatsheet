"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface CodeHighlighterProps {
  code: string
  language?: string
  className?: string
}

// Lazy load shiki to avoid WASM loading issues with Turbopack
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let highlighterPromise: Promise<any> | null = null

const getHighlighter = async () => {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then(async (shiki) => {
      try {
        return await shiki.createHighlighter({
          themes: ["github-dark", "github-light"],
          langs: [
            "tsx",
            "typescript",
            "javascript",
            "jsx",
            "json",
            "bash",
            "css",
            "html",
          ],
        })
      } catch (error) {
        console.error("Failed to initialize Shiki highlighter:", error)
        return null
      }
    })
  }
  return highlighterPromise
}

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language = "tsx",
  className = "",
}) => {
  const { theme: systemTheme, resolvedTheme } = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [highlighter, setHighlighter] = useState<any | null>(null)
  const [highlightedCode, setHighlightedCode] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Determine the appropriate Shiki theme based on the current theme
  const getShikiTheme = useCallback(() => {
    const currentTheme = resolvedTheme || systemTheme
    return currentTheme === "dark" ? "github-dark" : "github-light"
  }, [resolvedTheme, systemTheme])

  useEffect(() => {
    const initHighlighter = async () => {
      try {
        const shiki = await getHighlighter()
        if (shiki) {
          setHighlighter(shiki)
        }
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load highlighter:", error)
        setIsLoading(false)
      }
    }

    initHighlighter()
  }, [])

  useEffect(() => {
    if (highlighter && code) {
      try {
        const shikiTheme = getShikiTheme()
        const highlighted = highlighter.codeToHtml(code, {
          lang: language,
          theme: shikiTheme,
          transformers: [
            {
              name: "remove-pre-background",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              pre(node: any) {
                // Remove background from pre tag to use our own styling
                if (node.properties.style) {
                  node.properties.style = (
                    node.properties.style as string
                  ).replace(/background-color:[^;]+;?/, "")
                }
              },
            },
          ],
        })
        setHighlightedCode(highlighted)
      } catch (error) {
        console.error("Failed to highlight code:", error)
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${code}</code></pre>`)
      }
    }
  }, [highlighter, code, language, getShikiTheme])

  if (isLoading || !highlightedCode) {
    // Loading state with skeleton
    return (
      <div className={`w-full h-full p-4 bg-background ${className}`}>
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`w-full h-full overflow-auto bg-background ${className}`}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
      style={{
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    />
  )
}

export default CodeHighlighter

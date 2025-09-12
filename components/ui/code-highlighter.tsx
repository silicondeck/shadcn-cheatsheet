"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { createHighlighter, type Highlighter } from "shiki"

interface CodeHighlighterProps {
  code: string
  language?: string
  className?: string
}

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language = "tsx",
  className = "",
}) => {
  const { theme: systemTheme, resolvedTheme } = useTheme()
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null)
  const [highlightedCode, setHighlightedCode] = useState<string>("")

  // Determine the appropriate Shiki theme based on the current theme
  const getShikiTheme = useCallback(() => {
    const currentTheme = resolvedTheme || systemTheme
    return currentTheme === "dark" ? "github-dark" : "github-light"
  }, [resolvedTheme, systemTheme])

  useEffect(() => {
    const initHighlighter = async () => {
      try {
        const shiki = await createHighlighter({
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
        setHighlighter(shiki)
      } catch {
        // Shiki highlighter errors disabled for production
        // console.error("Failed to initialize Shiki highlighter:", error)
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
              pre(node) {
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
      } catch {
        // Code highlighting errors disabled for production
        // console.error("Failed to highlight code:", error)
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${code}</code></pre>`)
      }
    }
  }, [highlighter, code, language, getShikiTheme])

  if (!highlightedCode) {
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

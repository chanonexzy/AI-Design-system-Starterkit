"use client"

import * as React from "react"
import { ResponsiveContainer, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
    color?: string
  }
}

// recharts v3 no longer exports Payload / ValueType at top-level;
// define a minimal shape that matches what <Tooltip> actually passes down.
interface TooltipPayloadItem {
  value?: number | string
  name?: string
  color?: string
  payload?: Record<string, unknown>
}

// ----------------------------------------------------------------------------
// ChartContainer
// ----------------------------------------------------------------------------

function ChartContainer({
  config,
  className,
  children,
}: {
  config: ChartConfig
  className?: string
  children: React.ReactElement
}) {
  // Build CSS-variable map  →  --color-desktop: #0090ff
  const cssVars = Object.fromEntries(
    Object.entries(config).map(([key, val]) => [`--color-${key}`, val.color])
  )

  return (
    <div
      className={cn("w-full h-full", className)}
      style={{
        ...cssVars,
        display: "flex",
        width: "100%",
        height: "100%",
      } as React.CSSProperties}
    >
      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}

// ----------------------------------------------------------------------------
// ChartTooltip  (thin re-export so pages can import from one place)
// ----------------------------------------------------------------------------

const ChartTooltip = Tooltip

// ----------------------------------------------------------------------------
// ChartTooltipContent
// ----------------------------------------------------------------------------

function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "dot",
  config,
}: {
  active?: boolean
  payload?: readonly TooltipPayloadItem[]
  label?: string | number
  indicator?: "dot" | "line" | "none"
  config?: ChartConfig
}) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="rounded-lg border bg-background p-3 shadow-md">
      {label && (
        <p className="mb-1.5 text-xs font-medium text-muted-foreground">
          {label}
        </p>
      )}
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => {
          const key = item.name || ""
          const itemConfig = config?.[key]
          const color = item.color || itemConfig?.color || "currentColor"
          const itemLabel = itemConfig?.label || key

          return (
            <div key={i} className="flex items-center gap-2 text-sm">
              {indicator !== "none" && (
                <span
                  className={cn(
                    "inline-block shrink-0",
                    indicator === "dot" ? "rounded-full size-2.5" : "h-3 w-0.5 rounded-sm"
                  )}
                  style={{ backgroundColor: color }}
                />
              )}
              <span className="text-muted-foreground">{itemLabel}</span>
              <span className="ml-auto font-medium text-foreground">
                {typeof item.value === "number"
                  ? item.value.toLocaleString()
                  : item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }

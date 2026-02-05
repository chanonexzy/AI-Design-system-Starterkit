"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// ----------------------------------------------------------------------------
// ChartConfig
// ----------------------------------------------------------------------------

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
    color?: string
  }
}

// ----------------------------------------------------------------------------
// ChartContainer
// ----------------------------------------------------------------------------

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ReactElement<typeof RechartsPrimitive.ResponsiveContainer>
  }
>(({ className, children, config, ...props }, ref) => {
  const cssVariables = React.useMemo(() => {
    const vars: Record<string, string> = {}
    for (const [key, value] of Object.entries(config)) {
      if (value.color) {
        vars[`--color-${key}`] = value.color
      }
    }
    return vars
  }, [config])

  return (
    <div
      ref={ref}
      data-slot="chart-container"
      className={cn("flex aspect-square w-full", className)}
      style={cssVariables as React.CSSProperties}
      {...props}
    >
      <RechartsPrimitive.ResponsiveContainer>
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  )
})

ChartContainer.displayName = "ChartContainer"

// ----------------------------------------------------------------------------
// ChartTooltip
// ----------------------------------------------------------------------------

const ChartTooltip = RechartsPrimitive.Tooltip

interface TooltipPayloadItem {
  dataKey?: string
  value?: number | string
  color?: string
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: React.ReactNode
  className?: string
  config?: ChartConfig
  indicator?: "dashed" | "dot" | "line" | "none"
  hideLabel?: boolean
  hideIndicator?: boolean
  labelFormatter?: (label: React.ReactNode, payload: TooltipPayloadItem[]) => React.ReactNode
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      className,
      indicator = "dashed",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      config = {},
    },
    ref
  ) => {
    if (!active || !payload || payload.length === 0) return null

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-md",
          className
        )}
      >
        {!hideLabel && (
          <div className="font-medium text-foreground">
            {labelFormatter ? labelFormatter(label, payload) : label}
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          {payload.map((item, index) => {
            const key = (item.dataKey as string) || ""
            const itemConfig = config[key]
            const color = itemConfig?.color || item.color

            return (
              <div key={index} className="flex items-center gap-2">
                {indicator !== "none" && !hideIndicator && (
                  <div
                    className={cn(
                      "h-2.5 w-2.5 shrink-0 rounded-[2px]",
                      indicator === "dot" && "rounded-full"
                    )}
                    style={{ backgroundColor: color }}
                  />
                )}
                <span className="text-muted-foreground">
                  {itemConfig?.label || key}
                </span>
                <span className="ml-auto font-medium tabular-nums text-foreground">
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
)

ChartTooltipContent.displayName = "ChartTooltipContent"

// ----------------------------------------------------------------------------
// Exports
// ----------------------------------------------------------------------------

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
}

"use client"

import React, { useState, useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart"

// ----------------------------------------------------------------------------
// Data generation — 83 days: Apr 9 → Jun 30, Desktop + Mobile
// ----------------------------------------------------------------------------

function generateDailyData(): Array<{
  date: string
  desktop: number
  mobile: number
}> {
  const data: { date: string; desktop: number; mobile: number }[] = []
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

  // seed-like deterministic pseudo-random
  let seed = 42
  function rand() {
    seed = (seed * 1664525 + 1013904223) & 0x7fffffff
    return seed / 0x7fffffff
  }

  const startMonth = 3 // Apr (0-indexed)
  const startDay = 9
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31] // Jan–Jul

  let month = startMonth
  let day = startDay

  for (let i = 0; i < 83; i++) {
    const desktop = Math.round(200 + rand() * 200)
    const mobile = Math.round(200 + rand() * 200)
    data.push({
      date: `${months[month]} ${day}`,
      desktop,
      mobile,
    })

    day++
    if (day > daysInMonth[month]) {
      day = 1
      month++
    }
  }

  return data
}

const chartConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "#0090ff" },
  mobile: { label: "Mobile", color: "#0090ff" },
}

// ----------------------------------------------------------------------------
// X-Axis tick filter — show ~9 evenly spaced labels
// ----------------------------------------------------------------------------

function getVisibleTicks(data: { date: string }[]) {
  const indices = [0, 10, 20, 30, 40, 50, 60, 70, data.length - 1]
  return indices.filter((i) => i < data.length).map((i) => data[i].date)
}

// ----------------------------------------------------------------------------
// Page component
// ----------------------------------------------------------------------------

export default function ChartPage() {
  const data = useMemo(() => generateDailyData(), [])
  const [activeMetric, setActiveMetric] = useState<"desktop" | "mobile">("desktop")
  const visibleTicks = useMemo(() => getVisibleTicks(data), [data])

  const totals = useMemo(() => {
    return {
      desktop: data.reduce((sum, d) => sum + d.desktop, 0),
      mobile: data.reduce((sum, d) => sum + d.mobile, 0),
    }
  }, [data])

  return (
    <div className="min-h-screen bg-background p-14">
      {/* Outer card */}
      <div className="mx-auto max-w-[782px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Chart
            </h1>
            <p className="text-base text-muted-foreground">
              Beautiful charts. Built using Recharts. Copy and paste into your
              apps.
            </p>
          </div>

          {/* View in Shadcn button */}
          <a
            href="https://ui.shadcn.com/docs/components/chart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* Inner chart card */}
        <div className="mt-10 rounded-lg border bg-white">
          {/* Card header: title + subtitle + stat buttons */}
          <div className="border-b px-6 py-5">
            <div className="flex items-start justify-between gap-4">
              {/* Left: title + subtitle */}
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-semibold text-foreground">
                  Bar Chart – Interactive
                </h2>
                <p className="text-sm text-muted-foreground">
                  Showing total visitors for the last 3 months
                </p>
              </div>

              {/* Right: stat toggle buttons */}
              <div className="flex">
                <button
                  onClick={() => setActiveMetric("desktop")}
                  className={cn(
                    "flex flex-col gap-1 border-l px-8 py-6 text-left transition-colors",
                    activeMetric === "desktop"
                      ? "border-foreground bg-secondary"
                      : "border-transparent bg-secondary hover:bg-muted"
                  )}
                >
                  <span className="text-xs text-muted-foreground">Desktop</span>
                  <span className="text-[30px] font-bold leading-9 text-foreground">
                    {totals.desktop.toLocaleString()}
                  </span>
                </button>
                <button
                  onClick={() => setActiveMetric("mobile")}
                  className={cn(
                    "flex flex-col gap-1 border-l px-8 py-6 text-left transition-colors",
                    activeMetric === "mobile"
                      ? "border-foreground bg-secondary"
                      : "border-transparent bg-secondary hover:bg-muted"
                  )}
                >
                  <span className="text-xs text-muted-foreground">Mobile</span>
                  <span className="text-[30px] font-bold leading-9 text-foreground">
                    {totals.mobile.toLocaleString()}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Chart area */}
          <div className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                <CartesianGrid
                  strokeDasharray=""
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#737373" }}
                  interval="preserveStartEnd"
                  ticks={visibleTicks}
                />
                <YAxis hide />
                <Tooltip
                  content={
                    <ChartTooltipContent
                      config={chartConfig}
                      hideLabel={false}
                      indicator="dot"
                    />
                  }
                  cursor={{ fill: "transparent" }}
                />
                <Bar
                  dataKey={activeMetric}
                  fill="#0090ff"
                  radius={[2, 2, 0, 0]}
                  barSize={4}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

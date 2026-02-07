"use client"

import { useState, useMemo } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BarChart, Bar, XAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// ----------------------------------------------------------------------------
// Data  –  91 days Apr 1 → Jun 30, bar heights lifted directly from Figma
// ----------------------------------------------------------------------------

const RAW_HEIGHTS = [
  81, 36, 61, 89, 137, 110, 90, 150, 22, 96, 120, 107, 125, 50, 44, 51, 164,
  133, 89, 33, 50, 82, 51, 142, 79, 28, 140, 45, 116, 166, 60, 107, 91, 141,
  176, 183, 142, 55, 83, 107, 123, 72, 72, 164, 173, 124, 183, 116, 86, 65, 30,
  30, 92, 108, 74, 78, 154, 85, 29, 125, 65, 65, 172, 38, 161, 32, 108, 118,
  141, 161, 57, 34, 180, 30, 156, 113, 136, 174, 39, 125, 150, 62, 116, 176,
  48, 52, 159, 164, 55, 38, 164,
]

// Seed two series: desktop uses RAW_HEIGHTS, mobile is a variation
function buildData(): { date: string; desktop: number; mobile: number }[] {
  const start = new Date(2025, 3, 1) // Apr 1
  return RAW_HEIGHTS.map((h, i) => {
    const d = new Date(start)
    d.setDate(d.getDate() + i)
    // scale heights into a realistic visitor range (100–500)
    const desktop = Math.round(100 + (h / 183) * 400)
    const mobile = Math.round(80 + (((h * 1.3 + i * 2.7) % 183) / 183) * 420)
    return {
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      desktop,
      mobile,
    }
  })
}

const DATA = buildData()

const CHART_CONFIG = {
  desktop: { label: "Desktop", color: "#0090ff" },
  mobile: { label: "Mobile", color: "#6366f1" },
}

// 9 tick positions matching Figma x-axis labels
const TICK_DATES = [
  "Apr 9", "Apr 19", "Apr 29", "May 9", "May 19",
  "May 29", "Jun 9", "Jun 19", "Jun 30",
]

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function ChartPage() {
  const [active, setActive] = useState<"desktop" | "mobile">("desktop")

  const totals = useMemo(() => {
    let desktop = 0
    let mobile = 0
    DATA.forEach((d) => {
      desktop += d.desktop
      mobile += d.mobile
    })
    return { desktop, mobile }
  }, [])

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[888px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
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

        {/* ── Chart card ──────────────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          {/* title row */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground">
                Bar Chart – Interactive
              </h2>
              <p className="text-sm text-muted-foreground">
                Showing total visitors for the last 3 months
              </p>
            </div>

            {/* stat toggle buttons */}
            <div className="flex">
              {(["desktop", "mobile"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={cn(
                    "flex flex-col items-start gap-0.5 rounded-md border px-4 py-3 text-left transition-colors first:-mr-px",
                    active === key
                      ? "bg-secondary"
                      : "bg-background hover:bg-muted"
                  )}
                >
                  <span className="text-xs text-muted-foreground capitalize">
                    {key}
                  </span>
                  <span className="text-[22px] font-bold leading-none text-foreground">
                    {totals[key].toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* bar chart */}
          <div className="mt-6 h-[250px] w-full" style={{ display: "block" }}>
            <ChartContainer config={CHART_CONFIG}>
              <BarChart data={DATA} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
                <CartesianGrid strokeDasharray="" vertical={false} stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#6b7280" }}
                  interval="preserveStartEnd"
                  ticks={TICK_DATES}
                />
                <ChartTooltip
                  content={({ active, payload, label }) => (
                    <ChartTooltipContent
                      active={active}
                      payload={payload}
                      label={label}
                      indicator="dot"
                      config={CHART_CONFIG}
                    />
                  )}
                />
                <Bar
                  dataKey={active}
                  fill={CHART_CONFIG[active].color}
                  barSize={4}
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function SliderPage() {
  // Section 1 – Default Slider
  const [defaultValue, setDefaultValue] = useState([50])

  // Section 2 – Range Slider
  const [rangeValue, setRangeValue] = useState([25, 75])

  // Section 3 – Slider with Steps
  const [stepValue, setStepValue] = useState([50])

  // Section 4 – Disabled Slider
  const [disabledValue] = useState([40])

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[684px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Slider
            </h1>
            <p className="text-base text-muted-foreground">
              An input where the user selects a value from within a given range.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/slider"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Default Slider ──────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Default Slider
              </span>
              <span className="text-sm text-muted-foreground">
                {defaultValue[0]}
              </span>
            </div>
            <Slider
              value={defaultValue}
              onValueChange={setDefaultValue}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Range Slider ────────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Range Slider
              </span>
              <span className="text-sm text-muted-foreground">
                {rangeValue[0]} - {rangeValue[1]}
              </span>
            </div>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 3: Slider with Steps ───────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Slider with Steps (step: 10)
              </span>
              <span className="text-sm text-muted-foreground">
                {stepValue[0]}
              </span>
            </div>
            <Slider
              value={stepValue}
              onValueChange={setStepValue}
              max={100}
              step={10}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 4: Disabled Slider ─────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground opacity-50">
                Disabled Slider
              </span>
              <span className="text-sm text-muted-foreground opacity-50">
                {disabledValue[0]}
              </span>
            </div>
            <Slider
              value={disabledValue}
              disabled
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 5: Custom Range ────────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                Volume Control
              </h3>
              <p className="text-sm text-muted-foreground">
                Adjust the volume level (0-100)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground min-w-[20px]">
                0
              </span>
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground min-w-[30px] text-right">
                100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

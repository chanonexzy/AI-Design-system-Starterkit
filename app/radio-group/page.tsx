"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function RadioGroupPage() {
  // Section 1 – Simple Radio Group
  const [spacing, setSpacing] = useState("default")

  // Section 2 – Notification Preferences
  const [notifications, setNotifications] = useState("all")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[684px] rounded-3xl border bg-card p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Radio Group
            </h1>
            <p className="text-base text-muted-foreground">
              A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/radio-group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Simple Radio Group ─────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <RadioGroup value={spacing} onValueChange={setSpacing}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="default" />
              <Label htmlFor="default" className="cursor-pointer">
                Default
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="comfortable" />
              <Label htmlFor="comfortable" className="cursor-pointer">
                Comfortable
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="compact" />
              <Label htmlFor="compact" className="cursor-pointer">
                Compact
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Notification Preferences Form ───────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                Notify me about...
              </h3>
            </div>

            <RadioGroup value={notifications} onValueChange={setNotifications}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="cursor-pointer">
                  All new messages
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="mentions" id="mentions" />
                <Label htmlFor="mentions" className="cursor-pointer">
                  Direct messages and mentions
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="nothing" id="nothing" />
                <Label htmlFor="nothing" className="cursor-pointer">
                  Nothing
                </Label>
              </div>
            </RadioGroup>

            <button
              type="button"
              className="mt-2 w-fit rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs hover:bg-foreground/90 transition-colors"
              onClick={() => {
                console.log("Submitted:", { spacing, notifications })
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

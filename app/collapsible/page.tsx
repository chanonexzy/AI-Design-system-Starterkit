"use client"

import { useState } from "react"
import { ChevronsUpDown, SquareArrowOutUpRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function CollapsiblePage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[602px] rounded-3xl border bg-card p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Collapsible
            </h1>
            <p className="text-base text-muted-foreground">
              An interactive component which expands/collapses a panel.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/collapsible"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Collapsible ─────────────────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <Collapsible open={open} onOpenChange={setOpen}>
            {/* trigger row */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                @peduarte starred 3 repositories
              </span>
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className="rounded-md border bg-background p-2 text-foreground hover:bg-muted transition-colors"
                >
                  <ChevronsUpDown className="size-4" />
                </button>
              </CollapsibleTrigger>
            </div>

            {/* always-visible first item */}
            <div className="mt-3 rounded-md border bg-background px-4 py-2">
              <span className="text-sm font-mono text-foreground">
                @radix-ui/primitives
              </span>
            </div>

            {/* collapsible items */}
            <CollapsibleContent>
              <div className="mt-2 flex flex-col gap-2">
                <div className="rounded-md border bg-background px-4 py-2">
                  <span className="text-sm font-mono text-foreground">
                    @radix-ui/colors
                  </span>
                </div>
                <div className="rounded-md border bg-background px-4 py-2">
                  <span className="text-sm font-mono text-foreground">
                    @stitches/react
                  </span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}

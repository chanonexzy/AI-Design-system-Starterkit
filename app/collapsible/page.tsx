"use client"

import { useState } from "react"
import { ChevronsUpDown, SquareArrowOutUpRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const REPOS = ["@radix-ui/primitives", "@radix-ui/colors", "@stitches/react"]

// ----------------------------------------------------------------------------
// Shared: repo item row
// ----------------------------------------------------------------------------

function RepoItem({ name }: { name: string }) {
  return (
    <div className="rounded-md border bg-background px-4 py-2">
      <span className="font-mono text-sm text-foreground">{name}</span>
    </div>
  )
}

// ----------------------------------------------------------------------------
// Shared: one collapsible instance
// ----------------------------------------------------------------------------

function CollapsibleDemo({ open: defaultOpen }: { open: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      {/* trigger row */}
      <div className="flex items-center justify-between px-4">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-foreground">
              @peduarte starred 3 repositories
            </span>
            <ChevronsUpDown className="size-4 text-foreground" />
          </button>
        </CollapsibleTrigger>
      </div>

      {/* always-visible first item */}
      <RepoItem name={REPOS[0]} />

      {/* collapsible items */}
      <CollapsibleContent>
        <div className="flex flex-col gap-2">
          <RepoItem name={REPOS[1]} />
          <RepoItem name={REPOS[2]} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function CollapsiblePage() {
  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[529px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* Header */}
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

        {/* Component set container — two collapsible demos */}
        <div className="mt-10 rounded-lg border p-5 flex flex-col gap-4">
          {/* State = Default (collapsed) */}
          <div className="flex flex-col gap-2">
            <CollapsibleDemo open={false} />
          </div>

          {/* State = Open (expanded) */}
          <div className="flex flex-col gap-2">
            <CollapsibleDemo open={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showUrls, setShowUrls] = useState(false)
  const [person, setPerson] = useState("pedro")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[602px] rounded-3xl border bg-card p-14 shadow-sm">
        {/* ── Header ────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Context Menu
            </h1>
            <p className="text-base text-muted-foreground">
              Displays a menu to the user which is positioned relative to the
              trigger.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/context-menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Context Menu Demo ─────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[216px] w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-[220px]">
              {/* Navigation */}
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Screenshot</ContextMenuItem>
                  <ContextMenuItem>Accessibility Tree</ContextMenuItem>
                  <ContextMenuItem>Page Source</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>

              <ContextMenuSeparator />

              {/* Bookmarks */}
              <ContextMenuLabel>Bookmarks</ContextMenuLabel>
              <ContextMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={showUrls}
                onCheckedChange={setShowUrls}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>

              <ContextMenuSeparator />

              {/* People */}
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioGroup
                value={person}
                onValueChange={setPerson}
              >
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function ContextMenuPage() {
  const [bookmarks, setBookmarks] = useState(true)
  const [fullUrls, setFullUrls] = useState(false)
  const [person, setPerson] = useState("pedro")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[684px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Context Menu
            </h1>
            <p className="text-base text-muted-foreground">
              Displays a menu to the user — such as a set of actions or
              functions — triggered by a button.
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

        {/* ── Component set container ─────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <ContextMenu>
            {/* Trigger — the right-click area */}
            <ContextMenuTrigger asChild>
              <div className="flex h-[150px] w-full items-start rounded-md border p-4 cursor-pointer select-none">
                <span className="text-sm font-medium text-foreground">
                  Right click here
                </span>
              </div>
            </ContextMenuTrigger>

            {/* Context menu content */}
            <ContextMenuContent className="w-[220px]">
              {/* Navigation group */}
              <ContextMenuItem inset>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>

              {/* Submenu */}
              <ContextMenuSub>
                <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                  <ContextMenuItem>Extensions</ContextMenuItem>
                  <ContextMenuItem>Accessibility</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>

              <ContextMenuSeparator />

              {/* Checkbox group */}
              <ContextMenuCheckboxItem
                checked={bookmarks}
                onCheckedChange={setBookmarks}
              >
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={fullUrls}
                onCheckedChange={setFullUrls}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>

              <ContextMenuSeparator />

              {/* Radio group — People */}
              <ContextMenuLabel inset>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
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

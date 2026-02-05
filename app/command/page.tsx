"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Smile,
  Calculator,
  UserRound,
  CreditCard,
  Settings,
  Command as CommandIcon,
  SquareArrowOutUpRight,
} from "lucide-react"
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function CommandPage() {
  const [open, setOpen] = useState(false)

  // ⌘J keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[602px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Command
            </h1>
            <p className="text-base text-muted-foreground">
              Fast, composable, unstyled command menu for React.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/command"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Examples container ────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5 flex flex-col gap-4">
          {/* State = Default — keyboard hint */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-muted-foreground">Press</span>
            <kbd className="inline-flex items-center gap-0.5 rounded border bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground shadow-xs">
              <CommandIcon className="size-3" />
              <span>J</span>
            </kbd>
          </div>

          {/* State = Open — inline command palette */}
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="size-4" />
                  Calendar
                </CommandItem>
                <CommandItem>
                  <Smile className="size-4" />
                  Search emoji
                </CommandItem>
                <CommandItem disabled>
                  <Calculator className="size-4" />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserRound className="size-4" />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="size-4" />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="size-4" />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        {/* ── Modal trigger demo ────────────────────────── */}
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div className="fixed inset-0 bg-black/40" />
            <div
              className="relative z-10 w-[448px] rounded-lg border bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="size-4" />
                      Calendar
                    </CommandItem>
                    <CommandItem>
                      <Smile className="size-4" />
                      Search emoji
                    </CommandItem>
                    <CommandItem disabled>
                      <Calculator className="size-4" />
                      Calculator
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <UserRound className="size-4" />
                      Profile
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="size-4" />
                      Billing
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="size-4" />
                      Settings
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

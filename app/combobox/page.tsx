"use client"

import { useState } from "react"
import {
  ChevronsUpDown,
  Check,
  Ellipsis,
  SquareArrowOutUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const FRAMEWORKS = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const STATUSES = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "Todo" },
  { value: "in-progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled" },
]

const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "spanish", label: "Spanish" },
  { value: "portuguese", label: "Portuguese" },
  { value: "russian", label: "Russian" },
  { value: "japanese", label: "Japanese" },
  { value: "korean", label: "Korean" },
  { value: "chinese", label: "Chinese" },
]

const LABELS = ["bug", "feature", "improvement", "refactor"]

// ----------------------------------------------------------------------------
// Reusable: searchable combobox popover
// ----------------------------------------------------------------------------

function ComboboxPopover({
  items,
  value,
  onSelect,
  placeholder,
  searchPlaceholder,
}: {
  items: { value: string; label: string }[]
  value: string
  onSelect: (value: string) => void
  placeholder: string
  searchPlaceholder: string
}) {
  const [open, setOpen] = useState(false)
  const selected = items.find((i) => i.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex w-[200px] items-center justify-between rounded-md border bg-background px-3 py-2 text-sm shadow-xs hover:bg-muted transition-colors"
        >
          <span className={cn("font-medium", !selected && "text-foreground")}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className="size-4 opacity-50 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    onSelect(item.value === value ? "" : item.value)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto size-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function ComboboxPage() {
  // Section 1 – Combobox
  const [framework, setFramework] = useState("next.js")

  // Section 2 – Status popover
  const [statusOpen, setStatusOpen] = useState(false)
  const [status, setStatus] = useState("backlog")
  const selectedStatus = STATUSES.find((s) => s.value === status)

  // Section 4 – Form language
  const [language, setLanguage] = useState("english")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[888px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Combobox
            </h1>
            <p className="text-base text-muted-foreground">
              Autocomplete input and command palette with a list of suggestions.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/combobox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Combobox ─────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <ComboboxPopover
            items={FRAMEWORKS}
            value={framework}
            onSelect={setFramework}
            placeholder="Select framework..."
            searchPlaceholder="Search framework"
          />
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Status Popover ───────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Status</span>
            <Popover open={statusOpen} onOpenChange={setStatusOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
                >
                  {selectedStatus ? selectedStatus.label : "+ Set status"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Change status..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {STATUSES.map((s) => (
                        <CommandItem
                          key={s.value}
                          value={s.value}
                          onSelect={() => {
                            setStatus(s.value === status ? "" : s.value)
                            setStatusOpen(false)
                          }}
                        >
                          {s.label}
                          <Check
                            className={cn(
                              "ml-auto size-4",
                              status === s.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 3: Dropdown Menu ────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex items-center justify-between rounded-md border bg-background px-4 py-3">
            {/* left: badge + title */}
            <div className="flex items-center gap-3">
              <Badge variant="default" className="rounded-lg">
                feature
              </Badge>
              <span className="text-sm text-muted-foreground">
                Create a new project
              </span>
            </div>

            {/* right: ellipsis trigger */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="rounded-md p-1.5 text-foreground hover:bg-muted transition-colors"
                >
                  <Ellipsis className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Assign to...</DropdownMenuItem>
                <DropdownMenuItem>Set due date...</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {LABELS.map((label) => (
                      <DropdownMenuItem key={label}>{label}</DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 4: Form ─────────────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Language
            </label>
            <ComboboxPopover
              items={LANGUAGES}
              value={language}
              onSelect={setLanguage}
              placeholder="Select language..."
              searchPlaceholder="Search language..."
            />
            <p className="text-sm text-muted-foreground">
              This is the language that will be used in the dashboard.
            </p>
          </div>

          <button
            type="button"
            className="mt-6 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs hover:bg-foreground/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

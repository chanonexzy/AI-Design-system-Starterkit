"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Shared header — reused pattern from Figma
// ----------------------------------------------------------------------------

function PageHeader({
  title,
  description,
  docsUrl,
}: {
  title: string
  description: string
  docsUrl: string
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
          {title}
        </h1>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
      <a
        href={docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
      >
        View in Shadcn
        <SquareArrowOutUpRight className="size-3.5" />
      </a>
    </div>
  )
}

// ----------------------------------------------------------------------------
// Sidebar form items
// ----------------------------------------------------------------------------

const SIDEBAR_ITEMS = [
  { id: "recents", label: "Recents", defaultChecked: false },
  { id: "home", label: "Home", defaultChecked: false },
  { id: "applications", label: "Applications", defaultChecked: true },
  { id: "desktop", label: "Desktop", defaultChecked: false },
  { id: "downloads", label: "Downloads", defaultChecked: true },
  { id: "documents", label: "Documents", defaultChecked: false },
]

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function CheckboxPage() {
  // Subtext checkbox
  const [subtextChecked, setSubtextChecked] = useState(false)

  // Default checkbox
  const [defaultChecked, setDefaultChecked] = useState(false)

  // Checkbox cards
  const [cardChecked, setCardChecked] = useState<Record<string, boolean>>({
    notifications: false,
    marketing: true,
  })

  // Sidebar form
  const [sidebarChecked, setSidebarChecked] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        SIDEBAR_ITEMS.map((item) => [item.id, item.defaultChecked])
      )
  )

  function toggleCard(id: string) {
    setCardChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleSidebar(id: string) {
    setSidebarChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[593px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* Header */}
        <PageHeader
          title="Checkbox"
          description="A control that allows the user to toggle between checked and not checked."
          docsUrl="https://ui.shadcn.com/docs/components/checkbox"
        />

        {/* ── Default ─────────────────────────────────────── */}
        <div className="mt-10 flex items-center gap-3">
          <Checkbox
            id="default"
            checked={defaultChecked}
            onCheckedChange={(v) => setDefaultChecked(v === true)}
          />
          <label
            htmlFor="default"
            className="text-sm font-medium leading-5 text-foreground cursor-pointer"
          >
            Accept terms and conditions
          </label>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Subtext ─────────────────────────────────────── */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="subtext"
            className="mt-0.5"
            checked={subtextChecked}
            onCheckedChange={(v) => setSubtextChecked(v === true)}
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subtext"
              className="text-sm font-medium leading-5 text-foreground cursor-pointer"
            >
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Disabled ────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <Checkbox id="disabled" disabled />
          <label
            htmlFor="disabled"
            className="text-sm font-medium leading-5 text-foreground opacity-50 cursor-not-allowed"
          >
            Enable notifications
          </label>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Checkbox Cards ──────────────────────────────── */}
        <div className="rounded-lg border p-5 flex flex-col gap-4">
          {[
            { id: "notifications", label: "Enable notifications", desc: "You can enable or disable notifications at any time." },
            { id: "marketing", label: "Enable notifications", desc: "You can enable or disable notifications at any time." },
          ].map((item) => {
            const isChecked = cardChecked[item.id]
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCard(item.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors",
                  isChecked
                    ? "border-foreground bg-secondary"
                    : "border-border bg-background hover:bg-muted/50"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  className="mt-0.5 pointer-events-none"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium leading-5 text-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.desc}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <Separator className="my-[18px]" />

        {/* ── Form ────────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 mb-2">
            <h3 className="text-base font-medium leading-6 text-foreground">
              Sidebar
            </h3>
            <p className="text-sm text-muted-foreground">
              Select the items you want to display in the sidebar.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {SIDEBAR_ITEMS.map((item) => (
              <div key={item.id} className="flex items-center">
                <Checkbox
                  id={`sidebar-${item.id}`}
                  checked={sidebarChecked[item.id]}
                  onCheckedChange={() => toggleSidebar(item.id)}
                />
                <label
                  htmlFor={`sidebar-${item.id}`}
                  className="ml-2 text-sm font-medium leading-5 text-foreground cursor-pointer"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 w-fit rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs hover:bg-foreground/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

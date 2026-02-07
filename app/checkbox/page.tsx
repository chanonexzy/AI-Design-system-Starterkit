"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Data
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
  // Section 1 – Default
  const [defaultChecked, setDefaultChecked] = useState(false)

  // Section 2 – Subtext
  const [subtextChecked, setSubtextChecked] = useState(false)

  // Section 4 – Checkbox Cards
  const [cardChecked, setCardChecked] = useState(false)

  // Section 5 – Form (Sidebar)
  const [sidebar, setSidebar] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SIDEBAR_ITEMS.map((i) => [i.id, i.defaultChecked]))
  )

  function toggleSidebar(id: string) {
    setSidebar((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[684px] rounded-3xl border bg-card p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Checkbox
            </h1>
            <p className="text-base text-muted-foreground">
              A control that allows the user to toggle between checked and not
              checked.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/checkbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Default ─────────────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={defaultChecked}
              onCheckedChange={(v) => setDefaultChecked(v === true)}
            />
            <span className="text-sm font-medium text-foreground">
              Accept terms and conditions
            </span>
          </label>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Subtext ─────────────────────────────── */}
        <div className="rounded-lg border p-5">
          <label className="flex items-start gap-2 cursor-pointer">
            <Checkbox
              checked={subtextChecked}
              onCheckedChange={(v) => setSubtextChecked(v === true)}
              className="mt-0.5"
            />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground">
                Accept terms and conditions
              </span>
              <span className="text-sm text-muted-foreground">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </span>
            </div>
          </label>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 3: Disabled ────────────────────────────── */}
        <div className="rounded-lg border p-5">
          <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Checkbox disabled />
            <span className="text-sm font-medium text-foreground">
              Enable notifications
            </span>
          </label>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 4: Checkbox Cards ──────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-3">
            {[
              {
                id: "notifications",
                label: "Enable notifications",
                description:
                  "You can enable or disable notifications at any time.",
              },
              {
                id: "marketing",
                label: "Marketing emails",
                description:
                  "Receive occasional emails about new features and updates.",
              },
            ].map((card) => {
              const isChecked = card.id === "notifications" ? cardChecked : !cardChecked
              return (
                <label
                  key={card.id}
                  className={cn(
                    "flex items-start gap-3 rounded-md border p-4 cursor-pointer transition-colors",
                    isChecked ? "bg-secondary" : "bg-background"
                  )}
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => setCardChecked((v) => !v)}
                    className="mt-0.5"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground">
                      {card.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {card.description}
                    </span>
                  </div>
                </label>
              )
            })}
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 5: Form (Sidebar) ──────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                Sidebar
              </h3>
              <p className="text-sm text-muted-foreground">
                Select the items you want to display in the sidebar.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {SIDEBAR_ITEMS.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={sidebar[item.id]}
                    onCheckedChange={() => toggleSidebar(item.id)}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              className="mt-2 w-fit rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-xs hover:bg-foreground/90 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { CalendarIcon, SquareArrowOutUpRight } from "lucide-react"
import { format, addDays } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

function formatDate(date: Date): string {
  return format(date, "MMMM dd, yyyy")
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DatePickerPage() {
  // Section 1 – Date of Birth
  const [dob, setDob] = useState<Date | undefined>(undefined)
  const [dobOpen, setDobOpen] = useState(false)

  // Section 2 – Subscription Date
  const [subDate, setSubDate] = useState<Date>(new Date(2025, 5, 1)) // June 1, 2025
  const [subOpen, setSubOpen] = useState(false)

  // Section 3 – Date and Time
  const [dtDate, setDtDate] = useState<Date | undefined>(undefined)
  const [dtOpen, setDtOpen] = useState(false)
  const [time, setTime] = useState("10:30:00")

  // Section 4 – Natural Language
  const [nlDate, setNlDate] = useState<Date>(addDays(new Date(), 2))
  const [nlOpen, setNlOpen] = useState(false)

  // Section 5 – Form
  const [formDate, setFormDate] = useState<Date | undefined>(undefined)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[684px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Date Picker
            </h1>
            <p className="text-base text-muted-foreground">
              A date picker component with support for single date, time, and
              natural language selection.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/date-picker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Date of Birth ───────────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <Popover open={dobOpen} onOpenChange={setDobOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
              >
                <CalendarIcon className="size-4 text-muted-foreground" />
                {dob ? formatDate(dob) : "Select a date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={(date) => {
                  setDob(date)
                  setDobOpen(false)
                }}
                captionLayout="dropdown"
                fromYear={1900}
                toYear={2025}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Picker with Input ───────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Subscription Date
            </label>
            <Popover open={subOpen} onOpenChange={setSubOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
                >
                  <CalendarIcon className="size-4 text-muted-foreground" />
                  {formatDate(subDate)}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={subDate}
                  onSelect={(date) => {
                    if (date) setSubDate(date)
                    setSubOpen(false)
                  }}
                  captionLayout="dropdown"
                  fromYear={2020}
                  toYear={2030}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 3: Date and Time ───────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex items-end gap-4">
            {/* Date field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Date of birth
              </label>
              <Popover open={dtOpen} onOpenChange={setDtOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
                  >
                    <CalendarIcon className="size-4 text-muted-foreground" />
                    {dtDate ? formatDate(dtDate) : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dtDate}
                    onSelect={(date) => {
                      setDtDate(date)
                      setDtOpen(false)
                    }}
                    captionLayout="dropdown"
                    fromYear={1900}
                    toYear={2025}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-md border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-xs focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                step="1"
              />
            </div>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 4: Natural Language ─────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Schedule Date
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                In 2 days
              </span>
              <Popover open={nlOpen} onOpenChange={setNlOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="rounded-md p-1.5 text-foreground hover:bg-muted transition-colors"
                  >
                    <CalendarIcon className="size-4" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={nlDate}
                    onSelect={(date) => {
                      if (date) setNlDate(date)
                      setNlOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <p className="text-sm text-muted-foreground">
              Your post will be published on {format(nlDate, "MMMM dd, yyyy")}.
            </p>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 5: Form ─────────────────────────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Date of birth
            </label>
            <Popover open={formOpen} onOpenChange={setFormOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-xs hover:bg-muted transition-colors"
                >
                  <CalendarIcon className="size-4" />
                  {formDate ? (
                    <span className="text-foreground">{formatDate(formDate)}</span>
                  ) : (
                    "Pick a date"
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formDate}
                  onSelect={(date) => {
                    setFormDate(date)
                    setFormOpen(false)
                  }}
                  captionLayout="dropdown"
                  fromYear={1900}
                  toYear={2025}
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground">
              Your date of birth is used to calculate your age.
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

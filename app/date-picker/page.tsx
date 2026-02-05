"use client"

import { useState } from "react"
import {
  Calendar as CalendarIcon,
  ChevronDown,
  SquareArrowOutUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function getNaturalLanguage(date: Date): string {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(date)
  target.setHours(0, 0, 0, 0)
  const diff = Math.round(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )
  if (diff === 0) return "Today"
  if (diff === 1) return "Tomorrow"
  if (diff === -1) return "Yesterday"
  if (diff > 1) return `In ${diff} days`
  return formatDate(date)
}

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DatePickerPage() {
  // Section 1 – Date of Birth
  const [open1, setOpen1] = useState(false)
  const [date1, setDate1] = useState<Date | undefined>(undefined)

  // Section 2 – Subscription Date
  const [open2, setOpen2] = useState(false)
  const [date2, setDate2] = useState<Date>(new Date(2025, 5, 1))

  // Section 3 – Date & Time
  const [open3, setOpen3] = useState(false)
  const [date3, setDate3] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("10:30:00")

  // Section 4 – Natural Language
  const [open4, setOpen4] = useState(false)
  const [date4, setDate4] = useState<Date>(() => addDays(new Date(), 2))

  // Section 5 – Form
  const [open5, setOpen5] = useState(false)
  const [date5, setDate5] = useState<Date | undefined>(undefined)

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[700px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Date Picker
            </h1>
            <p className="text-base text-muted-foreground">
              A date picker component with range and presets.
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

        {/* ── Section 1: Date of Birth Picker ───────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <label className="text-sm font-medium text-foreground">
            Date of Birth
          </label>
          <Popover open={open1} onOpenChange={setOpen1}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-2 w-[192px] justify-start">
                {date1 ? formatDate(date1) : "Select a date"}
                <ChevronDown className="ml-auto size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date1}
                onSelect={(d) => {
                  setDate1(d)
                  setOpen1(false)
                }}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Picker with Input ───────────────── */}
        <div className="rounded-lg border p-5">
          <label className="text-sm font-medium text-foreground">
            Subscription Date
          </label>
          <Popover open={open2} onOpenChange={setOpen2}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-2 w-[224px] justify-start">
                {formatDate(date2)}
                <CalendarIcon className="ml-auto size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date2}
                onSelect={(d) => {
                  if (d) {
                    setDate2(d)
                    setOpen2(false)
                  }
                }}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 3: Date and Time Picker ────────────── */}
        <div className="rounded-lg border p-5">
          <div className="flex items-end gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                Date of birth
              </label>
              <Popover open={open3} onOpenChange={setOpen3}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "mt-1 w-[128px] justify-start",
                      !date3 && "text-muted-foreground"
                    )}
                  >
                    {date3 ? formatDate(date3) : "Select a date"}
                    <ChevronDown className="ml-auto size-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date3}
                    onSelect={(d) => {
                      setDate3(d)
                      setOpen3(false)
                    }}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Time</label>
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 w-[91px]"
              />
            </div>
          </div>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 4: Natural Language Picker ─────────── */}
        <div className="rounded-lg border p-5">
          <label className="text-sm font-medium text-foreground">
            Schedule Date
          </label>
          <Popover open={open4} onOpenChange={setOpen4}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-2 w-[297px] justify-start">
                {getNaturalLanguage(date4)}
                <CalendarIcon className="ml-auto size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date4}
                onSelect={(d) => {
                  if (d) {
                    setDate4(d)
                    setOpen4(false)
                  }
                }}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
          <p className="mt-2 text-sm text-muted-foreground">
            Your post will be published on {formatDate(date4)}.
          </p>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 5: Form ─────────────────────────────── */}
        <div className="rounded-lg border p-5">
          <label className="text-sm font-medium text-foreground">
            Date of birth
          </label>
          <Popover open={open5} onOpenChange={setOpen5}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-2 w-[240px] justify-start">
                <span className={cn(!date5 && "opacity-50 text-muted-foreground")}>
                  {date5 ? formatDate(date5) : "Pick a date"}
                </span>
                <CalendarIcon className={cn("ml-auto size-4", !date5 && "opacity-50")} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date5}
                onSelect={(d) => {
                  setDate5(d)
                  setOpen5(false)
                }}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
          <p className="mt-2 text-sm text-muted-foreground">
            Your date of birth is used to calculate your age.
          </p>
          <Button className="mt-6">Submit</Button>
        </div>
      </div>
    </div>
  )
}

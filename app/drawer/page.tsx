"use client"

import { useState, useEffect } from "react"
import { Minus, Plus, SquareArrowOutUpRight } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])

  return matches
}

const BAR_HEIGHTS = [110, 83, 55, 83, 55, 76, 83, 52, 66, 83, 55, 76, 52, 96]

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DrawerPage() {
  // Section 1 – Move Goal
  const [calories, setCalories] = useState(350)

  // Section 2 – Responsive Dialog
  const [open2, setOpen2] = useState(false)
  const [name, setName] = useState("Pedro Duarte")
  const [username, setUsername] = useState("@peduarte")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[700px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Drawer
            </h1>
            <p className="text-base text-muted-foreground">
              A drawer component for React.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/drawer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Move Goal Drawer ─────────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>

              <div className="px-4 pb-2">
                {/* Calorie counter */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md border bg-background opacity-50 hover:opacity-100 transition-opacity"
                    onClick={() => setCalories((v) => Math.max(0, v - 50))}
                  >
                    <Minus className="size-4" />
                  </button>
                  <div className="flex flex-col items-center">
                    <span className="text-[72px] font-semibold leading-none">
                      {calories}
                    </span>
                    <span className="mt-1 text-xs font-medium text-muted-foreground tracking-widest">
                      CALORIES/DAY
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-md border bg-background opacity-50 hover:opacity-100 transition-opacity"
                    onClick={() => setCalories((v) => v + 50)}
                  >
                    <Plus className="size-4" />
                  </button>
                </div>

                {/* Bar chart */}
                <div className="mt-6 flex items-end gap-1.5 h-[120px]">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-foreground rounded-t-sm"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Submit</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Responsive Dialog ────────────────── */}
        <div className="rounded-lg border p-5">
          <Button variant="outline" onClick={() => setOpen2(true)}>
            Open drawer
          </Button>

          {isDesktop ? (
            <Dialog open={open2} onOpenChange={setOpen2}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Username
                    </label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <DialogClose asChild>
                  <Button className="w-full">Save changes</Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={open2} onOpenChange={setOpen2}>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Edit profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground">
                      Username
                    </label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Save changes</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </div>
  )
}

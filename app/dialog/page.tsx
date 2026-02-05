"use client"

import { useState } from "react"
import { SquareArrowOutUpRight } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DialogPage() {
  const [name, setName] = useState("Pedro Duarte")
  const [username, setUsername] = useState("@peduarte")

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[700px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Dialog
            </h1>
            <p className="text-base text-muted-foreground">
              A window overlaid on either the primary window or another dialog
              window, rendering the content underneath inert.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Section 1: Edit Profile Dialog ─────────────── */}
        <div className="mt-10 rounded-lg border p-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
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
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Separator className="my-[18px]" />

        {/* ── Section 2: Share Link Dialog ────────────────── */}
        <div className="rounded-lg border p-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Share</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <Input
                value="https://ui.shadcn.com/docs/installation"
                readOnly
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

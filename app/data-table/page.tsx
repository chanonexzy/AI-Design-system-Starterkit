"use client"

import { useState, useMemo } from "react"
import { ArrowUpDown, ChevronDown, Ellipsis, SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

type Payment = {
  id: string
  status: "Success" | "Processing" | "Failed"
  email: string
  amount: number
}

const PAYMENTS: Payment[] = [
  { id: "1", status: "Success", email: "ken99@yahoo.com", amount: 316 },
  { id: "2", status: "Success", email: "abe45@gmail.com", amount: 242 },
  { id: "3", status: "Processing", email: "monserrat44@gmail.com", amount: 837 },
  { id: "4", status: "Success", email: "silas22@gmail.com", amount: 874 },
  { id: "5", status: "Failed", email: "carmella@hotmail.com", amount: 721 },
]

type SortDir = "asc" | "desc" | "none"

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DataTablePage() {
  const [filter, setFilter] = useState("")
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [sortDir, setSortDir] = useState<SortDir>("none")
  const [columns, setColumns] = useState({
    status: true,
    email: true,
    amount: true,
  })

  // ── filtered + sorted ─────────────────────────────────
  const rows = useMemo(() => {
    let list = PAYMENTS.filter((p) =>
      p.email.toLowerCase().includes(filter.toLowerCase())
    )
    if (sortDir === "asc") list = [...list].sort((a, b) => a.email.localeCompare(b.email))
    if (sortDir === "desc") list = [...list].sort((a, b) => b.email.localeCompare(a.email))
    return list
  }, [filter, sortDir])

  // ── selection helpers ─────────────────────────────────
  const selectedCount = rows.filter((r) => selected[r.id]).length
  const allSelected = rows.length > 0 && selectedCount === rows.length
  const someSelected = selectedCount > 0 && !allSelected

  function toggleAll() {
    const next: Record<string, boolean> = {}
    rows.forEach((r) => (next[r.id] = !allSelected))
    setSelected(next)
  }

  function toggleRow(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function cycleSortDir() {
    setSortDir((prev) => (prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"))
  }

  function toggleColumn(col: keyof typeof columns) {
    setColumns((prev) => ({ ...prev, [col]: !prev[col] }))
  }

  return (
    <div className="min-h-screen bg-background p-14">
      <div className="mx-auto max-w-[702px] rounded-3xl border bg-white p-14 shadow-sm">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-semibold leading-[40px] text-foreground">
              Data Table
            </h1>
            <p className="text-base text-muted-foreground">
              Powerful table and datagrids built using TanStack Table.
            </p>
          </div>
          <a
            href="https://ui.shadcn.com/docs/components/data-table"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-xs hover:bg-secondary/80 transition-colors"
          >
            View in Shadcn
            <SquareArrowOutUpRight className="size-3.5" />
          </a>
        </div>

        {/* ── Toolbar ───────────────────────────────────────── */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <Input
            placeholder="Filter emails..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="max-w-sm"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
              >
                Columns
                <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={columns.status}
                onCheckedChange={() => toggleColumn("status")}
              >
                Status
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={columns.email}
                onCheckedChange={() => toggleColumn("email")}
              >
                Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={columns.amount}
                onCheckedChange={() => toggleColumn("amount")}
              >
                Amount
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ── Table ─────────────────────────────────────────── */}
        <div className="mt-4 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {/* select-all checkbox */}
                <TableHead className="w-[40px]">
                  <Checkbox
                    checked={allSelected ? true : someSelected ? "indeterminate" : false}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>

                {columns.status && (
                  <TableHead>Status</TableHead>
                )}

                {columns.email && (
                  <TableHead>
                    <button
                      type="button"
                      onClick={cycleSortDir}
                      className="inline-flex items-center gap-1 hover:text-foreground/70 transition-colors"
                    >
                      Email
                      <ArrowUpDown className="size-4" />
                    </button>
                  </TableHead>
                )}

                {columns.amount && (
                  <TableHead>Amount</TableHead>
                )}

                {/* actions column */}
                <TableHead className="w-[56px]" />
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} data-state={selected[row.id] ? "selected" : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={!!selected[row.id]}
                      onCheckedChange={() => toggleRow(row.id)}
                    />
                  </TableCell>

                  {columns.status && (
                    <TableCell>{row.status}</TableCell>
                  )}

                  {columns.email && (
                    <TableCell className="font-medium">{row.email}</TableCell>
                  )}

                  {columns.amount && (
                    <TableCell className="text-right">
                      ${row.amount.toFixed(2)}
                    </TableCell>
                  )}

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-foreground hover:bg-muted transition-colors"
                        >
                          <Ellipsis className="size-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Copy</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* ── Footer ────────────────────────────────────────── */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {selectedCount} of {rows.length} row(s) selected.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              className="rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs opacity-50 cursor-not-allowed"
            >
              Previous
            </button>
            <button
              type="button"
              disabled
              className="rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs opacity-50 cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

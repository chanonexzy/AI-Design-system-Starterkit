'use client'

import { useState } from 'react'
import { DocsSidebar } from './docs-sidebar'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 w-full border-b bg-background lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <DocsSidebar />
              </SheetContent>
            </Sheet>
            <span className="font-bold">Design System</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r bg-background">
          <DocsSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-72">
          <div className="container max-w-screen-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

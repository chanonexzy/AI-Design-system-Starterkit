'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight, Plus, Settings, Download, Heart, Info } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function TooltipShowcase() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/tooltip"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Tooltip */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Tooltip</CardTitle>
            <CardDescription>
              Simple tooltip on hover
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>
                      <Settings />
                      Settings
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Configure application settings</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Icon Buttons with Tooltips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Buttons with Tooltips</CardTitle>
            <CardDescription>
              Helpful tooltips for icon-only buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Plus />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add new item</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Download />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download file</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Heart />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to favorites</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Settings />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open settings</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Tooltip Positions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tooltip Positions</CardTitle>
            <CardDescription>
              Tooltips can be positioned on different sides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex flex-col items-center gap-12 py-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Tooltip on top</p>
                  </TooltipContent>
                </Tooltip>

                <div className="flex gap-20">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on left</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on right</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Rich Content Tooltips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Rich Content Tooltips</CardTitle>
            <CardDescription>
              Tooltips with more complex content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Info />
                      Keyboard Shortcuts
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-2">
                      <p className="font-semibold">Available Shortcuts</p>
                      <div className="text-sm space-y-1">
                        <p>⌘ + K - Search</p>
                        <p>⌘ + B - Toggle Sidebar</p>
                        <p>⌘ + / - Help</p>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Info />
                      User Info
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-2">
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">
                        john.doe@example.com
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last active: 2 hours ago
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Disabled Elements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Disabled Elements</CardTitle>
            <CardDescription>
              Tooltips work with disabled elements using wrapper
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-block cursor-not-allowed">
                      <Button disabled>Disabled Button</Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This action is currently unavailable</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-block cursor-not-allowed">
                      <Button variant="outline" disabled>
                        <Download />
                        Download
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You need permission to download this file</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components">
              View All Components
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

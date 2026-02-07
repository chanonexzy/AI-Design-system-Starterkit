'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { SquareArrowOutUpRight, ArrowLeft, ArrowRight } from 'lucide-react'

export default function PopoverShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold tracking-tight">Popover</h1>
                <Badge variant="secondary">Component</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Displays rich content in a portal, triggered by a button.
              </p>
            </div>
            <Button variant="outline" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/popover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="text-sm font-medium">View in Shadcn</span>
                <SquareArrowOutUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Basic Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Example</CardTitle>
            <CardDescription>
              A simple popover with form inputs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width" className="font-medium">
                        Width
                      </Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth" className="font-medium">
                        Max. width
                      </Label>
                      <Input
                        id="maxWidth"
                        defaultValue="320px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height" className="font-medium">
                        Height
                      </Label>
                      <Input
                        id="height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxHeight" className="font-medium">
                        Max. height
                      </Label>
                      <Input
                        id="maxHeight"
                        defaultValue="none"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Positioning Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Positioning</CardTitle>
            <CardDescription>
              Control the position of the popover relative to its trigger
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top" className="w-80">
                  <p className="text-sm">This popover appears on top.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right" className="w-80">
                  <p className="text-sm">This popover appears on the right.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="w-80">
                  <p className="text-sm">This popover appears on the bottom.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left" className="w-80">
                  <p className="text-sm">This popover appears on the left.</p>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Rich Content Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Rich Content</CardTitle>
            <CardDescription>
              Popovers can contain any type of content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Show info</Button>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base">About Popovers</h4>
                    <p className="text-sm text-muted-foreground">
                      Popovers are built on top of Radix UI's Popover primitive,
                      which provides a robust and accessible foundation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Key Features:</h5>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Accessible by default</li>
                      <li>Keyboard navigation support</li>
                      <li>Focus management</li>
                      <li>Customizable positioning</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">Learn More</Button>
                    <Button size="sm" variant="outline" className="flex-1">Close</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Alignment Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alignment</CardTitle>
            <CardDescription>
              Align the popover content relative to the trigger
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Align Start</Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64">
                  <p className="text-sm">Aligned to the start of the trigger.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Align Center</Button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-64">
                  <p className="text-sm">Aligned to the center of the trigger.</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Align End</Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-64">
                  <p className="text-sm">Aligned to the end of the trigger.</p>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <a href="/">
              <ArrowLeft />
              Back to Home
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/components">
              View All Components
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

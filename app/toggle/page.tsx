'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ToggleShowcase() {
  const [isBold, setIsBold] = useState(false)
  const [alignment, setAlignment] = useState('left')

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Toggle</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/toggle"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            A two-state button that can be either on or off.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Toggle */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Toggle</CardTitle>
            <CardDescription>
              Simple toggle buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Toggle
                pressed={isBold}
                onPressedChange={setIsBold}
                aria-label="Toggle bold"
              >
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Bold is {isBold ? 'active' : 'inactive'}
            </p>
          </CardContent>
        </Card>

        {/* Toggle with Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Text</CardTitle>
            <CardDescription>
              Toggle buttons with text labels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4 mr-2" />
                Bold
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4 mr-2" />
                Italic
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4 mr-2" />
                Underline
              </Toggle>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toggle Variants</CardTitle>
            <CardDescription>
              Different visual variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Default</p>
              <div className="flex gap-2">
                <Toggle variant="default">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="default">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Outline</p>
              <div className="flex gap-2">
                <Toggle variant="outline">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toggle Sizes</CardTitle>
            <CardDescription>
              Different sizes for various use cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Toggle size="sm">
                <Bold className="h-3 w-3" />
              </Toggle>
              <Toggle size="default">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg">
                <Bold className="h-5 w-5" />
              </Toggle>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Toggle */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Toggles in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Toggle disabled>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle disabled pressed>
                <Italic className="h-4 w-4" />
              </Toggle>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toggle Group</CardTitle>
            <CardDescription>
              Group of toggle buttons with single selection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Text Alignment</p>
              <ToggleGroup type="single" value={alignment} onValueChange={(value) => value && setAlignment(value)}>
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground">
                Current alignment: {alignment}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Selection Toggle Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Selection</CardTitle>
            <CardDescription>
              Toggle group allowing multiple selections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">Text Formatting</p>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group with Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Group with Text Labels</CardTitle>
            <CardDescription>
              Toggle group with text and icons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ToggleGroup type="single" defaultValue="unordered">
              <ToggleGroupItem value="unordered">
                <List className="h-4 w-4 mr-2" />
                Unordered
              </ToggleGroupItem>
              <ToggleGroupItem value="ordered">
                <ListOrdered className="h-4 w-4 mr-2" />
                Ordered
              </ToggleGroupItem>
            </ToggleGroup>
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

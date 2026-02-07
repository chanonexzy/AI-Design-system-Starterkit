'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ToggleGroupShowcase() {
  const [alignment, setAlignment] = useState('left')
  const [formatting, setFormatting] = useState<string[]>([])

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Toggle Group</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/toggle-group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            A set of two-state buttons that can be toggled on or off.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Single Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Single Selection</CardTitle>
            <CardDescription>
              Only one item can be selected at a time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Text Alignment</p>
              <ToggleGroup
                type="single"
                value={alignment}
                onValueChange={(value) => value && setAlignment(value)}
              >
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Align justify">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground">
                Selected: {alignment}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Selection</CardTitle>
            <CardDescription>
              Multiple items can be selected at once
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Text Formatting</p>
              <ToggleGroup
                type="multiple"
                value={formatting}
                onValueChange={setFormatting}
              >
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
              <p className="text-sm text-muted-foreground">
                Selected: {formatting.length > 0 ? formatting.join(', ') : 'none'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* With Text Labels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Text Labels</CardTitle>
            <CardDescription>
              Toggle groups with text and icons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">List Type</p>
              <ToggleGroup type="single" defaultValue="unordered">
                <ToggleGroupItem value="unordered">
                  <List className="h-4 w-4 mr-2" />
                  Bulleted
                </ToggleGroupItem>
                <ToggleGroupItem value="ordered">
                  <ListOrdered className="h-4 w-4 mr-2" />
                  Numbered
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">View Mode</p>
              <ToggleGroup type="single" defaultValue="grid">
                <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
                <ToggleGroupItem value="list">List</ToggleGroupItem>
                <ToggleGroupItem value="table">Table</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Different Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Different visual styles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Default</p>
              <ToggleGroup type="single" defaultValue="center" variant="default">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Outline</p>
              <ToggleGroup type="single" defaultValue="center" variant="outline">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Toggle groups in different sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Small</p>
              <ToggleGroup type="single" defaultValue="center" size="sm">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-3 w-3" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Default</p>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Large</p>
              <ToggleGroup type="single" defaultValue="center" size="lg">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Toggle group with disabled items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" disabled>
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" disabled>
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </CardContent>
        </Card>

        {/* Editor Toolbar Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Editor Toolbar Example</CardTitle>
            <CardDescription>
              Real-world use case for a text editor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup type="single" defaultValue="left">
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

              <ToggleGroup type="multiple">
                <ToggleGroupItem value="list" aria-label="Bulleted list">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="ordered" aria-label="Numbered list">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="quote" aria-label="Block quote">
                  <Quote className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="code" aria-label="Code block">
                  <Code className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
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

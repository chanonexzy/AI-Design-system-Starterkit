'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
  Bold,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Grid,
  Italic,
  LayoutGrid,
  List,
  ListFilter,
  Minus,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Redo,
  Rows,
  Scissors,
  SkipBack,
  SkipForward,
  Strikethrough,
  Underline,
  Undo,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut
} from 'lucide-react'

export default function ButtonGroupShowcase() {
  const [alignment, setAlignment] = useState('left')
  const [view, setView] = useState('grid')
  const [quantity, setQuantity] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Button Group</h1>
            <Badge variant="secondary">Pattern</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A set of related buttons grouped together with connected styling.
          </p>
        </div>

        {/* Basic Button Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Button Group</CardTitle>
            <CardDescription>
              Simple horizontal button groups with different variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" className="rounded-r-none">
                Left
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Middle
              </Button>
              <Button variant="outline" className="rounded-l-none">
                Right
              </Button>
            </div>

            <div className="inline-flex rounded-md shadow-sm">
              <Button className="rounded-r-none">
                Left
              </Button>
              <Button className="rounded-none border-x border-primary-foreground/20">
                Middle
              </Button>
              <Button className="rounded-l-none">
                Right
              </Button>
            </div>

            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="secondary" className="rounded-r-none">
                Left
              </Button>
              <Button variant="secondary" className="rounded-none border-x border-background/20">
                Middle
              </Button>
              <Button variant="secondary" className="rounded-l-none">
                Right
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Text Formatting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Text Formatting Toolbar</CardTitle>
            <CardDescription>
              Common text editor formatting buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-1">
              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" size="icon" className="rounded-r-none">
                  <Bold />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-x-0">
                  <Italic />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-r-0">
                  <Underline />
                </Button>
                <Button variant="outline" size="icon" className="rounded-l-none">
                  <Strikethrough />
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" size="icon" className="rounded-r-none">
                  <AlignLeft />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-x-0">
                  <AlignCenter />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-r-0">
                  <AlignRight />
                </Button>
                <Button variant="outline" size="icon" className="rounded-l-none">
                  <AlignJustify />
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" size="icon" className="rounded-r-none">
                  <Undo />
                </Button>
                <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                  <Redo />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Button Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toggle Button Group</CardTitle>
            <CardDescription>
              Single selection toggle groups with active state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Text Alignment */}
            <div>
              <p className="text-sm font-medium mb-2">Text Alignment</p>
              <div className="inline-flex rounded-md shadow-sm">
                <Button
                  variant={alignment === 'left' ? 'default' : 'outline'}
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setAlignment('left')}
                >
                  <AlignLeft />
                </Button>
                <Button
                  variant={alignment === 'center' ? 'default' : 'outline'}
                  size="icon"
                  className="rounded-none border-x-0"
                  onClick={() => setAlignment('center')}
                >
                  <AlignCenter />
                </Button>
                <Button
                  variant={alignment === 'right' ? 'default' : 'outline'}
                  size="icon"
                  className="rounded-none border-r-0"
                  onClick={() => setAlignment('right')}
                >
                  <AlignRight />
                </Button>
                <Button
                  variant={alignment === 'justify' ? 'default' : 'outline'}
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setAlignment('justify')}
                >
                  <AlignJustify />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Selected: {alignment}</p>
            </div>

            {/* View Toggle */}
            <div>
              <p className="text-sm font-medium mb-2">View Mode</p>
              <div className="inline-flex rounded-md shadow-sm">
                <Button
                  variant={view === 'grid' ? 'default' : 'outline'}
                  className="rounded-r-none"
                  onClick={() => setView('grid')}
                >
                  <LayoutGrid />
                  Grid
                </Button>
                <Button
                  variant={view === 'list' ? 'default' : 'outline'}
                  className="rounded-none border-x-0"
                  onClick={() => setView('list')}
                >
                  <List />
                  List
                </Button>
                <Button
                  variant={view === 'rows' ? 'default' : 'outline'}
                  className="rounded-l-none"
                  onClick={() => setView('rows')}
                >
                  <Rows />
                  Rows
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Selected: {view}</p>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>
              Button groups for navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Simple Pagination */}
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <ChevronLeft />
              </Button>
              <Button variant="outline" className="rounded-none border-x-0 min-w-[100px]">
                Page 1 of 10
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <ChevronRight />
              </Button>
            </div>

            {/* Number Pagination */}
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <ChevronLeft />
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                1
              </Button>
              <Button variant="default" className="rounded-none border-x-0">
                2
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                3
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                ...
              </Button>
              <Button variant="outline" className="rounded-none border-r-0">
                10
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <ChevronRight />
              </Button>
            </div>

            {/* Date Navigation */}
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <ArrowLeft />
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                <Calendar className="mr-2 h-4 w-4" />
                January 2024
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <ArrowRight />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quantity Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quantity Selector</CardTitle>
            <CardDescription>
              Increment/decrement button groups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="inline-flex rounded-md shadow-sm">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus />
                </Button>
                <div className="flex items-center justify-center w-16 border-y border-input bg-background text-sm">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">Quantity: {quantity}</span>
            </div>

            {/* Zoom Control */}
            <div className="flex items-center gap-4">
              <div className="inline-flex rounded-md shadow-sm">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setZoom(Math.max(25, zoom - 25))}
                >
                  <ZoomOut />
                </Button>
                <div className="flex items-center justify-center w-20 border-y border-input bg-background text-sm">
                  {zoom}%
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setZoom(Math.min(200, zoom + 25))}
                >
                  <ZoomIn />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">Zoom Level</span>
            </div>
          </CardContent>
        </Card>

        {/* Split Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Split Button</CardTitle>
            <CardDescription>
              Primary action with dropdown for additional options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex rounded-md shadow-sm">
                <Button className="rounded-r-none">
                  Save
                </Button>
                <Button className="rounded-l-none border-l border-primary-foreground/20 px-2">
                  <ChevronDown />
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="secondary" className="rounded-r-none">
                  Download
                </Button>
                <Button variant="secondary" className="rounded-l-none border-l border-background/20 px-2">
                  <ChevronDown />
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" className="rounded-r-none">
                  Export
                </Button>
                <Button variant="outline" className="rounded-l-none border-l-0 px-2">
                  <ChevronDown />
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="destructive" className="rounded-r-none">
                  Delete
                </Button>
                <Button variant="destructive" className="rounded-l-none border-l border-white/20 px-2">
                  <ChevronDown />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Player Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Media Player Controls</CardTitle>
            <CardDescription>
              Button groups for media playback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-lg inline-block">
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-md shadow-sm">
                  <Button variant="outline" size="icon" className="rounded-r-none">
                    <SkipBack />
                  </Button>
                  <Button
                    variant={isPlaying ? 'default' : 'outline'}
                    size="icon"
                    className="rounded-none border-x-0"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause /> : <Play />}
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-l-none">
                    <SkipForward />
                  </Button>
                </div>

                <Button
                  variant={isMuted ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clipboard Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Clipboard Actions</CardTitle>
            <CardDescription>
              Edit and clipboard operation buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" className="rounded-r-none">
                <Scissors className="mr-2 h-4 w-4" />
                Cut
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" className="rounded-l-none">
                <Grid className="mr-2 h-4 w-4" />
                Paste
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filter Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter & Sort Buttons</CardTitle>
            <CardDescription>
              Button groups for filtering and sorting data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="default" className="rounded-r-none">
                  All
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  Active
                </Button>
                <Button variant="outline" className="rounded-none border-r-0">
                  Pending
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  Completed
                </Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" className="rounded-r-none">
                  <ListFilter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" className="rounded-l-none border-l-0">
                  <ChevronDown />
                </Button>
              </div>
            </div>

            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" className="rounded-r-none">
                Day
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Week
              </Button>
              <Button variant="default" className="rounded-none border-r-0">
                Month
              </Button>
              <Button variant="outline" className="rounded-l-none">
                Year
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Button Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vertical Button Group</CardTitle>
            <CardDescription>
              Stacked button groups for sidebars or toolbars
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-8">
              <div className="inline-flex flex-col rounded-md shadow-sm">
                <Button variant="outline" className="rounded-b-none">
                  <Bold className="mr-2 h-4 w-4" />
                  Bold
                </Button>
                <Button variant="outline" className="rounded-none border-y-0">
                  <Italic className="mr-2 h-4 w-4" />
                  Italic
                </Button>
                <Button variant="outline" className="rounded-t-none">
                  <Underline className="mr-2 h-4 w-4" />
                  Underline
                </Button>
              </div>

              <div className="inline-flex flex-col rounded-md shadow-sm">
                <Button variant="outline" size="icon" className="rounded-b-none">
                  <AlignLeft />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-y-0">
                  <AlignCenter />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-b-0">
                  <AlignRight />
                </Button>
                <Button variant="outline" size="icon" className="rounded-t-none">
                  <AlignJustify />
                </Button>
              </div>
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

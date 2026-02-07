'use client'
import Link from 'next/link'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ScrollAreaShowcase() {
  const tags = [
    'v1.2.0-beta.50',
    'v1.2.0-beta.49',
    'v1.2.0-beta.48',
    'v1.2.0-beta.47',
    'v1.2.0-beta.46',
    'v1.2.0-beta.45',
    'v1.2.0-beta.44',
    'v1.2.0-beta.43',
    'v1.2.0-beta.42',
    'v1.2.0-beta.41',
    'v1.2.0-beta.40',
    'v1.2.0-beta.39',
    'v1.2.0-beta.38',
  ]

  const artworks = [
    {
      artist: 'Ornella Binni',
      image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=300&h=400&fit=crop',
    },
    {
      artist: 'Tom Byrom',
      image: 'https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=300&h=400&fit=crop',
    },
    {
      artist: 'Vladimir Malyavko',
      image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=300&h=400&fit=crop',
    },
    {
      artist: 'Joel Holland',
      image: 'https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=300&h=400&fit=crop',
    },
    {
      artist: 'Tycho Atsma',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Scroll-area</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/scroll-area"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Augments native scroll functionality for custom, cross-browser styling.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Vertical Scroll Example - Tags */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
            <CardDescription>
              Vertical scrolling list of version tags
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                {tags.map((tag, index) => (
                  <div key={tag}>
                    <div className="text-sm py-2">{tag}</div>
                    {index < tags.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Horizontal Scroll Example - Photos */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Works</CardTitle>
            <CardDescription>
              Horizontal scrolling gallery with images
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={artwork.image}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      Photo by{' '}
                      <span className="font-semibold text-foreground">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Scroll Area Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scroll Directions</CardTitle>
            <CardDescription>
              Examples of vertical and horizontal scroll areas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Vertical Scroll</p>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      This is line {i + 1} of scrollable content. Lorem ipsum dolor sit amet.
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Horizontal Scroll</p>
              <ScrollArea className="w-full whitespace-nowrap rounded-md border p-4">
                <div className="flex space-x-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="shrink-0 rounded-md border border-border bg-muted px-4 py-2 text-sm"
                    >
                      Item {i + 1}
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* With Custom Height */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Heights</CardTitle>
            <CardDescription>
              Scroll areas with different fixed heights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Small (h-32)</p>
              <ScrollArea className="h-32 w-full rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} className="text-sm">
                      Scroll content line {i + 1}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Medium (h-48)</p>
              <ScrollArea className="h-48 w-full rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <p key={i} className="text-sm">
                      Scroll content line {i + 1}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Large (h-96)</p>
              <ScrollArea className="h-96 w-full rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <p key={i} className="text-sm">
                      Scroll content line {i + 1}
                    </p>
                  ))}
                </div>
              </ScrollArea>
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

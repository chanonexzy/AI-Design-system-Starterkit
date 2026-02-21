'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function SkeletonShowcase() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Skeleton</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/skeleton"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Use to show a placeholder while content is loading.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Skeleton</CardTitle>
            <CardDescription>
              Simple skeleton loaders in different shapes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>

        {/* Card Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Card with Skeleton</CardTitle>
            <CardDescription>
              Loading state for a card component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-24" />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
                <CardFooter className="gap-2">
                  <Skeleton className="h-10 w-20" />
                  <Skeleton className="h-10 w-20" />
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Profile Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Profile Loading</CardTitle>
            <CardDescription>
              User profile card loading state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* List Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>List Loading</CardTitle>
            <CardDescription>
              Loading state for list items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Article Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Article Loading</CardTitle>
            <CardDescription>
              Blog post or article loading state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-64 w-full rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </CardContent>
        </Card>

        {/* Table Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Table Loading</CardTitle>
            <CardDescription>
              Data table loading state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 pb-2 border-b">
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </div>
              {/* Table Rows */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-4">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Different Shapes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Shapes</CardTitle>
            <CardDescription>
              Skeletons in various shapes and sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-md" />
              <Skeleton className="h-12 w-32 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-48 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-lg" />
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

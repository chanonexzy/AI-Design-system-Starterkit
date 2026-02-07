'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ProgressShowcase() {
  const [progress, setProgress] = useState(0)
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 10
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/progress"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Progress</CardTitle>
            <CardDescription>
              Simple progress bar with different values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>25%</span>
              </div>
              <Progress value={25} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>50%</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
          </CardContent>
        </Card>

        {/* Interactive Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Progress</CardTitle>
            <CardDescription>
              Control progress value with buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setProgress(Math.max(0, progress - 10))}
                variant="outline"
                size="sm"
              >
                Decrease
              </Button>
              <Button
                onClick={() => setProgress(Math.min(100, progress + 10))}
                variant="outline"
                size="sm"
              >
                Increase
              </Button>
              <Button
                onClick={() => setProgress(0)}
                variant="outline"
                size="sm"
              >
                Reset
              </Button>
              <Button
                onClick={() => setProgress(100)}
                variant="outline"
                size="sm"
              >
                Complete
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Animated Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Animated Progress</CardTitle>
            <CardDescription>
              Progress bar with automatic animation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Loading...</span>
                <span>{animatedProgress}%</span>
              </div>
              <Progress value={animatedProgress} />
            </div>
          </CardContent>
        </Card>

        {/* Multiple Progress Bars */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Progress Indicators</CardTitle>
            <CardDescription>
              Showing progress for different tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Uploading files</span>
                <span className="text-muted-foreground">3/5</span>
              </div>
              <Progress value={60} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Processing images</span>
                <span className="text-muted-foreground">7/10</span>
              </div>
              <Progress value={70} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Generating thumbnails</span>
                <span className="text-muted-foreground">Complete</span>
              </div>
              <Progress value={100} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Syncing to cloud</span>
                <span className="text-muted-foreground">Starting...</span>
              </div>
              <Progress value={5} />
            </div>
          </CardContent>
        </Card>

        {/* Indeterminate Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
            <CardDescription>
              Progress bars for different loading states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Small progress</span>
                <span>15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Default progress</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Large progress</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* File Upload Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Upload Example</CardTitle>
            <CardDescription>
              Real-world use case for file uploading
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">document.pdf</p>
                  <p className="text-xs text-muted-foreground">2.4 MB</p>
                </div>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
              <Progress value={100} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">image.jpg</p>
                  <p className="text-xs text-muted-foreground">5.8 MB</p>
                </div>
                <span className="text-sm text-muted-foreground">67%</span>
              </div>
              <Progress value={67} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">video.mp4</p>
                  <p className="text-xs text-muted-foreground">15.2 MB</p>
                </div>
                <span className="text-sm text-muted-foreground">23%</span>
              </div>
              <Progress value={23} />
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

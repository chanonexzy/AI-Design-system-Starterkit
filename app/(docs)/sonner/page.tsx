'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

export default function SonnerShowcase() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Sonner (Toast)</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/sonner"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            An opinionated toast component for React. Built on top of Sonner by Emil Kowalski.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Toast */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Toast</CardTitle>
            <CardDescription>
              Simple notification toasts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast('Event has been created')}
              >
                Show Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Event has been created', {
                  description: 'Sunday, December 03, 2023 at 9:00 AM'
                })}
              >
                With Description
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Toast Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toast Types</CardTitle>
            <CardDescription>
              Different types of notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast.success('Event has been created')}
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.error('Event could not be created')}
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.info('New update available')}
              >
                Info
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.warning('Disk space running low')}
              >
                Warning
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* With Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Actions</CardTitle>
            <CardDescription>
              Toasts with action buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast('Event has been created', {
                  action: {
                    label: 'Undo',
                    onClick: () => toast('Undo action'),
                  },
                })}
              >
                With Action
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Are you sure?', {
                  description: 'This action cannot be undone.',
                  action: {
                    label: 'Confirm',
                    onClick: () => toast.success('Confirmed'),
                  },
                  cancel: {
                    label: 'Cancel',
                    onClick: () => toast.error('Cancelled'),
                  },
                })}
              >
                With Cancel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading Toast */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading State</CardTitle>
            <CardDescription>
              Toast with loading indicator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  const id = toast.loading('Loading...')
                  setTimeout(() => {
                    toast.success('Done!', { id })
                  }, 2000)
                }}
              >
                Show Loading
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 2000)),
                    {
                      loading: 'Uploading...',
                      success: 'Upload complete!',
                      error: 'Upload failed',
                    }
                  )
                }}
              >
                Promise Toast
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Icons</CardTitle>
            <CardDescription>
              Toasts with custom icons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast('Custom success', {
                  icon: <CheckCircle2 className="h-4 w-4" />,
                })}
              >
                Success Icon
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Custom info', {
                  icon: <Info className="h-4 w-4" />,
                })}
              >
                Info Icon
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Custom alert', {
                  icon: <AlertCircle className="h-4 w-4" />,
                })}
              >
                Alert Icon
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Duration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Duration</CardTitle>
            <CardDescription>
              Control how long toasts are displayed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast('Quick message', { duration: 1000 })}
              >
                1 Second
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Default message')}
              >
                Default (4s)
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Long message', { duration: 10000 })}
              >
                10 Seconds
              </Button>
              <Button
                variant="outline"
                onClick={() => toast('Permanent', { duration: Infinity })}
              >
                Permanent
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Rich Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Rich Content</CardTitle>
            <CardDescription>
              Toasts with custom content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast.custom((t) => (
                  <div className="bg-background border rounded-lg p-4 shadow-lg">
                    <h3 className="font-semibold mb-1">Custom Toast</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      This is a fully customized toast with your own design.
                    </p>
                    <Button size="sm" onClick={() => toast.dismiss(t)}>
                      Dismiss
                    </Button>
                  </div>
                ))}
              >
                Custom Content
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Position */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Toast Positions</CardTitle>
            <CardDescription>
              Different positions for toast notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => toast('Top Left', { position: 'top-left' })}
                variant="outline"
                size="sm"
              >
                Top Left
              </Button>
              <Button
                onClick={() => toast('Top Center', { position: 'top-center' })}
                variant="outline"
                size="sm"
              >
                Top Center
              </Button>
              <Button
                onClick={() => toast('Top Right', { position: 'top-right' })}
                variant="outline"
                size="sm"
              >
                Top Right
              </Button>
              <Button
                onClick={() => toast('Bottom Left', { position: 'bottom-left' })}
                variant="outline"
                size="sm"
              >
                Bottom Left
              </Button>
              <Button
                onClick={() => toast('Bottom Center', { position: 'bottom-center' })}
                variant="outline"
                size="sm"
              >
                Bottom Center
              </Button>
              <Button
                onClick={() => toast('Bottom Right', { position: 'bottom-right' })}
                variant="outline"
                size="sm"
              >
                Bottom Right
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Real World Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real World Examples</CardTitle>
            <CardDescription>
              Common use cases for toast notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Form Submission</p>
              <Button
                onClick={() => {
                  const id = toast.loading('Saving changes...')
                  setTimeout(() => {
                    toast.success('Changes saved successfully!', {
                      id,
                      description: 'Your profile has been updated.',
                    })
                  }, 2000)
                }}
              >
                Save Form
              </Button>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">File Upload</p>
              <Button
                onClick={() => {
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 3000)),
                    {
                      loading: 'Uploading file...',
                      success: 'File uploaded successfully!',
                      error: 'Failed to upload file',
                    }
                  )
                }}
              >
                Upload File
              </Button>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Delete Confirmation</p>
              <Button
                variant="destructive"
                onClick={() => toast.error('Item deleted', {
                  description: 'The item has been permanently deleted.',
                  action: {
                    label: 'Undo',
                    onClick: () => toast.success('Deletion cancelled'),
                  },
                })}
              >
                Delete Item
              </Button>
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

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function TextareaShowcase() {
  const [comment, setComment] = useState('')
  const [bio, setBio] = useState('')

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/textarea"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a form textarea or a component that looks like a textarea.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Textarea */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Textarea</CardTitle>
            <CardDescription>
              Simple multi-line text input
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
          </CardContent>
        </Card>

        {/* With Label and Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Label and Description</CardTitle>
            <CardDescription>
              Textarea with helper text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Write a few sentences about yourself.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Character Count */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Character Count</CardTitle>
            <CardDescription>
              Textarea showing character limit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="comment">Comment</Label>
              <Textarea
                id="comment"
                placeholder="Leave a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={280}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Maximum 280 characters</span>
                <span>{comment.length}/280</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
            <CardDescription>
              Textareas with different row counts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="small">Small (3 rows)</Label>
              <Textarea id="small" placeholder="Short message" rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medium">Medium (5 rows)</Label>
              <Textarea id="medium" placeholder="Medium message" rows={5} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="large">Large (10 rows)</Label>
              <Textarea id="large" placeholder="Long message" rows={10} />
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Textarea in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Textarea
                id="disabled"
                placeholder="This is disabled"
                disabled
                value="You cannot edit this content"
              />
            </div>
          </CardContent>
        </Card>

        {/* Read-only */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Read-only</CardTitle>
            <CardDescription>
              Textarea in read-only mode
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="readonly">Read-only</Label>
              <Textarea
                id="readonly"
                readOnly
                value="This content is read-only. You can select and copy it, but cannot edit."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Resizable */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Resize Options</CardTitle>
            <CardDescription>
              Different resize behaviors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Default (Both directions)</Label>
              <Textarea placeholder="Can resize both ways" className="resize" />
            </div>

            <div className="space-y-2">
              <Label>Vertical only</Label>
              <Textarea placeholder="Can resize vertically" className="resize-y" />
            </div>

            <div className="space-y-2">
              <Label>Horizontal only</Label>
              <Textarea placeholder="Can resize horizontally" className="resize-x" />
            </div>

            <div className="space-y-2">
              <Label>No resize</Label>
              <Textarea placeholder="Cannot resize" className="resize-none" />
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>
              Textarea used in a complete form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us what you think"
                  rows={5}
                />
                <p className="text-sm text-muted-foreground">
                  Your feedback helps us improve our product.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea
                  id="details"
                  placeholder="Provide any additional information (optional)"
                  rows={4}
                />
              </div>

              <Button>Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>

        {/* Error State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Error State</CardTitle>
            <CardDescription>
              Textarea with validation error
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="error" className="text-destructive">
                Description *
              </Label>
              <Textarea
                id="error"
                placeholder="Enter description"
                className="border-destructive focus-visible:ring-destructive"
              />
              <p className="text-sm text-destructive">
                Description is required and must be at least 10 characters.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Auto-growing Textarea */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Auto-growing</CardTitle>
            <CardDescription>
              Textarea that grows with content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="autogrow">Auto-growing Textarea</Label>
              <Textarea
                id="autogrow"
                placeholder="Start typing and watch it grow..."
                className="min-h-[80px]"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = 'auto'
                  target.style.height = target.scrollHeight + 'px'
                }}
              />
              <p className="text-sm text-muted-foreground">
                This textarea automatically adjusts its height as you type.
              </p>
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

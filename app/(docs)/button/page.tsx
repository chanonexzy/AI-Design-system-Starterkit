'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Heart,
  Loader2,
  Mail,
  Menu,
  MoreHorizontal,
  Pencil,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Share,
  ShoppingCart,
  Trash2,
  Upload,
  X,
  Github,
  Twitter,
  Facebook
} from 'lucide-react'

export default function ButtonShowcase() {
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleCopyClick = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Button</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        {/* Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Six built-in variants for different contexts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <Button>Default</Button>
                <p className="text-xs text-muted-foreground mt-2">default</p>
              </div>
              <div className="text-center">
                <Button variant="secondary">Secondary</Button>
                <p className="text-xs text-muted-foreground mt-2">secondary</p>
              </div>
              <div className="text-center">
                <Button variant="destructive">Destructive</Button>
                <p className="text-xs text-muted-foreground mt-2">destructive</p>
              </div>
              <div className="text-center">
                <Button variant="outline">Outline</Button>
                <p className="text-xs text-muted-foreground mt-2">outline</p>
              </div>
              <div className="text-center">
                <Button variant="ghost">Ghost</Button>
                <p className="text-xs text-muted-foreground mt-2">ghost</p>
              </div>
              <div className="text-center">
                <Button variant="link">Link</Button>
                <p className="text-xs text-muted-foreground mt-2">link</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Different sizes for various use cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-end gap-4">
              <div className="text-center">
                <Button size="sm">Small</Button>
                <p className="text-xs text-muted-foreground mt-2">sm</p>
              </div>
              <div className="text-center">
                <Button size="default">Default</Button>
                <p className="text-xs text-muted-foreground mt-2">default</p>
              </div>
              <div className="text-center">
                <Button size="lg">Large</Button>
                <p className="text-xs text-muted-foreground mt-2">lg</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>
              Buttons with leading or trailing icons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>
                <Mail />
                Login with Email
              </Button>
              <Button variant="secondary">
                <Download />
                Download
              </Button>
              <Button variant="outline">
                <Settings />
                Settings
              </Button>
              <Button variant="destructive">
                <Trash2 />
                Delete
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>
                Next
                <ArrowRight />
              </Button>
              <Button variant="outline">
                Learn More
                <ExternalLink />
              </Button>
              <Button variant="ghost">
                View All
                <ChevronRight />
              </Button>
              <Button variant="secondary">
                Options
                <ChevronDown />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Icon Only Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Only Buttons</CardTitle>
            <CardDescription>
              Square buttons with only icons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="icon-sm" variant="outline">
                <Menu />
              </Button>
              <Button size="icon" variant="outline">
                <Search />
              </Button>
              <Button size="icon-lg" variant="outline">
                <Settings />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="icon" variant="default">
                <Plus />
              </Button>
              <Button size="icon" variant="secondary">
                <Pencil />
              </Button>
              <Button size="icon" variant="destructive">
                <Trash2 />
              </Button>
              <Button size="icon" variant="outline">
                <Heart />
              </Button>
              <Button size="icon" variant="ghost">
                <MoreHorizontal />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading State</CardTitle>
            <CardDescription>
              Buttons with loading spinner indicator
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="animate-spin" />
                Loading...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="animate-spin" />
                Processing
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleLoadingClick} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Check />
                    Save Changes
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleCopyClick}>
                {copied ? (
                  <>
                    <Check />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Buttons in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="destructive" disabled>Destructive</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
              <Button variant="link" disabled>Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button as Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button as Link</CardTitle>
            <CardDescription>
              Using asChild prop to render as anchor tag
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#">
                  <ExternalLink />
                  Visit Website
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#">
                  <Github />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#">
                  Learn More
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Groups</CardTitle>
            <CardDescription>
              Grouped buttons for related actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" className="rounded-r-none">
                <ArrowLeft />
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Today
              </Button>
              <Button variant="outline" className="rounded-l-none">
                <ArrowRight />
              </Button>
            </div>

            <div className="inline-flex rounded-md shadow-sm">
              <Button variant="outline" className="rounded-r-none">
                Copy
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Cut
              </Button>
              <Button variant="outline" className="rounded-l-none">
                Paste
              </Button>
            </div>

            <div className="inline-flex rounded-md shadow-sm">
              <Button className="rounded-r-none">
                Save
              </Button>
              <Button variant="outline" className="rounded-l-none border-l-0">
                <ChevronDown />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Social Buttons</CardTitle>
            <CardDescription>
              Buttons for social media actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                <Facebook />
                Facebook
              </Button>
              <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
                <Twitter />
                Twitter
              </Button>
              <Button className="bg-[#333] hover:bg-[#333]/90">
                <Github />
                GitHub
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">
                <Github />
                Continue with GitHub
              </Button>
              <Button variant="outline">
                <Mail />
                Continue with Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Action Buttons</CardTitle>
            <CardDescription>
              Buttons for common user actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>
                <Plus />
                Create New
              </Button>
              <Button variant="secondary">
                <Upload />
                Upload File
              </Button>
              <Button variant="outline">
                <Download />
                Export
              </Button>
              <Button variant="outline">
                <Share />
                Share
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Send />
                Send Message
              </Button>
              <Button variant="secondary">
                <RefreshCw />
                Refresh
              </Button>
              <Button variant="outline">
                <Play />
                Preview
              </Button>
              <Button variant="destructive">
                <X />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* E-commerce Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>E-commerce Buttons</CardTitle>
            <CardDescription>
              Buttons for shopping and checkout flows
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                <ShoppingCart />
                Add to Cart
              </Button>
              <Button size="lg" variant="secondary">
                Buy Now
              </Button>
              <Button size="lg" variant="outline">
                <Heart />
                Add to Wishlist
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="w-full sm:w-auto" size="lg">
                Proceed to Checkout
                <ArrowRight />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Full Width Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Full Width Buttons</CardTitle>
            <CardDescription>
              Buttons that span the full container width
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 max-w-md">
            <Button className="w-full">
              <Mail />
              Continue with Email
            </Button>
            <Button variant="outline" className="w-full">
              <Github />
              Continue with GitHub
            </Button>
            <Button variant="secondary" className="w-full">
              Create Account
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" size="icon" className="w-full">
                <Github />
              </Button>
              <Button variant="outline" size="icon" className="w-full">
                <Twitter />
              </Button>
              <Button variant="outline" size="icon" className="w-full">
                <Facebook />
              </Button>
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

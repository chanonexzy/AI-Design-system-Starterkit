'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThemeToggle, ThemeToggleWithLabel } from '@/components/theme-toggle'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, ArrowRight, ExternalLink, Sun, Moon, Palette } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ThemePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Theme Switching</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/dark-mode"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Docs
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Switch between light and dark themes seamlessly with persistent preferences.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Theme Toggle Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Theme Toggle Component</CardTitle>
            <CardDescription>
              Toggle between light and dark mode
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-3">Simple Toggle</p>
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <ThemeToggle />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-3">Toggle with Label</p>
                <div className="flex items-center justify-center p-4 border rounded-lg">
                  <ThemeToggleWithLabel />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Palette className="inline-block mr-2 h-5 w-5" />
              Theme Features
            </CardTitle>
            <CardDescription>
              Built-in features of the theme system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">✓</Badge>
                <div>
                  <p className="font-medium">Persistent Preferences</p>
                  <p className="text-sm text-muted-foreground">
                    Your theme choice is saved in localStorage and persists across sessions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">✓</Badge>
                <div>
                  <p className="font-medium">System Preference Detection</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically detects your OS theme preference on first visit
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">✓</Badge>
                <div>
                  <p className="font-medium">Smooth Transitions</p>
                  <p className="text-sm text-muted-foreground">
                    Seamless theme switching without flash of unstyled content
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">✓</Badge>
                <div>
                  <p className="font-medium">Full Component Support</p>
                  <p className="text-sm text-muted-foreground">
                    All 52 components are fully themed with proper contrast ratios
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Component Preview</CardTitle>
            <CardDescription>
              See how components look in the current theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Buttons</p>
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <Separator />

            {/* Badges */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Badges</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            <Separator />

            {/* Form Elements */}
            <div className="space-y-4">
              <p className="text-sm font-medium">Form Elements</p>
              <div className="grid gap-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Enable notifications</Label>
                  <Switch id="notifications" />
                </div>
              </div>
            </div>

            <Separator />

            {/* Alerts */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Alerts</p>
              <div className="space-y-2">
                <Alert>
                  <Sun className="h-4 w-4" />
                  <AlertTitle>Light Mode Active</AlertTitle>
                  <AlertDescription>
                    You are currently viewing the site in light mode.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <Moon className="h-4 w-4" />
                  <AlertTitle>Theme Warning</AlertTitle>
                  <AlertDescription>
                    Some features may look different in dark mode.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>
              Semantic color tokens in current theme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-background border" />
                <p className="text-xs font-medium">Background</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-foreground" />
                <p className="text-xs font-medium">Foreground</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-primary" />
                <p className="text-xs font-medium">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-secondary" />
                <p className="text-xs font-medium">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-muted" />
                <p className="text-xs font-medium">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-accent" />
                <p className="text-xs font-medium">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-destructive" />
                <p className="text-xs font-medium">Destructive</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-card border" />
                <p className="text-xs font-medium">Card</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-md bg-popover border" />
                <p className="text-xs font-medium">Popover</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
            <CardDescription>
              How to use the theme toggle in your components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Import the component:</p>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`import { ThemeToggle } from '@/components/theme-toggle'`}
                </code>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Use in your layout:</p>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`<ThemeToggle />`}
                </code>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Or with label:</p>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`<ThemeToggleWithLabel />`}
                </code>
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

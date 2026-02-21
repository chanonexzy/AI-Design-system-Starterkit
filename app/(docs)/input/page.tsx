'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Mail, Lock, User, Search, Phone, Calendar, DollarSign } from 'lucide-react'

export default function InputShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Input</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Displays a form input field or a component that looks like an input field.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/input"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Input - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Input</CardTitle>
            <CardDescription>
              Basic input field with placeholder text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-default">Email</Label>
              <Input id="email-default" type="email" placeholder="Email" />
            </div>
          </CardContent>
        </Card>

        {/* Input Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Types</CardTitle>
            <CardDescription>
              Different input types for various data formats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text</Label>
              <Input id="text-input" type="text" placeholder="Enter text" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-input">Email</Label>
              <Input id="email-input" type="email" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-input">Password</Label>
              <Input id="password-input" type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number-input">Number</Label>
              <Input id="number-input" type="number" placeholder="0" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tel-input">Phone</Label>
              <Input id="tel-input" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url-input">URL</Label>
              <Input id="url-input" type="url" placeholder="https://example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-input">Date</Label>
              <Input id="date-input" type="date" />
            </div>
          </CardContent>
        </Card>

        {/* File Input - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>File Input</CardTitle>
            <CardDescription>
              Upload files with custom button styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="file-input">Choose File</Label>
              <Input id="file-input" type="file" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-multiple">Multiple Files</Label>
              <Input id="file-multiple" type="file" multiple />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-accept">Image Files Only</Label>
              <Input id="file-accept" type="file" accept="image/*" />
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input with Icons</CardTitle>
            <CardDescription>
              Add icons for better visual context
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search-input">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="search-input" placeholder="Search..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-icon">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email-icon" type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-icon">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password-icon" type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-icon">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="user-icon" placeholder="username" className="pl-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input with Button</CardTitle>
            <CardDescription>
              Combine input with action buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subscribe-email">Newsletter</Label>
              <div className="flex gap-2">
                <Input id="subscribe-email" type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="search-query">Search</Label>
              <div className="flex gap-2">
                <Input id="search-query" placeholder="Search for anything..." />
                <Button variant="secondary">Search</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coupon-code">Coupon Code</Label>
              <div className="flex gap-2">
                <Input id="coupon-code" placeholder="Enter code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Sizes</CardTitle>
            <CardDescription>
              Different input sizes for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small-input" className="text-xs">Small</Label>
              <Input id="small-input" placeholder="Small input" className="h-8 text-xs" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-size">Default</Label>
              <Input id="default-size" placeholder="Default input" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="large-input" className="text-lg">Large</Label>
              <Input id="large-input" placeholder="Large input" className="h-12 text-lg" />
            </div>
          </CardContent>
        </Card>

        {/* Disabled State - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Input fields in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" placeholder="Disabled" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-value">Disabled with Value</Label>
              <Input id="disabled-value" defaultValue="user@example.com" disabled />
            </div>
          </CardContent>
        </Card>

        {/* With Validation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Validation</CardTitle>
            <CardDescription>
              Input fields with validation states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="valid-input">Valid Input</Label>
              <Input
                id="valid-input"
                type="email"
                defaultValue="user@example.com"
                className="border-green-500 focus-visible:ring-green-500"
              />
              <p className="text-sm text-green-600">Email is valid</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invalid-input">Invalid Input</Label>
              <Input
                id="invalid-input"
                type="email"
                defaultValue="invalid-email"
                className="border-destructive focus-visible:ring-destructive"
              />
              <p className="text-sm text-destructive">Please enter a valid email address</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="required-input">
                Required Input
                <span className="text-destructive ml-1">*</span>
              </Label>
              <Input id="required-input" placeholder="This field is required" required />
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>
              Real-world form with various input types
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-phone">Phone</Label>
              <Input id="form-phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Acme Inc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us how we can help..."
              />
            </div>

            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of input fields
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Basic Input
<Input type="email" placeholder="Email" />

// With Label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// With Icon
<div className="relative">
  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="Email" className="pl-10" />
</div>

// Disabled
<Input placeholder="Disabled" disabled />

// With Validation
<Input
  type="email"
  className="border-destructive"
  placeholder="Invalid email"
/>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using input fields effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Always use labels:</strong> Every input should have a corresponding label for accessibility.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use appropriate input types:</strong> Choose the right type (email, tel, url) for better mobile keyboard and validation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide helpful placeholders:</strong> Use placeholder text to show examples of expected input format.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Show clear validation:</strong> Provide immediate feedback on input validation with clear error messages.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use icons sparingly:</strong> Add icons only when they provide meaningful context and don't clutter the interface.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consider auto-complete:</strong> Enable browser autocomplete for common fields like name, email, and address.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Size appropriately:</strong> Make input fields wide enough to display typical input without scrolling.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

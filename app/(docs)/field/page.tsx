'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ExternalLink, CreditCard, User, Mail, Lock, Phone, Calendar, MapPin } from 'lucide-react'

// Field Component - Combines label, control, and help text
interface FieldProps {
  label: string
  htmlFor?: string
  required?: boolean
  error?: string
  description?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, required, error, description, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {children}
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

export default function FieldShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Field</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Combine labels, controls, and help text to compose accessible form fields and grouped
              inputs.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/field"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Payment Form - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>All transactions are secure and encrypted</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Field label="Name on Card" htmlFor="name-on-card">
              <Input id="name-on-card" placeholder="Evil Rabbit" />
            </Field>

            <Field
              label="Card Number"
              htmlFor="card-number"
              description="Enter your 16-digit number."
            >
              <Input id="card-number" placeholder="1234 1234 1234 1234" />
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field label="Month" htmlFor="month">
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                    <SelectItem value="04">04</SelectItem>
                    <SelectItem value="05">05</SelectItem>
                    <SelectItem value="06">06</SelectItem>
                    <SelectItem value="07">07</SelectItem>
                    <SelectItem value="08">08</SelectItem>
                    <SelectItem value="09">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Year" htmlFor="year">
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                    <SelectItem value="2030">2030</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="CVC" htmlFor="cvc">
                <Input id="cvc" placeholder="123" maxLength={3} />
              </Field>
            </div>

            <Button className="w-full">Pay Now</Button>
          </CardContent>
        </Card>

        {/* Basic Text Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Text Fields</CardTitle>
            <CardDescription>Standard input fields with labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="Full Name" htmlFor="full-name" required>
              <Input id="full-name" placeholder="John Doe" />
            </Field>

            <Field label="Email Address" htmlFor="email" required>
              <Input id="email" type="email" placeholder="john@example.com" />
            </Field>

            <Field label="Phone Number" htmlFor="phone">
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </Field>

            <Field label="Website" htmlFor="website" description="Your personal or company website">
              <Input id="website" type="url" placeholder="https://example.com" />
            </Field>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fields with Icons</CardTitle>
            <CardDescription>Add icons to provide visual context</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="Username" htmlFor="username-icon">
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="username-icon" placeholder="username" className="pl-10" />
              </div>
            </Field>

            <Field label="Email" htmlFor="email-icon">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email-icon" type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </Field>

            <Field label="Password" htmlFor="password-icon">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password-icon" type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </Field>
          </CardContent>
        </Card>

        {/* With Help Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Help Text</CardTitle>
            <CardDescription>
              Provide additional context with description text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field
              label="Display Name"
              htmlFor="display-name"
              description="This is your public display name. It can be your real name or a pseudonym."
            >
              <Input id="display-name" placeholder="John Doe" />
            </Field>

            <Field
              label="Bio"
              htmlFor="bio"
              description="Brief description for your profile. URLs are hyperlinked."
            >
              <textarea
                id="bio"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about yourself..."
              />
            </Field>

            <Field
              label="Password"
              htmlFor="password-help"
              description="Must be at least 8 characters with a mix of letters, numbers & symbols."
            >
              <Input id="password-help" type="password" />
            </Field>
          </CardContent>
        </Card>

        {/* With Validation Errors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Validation Errors</CardTitle>
            <CardDescription>Display error messages for invalid inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="Username" htmlFor="username-error" required error="Username is required">
              <Input id="username-error" className="border-destructive" />
            </Field>

            <Field
              label="Email"
              htmlFor="email-error"
              required
              error="Please enter a valid email address"
            >
              <Input id="email-error" type="email" defaultValue="invalid" className="border-destructive" />
            </Field>

            <Field
              label="Password"
              htmlFor="password-error"
              required
              error="Password must be at least 8 characters"
            >
              <Input id="password-error" type="password" defaultValue="123" className="border-destructive" />
            </Field>
          </CardContent>
        </Card>

        {/* Select Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Fields</CardTitle>
            <CardDescription>Dropdown selection fields</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="Country" htmlFor="country" required>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field label="Role" htmlFor="role" description="Select your role in the organization">
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </CardContent>
        </Card>

        {/* Multi-column Layout */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multi-column Layout</CardTitle>
            <CardDescription>Organize fields in a grid layout</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" htmlFor="first-name" required>
                <Input id="first-name" placeholder="John" />
              </Field>

              <Field label="Last Name" htmlFor="last-name" required>
                <Input id="last-name" placeholder="Doe" />
              </Field>
            </div>

            <Field label="Address" htmlFor="address">
              <Input id="address" placeholder="123 Main St" />
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Field label="City" htmlFor="city">
                  <Input id="city" placeholder="San Francisco" />
                </Field>
              </div>

              <Field label="State" htmlFor="state">
                <Select>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">CA</SelectItem>
                    <SelectItem value="ny">NY</SelectItem>
                    <SelectItem value="tx">TX</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="ZIP Code" htmlFor="zip">
                <Input id="zip" placeholder="94102" />
              </Field>

              <Field label="Country" htmlFor="country-2">
                <Select>
                  <SelectTrigger id="country-2">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>Fields in disabled state</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field label="Email" htmlFor="email-disabled" description="This field cannot be edited">
              <Input id="email-disabled" defaultValue="user@example.com" disabled />
            </Field>

            <Field label="Account Type" htmlFor="account-type-disabled">
              <Select disabled>
                <SelectTrigger id="account-type-disabled">
                  <SelectValue placeholder="Premium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a field component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`function Field({ label, htmlFor, required, error, description, children }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

// Usage
<Field label="Email" htmlFor="email" required>
  <Input id="email" type="email" placeholder="you@example.com" />
</Field>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for creating accessible form fields
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Always use labels:</strong> Every input should
                  have a corresponding label for accessibility.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide helpful descriptions:</strong> Use
                  description text to clarify what's expected in the field.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Show clear error messages:</strong> Make error
                  messages specific and actionable.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Mark required fields:</strong> Use asterisks or
                  other clear indicators for required fields.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use appropriate input types:</strong> Choose the
                  right input type (email, tel, url) for better mobile experience.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Group related fields:</strong> Use proper
                  spacing and layout to show relationships between fields.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

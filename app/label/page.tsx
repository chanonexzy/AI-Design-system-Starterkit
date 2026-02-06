'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'

export default function LabelShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Label</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Renders an accessible label associated with controls.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/label"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Checkbox with Label - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Checkbox with Label</CardTitle>
            <CardDescription>
              Associate labels with checkboxes for better accessibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </Label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" defaultChecked />
              <Label htmlFor="marketing">
                Send me marketing emails
              </Label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">
                This option is disabled
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Text Input with Label */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Text Input with Label</CardTitle>
            <CardDescription>
              Labels provide context for input fields
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
        </Card>

        {/* Radio Group with Labels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Radio Group with Labels</CardTitle>
            <CardDescription>
              Each radio option should have an associated label
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Switch with Label */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Switch with Label</CardTitle>
            <CardDescription>
              Toggle switches paired with descriptive labels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Switch id="bluetooth" />
              <Label htmlFor="bluetooth">Bluetooth</Label>
            </div>
          </CardContent>
        </Card>

        {/* Textarea with Label */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Textarea with Label</CardTitle>
            <CardDescription>
              Labels for multi-line text inputs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Required Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required Fields</CardTitle>
            <CardDescription>
              Indicate required fields with visual indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required-name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="required-name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="required-email">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input id="required-email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="optional-phone">
                Phone Number <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="optional-phone" type="tel" />
            </div>
          </CardContent>
        </Card>

        {/* Label with Help Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Labels with Help Text</CardTitle>
            <CardDescription>
              Combine labels with descriptive help text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
              <p className="text-sm text-muted-foreground">
                This is your public display name.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input id="api-key" type="password" />
              <p className="text-sm text-muted-foreground">
                Keep this secret! Never share your API key.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Label Positioning */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label Positioning</CardTitle>
            <CardDescription>
              Different label layouts for various form designs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Top Label */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Top Label (Default)</p>
              <div className="space-y-2">
                <Label htmlFor="top-label">Email</Label>
                <Input id="top-label" type="email" />
              </div>
            </div>

            <Separator />

            {/* Inline Label */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Inline Label</p>
              <div className="flex items-center gap-4">
                <Label htmlFor="inline-label" className="w-32">Email</Label>
                <Input id="inline-label" type="email" className="flex-1" />
              </div>
            </div>

            <Separator />

            {/* Right-aligned Label */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Right-aligned Label</p>
              <div className="flex items-center gap-4">
                <Label htmlFor="right-label" className="w-32 text-right">Email</Label>
                <Input id="right-label" type="email" className="flex-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complex Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>
              A full form demonstrating proper label usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input id="last-name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input id="form-email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">
                Subscribe to newsletter
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="form-terms" />
              <Label htmlFor="form-terms">
                I agree to the <a href="#" className="underline">terms and conditions</a>
              </Label>
            </div>

            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of labels with form controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

// Text Input with Label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>

// Checkbox with Label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">
    Accept terms and conditions
  </Label>
</div>

// Required Field
<div className="space-y-2">
  <Label htmlFor="name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" required />
</div>

// Label with Help Text
<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" />
  <p className="text-sm text-muted-foreground">
    This is your public display name.
  </p>
</div>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using labels effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Always use labels:</strong> Every form control should have an associated label for accessibility.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use htmlFor attribute:</strong> Connect labels to inputs using the htmlFor prop matching the input's id.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep labels concise:</strong> Use clear, short labels that describe the input's purpose.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Indicate required fields:</strong> Use asterisks (*) or "(required)" to mark mandatory fields.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide help text:</strong> Add descriptive text below labels for complex or sensitive fields.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consistent positioning:</strong> Maintain consistent label placement throughout your forms.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Clickable labels:</strong> Properly associated labels are clickable and will focus/activate their control.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Screen reader friendly:</strong> Labels ensure form controls are announced correctly by assistive technologies.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

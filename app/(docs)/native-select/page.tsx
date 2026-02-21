'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Globe, CreditCard, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
  className?: string
}

function NativeSelect({ className, children, ...props }: NativeSelectProps) {
  return (
    <select
      className={cn(
        'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background transition-colors',
        'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        '[&>option]:bg-popover [&>option]:text-popover-foreground',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export default function NativeSelectShowcase() {
  const [country, setCountry] = useState('')
  const [language, setLanguage] = useState('en')
  const [month, setMonth] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Native Select</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              A styled native HTML select element that provides a simple dropdown selection interface.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/select"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Native Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Native Select</CardTitle>
            <CardDescription>
              Simple dropdown selection with native HTML select element
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <NativeSelect id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="jp">Japan</option>
                <option value="cn">China</option>
              </NativeSelect>
            </div>

            {country && (
              <p className="text-sm text-muted-foreground">
                Selected country: <span className="font-medium text-foreground">{country}</span>
              </p>
            )}
          </CardContent>
        </Card>

        {/* Select with Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select with Icon</CardTitle>
            <CardDescription>
              Enhance selects with leading icons for better context
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <NativeSelect
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="pl-9"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                </NativeSelect>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment">Payment Method</Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <NativeSelect
                  id="payment"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="pl-9"
                >
                  <option value="">Select payment method</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="crypto">Cryptocurrency</option>
                </NativeSelect>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grouped Options */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grouped Options</CardTitle>
            <CardDescription>
              Organize options into logical groups using optgroup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <NativeSelect id="timezone">
                <option value="">Select timezone</option>
                <optgroup label="North America">
                  <option value="pst">Pacific Standard Time (PST)</option>
                  <option value="mst">Mountain Standard Time (MST)</option>
                  <option value="cst">Central Standard Time (CST)</option>
                  <option value="est">Eastern Standard Time (EST)</option>
                </optgroup>
                <optgroup label="Europe">
                  <option value="gmt">Greenwich Mean Time (GMT)</option>
                  <option value="cet">Central European Time (CET)</option>
                  <option value="eet">Eastern European Time (EET)</option>
                </optgroup>
                <optgroup label="Asia">
                  <option value="ist">India Standard Time (IST)</option>
                  <option value="cst-china">China Standard Time (CST)</option>
                  <option value="jst">Japan Standard Time (JST)</option>
                </optgroup>
              </NativeSelect>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="car">Vehicle Brand</Label>
              <NativeSelect id="car">
                <option value="">Select a brand</option>
                <optgroup label="Luxury">
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                  <option value="lexus">Lexus</option>
                </optgroup>
                <optgroup label="Economy">
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  <option value="chevrolet">Chevrolet</option>
                </optgroup>
                <optgroup label="Electric">
                  <option value="tesla">Tesla</option>
                  <option value="rivian">Rivian</option>
                  <option value="lucid">Lucid Motors</option>
                </optgroup>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Show unavailable select controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled-select">Disabled Select</Label>
              <NativeSelect id="disabled-select" disabled>
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
              <p className="text-sm text-muted-foreground">
                This select is disabled and cannot be interacted with.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="with-disabled-options">Select with Disabled Options</Label>
              <NativeSelect id="with-disabled-options">
                <option value="">Choose a plan</option>
                <option value="free">Free Plan</option>
                <option value="basic">Basic Plan</option>
                <option value="pro" disabled>Pro Plan (Coming Soon)</option>
                <option value="enterprise" disabled>Enterprise (Contact Sales)</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Required Field */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required Field</CardTitle>
            <CardDescription>
              Mark select fields as required with validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required-select">
                Department <span className="text-destructive">*</span>
              </Label>
              <NativeSelect id="required-select" required>
                <option value="">Select department</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </NativeSelect>
              <p className="text-sm text-muted-foreground">
                This field is required
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Select</CardTitle>
            <CardDescription>
              Allow users to select multiple options at once
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (Hold Ctrl/Cmd to select multiple)</Label>
              <NativeSelect id="skills" multiple className="h-auto py-2">
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="node">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
              </NativeSelect>
              <p className="text-sm text-muted-foreground">
                Hold down Ctrl (Windows) or Command (Mac) to select multiple options
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Size Variations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Size Variations</CardTitle>
            <CardDescription>
              Different sizes for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small-select" className="text-sm">Small Select</Label>
              <NativeSelect id="small-select" className="h-8 text-xs">
                <option value="">Small size</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-select">Default Select</Label>
              <NativeSelect id="default-select">
                <option value="">Default size</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="large-select" className="text-base">Large Select</Label>
              <NativeSelect id="large-select" className="h-11 text-base">
                <option value="">Large size</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>
              A registration form using native select elements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="form-month">
                    <Calendar className="inline-block mr-2 h-4 w-4" />
                    Birth Month <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="form-month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                  >
                    <option value="">Select month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-year">
                    Year <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect id="form-year" required>
                    <option value="">Select year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    })}
                  </NativeSelect>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-country">
                  Country <span className="text-destructive">*</span>
                </Label>
                <NativeSelect id="form-country" required>
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </NativeSelect>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-interest">Area of Interest</Label>
                <NativeSelect id="form-interest">
                  <option value="">Select an option</option>
                  <optgroup label="Technology">
                    <option value="web-dev">Web Development</option>
                    <option value="mobile-dev">Mobile Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                  </optgroup>
                  <optgroup label="Design">
                    <option value="ui-design">UI Design</option>
                    <option value="ux-design">UX Design</option>
                    <option value="graphic-design">Graphic Design</option>
                  </optgroup>
                  <optgroup label="Business">
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="management">Management</option>
                  </optgroup>
                </NativeSelect>
              </div>

              <Button type="submit" className="w-full">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a native select component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { cn } from '@/lib/utils'

interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
  className?: string
}

function NativeSelect({ className, children, ...props }: NativeSelectProps) {
  return (
    <select
      className={cn(
        'flex h-9 w-full items-center justify-between rounded-md border border-input',
        'bg-transparent px-3 py-2 text-sm shadow-xs transition-colors',
        'focus-visible:outline-none focus-visible:ring-[3px]',
        'focus-visible:ring-ring/50 focus-visible:border-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        '[&>option]:bg-popover [&>option]:text-popover-foreground',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

// Usage
<NativeSelect>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</NativeSelect>

// With Label
<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <NativeSelect id="country">
    <option value="">Select country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </NativeSelect>
</div>

// With Icon
<div className="relative">
  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
  <NativeSelect className="pl-9">
    <option value="">Select language</option>
    <option value="en">English</option>
    <option value="es">Spanish</option>
  </NativeSelect>
</div>

// Grouped Options
<NativeSelect>
  <option value="">Select timezone</option>
  <optgroup label="North America">
    <option value="pst">Pacific Time</option>
    <option value="est">Eastern Time</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="gmt">GMT</option>
    <option value="cet">CET</option>
  </optgroup>
</NativeSelect>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using native select elements effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use native selects for mobile:</strong> Native select elements provide optimal mobile experience with native pickers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide default option:</strong> Include a placeholder option like "Select an option" as the first choice.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Group related options:</strong> Use optgroup to organize options into logical categories.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Label every select:</strong> Always associate a label with each select for accessibility.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep option text concise:</strong> Use short, clear labels for options to improve readability.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use appropriate size:</strong> For long lists (&gt;10 items), consider adding search functionality or use a custom select.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Mark required fields:</strong> Clearly indicate required select fields with asterisks or "required" labels.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consider custom select for complex needs:</strong> For advanced features like search, multi-select with checkboxes, or custom styling, use a custom select component.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

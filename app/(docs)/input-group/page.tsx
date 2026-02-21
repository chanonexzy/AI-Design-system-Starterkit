'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Search, Info, Plus, AtSign, DollarSign, Percent, Globe, Mail, Link as LinkIcon } from 'lucide-react'

export default function InputGroupShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Input Group</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Display additional information or actions to an input or textarea.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/input-group"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Search with Results - From Figma Type 1 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search with Results Count</CardTitle>
            <CardDescription>
              Display search input with icon prefix and results count suffix
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search-results">Search</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center pl-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="search-results"
                  placeholder="Search..."
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center pr-3">
                  <span className="text-sm font-medium text-muted-foreground">12 results</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* URL Input with Prefix - From Figma Type 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>URL Input with Protocol</CardTitle>
            <CardDescription>
              Input with text prefix and info icon suffix
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url-input">Website URL</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center pl-3 border-r border-input">
                  <span className="text-sm font-medium text-muted-foreground pr-3">https://</span>
                </div>
                <Input
                  id="url-input"
                  placeholder="example.com"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center pr-3">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Input with Action - From Figma Type 3 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Chat Input with Action Button</CardTitle>
            <CardDescription>
              Large textarea with action button below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chat-input">Message</Label>
              <div className="border border-input rounded-md shadow-sm">
                <textarea
                  id="chat-input"
                  placeholder="Ask, Search or Chat..."
                  className="flex min-h-[64px] w-full bg-background px-3 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 border-0 resize-none"
                />
                <div className="flex items-center gap-2 px-3 pb-3 pt-0 border-t border-input">
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Price Input</CardTitle>
            <CardDescription>
              Input with currency symbol prefix
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="price-input">Price</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center pl-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="price-input"
                  type="number"
                  placeholder="0.00"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="percent-input">Discount</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <Input
                  id="percent-input"
                  type="number"
                  placeholder="0"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center pr-3">
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email with Domain */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Email Input with Domain</CardTitle>
            <CardDescription>
              Username input with domain suffix
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-username">Email Address</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center pl-3">
                  <AtSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="email-username"
                  placeholder="username"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center px-3 border-l border-input">
                  <span className="text-sm text-muted-foreground">@company.com</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Action Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input with Action Button</CardTitle>
            <CardDescription>
              Input field combined with action button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subscribe-input">Newsletter</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm overflow-hidden">
                <div className="flex items-center pl-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="subscribe-input"
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <Button className="rounded-none border-l h-10" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="domain-input">Domain Search</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm overflow-hidden">
                <div className="flex items-center pl-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="domain-input"
                  placeholder="example.com"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <Button variant="secondary" className="rounded-none border-l h-10" size="sm">
                  Check
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Addons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Add-ons</CardTitle>
            <CardDescription>
              Input with both prefix and suffix text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subdomain-input">Subdomain</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center px-3 border-r border-input">
                  <span className="text-sm text-muted-foreground">https://</span>
                </div>
                <Input
                  id="subdomain-input"
                  placeholder="mysite"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center px-3 border-l border-input">
                  <span className="text-sm text-muted-foreground">.example.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="range-input">Price Range</Label>
              <div className="flex rounded-md border border-input bg-background shadow-sm">
                <div className="flex items-center pl-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="range-input"
                  type="number"
                  placeholder="Min"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center px-2 border-x border-input">
                  <span className="text-sm text-muted-foreground">to</span>
                </div>
                <Input
                  type="number"
                  placeholder="Max"
                  className="border-0 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center pr-3">
                  <span className="text-sm text-muted-foreground">USD</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              Input groups in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled-search">Search</Label>
              <div className="flex rounded-md border border-input bg-muted shadow-sm opacity-50">
                <div className="flex items-center pl-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="disabled-search"
                  placeholder="Search..."
                  disabled
                  className="border-0 shadow-none focus-visible:ring-0 bg-muted"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of input groups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Input with Icon Prefix
<div className="flex rounded-md border border-input bg-background shadow-sm">
  <div className="flex items-center pl-3">
    <Search className="h-4 w-4 text-muted-foreground" />
  </div>
  <Input
    placeholder="Search..."
    className="border-0 shadow-none focus-visible:ring-0"
  />
</div>

// Input with Text Prefix
<div className="flex rounded-md border border-input bg-background shadow-sm">
  <div className="flex items-center px-3 border-r border-input">
    <span className="text-sm text-muted-foreground">https://</span>
  </div>
  <Input
    placeholder="example.com"
    className="border-0 shadow-none focus-visible:ring-0"
  />
</div>

// Input with Button
<div className="flex rounded-md border border-input bg-background shadow-sm overflow-hidden">
  <Input
    placeholder="Enter your email"
    className="border-0 shadow-none focus-visible:ring-0"
  />
  <Button className="rounded-none border-l h-10" size="sm">
    Subscribe
  </Button>
</div>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using input groups effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use meaningful prefixes:</strong> Add prefixes that provide context about the expected input format (currency, protocol, etc.).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep suffixes concise:</strong> Suffix text should be brief and not overwhelm the input field.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Maintain visual hierarchy:</strong> Ensure add-ons are visually distinct from the input but don't compete for attention.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use icons sparingly:</strong> Icons should add clarity, not decoration. Use text when it's more clear.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consider mobile:</strong> Make sure add-ons don't make the input too cramped on small screens.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Disable consistently:</strong> When disabling an input group, disable all interactive elements within it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Action buttons should be clear:</strong> If adding action buttons, make their purpose immediately obvious.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

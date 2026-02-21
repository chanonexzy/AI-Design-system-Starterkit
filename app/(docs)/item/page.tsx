'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ExternalLink,
  BadgeCheck,
  ChevronRight,
  Bell,
  Package,
  FileText,
  Settings,
  User,
  Mail,
  MessageSquare
} from 'lucide-react'

interface ItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  variant?: 'default' | 'muted' | 'outline'
  className?: string
}

function Item({ icon, title, description, action, variant = 'default', className }: ItemProps) {
  const variants = {
    default: 'border border-border bg-background',
    muted: 'bg-muted/50 border-0',
    outline: 'border-2 border-dashed border-border bg-background',
  }

  return (
    <div className={`rounded-lg p-4 flex items-center gap-3 ${variants[variant]} ${className || ''}`}>
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium leading-none mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-snug">{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
}

export default function ItemShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Item</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              A versatile component that you can use to display any content.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/item"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Item - From Figma Type 1 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Item</CardTitle>
            <CardDescription>
              Simple item with title, description, and action button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Item
              title="Basic Item"
              description="A simple item with title and description."
              action={<Button variant="outline" size="sm">Action</Button>}
            />
          </CardContent>
        </Card>

        {/* Item with Icons - From Figma Type 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Items with Icons</CardTitle>
            <CardDescription>
              Display items with leading and trailing icons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Item
              icon={<BadgeCheck className="h-5 w-5" />}
              title="Your profile has been verified."
              action={<ChevronRight className="h-4 w-4" />}
            />

            <Separator />

            <Item
              icon={<Bell className="h-5 w-5 text-blue-500" />}
              title="New notification received"
              description="You have 3 unread messages"
              action={<ChevronRight className="h-4 w-4" />}
            />

            <Separator />

            <Item
              icon={<Package className="h-5 w-5 text-green-500" />}
              title="Order shipped"
              description="Your order #1234 has been shipped"
              action={<Button variant="ghost" size="sm">Track</Button>}
            />
          </CardContent>
        </Card>

        {/* Variant Styles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Variant Styles</CardTitle>
            <CardDescription>
              Different visual styles for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Default Variant</p>
              <Item
                title="Default Variant"
                description="Standard styling with subtle background and borders."
                variant="default"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Muted Variant</p>
              <Item
                title="Muted Variant"
                description="Softer appearance for secondary information."
                variant="muted"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Outline Variant</p>
              <Item
                title="Outline Variant"
                description="Dashed border for placeholder or draft states."
                variant="outline"
              />
            </div>
          </CardContent>
        </Card>

        {/* Interactive List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive List</CardTitle>
            <CardDescription>
              Clickable items for navigation or actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            <button className="w-full text-left hover:bg-accent transition-colors rounded-lg">
              <Item
                icon={<Settings className="h-5 w-5" />}
                title="Settings"
                description="Manage your account preferences"
                action={<ChevronRight className="h-4 w-4" />}
              />
            </button>

            <Separator className="my-2" />

            <button className="w-full text-left hover:bg-accent transition-colors rounded-lg">
              <Item
                icon={<User className="h-5 w-5" />}
                title="Profile"
                description="View and edit your profile"
                action={<ChevronRight className="h-4 w-4" />}
              />
            </button>

            <Separator className="my-2" />

            <button className="w-full text-left hover:bg-accent transition-colors rounded-lg">
              <Item
                icon={<FileText className="h-5 w-5" />}
                title="Documents"
                description="Access your saved documents"
                action={<ChevronRight className="h-4 w-4" />}
              />
            </button>
          </CardContent>
        </Card>

        {/* Status Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Status and Notifications</CardTitle>
            <CardDescription>
              Display status updates and notification items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Item
              icon={<BadgeCheck className="h-5 w-5 text-green-500" />}
              title="Email verified successfully"
              description="Your email address has been confirmed"
            />

            <Separator />

            <Item
              icon={<Mail className="h-5 w-5 text-blue-500" />}
              title="New message from John"
              description="Hey, are you available for a call?"
              action={
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Reply</Button>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              }
            />

            <Separator />

            <Item
              icon={<MessageSquare className="h-5 w-5 text-purple-500" />}
              title="Comment on your post"
              description="Sarah commented: Great work!"
              action={<Badge variant="secondary">New</Badge>}
            />
          </CardContent>
        </Card>

        {/* Complex Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complex Content</CardTitle>
            <CardDescription>
              Items with rich content and multiple actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-1">Order #12345</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Estimated delivery: Tomorrow, Feb 7
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Processing</Badge>
                    <Badge variant="outline">Express Shipping</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">Track</Button>
              </div>
            </div>

            <Separator />

            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-1">Project Proposal.pdf</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    2.4 MB • Last modified 2 hours ago
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Shared by John Doe
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Download</Button>
                  <Button variant="outline" size="sm">Share</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Empty State</CardTitle>
            <CardDescription>
              Use outline variant for empty states or placeholders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Item
              variant="outline"
              title="No items yet"
              description="Get started by creating your first item"
              action={<Button size="sm">Create</Button>}
            />
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of an item component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`interface ItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  variant?: 'default' | 'muted' | 'outline'
}

function Item({ icon, title, description, action, variant = 'default' }: ItemProps) {
  const variants = {
    default: 'border border-border bg-background',
    muted: 'bg-muted/50 border-0',
    outline: 'border-2 border-dashed border-border bg-background',
  }

  return (
    <div className={\`rounded-lg p-4 flex items-center gap-3 \${variants[variant]}\`}>
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
}

// Usage
<Item
  icon={<BadgeCheck className="h-5 w-5" />}
  title="Your profile has been verified"
  action={<ChevronRight className="h-4 w-4" />}
/>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using items effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep titles concise:</strong> Use short, descriptive titles that clearly communicate the item's purpose.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use meaningful icons:</strong> Choose icons that reinforce the item's meaning and help with quick scanning.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide context:</strong> Use descriptions to give additional information when needed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Clear actions:</strong> Make action buttons obvious and use appropriate variants for their importance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consistent spacing:</strong> Use separators between items to improve readability in lists.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Interactive feedback:</strong> For clickable items, provide hover states to indicate interactivity.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Choose appropriate variants:</strong> Use default for standard items, muted for secondary content, and outline for placeholders.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

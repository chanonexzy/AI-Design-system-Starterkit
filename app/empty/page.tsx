'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ExternalLink,
  FolderCode,
  FileQuestion,
  Users,
  ShoppingCart,
  Search,
  Inbox,
  Archive,
  Plus,
  Upload,
  ArrowUpRight,
  Package,
} from 'lucide-react'

// Empty State Component
interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  learnMore?: {
    label: string
    href: string
  }
}

function EmptyState({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  learnMore,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
      <div className="flex flex-col items-center space-y-6 max-w-md">
        {/* Icon */}
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex gap-3">
            {primaryAction && (
              <Button onClick={primaryAction.onClick}>{primaryAction.label}</Button>
            )}
            {secondaryAction && (
              <Button variant="outline" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}

        {/* Learn More Link */}
        {learnMore && (
          <Button variant="ghost" asChild>
            <a
              href={learnMore.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {learnMore.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default function EmptyStateShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Empty</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Use the Empty component to display a empty state.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/empty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Projects Empty State - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Projects Empty State</CardTitle>
            <CardDescription>
              Display when no projects have been created yet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<FolderCode className="h-6 w-6" />}
              title="No Projects Yet"
              description="You haven't created any projects yet. Get started by creating your first project."
              primaryAction={{
                label: 'Create Project',
                onClick: () => console.log('Create project'),
              }}
              secondaryAction={{
                label: 'Import Project',
                onClick: () => console.log('Import project'),
              }}
              learnMore={{
                label: 'Learn More',
                href: '#',
              }}
            />
          </CardContent>
        </Card>

        {/* Search Results Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Results Empty</CardTitle>
            <CardDescription>
              Display when search returns no results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Search className="h-6 w-6" />}
              title="No Results Found"
              description="We couldn't find any results matching your search criteria. Try adjusting your filters or search terms."
              primaryAction={{
                label: 'Clear Filters',
                onClick: () => console.log('Clear filters'),
              }}
            />
          </CardContent>
        </Card>

        {/* Inbox Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inbox Empty</CardTitle>
            <CardDescription>
              Display when inbox or messages are empty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Inbox className="h-6 w-6" />}
              title="Inbox is Empty"
              description="You're all caught up! No new messages at this time."
            />
          </CardContent>
        </Card>

        {/* Orders Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Orders Empty</CardTitle>
            <CardDescription>
              Display when customer has no orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<ShoppingCart className="h-6 w-6" />}
              title="No Orders Yet"
              description="You haven't placed any orders. Start shopping to see your orders here."
              primaryAction={{
                label: 'Browse Products',
                onClick: () => console.log('Browse products'),
              }}
            />
          </CardContent>
        </Card>

        {/* Team Members Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Team Members Empty</CardTitle>
            <CardDescription>
              Display when no team members have been added
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Users className="h-6 w-6" />}
              title="No Team Members"
              description="Start building your team by inviting members to collaborate on your projects."
              primaryAction={{
                label: 'Invite Members',
                onClick: () => console.log('Invite members'),
              }}
              secondaryAction={{
                label: 'Import from CSV',
                onClick: () => console.log('Import CSV'),
              }}
            />
          </CardContent>
        </Card>

        {/* Files Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Files Empty</CardTitle>
            <CardDescription>
              Display when no files have been uploaded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<FileQuestion className="h-6 w-6" />}
              title="No Files"
              description="Upload your first file to get started with file management and sharing."
              primaryAction={{
                label: 'Upload File',
                onClick: () => console.log('Upload file'),
              }}
            />
          </CardContent>
        </Card>

        {/* Archive Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Archive Empty</CardTitle>
            <CardDescription>
              Display when archive folder is empty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Archive className="h-6 w-6" />}
              title="Archive is Empty"
              description="Items you archive will appear here for easy access later."
            />
          </CardContent>
        </Card>

        {/* Products Empty */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Products Empty</CardTitle>
            <CardDescription>
              Display when no products are available
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<Package className="h-6 w-6" />}
              title="No Products"
              description="Add your first product to start selling on your store."
              primaryAction={{
                label: 'Add Product',
                onClick: () => console.log('Add product'),
              }}
              secondaryAction={{
                label: 'Import Products',
                onClick: () => console.log('Import products'),
              }}
              learnMore={{
                label: 'Product Guide',
                href: '#',
              }}
            />
          </CardContent>
        </Card>

        {/* Without Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Without Icon</CardTitle>
            <CardDescription>
              Empty states can also work without icons for simpler designs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No Data Available"
              description="There is currently no data to display. Check back later or try refreshing the page."
              primaryAction={{
                label: 'Refresh',
                onClick: () => window.location.reload(),
              }}
            />
          </CardContent>
        </Card>

        {/* Simple Empty State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Simple Empty State</CardTitle>
            <CardDescription>
              Minimal empty state with just text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="Nothing Here Yet"
              description="Content will appear here once it's available."
            />
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of an empty state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<EmptyState
  icon={<FolderCode className="h-6 w-6" />}
  title="No Projects Yet"
  description="You haven't created any projects yet. Get started by creating your first project."
  primaryAction={{
    label: 'Create Project',
    onClick: () => console.log('Create project'),
  }}
  secondaryAction={{
    label: 'Import Project',
    onClick: () => console.log('Import project'),
  }}
  learnMore={{
    label: 'Learn More',
    href: '#',
  }}
/>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using empty states effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Be Clear:</strong> Explain why the state is empty and what users can do about it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Provide Actions:</strong> Include relevant calls-to-action to help users get started.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use Appropriate Icons:</strong> Choose icons that clearly represent the empty content type.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep it Simple:</strong> Don't overwhelm users with too many options in empty states.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Be Encouraging:</strong> Use positive, friendly language to motivate users to take action.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

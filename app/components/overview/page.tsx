import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const componentCategories = [
  {
    category: 'Layout',
    components: [
      { name: 'Aspect Ratio', href: '/aspect-ratio', description: 'Maintains consistent aspect ratios for media' },
      { name: 'Card', href: '/card', description: 'Container for grouped content' },
      { name: 'Scroll Area', href: '/scroll-area', description: 'Custom scrollable area with styled scrollbars' },
    ],
  },
  {
    category: 'Navigation',
    components: [
      { name: 'Breadcrumb', href: '/breadcrumb', description: 'Navigation breadcrumb component' },
      { name: 'Navigation Menu', href: '/navigation-menu', description: 'Accessible navigation menu' },
      { name: 'Menubar', href: '/menubar', description: 'Menu bar with dropdown items' },
      { name: 'Pagination', href: '/pagination', description: 'Page navigation controls' },
    ],
  },
  {
    category: 'Form Controls',
    components: [
      { name: 'Button', href: '/button', description: 'Interactive button with variants' },
      { name: 'Button Group', href: '/button-group', description: 'Grouped button controls' },
      { name: 'Checkbox', href: '/checkbox', description: 'Checkbox input control' },
      { name: 'Input', href: '/input', description: 'Text input field' },
      { name: 'Input Group', href: '/input-group', description: 'Grouped input controls' },
      { name: 'Input OTP', href: '/input-otp', description: 'One-time password input' },
      { name: 'Label', href: '/label', description: 'Form label component' },
      { name: 'Radio Group', href: '/radio-group', description: 'Radio button group' },
      { name: 'Select', href: '/select', description: 'Dropdown select component' },
      { name: 'Native Select', href: '/native-select', description: 'Native HTML select' },
      { name: 'Slider', href: '/slider', description: 'Range slider control' },
      { name: 'Switch', href: '/switch', description: 'Toggle switch control' },
      { name: 'Textarea', href: '/textarea', description: 'Multi-line text input' },
      { name: 'Toggle', href: '/toggle', description: 'Two-state toggle button' },
      { name: 'Toggle Group', href: '/toggle-group', description: 'Group of toggle buttons' },
      { name: 'Field', href: '/field', description: 'Complete form field with label and validation' },
    ],
  },
  {
    category: 'Data Display',
    components: [
      { name: 'Avatar', href: '/avatar', description: 'User avatar with fallback' },
      { name: 'Badge', href: '/badge', description: 'Label badge component' },
      { name: 'Calendar', href: '/calendar', description: 'Date picker calendar' },
      { name: 'Chart', href: '/chart', description: 'Data visualization charts' },
      { name: 'Data Table', href: '/data-table', description: 'Sortable data table' },
      { name: 'Empty', href: '/empty', description: 'Empty state placeholder' },
      { name: 'Kbd', href: '/kbd', description: 'Keyboard key display' },
      { name: 'Progress', href: '/progress', description: 'Progress indicator bar' },
      { name: 'Skeleton', href: '/skeleton', description: 'Loading placeholder skeleton' },
      { name: 'Tabs', href: '/tabs', description: 'Tabbed content sections' },
    ],
  },
  {
    category: 'Feedback',
    components: [
      { name: 'Alert', href: '/alert', description: 'Alert notification component' },
      { name: 'Alert Dialog', href: '/alert-dialog', description: 'Alert modal dialog' },
      { name: 'Dialog', href: '/dialog', description: 'Modal dialog component' },
      { name: 'Drawer', href: '/drawer', description: 'Slide-out drawer panel' },
      { name: 'Sheet', href: '/sheet', description: 'Side panel overlay' },
      { name: 'Sonner', href: '/sonner', description: 'Toast notifications' },
    ],
  },
  {
    category: 'Overlay',
    components: [
      { name: 'Context Menu', href: '/context-menu', description: 'Right-click context menu' },
      { name: 'Dropdown Menu', href: '/dropdown-menu', description: 'Dropdown menu component' },
      { name: 'Hover Card', href: '/hover-card', description: 'Hover tooltip card' },
      { name: 'Popover', href: '/popover', description: 'Popover tooltip component' },
      { name: 'Tooltip', href: '/tooltip', description: 'Informational tooltip' },
    ],
  },
  {
    category: 'Disclosure',
    components: [
      { name: 'Accordion', href: '/accordion', description: 'Expandable accordion sections' },
      { name: 'Collapsible', href: '/collapsible', description: 'Collapsible content section' },
    ],
  },
  {
    category: 'Advanced',
    components: [
      { name: 'Carousel', href: '/carousel', description: 'Image/content carousel' },
      { name: 'Combobox', href: '/combobox', description: 'Searchable select dropdown' },
      { name: 'Command', href: '/command', description: 'Command palette interface' },
      { name: 'Date Picker', href: '/date-picker', description: 'Date selection picker' },
      { name: 'Item', href: '/item', description: 'List item component' },
    ],
  },
]

export default function ComponentsOverview() {
  const totalComponents = componentCategories.reduce(
    (acc, cat) => acc + cat.components.length,
    0
  )

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                Components
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                A comprehensive collection of {totalComponents} production-ready components built with
                Radix UI and Tailwind CSS. Each component is accessible, customizable, and follows
                best practices.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Docs
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{totalComponents} Components</Badge>
            <Badge variant="outline">Fully Typed</Badge>
            <Badge variant="outline">Accessible</Badge>
          </div>
        </div>

        {/* Components by Category */}
        <div className="space-y-12">
          {componentCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                {category.category}
                <span className="text-muted-foreground text-lg font-normal ml-3">
                  ({category.components.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.components.map((component) => (
                  <Link key={component.href} href={component.href}>
                    <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center justify-between">
                          {component.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                        <CardDescription>{component.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 p-6 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start" asChild>
              <a href="/">
                <span>← Back to Home</span>
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                <span>shadcn/ui Docs</span>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer">
                <span>Radix UI</span>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

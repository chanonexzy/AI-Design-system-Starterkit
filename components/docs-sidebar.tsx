'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Home, Box, FileText } from 'lucide-react'

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/',
    items: [
      { title: 'Introduction', href: '/' },
      { title: 'Components Overview', href: '/components/overview' },
      { title: 'Interactive Demo', href: '/components' },
    ],
  },
  {
    title: 'Components',
    href: '/components',
    items: [
      { title: 'Accordion', href: '/accordion' },
      { title: 'Alert', href: '/alert' },
      { title: 'Alert Dialog', href: '/alert-dialog' },
      { title: 'Aspect Ratio', href: '/aspect-ratio' },
      { title: 'Avatar', href: '/avatar' },
      { title: 'Badge', href: '/badge' },
      { title: 'Breadcrumb', href: '/breadcrumb' },
      { title: 'Button', href: '/button' },
      { title: 'Button Group', href: '/button-group' },
      { title: 'Calendar', href: '/calendar' },
      { title: 'Card', href: '/card' },
      { title: 'Carousel', href: '/carousel' },
      { title: 'Chart', href: '/chart' },
      { title: 'Checkbox', href: '/checkbox' },
      { title: 'Collapsible', href: '/collapsible' },
      { title: 'Combobox', href: '/combobox' },
      { title: 'Command', href: '/command' },
      { title: 'Context Menu', href: '/context-menu' },
      { title: 'Data Table', href: '/data-table' },
      { title: 'Date Picker', href: '/date-picker' },
      { title: 'Dialog', href: '/dialog' },
      { title: 'Drawer', href: '/drawer' },
      { title: 'Dropdown Menu', href: '/dropdown-menu' },
      { title: 'Empty', href: '/empty' },
      { title: 'Field', href: '/field' },
      { title: 'Hover Card', href: '/hover-card' },
      { title: 'Input', href: '/input' },
      { title: 'Input Group', href: '/input-group' },
      { title: 'Input OTP', href: '/input-otp' },
      { title: 'Item', href: '/item' },
      { title: 'Kbd', href: '/kbd' },
      { title: 'Label', href: '/label' },
      { title: 'Menubar', href: '/menubar' },
      { title: 'Native Select', href: '/native-select' },
      { title: 'Navigation Menu', href: '/navigation-menu' },
      { title: 'Pagination', href: '/pagination' },
      { title: 'Popover', href: '/popover' },
      { title: 'Progress', href: '/progress' },
      { title: 'Radio Group', href: '/radio-group' },
      { title: 'Scroll Area', href: '/scroll-area' },
      { title: 'Select', href: '/select' },
      { title: 'Sheet', href: '/sheet' },
      { title: 'Skeleton', href: '/skeleton' },
      { title: 'Slider', href: '/slider' },
      { title: 'Sonner', href: '/sonner' },
      { title: 'Switch', href: '/switch' },
      { title: 'Tabs', href: '/tabs' },
      { title: 'Textarea', href: '/textarea' },
      { title: 'Toggle', href: '/toggle' },
      { title: 'Toggle Group', href: '/toggle-group' },
      { title: 'Tooltip', href: '/tooltip' },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="p-4 border-b shrink-0">
        <Link href="/" className="flex items-center space-x-2">
          <Box className="h-6 w-6" />
          <span className="font-bold text-lg">Design System</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 overflow-auto">
        <div className="space-y-6 px-4 py-4">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items?.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                        isActive
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'text-muted-foreground'
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t shrink-0">
        <div className="space-y-2">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              All Components
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

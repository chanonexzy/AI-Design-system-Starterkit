'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  ExternalLink,
  Home,
  FileText,
  Users,
  Settings,
  BookOpen,
  Code,
  Layout,
  Palette,
  Layers,
  Package,
  Zap,
  ShoppingCart,
  CreditCard,
  BarChart,
  Bell,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function NavigationMenuShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Navigation Menu</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              A collection of links for navigating websites with dropdown content support.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/navigation-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Navigation</CardTitle>
            <CardDescription>
              Simple horizontal navigation with links
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Navigation with Dropdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Navigation with Dropdown Content</CardTitle>
            <CardDescription>
              Navigation items with rich dropdown content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="#" title="Alert Dialog">
                        A modal dialog that interrupts the user with important content.
                      </ListItem>
                      <ListItem href="#" title="Hover Card">
                        For sighted users to preview content available behind a link.
                      </ListItem>
                      <ListItem href="#" title="Progress">
                        Displays an indicator showing the completion progress.
                      </ListItem>
                      <ListItem href="#" title="Scroll Area">
                        Visually or semantically separates content.
                      </ListItem>
                      <ListItem href="#" title="Tabs">
                        A set of layered sections of content.
                      </ListItem>
                      <ListItem href="#" title="Tooltip">
                        A popup that displays information related to an element.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Navigation with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Navigation with Icons</CardTitle>
            <CardDescription>
              Enhanced navigation items with leading icons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Home className="mr-2 h-4 w-4" />
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="#" title="Analytics">
                        <BarChart className="mr-2 h-4 w-4 inline" />
                        Track your business metrics and insights.
                      </ListItem>
                      <ListItem href="#" title="E-commerce">
                        <ShoppingCart className="mr-2 h-4 w-4 inline" />
                        Complete online store solution.
                      </ListItem>
                      <ListItem href="#" title="Payments">
                        <CreditCard className="mr-2 h-4 w-4 inline" />
                        Secure payment processing.
                      </ListItem>
                      <ListItem href="#" title="Notifications">
                        <Bell className="mr-2 h-4 w-4 inline" />
                        Real-time notification system.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <FileText className="mr-2 h-4 w-4" />
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem href="#" title="Documentation">
                        <BookOpen className="mr-2 h-4 w-4 inline" />
                        Complete guides and API references.
                      </ListItem>
                      <ListItem href="#" title="Code Examples">
                        <Code className="mr-2 h-4 w-4 inline" />
                        Ready-to-use code snippets.
                      </ListItem>
                      <ListItem href="#" title="Templates">
                        <Layout className="mr-2 h-4 w-4 inline" />
                        Pre-built page templates.
                      </ListItem>
                      <ListItem href="#" title="Themes">
                        <Palette className="mr-2 h-4 w-4 inline" />
                        Customizable color schemes.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Users className="mr-2 h-4 w-4" />
                      Community
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Grid Layout Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grid Layout Navigation</CardTitle>
            <CardDescription>
              Dropdown content with multi-column grid layouts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-3">
                      <ListItem href="#" title="Design">
                        <Palette className="mb-2 h-6 w-6" />
                        Beautiful UI components
                      </ListItem>
                      <ListItem href="#" title="Development">
                        <Code className="mb-2 h-6 w-6" />
                        Clean, maintainable code
                      </ListItem>
                      <ListItem href="#" title="Integration">
                        <Layers className="mb-2 h-6 w-6" />
                        Easy third-party integration
                      </ListItem>
                      <ListItem href="#" title="Performance">
                        <Zap className="mb-2 h-6 w-6" />
                        Optimized for speed
                      </ListItem>
                      <ListItem href="#" title="Components">
                        <Package className="mb-2 h-6 w-6" />
                        50+ ready components
                      </ListItem>
                      <ListItem href="#" title="Support">
                        <Users className="mb-2 h-6 w-6" />
                        24/7 customer support
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Complete Website Header */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Website Header</CardTitle>
            <CardDescription>
              Full-featured navigation with branding and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between border rounded-lg p-4">
              <div className="flex items-center gap-8">
                <div className="font-bold text-xl">Logo</div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                          <ListItem href="#" title="Web Applications">
                            Build powerful web applications with modern tools.
                          </ListItem>
                          <ListItem href="#" title="Mobile Apps">
                            Create native mobile experiences.
                          </ListItem>
                          <ListItem href="#" title="APIs">
                            RESTful and GraphQL API solutions.
                          </ListItem>
                          <ListItem href="#" title="Cloud Services">
                            Scalable cloud infrastructure.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          <ListItem href="#" title="For Startups">
                            Get started with essential tools.
                          </ListItem>
                          <ListItem href="#" title="For Enterprise">
                            Enterprise-grade solutions.
                          </ListItem>
                          <ListItem href="#" title="For Developers">
                            Tools built for developers.
                          </ListItem>
                          <ListItem href="#" title="For Designers">
                            Design system and components.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Pricing
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Docs
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">Sign In</Button>
                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Without Viewport */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Without Viewport</CardTitle>
            <CardDescription>
              Navigation menu with viewport disabled for custom positioning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <ListItem href="#" title="About Us">
                        Learn about our mission and values.
                      </ListItem>
                      <ListItem href="#" title="Team">
                        Meet the people behind the product.
                      </ListItem>
                      <ListItem href="#" title="Careers">
                        Join our growing team.
                      </ListItem>
                      <ListItem href="#" title="Contact">
                        Get in touch with us.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a navigation menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

// Basic Navigation
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          About
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// With Dropdown Content
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li>
            <NavigationMenuLink asChild>
              <a href="/product-1">Product 1</a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a href="/product-2">Product 2</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// ListItem Component Helper
const ListItem = ({ title, children, href, ...props }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3
                   leading-none no-underline outline-none transition-colors
                   hover:bg-accent hover:text-accent-foreground
                   focus:bg-accent focus:text-accent-foreground"
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using navigation menus effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep it simple:</strong> Limit top-level navigation items to 5-7 for optimal usability.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Clear labels:</strong> Use descriptive, concise labels that clearly indicate what users will find.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Logical grouping:</strong> Organize dropdown content into logical categories with clear hierarchy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Active states:</strong> Highlight the current page in the navigation to help users understand their location.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Mobile considerations:</strong> Ensure navigation is accessible and usable on mobile devices with touch targets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keyboard navigation:</strong> Support keyboard navigation with proper focus management and arrow key support.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Performance:</strong> Keep dropdown content lightweight to ensure fast rendering and smooth animations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Accessibility:</strong> Use semantic HTML and ARIA attributes for screen reader support.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

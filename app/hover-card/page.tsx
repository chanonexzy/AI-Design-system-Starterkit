'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ExternalLink, Calendar, MapPin, Link as LinkIcon, Users, Star, GitFork } from 'lucide-react'

export default function HoverCardShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Hover Card</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              For sighted users to preview content available behind a link.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/hover-card"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Example - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Next.js Social Preview</CardTitle>
            <CardDescription>
              Hover over the link to see a preview card
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Check out</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    @nextjs
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-foreground text-background">
                        ▲
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <Calendar className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <span className="text-muted-foreground">for React development.</span>
            </div>
          </CardContent>
        </Card>

        {/* User Profile Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Profile Preview</CardTitle>
            <CardDescription>
              Show user information on hover
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <span>Designed by </span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    @shadcn
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm">
                        Building shadcn/ui – A collection of re-usable components built with Radix UI and Tailwind CSS.
                      </p>
                      <div className="flex items-center pt-2 gap-4">
                        <div className="flex items-center">
                          <Users className="mr-1 h-3 w-3 opacity-70" />
                          <span className="text-xs text-muted-foreground">50k followers</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3 opacity-70" />
                          <span className="text-xs text-muted-foreground">Joined 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Repository Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Repository Preview</CardTitle>
            <CardDescription>
              Display repository information on hover
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <span>Check out the </span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    shadcn/ui
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">shadcn/ui</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3 fill-current opacity-70" />
                        <span className="text-xs text-muted-foreground">42.5k</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="mr-1 h-3 w-3 opacity-70" />
                        <span className="text-xs text-muted-foreground">3.2k</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <span> repository on GitHub.</span>
            </div>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Location Preview</CardTitle>
            <CardDescription>
              Show location details on hover
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <span>Event location: </span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    San Francisco
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">San Francisco, CA</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Known for its steep hills, diverse culture, and thriving tech industry.
                    </p>
                    <div className="flex items-center pt-2 text-xs text-muted-foreground">
                      <span>Population: 870,000+ • Area: 47 mi²</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Hover Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Hover Cards</CardTitle>
            <CardDescription>
              Several hover cards in the same content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              The{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    React
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">React</h4>
                    <p className="text-sm text-muted-foreground">
                      A JavaScript library for building user interfaces, maintained by Meta and the community.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>{' '}
              framework is built on top of{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    JavaScript
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">JavaScript</h4>
                    <p className="text-sm text-muted-foreground">
                      A high-level, dynamic programming language widely used for web development.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>{' '}
              and uses{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    TypeScript
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">TypeScript</h4>
                    <p className="text-sm text-muted-foreground">
                      A strongly typed superset of JavaScript that adds static typing and other features.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>{' '}
              for type safety.
            </p>
          </CardContent>
        </Card>

        {/* Custom Styling */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Styling</CardTitle>
            <CardDescription>
              Hover cards with custom widths and content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Narrow Card */}
            <div>
              <span className="text-sm font-medium">Narrow card: </span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Hover me
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-48">
                  <p className="text-sm">This is a narrow hover card.</p>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Wide Card */}
            <div>
              <span className="text-sm font-medium">Wide card: </span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Hover me
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <p className="text-sm">
                    This is a wider hover card with more content space for detailed information.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a hover card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>▲</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <Calendar className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using hover cards effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep content concise:</strong> Hover cards should provide quick previews, not full details.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Show relevant information:</strong> Display the most important details that help users decide whether to click.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use appropriate delay:</strong> The default hover delay provides good UX, avoid making it too quick or slow.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Not for touch devices:</strong> Hover cards don't work well on mobile, consider alternative patterns for touch interfaces.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Maintain accessibility:</strong> Ensure hover cards don't hide critical information from keyboard-only users.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep it visually lightweight:</strong> Don't overcrowd the card with too much content or heavy images.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

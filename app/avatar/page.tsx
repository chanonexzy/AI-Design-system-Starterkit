'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { User, UserPlus, Settings, LogOut, Mail } from 'lucide-react'

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            An image element with a fallback for representing the user.
          </p>
        </div>

        {/* Basic Avatar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Avatar</CardTitle>
            <CardDescription>
              Avatar with image and fallback text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Sizes</CardTitle>
            <CardDescription>
              Different sizes using Tailwind classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-6">
              <div className="text-center">
                <Avatar className="size-6">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">XS (24px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">SM (32px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-sm">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">MD (40px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">LG (48px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-lg">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">XL (64px)</p>
              </div>
              <div className="text-center">
                <Avatar className="size-24">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-2xl">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">2XL (96px)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Fallback */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Fallback</CardTitle>
            <CardDescription>
              Fallback displayed when image fails to load or is not provided
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Initials</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Initials</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarFallback>
                    <User className="size-6" />
                  </AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Icon</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarImage src="/broken-image.jpg" alt="broken" />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Broken Image</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Shapes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Shapes</CardTitle>
            <CardDescription>
              Different shapes using border-radius classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <Avatar className="size-12 rounded-full">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Circle</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12 rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Rounded</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12 rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Soft</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12 rounded-none">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="rounded-none">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Square</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar with Status</CardTitle>
            <CardDescription>
              Avatar with online/offline status indicator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block size-3 rounded-full bg-green-500 ring-2 ring-background" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Online</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block size-3 rounded-full bg-yellow-500 ring-2 ring-background" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Away</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                    <AvatarFallback>NJ</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block size-3 rounded-full bg-red-500 ring-2 ring-background" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Busy</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block size-3 rounded-full bg-gray-400 ring-2 ring-background" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Offline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Badge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar with Badge</CardTitle>
            <CardDescription>
              Avatar with notification badge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute -top-1 -right-1 flex items-center justify-center size-5 rounded-full bg-destructive text-destructive-foreground text-xs font-medium">
                    3
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Count</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <span className="absolute -top-1 -right-1 flex items-center justify-center size-5 rounded-full bg-destructive text-destructive-foreground text-xs font-medium">
                    9+
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">9+</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                    <AvatarFallback>NJ</AvatarFallback>
                  </Avatar>
                  <span className="absolute -top-0.5 -right-0.5 block size-3 rounded-full bg-destructive ring-2 ring-background" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Dot</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Group */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar Group</CardTitle>
            <CardDescription>
              Stack of avatars representing multiple users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overlapping Group */}
            <div>
              <p className="text-sm font-medium mb-3">Overlapping</p>
              <div className="flex -space-x-3">
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 ring-2 ring-background">
                  <AvatarFallback className="bg-muted text-muted-foreground text-xs">+5</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Spaced Group */}
            <div>
              <p className="text-sm font-medium mb-3">Spaced</p>
              <div className="flex gap-2">
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                <Avatar className="size-10">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avatar with Text</CardTitle>
            <CardDescription>
              Avatar combined with user information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-xs text-muted-foreground">@shadcn</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Vercel</p>
                <p className="text-xs text-muted-foreground">vercel@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Product Designer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Fallback Colors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Fallback Colors</CardTitle>
            <CardDescription>
              Avatars with custom background colors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">AB</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">CD</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">EF</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">GH</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">IJ</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">KL</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Use Case: User Menu */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Use Case: User Menu</CardTitle>
            <CardDescription>
              Avatar in a dropdown menu context
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-64 border rounded-lg shadow-sm">
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">shadcn</p>
                    <p className="text-xs text-muted-foreground">m@example.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md hover:bg-muted">
                  <User className="size-4" />
                  Profile
                </button>
                <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md hover:bg-muted">
                  <Mail className="size-4" />
                  Messages
                </button>
                <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md hover:bg-muted">
                  <Settings className="size-4" />
                  Settings
                </button>
                <div className="border-t my-1" />
                <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md hover:bg-muted text-destructive">
                  <LogOut className="size-4" />
                  Log out
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Case: Team Members */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Use Case: Team Members</CardTitle>
            <CardDescription>
              Avatar list for team or collaborators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Alex Johnson', role: 'Team Lead', status: 'online', initials: 'AJ', color: 'bg-blue-100 text-blue-600' },
                { name: 'Sarah Williams', role: 'Designer', status: 'online', initials: 'SW', color: 'bg-pink-100 text-pink-600' },
                { name: 'Mike Chen', role: 'Developer', status: 'away', initials: 'MC', color: 'bg-green-100 text-green-600' },
                { name: 'Emily Davis', role: 'Marketing', status: 'offline', initials: 'ED', color: 'bg-purple-100 text-purple-600' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="size-10">
                        <AvatarFallback className={member.color}>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 block size-2.5 rounded-full ring-2 ring-background ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <UserPlus className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <a href="/">← Back to Home</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/components">View All Components →</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

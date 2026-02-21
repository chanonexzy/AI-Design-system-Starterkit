'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Check,
  X,
  Clock,
  AlertTriangle,
  Star,
  Zap,
  Crown,
  Flame,
  Heart,
  TrendingUp,
  Shield,
  Verified,
  Gift,
  Sparkles,
  Bell,
  Mail,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a badge or a component that looks like a badge.
          </p>
        </div>

        {/* Default Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>
              Four built-in variants for different contexts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <Badge>Default</Badge>
                <p className="text-xs text-muted-foreground mt-2">default</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary">Secondary</Badge>
                <p className="text-xs text-muted-foreground mt-2">secondary</p>
              </div>
              <div className="text-center">
                <Badge variant="destructive">Destructive</Badge>
                <p className="text-xs text-muted-foreground mt-2">destructive</p>
              </div>
              <div className="text-center">
                <Badge variant="outline">Outline</Badge>
                <p className="text-xs text-muted-foreground mt-2">outline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Status Badges</CardTitle>
            <CardDescription>
              Badges for indicating status or state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-500 hover:bg-green-600">
                <Check className="mr-1" />
                Completed
              </Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Clock className="mr-1" />
                Pending
              </Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600">
                <Zap className="mr-1" />
                In Progress
              </Badge>
              <Badge variant="destructive">
                <X className="mr-1" />
                Failed
              </Badge>
              <Badge className="bg-orange-500 hover:bg-orange-600">
                <AlertTriangle className="mr-1" />
                Warning
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1" />
                Scheduled
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badges with Icons</CardTitle>
            <CardDescription>
              Badges enhanced with icons for better visual communication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>
                <Star className="mr-1" />
                Featured
              </Badge>
              <Badge variant="secondary">
                <Crown className="mr-1" />
                Premium
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 border-0">
                <Flame className="mr-1" />
                Hot
              </Badge>
              <Badge className="bg-pink-500 hover:bg-pink-600 border-0">
                <Heart className="mr-1" />
                Liked
              </Badge>
              <Badge className="bg-emerald-500 hover:bg-emerald-600 border-0">
                <TrendingUp className="mr-1" />
                Trending
              </Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600 border-0">
                <Sparkles className="mr-1" />
                New
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Notification Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notification Badges</CardTitle>
            <CardDescription>
              Badges for displaying notification counts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative">
                <Bell className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
              </div>
              <div className="relative">
                <Mail className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  12
                </Badge>
              </div>
              <div className="relative">
                <MessageSquare className="h-6 w-6" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  99+
                </Badge>
              </div>
              <Button variant="outline" className="relative">
                Inbox
                <Badge className="ml-2">5</Badge>
              </Button>
              <Button variant="outline" className="relative">
                Updates
                <Badge variant="destructive" className="ml-2">New</Badge>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom Colors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Colors</CardTitle>
            <CardDescription>
              Badges with custom background colors using Tailwind classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-500 hover:bg-red-600 border-0">Red</Badge>
              <Badge className="bg-orange-500 hover:bg-orange-600 border-0">Orange</Badge>
              <Badge className="bg-amber-500 hover:bg-amber-600 border-0 text-black">Amber</Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-600 border-0 text-black">Yellow</Badge>
              <Badge className="bg-lime-500 hover:bg-lime-600 border-0 text-black">Lime</Badge>
              <Badge className="bg-green-500 hover:bg-green-600 border-0">Green</Badge>
              <Badge className="bg-emerald-500 hover:bg-emerald-600 border-0">Emerald</Badge>
              <Badge className="bg-teal-500 hover:bg-teal-600 border-0">Teal</Badge>
              <Badge className="bg-cyan-500 hover:bg-cyan-600 border-0">Cyan</Badge>
              <Badge className="bg-sky-500 hover:bg-sky-600 border-0">Sky</Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600 border-0">Blue</Badge>
              <Badge className="bg-indigo-500 hover:bg-indigo-600 border-0">Indigo</Badge>
              <Badge className="bg-violet-500 hover:bg-violet-600 border-0">Violet</Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600 border-0">Purple</Badge>
              <Badge className="bg-fuchsia-500 hover:bg-fuchsia-600 border-0">Fuchsia</Badge>
              <Badge className="bg-pink-500 hover:bg-pink-600 border-0">Pink</Badge>
              <Badge className="bg-rose-500 hover:bg-rose-600 border-0">Rose</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Soft/Light Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Soft/Light Variants</CardTitle>
            <CardDescription>
              Subtle badges with light backgrounds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0 dark:bg-red-900/30 dark:text-red-400">
                Error
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-0 dark:bg-yellow-900/30 dark:text-yellow-400">
                Warning
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 dark:bg-green-900/30 dark:text-green-400">
                Success
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 dark:bg-blue-900/30 dark:text-blue-400">
                Info
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 dark:bg-purple-900/30 dark:text-purple-400">
                New
              </Badge>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 dark:bg-gray-800 dark:text-gray-400">
                Default
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Outlined Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Outlined Variants</CardTitle>
            <CardDescription>
              Badges with colored borders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-red-500 text-red-500">Red</Badge>
              <Badge variant="outline" className="border-orange-500 text-orange-500">Orange</Badge>
              <Badge variant="outline" className="border-yellow-500 text-yellow-500">Yellow</Badge>
              <Badge variant="outline" className="border-green-500 text-green-500">Green</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-500">Blue</Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-500">Purple</Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-500">Pink</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Badge as Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge as Link</CardTitle>
            <CardDescription>
              Clickable badges using asChild prop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge asChild>
                <a href="#" className="cursor-pointer">
                  View Docs
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Badge>
              <Badge variant="secondary" asChild>
                <a href="#" className="cursor-pointer">
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Badge>
              <Badge variant="outline" asChild>
                <a href="#" className="cursor-pointer">
                  GitHub
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* User Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Role Badges</CardTitle>
            <CardDescription>
              Badges for user roles and verification status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">shadcn</span>
                  <Badge className="bg-blue-500 border-0 h-5">
                    <Verified className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">@shadcn</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-purple-100 text-purple-600">AD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Admin User</span>
                  <Badge className="bg-purple-500 border-0 h-5">
                    <Shield className="h-3 w-3 mr-1" />
                    Admin
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">@admin</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-yellow-100 text-yellow-600">PM</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Pro Member</span>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 border-0 h-5">
                    <Crown className="h-3 w-3 mr-1" />
                    Pro
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">@pro_user</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product/E-commerce Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>E-commerce Badges</CardTitle>
            <CardDescription>
              Badges commonly used in product listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Product Card 1 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="relative bg-muted h-40 flex items-center justify-center">
                  <Gift className="h-12 w-12 text-muted-foreground" />
                  <Badge className="absolute top-2 left-2 bg-red-500 border-0">-30%</Badge>
                  <Badge className="absolute top-2 right-2 bg-green-500 border-0">In Stock</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-sm text-muted-foreground">$99.00</p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="relative bg-muted h-40 flex items-center justify-center">
                  <Gift className="h-12 w-12 text-muted-foreground" />
                  <Badge className="absolute top-2 left-2 bg-purple-500 border-0">
                    <Sparkles className="h-3 w-3 mr-1" />
                    New
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">New Arrival</h3>
                  <p className="text-sm text-muted-foreground">$149.00</p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="relative bg-muted h-40 flex items-center justify-center">
                  <Gift className="h-12 w-12 text-muted-foreground" />
                  <Badge className="absolute top-2 left-2 bg-orange-500 border-0">
                    <Flame className="h-3 w-3 mr-1" />
                    Best Seller
                  </Badge>
                  <Badge variant="destructive" className="absolute top-2 right-2">Low Stock</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Popular Item</h3>
                  <p className="text-sm text-muted-foreground">$79.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tag Style Badges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tag Style Badges</CardTitle>
            <CardDescription>
              Badges used as tags for categorization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Categories</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Design</Badge>
                  <Badge variant="outline">Development</Badge>
                  <Badge variant="outline">Marketing</Badge>
                  <Badge variant="outline">Business</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Removable Tags</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="pr-1">
                    JavaScript
                    <button className="ml-1 hover:bg-muted rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                  <Badge variant="secondary" className="pr-1">
                    Python
                    <button className="ml-1 hover:bg-muted rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                  <Badge variant="secondary" className="pr-1">
                    Go
                    <button className="ml-1 hover:bg-muted rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </div>
              </div>
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

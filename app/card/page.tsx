'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  MoreVertical,
  Package,
  Settings,
  Share2,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

export default function CardShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Card</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a card with header, content, and footer.
          </p>
        </div>

        {/* Basic Card */}
        <Card className="mb-8 max-w-md">
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with title and description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the content area of the card. You can put any content here including text, images, or other components.
            </p>
          </CardContent>
        </Card>

        {/* Card with Footer */}
        <Card className="mb-8 max-w-md">
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>
              Card including a footer section
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This card demonstrates how to use the footer section for actions or additional information.
            </p>
          </CardContent>
          <CardFooter className="border-t">
            <Button className="w-full">Action Button</Button>
          </CardFooter>
        </Card>

        {/* Card with Action */}
        <Card className="mb-8 max-w-md">
          <CardHeader>
            <CardTitle>Card with Header Action</CardTitle>
            <CardDescription>
              Card with action button in header
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              The CardAction component places an action element in the header area.
            </p>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Stats Cards</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl">$45,231.89</CardTitle>
                <CardAction>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+20.1%</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-2xl">+2,350</CardTitle>
                <CardAction>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+180.1%</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Sales</CardDescription>
                <CardTitle className="text-2xl">+12,234</CardTitle>
                <CardAction>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+19%</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Active Now</CardDescription>
                <CardTitle className="text-2xl">+573</CardTitle>
                <CardAction>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+201</span>
                  <span className="ml-1">since last hour</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Product Cards</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-t-xl flex items-center justify-center relative">
                  <Package className="h-12 w-12 text-muted-foreground" />
                  <Badge className="absolute top-2 right-2">New</Badge>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>
                  Brief product description goes here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$99.00</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t gap-2">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-t-xl flex items-center justify-center relative">
                  <Package className="h-12 w-12 text-muted-foreground" />
                  <Badge variant="destructive" className="absolute top-2 right-2">Sale -20%</Badge>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>Another Product</CardTitle>
                <CardDescription>
                  Product description text
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">$79.00</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">$99.00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t gap-2">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-t-xl flex items-center justify-center relative">
                  <Package className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>Third Product</CardTitle>
                <CardDescription>
                  Amazing product features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$149.00</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">5.0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t gap-2">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* User Profile Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Profile Cards</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">John Doe</CardTitle>
                  <CardDescription className="mb-4">Product Designer</CardDescription>
                  <div className="flex gap-4 text-center mb-4">
                    <div>
                      <div className="font-bold">2.5K</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="font-bold">1.2K</div>
                      <div className="text-xs text-muted-foreground">Following</div>
                    </div>
                    <div>
                      <div className="font-bold">48</div>
                      <div className="text-xs text-muted-foreground">Posts</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t gap-2">
                <Button className="flex-1">Follow</Button>
                <Button variant="outline" className="flex-1">Message</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle>Jane Smith</CardTitle>
                    <CardDescription>Senior Developer</CardDescription>
                  </div>
                </div>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Passionate about building great user experiences and writing clean code.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    Contact
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle>Alex Brown</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mt-1">Pro Member</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Profile Views</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Connections</span>
                    <span className="font-medium">456</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Posts</span>
                    <span className="font-medium">89</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button variant="outline" className="w-full">
                  View Profile
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Form Card */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Form Cards</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="border-t flex-col gap-2">
                <Button className="w-full">Create Account</Button>
                <Button variant="outline" className="w-full">
                  Sign in with Google
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new products
                    </p>
                  </div>
                  <Switch id="marketing" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security">Security alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Important account notifications
                    </p>
                  </div>
                  <Switch id="security" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="updates">Product updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new features
                    </p>
                  </div>
                  <Switch id="updates" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full">Save Preferences</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Notification Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Notification Cards</h2>
          <div className="max-w-md space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900/30">
                    <Bell className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">New message received</CardTitle>
                    <CardDescription>You have a new message from Sarah</CardDescription>
                  </div>
                  <span className="text-xs text-muted-foreground">2m ago</span>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-full dark:bg-green-900/30">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">Payment successful</CardTitle>
                    <CardDescription>Your subscription has been renewed</CardDescription>
                  </div>
                  <span className="text-xs text-muted-foreground">1h ago</span>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-full dark:bg-purple-900/30">
                    <Download className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">Download complete</CardTitle>
                    <CardDescription>Report.pdf is ready to view</CardDescription>
                  </div>
                  <span className="text-xs text-muted-foreground">3h ago</span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Action Cards</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  Open Settings
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Share</CardTitle>
                <CardDescription>
                  Share this content with your network
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  Share Now
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  View your recent actions and history
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  View History
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components">
              View All Components
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

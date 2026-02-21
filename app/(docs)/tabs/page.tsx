'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function TabsShowcase() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Tabs</h1>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://ui.shadcn.com/docs/components/tabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            A set of layered sections of content—known as tab panels—that are displayed one at a time.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Basic Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Tabs</CardTitle>
            <CardDescription>
              Simple tabs with different content sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
                <Button>Save changes</Button>
              </TabsContent>
              <TabsContent value="password" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                <Button>Change password</Button>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Settings content goes here.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Full Width Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Full Width Tabs</CardTitle>
            <CardDescription>
              Tabs that span the full width of the container
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>View your account overview and stats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Overview content with important metrics and information.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Detailed analytics and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Analytics dashboard with charts and metrics.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generate and view reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Reports section with downloadable documents.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Vertical Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Badges</CardTitle>
            <CardDescription>
              Tabs with badges showing counts or status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all" className="gap-2">
                  All
                  <Badge variant="secondary">12</Badge>
                </TabsTrigger>
                <TabsTrigger value="active" className="gap-2">
                  Active
                  <Badge variant="secondary">8</Badge>
                </TabsTrigger>
                <TabsTrigger value="draft" className="gap-2">
                  Draft
                  <Badge variant="secondary">3</Badge>
                </TabsTrigger>
                <TabsTrigger value="archived" className="gap-2">
                  Archived
                  <Badge variant="secondary">1</Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <p className="text-sm text-muted-foreground">All items (12)</p>
              </TabsContent>
              <TabsContent value="active" className="mt-4">
                <p className="text-sm text-muted-foreground">Active items (8)</p>
              </TabsContent>
              <TabsContent value="draft" className="mt-4">
                <p className="text-sm text-muted-foreground">Draft items (3)</p>
              </TabsContent>
              <TabsContent value="archived" className="mt-4">
                <p className="text-sm text-muted-foreground">Archived items (1)</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Disabled Tab */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Disabled Tab</CardTitle>
            <CardDescription>
              Some tabs can be disabled
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="home" className="w-full">
              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="premium" disabled>
                  Premium
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home" className="mt-4">
                <p className="text-sm text-muted-foreground">Home tab content</p>
              </TabsContent>
              <TabsContent value="profile" className="mt-4">
                <p className="text-sm text-muted-foreground">Profile tab content</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

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

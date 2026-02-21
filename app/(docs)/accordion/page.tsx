'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, Settings, User, CreditCard, Bell, Shield, Mail } from 'lucide-react'

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>

        {/* Basic Accordion - Single */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Accordion</CardTitle>
            <CardDescription>
              Single collapsible mode - only one item can be open at a time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern for accordions.
                  All keyboard interactions are supported including Tab, Enter, Space, and Arrow keys.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other components.
                  You can customize it using Tailwind CSS classes or CSS variables.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It uses CSS animations for smooth open and close transitions.
                  The chevron icon also rotates when the item is expanded.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Multiple Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Accordion</CardTitle>
            <CardDescription>
              Multiple items can be expanded simultaneously
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First Section</AccordionTrigger>
                <AccordionContent>
                  This section can be open while other sections are also open.
                  Try clicking on multiple headers to see them all expand.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second Section</AccordionTrigger>
                <AccordionContent>
                  Multiple sections can be viewed at the same time,
                  which is useful for comparing content between sections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Third Section</AccordionTrigger>
                <AccordionContent>
                  All three sections can be open simultaneously in this mode.
                  This provides maximum flexibility for content viewing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Default Open */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Open</CardTitle>
            <CardDescription>
              Accordion with a pre-expanded item using defaultValue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Collapsed by default</AccordionTrigger>
                <AccordionContent>
                  This item starts in a collapsed state.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Expanded by default</AccordionTrigger>
                <AccordionContent>
                  This item is expanded when the page loads. Use the defaultValue prop
                  to specify which item should be open initially.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Also collapsed</AccordionTrigger>
                <AccordionContent>
                  Another collapsed item.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>
              Accordion items with leading icons for better visual hierarchy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="account">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span>Account Settings</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Manage your account information, update your profile picture,
                  change your username, and configure account preferences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="billing">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Billing & Payments</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  View your billing history, update payment methods,
                  download invoices, and manage your subscription plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="notifications">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span>Notifications</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Configure email notifications, push notifications,
                  and in-app notification preferences for various events.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <span>Security & Privacy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Manage two-factor authentication, review active sessions,
                  update your password, and configure privacy settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* FAQ Style */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>
              Common questions about our service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Creating an account is simple. Click the &quot;Sign Up&quot; button in the top right corner,
                    fill in your email address and create a password. You&apos;ll receive a confirmation email
                    to verify your account.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards (Visa, MasterCard, American Express),
                    PayPal, and bank transfers for annual subscriptions. All payments are
                    processed securely through our payment provider.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time from your account settings.
                    Your access will continue until the end of your current billing period.
                    No refunds are provided for partial months.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    You can reach our support team through the help center, by email at
                    support@example.com, or through live chat during business hours.
                    We typically respond within 24 hours.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Bordered Style */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bordered Style</CardTitle>
            <CardDescription>
              Accordion with custom border styling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger>Bordered Item 1</AccordionTrigger>
                <AccordionContent>
                  Each accordion item has its own border with rounded corners,
                  creating a card-like appearance for each section.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger>Bordered Item 2</AccordionTrigger>
                <AccordionContent>
                  This style works well when you want each item to be visually
                  distinct and separated from the others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger>Bordered Item 3</AccordionTrigger>
                <AccordionContent>
                  Use className to add custom styles to AccordionItem components.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Nested Accordion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Nested Accordion</CardTitle>
            <CardDescription>
              Accordions within accordions for hierarchical content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="parent-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <span>Application Settings</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full pl-4 border-l">
                    <AccordionItem value="child-1">
                      <AccordionTrigger className="text-sm">General</AccordionTrigger>
                      <AccordionContent>
                        Configure general application settings like language, timezone, and theme.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="child-2">
                      <AccordionTrigger className="text-sm">Advanced</AccordionTrigger>
                      <AccordionContent>
                        Advanced settings for power users including API access and integrations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="parent-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>Email Preferences</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full pl-4 border-l">
                    <AccordionItem value="email-1">
                      <AccordionTrigger className="text-sm">Marketing</AccordionTrigger>
                      <AccordionContent>
                        Control marketing emails, newsletters, and promotional content.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="email-2">
                      <AccordionTrigger className="text-sm">Transactional</AccordionTrigger>
                      <AccordionContent>
                        Essential emails like order confirmations and password resets.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components">View All Components →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  XCircle,
  Terminal,
  Rocket,
  Bell,
  ShieldAlert,
  Wifi,
  WifiOff,
  Download,
  RefreshCw
} from 'lucide-react'

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a callout for user attention with contextual feedback messages.
          </p>
        </div>

        {/* Default Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Alert</CardTitle>
            <CardDescription>
              Basic alert with default styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is a default alert. You can use it to display general information to users.
              </AlertDescription>
            </Alert>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the CLI.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Destructive Alert */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Destructive Alert</CardTitle>
            <CardDescription>
              Alert for errors, warnings, and critical information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again to continue.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Deletion Failed</AlertTitle>
              <AlertDescription>
                Unable to delete the selected items. Please try again later.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Custom Styled Alerts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Custom Styled Alerts</CardTitle>
            <CardDescription>
              Alerts with custom colors using Tailwind classes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Success */}
            <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800 dark:text-green-400">Success</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            {/* Warning */}
            <Alert className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-400">Warning</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                Your subscription will expire in 3 days. Please renew to avoid service interruption.
              </AlertDescription>
            </Alert>

            {/* Info */}
            <Alert className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800 dark:text-blue-400">Did you know?</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                You can customize the appearance of alerts using Tailwind CSS utility classes.
              </AlertDescription>
            </Alert>

            {/* Purple/Feature */}
            <Alert className="border-purple-500/50 bg-purple-50 dark:bg-purple-950/20">
              <Rocket className="h-4 w-4 text-purple-600" />
              <AlertTitle className="text-purple-800 dark:text-purple-400">New Feature</AlertTitle>
              <AlertDescription className="text-purple-700 dark:text-purple-300">
                Dark mode is now available! Toggle it from the settings menu.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Without Title */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert Without Title</CardTitle>
            <CardDescription>
              Simple alerts with only description text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This alert only contains a description without a title.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700 dark:text-green-300">
                File uploaded successfully!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert Without Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert Without Icon</CardTitle>
            <CardDescription>
              Text-only alerts without icons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                Icons are optional. You can create simple text-only alerts when needed.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Action Required</AlertTitle>
              <AlertDescription>
                Please verify your email address to complete registration.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Use Case Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Use Cases</CardTitle>
            <CardDescription>
              Real-world examples of alert usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Network Status */}
            <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
              <Wifi className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800 dark:text-green-400">Connected</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                You are now connected to the network.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <WifiOff className="h-4 w-4" />
              <AlertTitle>Connection Lost</AlertTitle>
              <AlertDescription>
                Unable to connect to the server. Check your internet connection.
              </AlertDescription>
            </Alert>

            {/* System Notification */}
            <Alert>
              <Bell className="h-4 w-4" />
              <AlertTitle>Notification Settings</AlertTitle>
              <AlertDescription>
                You have 3 unread notifications. Click here to view them.
              </AlertDescription>
            </Alert>

            {/* Security Alert */}
            <Alert className="border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
              <ShieldAlert className="h-4 w-4 text-orange-600" />
              <AlertTitle className="text-orange-800 dark:text-orange-400">Security Notice</AlertTitle>
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                A new device logged into your account. If this wasn&apos;t you, secure your account immediately.
              </AlertDescription>
            </Alert>

            {/* Update Available */}
            <Alert className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
              <Download className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800 dark:text-blue-400">Update Available</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                Version 2.0.0 is available. Restart the application to install the update.
              </AlertDescription>
            </Alert>

            {/* Processing */}
            <Alert>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <AlertTitle>Processing</AlertTitle>
              <AlertDescription>
                Please wait while we process your request. This may take a few moments.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert with Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alert with Actions</CardTitle>
            <CardDescription>
              Alerts containing interactive elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Confirm Your Email</AlertTitle>
              <AlertDescription>
                <p className="mb-3">
                  We sent a confirmation link to your email address. Please check your inbox.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Resend Email</Button>
                  <Button size="sm" variant="outline">Change Email</Button>
                </div>
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Payment Failed</AlertTitle>
              <AlertDescription>
                <p className="mb-3">
                  Your payment could not be processed. Please update your payment method.
                </p>
                <Button size="sm" variant="outline" className="border-destructive/50 hover:bg-destructive/10">
                  Update Payment Method
                </Button>
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-400">Unsaved Changes</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                <p className="mb-3">
                  You have unsaved changes. Do you want to save them before leaving?
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">Save Changes</Button>
                  <Button size="sm" variant="outline" className="border-yellow-600/50 text-yellow-700 hover:bg-yellow-100">
                    Discard
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
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

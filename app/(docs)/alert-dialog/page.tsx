'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Trash2,
  LogOut,
  AlertTriangle,
  ShieldAlert,
  CreditCard,
  UserX,
  FileX,
  RefreshCw,
  Download,
  Send
} from 'lucide-react'

export default function AlertDialogPage() {
  const [deleteInput, setDeleteInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAsyncAction = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>

        {/* Basic Alert Dialog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Alert Dialog</CardTitle>
            <CardDescription>
              Simple confirmation dialog with title, description, and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Delete Confirmation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Delete Confirmation</CardTitle>
            <CardDescription>
              Destructive action confirmation with red button
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Item
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Item</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this item? This action cannot be undone
                    and the item will be permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <FileX className="mr-2 h-4 w-4" />
                  Delete File
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-destructive" />
                    Delete File
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to delete <span className="font-medium text-foreground">&quot;project-report.pdf&quot;</span>.
                    This file will be moved to trash and permanently deleted after 30 days.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep File</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Move to Trash
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Logout Confirmation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Logout Confirmation</CardTitle>
            <CardDescription>
              Confirm before signing out of the application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be signed out of your account on this device.
                    Any unsaved changes will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
                  <AlertDialogAction>Sign Out</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* With Icon */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Icon</CardTitle>
            <CardDescription>
              Alert dialog with warning icon for emphasis
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Warning Dialog
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <AlertDialogTitle>Warning</AlertDialogTitle>
                      <AlertDialogDescription className="mt-1">
                        You have unsaved changes. Are you sure you want to leave this page?
                      </AlertDialogDescription>
                    </div>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay on Page</AlertDialogCancel>
                  <AlertDialogAction>Leave Page</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <ShieldAlert className="mr-2 h-4 w-4" />
                  Security Alert
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                      <ShieldAlert className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <AlertDialogTitle>Security Alert</AlertDialogTitle>
                      <AlertDialogDescription className="mt-1">
                        We detected a login from a new device. Was this you?
                      </AlertDialogDescription>
                    </div>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No, Secure Account</AlertDialogCancel>
                  <AlertDialogAction>Yes, It Was Me</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Subscription Cancellation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Subscription Cancellation</CardTitle>
            <CardDescription>
              Multi-step confirmation for important actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Cancel Subscription
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancel your subscription?</AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    <div className="space-y-3">
                      <p>If you cancel, you will lose access to:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Unlimited projects</li>
                        <li>Advanced analytics</li>
                        <li>Priority support</li>
                        <li>Custom integrations</li>
                      </ul>
                      <p className="text-yellow-600 dark:text-yellow-500">
                        Your subscription will remain active until the end of your billing period.
                      </p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Cancel Subscription
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Delete Account with Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Delete Account Confirmation</CardTitle>
            <CardDescription>
              Requires user to type confirmation text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <UserX className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    <div className="space-y-4">
                      <p>
                        This action is irreversible. All your data, projects, and settings
                        will be permanently deleted.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-delete">
                          Type <span className="font-mono font-semibold text-foreground">DELETE</span> to confirm
                        </Label>
                        <Input
                          id="confirm-delete"
                          placeholder="Type DELETE"
                          value={deleteInput}
                          onChange={(e) => setDeleteInput(e.target.value)}
                        />
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setDeleteInput('')}>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    disabled={deleteInput !== 'DELETE'}
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* With Loading State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Loading State</CardTitle>
            <CardDescription>
              Alert dialog with async action and loading indicator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Report
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Submit Report</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you ready to submit this report? Once submitted, it will be
                    reviewed by our team within 24-48 hours.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleAsyncAction} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Different Button Styles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Variations</CardTitle>
            <CardDescription>
              Different button styles for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Default Actions</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Default Button Style</AlertDialogTitle>
                  <AlertDialogDescription>
                    This dialog uses the default button styles for both actions.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Three Actions</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Save Changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. What would you like to do?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-between">
                  <AlertDialogCancel className="sm:mr-auto">
                    Don&apos;t Save
                  </AlertDialogCancel>
                  <div className="flex gap-2">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Save Changes</AlertDialogAction>
                  </div>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Export Your Data</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your data will be exported as a ZIP file containing all your
                    projects, settings, and preferences.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Centered Layout */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Centered Layout</CardTitle>
            <CardDescription>
              Alert dialog with centered content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Open Centered Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="text-center">
                <AlertDialogHeader className="sm:text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <AlertDialogTitle>Payment Successful!</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your payment of $99.00 has been processed successfully.
                    A confirmation email has been sent to your inbox.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-center">
                  <AlertDialogAction>View Receipt</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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

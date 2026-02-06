'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function InputOTPShowcase() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Input OTP</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Accessible one-time password component with copy paste functionality.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/input-otp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic OTP Input - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default OTP Input</CardTitle>
            <CardDescription>
              Six-digit verification code input with separator
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp-default">Enter verification code</Label>
              <InputOTP maxLength={6} value={value1} onChange={setValue1} id="otp-default">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">
                {value1 ? `You entered: ${value1}` : 'Paste your code or type it manually'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Four-digit PIN */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Four-digit PIN</CardTitle>
            <CardDescription>
              Shorter OTP for PIN codes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp-pin">Enter PIN</Label>
              <InputOTP maxLength={4} value={value2} onChange={setValue2} id="otp-pin">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
        </Card>

        {/* With Submit Button */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>OTP with Submit</CardTitle>
            <CardDescription>
              Verification code input with submission button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp-submit">Verification Code</Label>
                <InputOTP maxLength={6} value={value3} onChange={setValue3} id="otp-submit">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit code sent to your email
                </p>
              </div>
              <Button disabled={value3.length !== 6} className="w-full">
                Verify Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pattern Variations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pattern Variations</CardTitle>
            <CardDescription>
              Different digit groupings and separators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 2-2-2 Pattern */}
            <div className="space-y-2">
              <Label>2-2-2 Pattern</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* No Separator */}
            <div className="space-y-2">
              <Label>No Separator (6 digits)</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* 8-digit Code */}
            <div className="space-y-2">
              <Label>8-digit Code (4-4)</Label>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled State</CardTitle>
            <CardDescription>
              OTP input in disabled state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Disabled OTP</Label>
              <InputOTP maxLength={6} disabled value="123456">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">
                This field is not editable
              </p>
            </div>
          </CardContent>
        </Card>

        {/* With Validation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Validation</CardTitle>
            <CardDescription>
              OTP input with error state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp-error">Verification Code</Label>
              <InputOTP
                maxLength={6}
                value={value4}
                onChange={setValue4}
                id="otp-error"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {value4.length === 6 && (
                <p className="text-sm text-destructive">
                  Invalid verification code. Please try again.
                </p>
              )}
              {value4.length < 6 && value4.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {6 - value4.length} digits remaining
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>
              Complete 2FA verification flow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-lg font-semibold">Verify Your Identity</h3>
              <p className="text-sm text-muted-foreground">
                We've sent a verification code to your email
              </p>
              <p className="text-sm font-medium">user@example.com</p>
            </div>

            <div className="flex justify-center">
              <div className="space-y-2">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button className="w-full">Verify</Button>
              <Button variant="ghost" className="w-full">
                Resend Code
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Didn't receive a code? Check your spam folder or request a new one.
            </p>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of OTP input
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'

export function OTPDemo() {
  const [value, setValue] = useState('')

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using OTP inputs effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Auto-focus first field:</strong> Automatically focus the first input box when the page loads.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Support paste:</strong> Allow users to paste the entire code at once for convenience.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Clear error states:</strong> Show clear error messages when the code is invalid.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Auto-advance:</strong> Automatically move to the next field after entering a digit.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keyboard navigation:</strong> Support arrow keys and backspace for easy correction.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Resend option:</strong> Provide a way to resend the code if not received.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Time limits:</strong> If codes expire, show a countdown timer to create urgency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Mobile optimization:</strong> Ensure numeric keyboard appears on mobile devices (type="number").
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

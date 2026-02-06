'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KbdProps {
  children: React.ReactNode
  className?: string
}

function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 items-center justify-center rounded bg-muted px-1 text-xs font-normal text-muted-foreground',
        className
      )}
    >
      {children}
    </kbd>
  )
}

export default function KbdShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Figma Design */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">KPD</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              Used to display textual user input from keyboard.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/kbd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Modifier Keys - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Modifier Keys</CardTitle>
            <CardDescription>
              Display keyboard modifier keys (macOS symbols)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Kbd>⌘</Kbd>
              <span className="text-sm text-muted-foreground">Command</span>
            </div>

            <div className="flex items-center gap-2">
              <Kbd>⇧</Kbd>
              <span className="text-sm text-muted-foreground">Shift</span>
            </div>

            <div className="flex items-center gap-2">
              <Kbd>⌥</Kbd>
              <span className="text-sm text-muted-foreground">Option/Alt</span>
            </div>

            <div className="flex items-center gap-2">
              <Kbd>⌃</Kbd>
              <span className="text-sm text-muted-foreground">Control</span>
            </div>

            <Separator />

            <p className="text-sm text-muted-foreground">
              Combined modifiers:
            </p>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>⌥</Kbd>
              <Kbd>⌃</Kbd>
            </div>
          </CardContent>
        </Card>

        {/* Keyboard Shortcuts - From Figma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyboard Shortcuts</CardTitle>
            <CardDescription>
              Display common keyboard shortcuts with combinations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Copy</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>C</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Paste</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>V</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Bold</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>B</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Undo</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>Z</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Save</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>S</Kbd>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* macOS Shortcuts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>macOS Shortcuts</CardTitle>
            <CardDescription>
              Keyboard shortcuts using macOS modifier symbols
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Copy</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>C</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Paste</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>V</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Bold</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>B</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Screenshot</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>3</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Force Quit</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>⌥</Kbd>
                <Kbd>Esc</Kbd>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Single Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Single Keys</CardTitle>
            <CardDescription>
              Display individual keyboard keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Kbd>Enter</Kbd>
              <Kbd>Esc</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Space</Kbd>
              <Kbd>Delete</Kbd>
              <Kbd>Backspace</Kbd>
              <Kbd>Home</Kbd>
              <Kbd>End</Kbd>
              <Kbd>Page Up</Kbd>
              <Kbd>Page Down</Kbd>
            </div>
          </CardContent>
        </Card>

        {/* Arrow Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Arrow Keys</CardTitle>
            <CardDescription>
              Display arrow and directional keys
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <Kbd>←</Kbd>
              <Kbd>→</Kbd>
              <span className="text-sm text-muted-foreground ml-2">Navigation arrows</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Move up</span>
              <Kbd>↑</Kbd>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Jump to top</span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>↑</Kbd>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Function Keys */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Function Keys</CardTitle>
            <CardDescription>
              Display function keys and number keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Function Keys</p>
                <div className="flex flex-wrap gap-2">
                  <Kbd>F1</Kbd>
                  <Kbd>F2</Kbd>
                  <Kbd>F3</Kbd>
                  <Kbd>F4</Kbd>
                  <Kbd>F5</Kbd>
                  <Kbd>F6</Kbd>
                  <Kbd>F7</Kbd>
                  <Kbd>F8</Kbd>
                  <Kbd>F9</Kbd>
                  <Kbd>F10</Kbd>
                  <Kbd>F11</Kbd>
                  <Kbd>F12</Kbd>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-2">Number Keys</p>
                <div className="flex flex-wrap gap-2">
                  <Kbd>0</Kbd>
                  <Kbd>1</Kbd>
                  <Kbd>2</Kbd>
                  <Kbd>3</Kbd>
                  <Kbd>4</Kbd>
                  <Kbd>5</Kbd>
                  <Kbd>6</Kbd>
                  <Kbd>7</Kbd>
                  <Kbd>8</Kbd>
                  <Kbd>9</Kbd>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-2">Letter Keys</p>
                <div className="flex flex-wrap gap-2">
                  <Kbd>A</Kbd>
                  <Kbd>B</Kbd>
                  <Kbd>C</Kbd>
                  <Kbd>D</Kbd>
                  <Kbd>E</Kbd>
                  <Kbd>F</Kbd>
                  <Kbd>...</Kbd>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complex Shortcuts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complex Shortcuts</CardTitle>
            <CardDescription>
              Multiple key combinations for advanced shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Select All</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>A</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Find and Replace</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>H</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Open Developer Tools</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>Shift</Kbd>
                <span className="text-sm">+</span>
                <Kbd>I</Kbd>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-sm">Reload (Hard)</span>
              <div className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-sm">+</span>
                <Kbd>Shift</Kbd>
                <span className="text-sm">+</span>
                <Kbd>R</Kbd>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* In Context */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage in Context</CardTitle>
            <CardDescription>
              How keyboard shortcuts appear in documentation and UI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-sm mb-2">
                Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save your work.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm mb-2">
                Use <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm mb-2">
                Navigate with <Kbd>↑</Kbd> and <Kbd>↓</Kbd> arrow keys, then press <Kbd>Enter</Kbd> to select.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm mb-2">
                Tip: Hold <Kbd>Shift</Kbd> while clicking to select multiple items.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a kbd component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Simple Kbd Component
function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 items-center justify-center rounded',
        'bg-muted px-1 text-xs font-normal text-muted-foreground',
        className
      )}
    >
      {children}
    </kbd>
  )
}

// Usage - Single Key
<Kbd>Enter</Kbd>

// Usage - Keyboard Shortcut
<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd>
  <span>+</span>
  <Kbd>C</Kbd>
</div>

// Usage - macOS Shortcut
<div className="flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</div>

// Usage - In Text
<p>
  Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save.
</p>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for displaying keyboard shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use platform-appropriate symbols:</strong> Show ⌘ for macOS and Ctrl for Windows/Linux.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keep it concise:</strong> Use standard abbreviations like Ctrl, Alt, Shift instead of full names.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Separate with plus signs:</strong> Use + to show key combinations: Ctrl + C.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Consistent styling:</strong> Keep keyboard key styling uniform throughout your interface.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Context matters:</strong> Place shortcuts near the actions they trigger for better discoverability.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Use semantic HTML:</strong> The &lt;kbd&gt; tag provides semantic meaning for assistive technologies.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Document shortcuts:</strong> Provide a shortcuts reference or help menu for complex applications.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

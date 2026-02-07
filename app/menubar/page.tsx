'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
} from '@/components/ui/menubar'
import {
  ExternalLink,
  FileText,
  Copy,
  Scissors,
  ClipboardPaste,
  Undo2,
  Redo2,
  Save,
  FolderOpen,
  FileDown,
  Printer,
  Settings,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Eye,
  EyeOff,
  Bold,
  Italic,
  Underline,
} from 'lucide-react'

export default function MenubarShowcase() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-semibold tracking-tight">Menubar</h1>
              <Badge variant="secondary">Component</Badge>
            </div>
            <p className="text-base text-muted-foreground">
              A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
            </p>
          </div>
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a
              href="https://ui.shadcn.com/docs/components/menubar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View in Shadcn
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Basic Menubar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Menubar</CardTitle>
            <CardDescription>
              Simple menubar with File, Edit, and View menus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New File <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Save <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save As...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Full Screen</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Menubar with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Menubar with Icons</CardTitle>
            <CardDescription>
              Enhance menu items with leading icons for better visual recognition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FileDown className="mr-2 h-4 w-4" />
                    Export
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo2 className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo2 className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ClipboardPaste className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Checkbox Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Checkbox Items</CardTitle>
            <CardDescription>
              Toggle options with checkbox menu items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem checked>
                    <Eye className="mr-2 h-4 w-4" />
                    Show Sidebar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    <Eye className="mr-2 h-4 w-4" />
                    Show Toolbar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    <EyeOff className="mr-2 h-4 w-4" />
                    Show Status Bar
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarCheckboxItem checked>
                    Line Numbers
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Word Wrap
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>
                    <Bold className="mr-2 h-4 w-4" />
                    Bold
                    <MenubarShortcut>⌘B</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    <Italic className="mr-2 h-4 w-4" />
                    Italic
                    <MenubarShortcut>⌘I</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    <Underline className="mr-2 h-4 w-4" />
                    Underline
                    <MenubarShortcut>⌘U</MenubarShortcut>
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Radio Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Radio Groups</CardTitle>
            <CardDescription>
              Mutually exclusive options using radio items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Zoom Level</MenubarLabel>
                  <MenubarRadioGroup value="100">
                    <MenubarRadioItem value="50">50%</MenubarRadioItem>
                    <MenubarRadioItem value="75">75%</MenubarRadioItem>
                    <MenubarRadioItem value="100">100%</MenubarRadioItem>
                    <MenubarRadioItem value="125">125%</MenubarRadioItem>
                    <MenubarRadioItem value="150">150%</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarLabel>Text Size</MenubarLabel>
                  <MenubarRadioGroup value="medium">
                    <MenubarRadioItem value="small">Small</MenubarRadioItem>
                    <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="large">Large</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Theme</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="light">
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                    <MenubarRadioItem value="system">System</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Submenus */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Nested Submenus</CardTitle>
            <CardDescription>
              Create hierarchical menu structures with submenus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New File
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FolderOpen className="mr-2 h-4 w-4" />
                      Open Recent
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Document1.pdf</MenubarItem>
                      <MenubarItem>Project-files.zip</MenubarItem>
                      <MenubarItem>Notes.txt</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Clear History</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileDown className="mr-2 h-4 w-4" />
                      Export
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Export as PDF</MenubarItem>
                      <MenubarItem>Export as HTML</MenubarItem>
                      <MenubarItem>Export as Markdown</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Export Settings...</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ZoomIn className="mr-2 h-4 w-4" />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOut className="mr-2 h-4 w-4" />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <Maximize2 className="mr-2 h-4 w-4" />
                      Layout
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarRadioGroup value="default">
                        <MenubarRadioItem value="default">Default</MenubarRadioItem>
                        <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
                        <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Disabled Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled Items</CardTitle>
            <CardDescription>
              Show unavailable options with disabled state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem disabled>
                    <Undo2 className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    <Redo2 className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    <ClipboardPaste className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Complete Example - Text Editor */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Example</CardTitle>
            <CardDescription>
              Full-featured text editor menubar with all menu types
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileText className="mr-2 h-4 w-4" />
                    New
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>project-v1.tsx</MenubarItem>
                      <MenubarItem>README.md</MenubarItem>
                      <MenubarItem>config.json</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save As...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo2 className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo2 className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ClipboardPaste className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Select All</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Show Minimap</MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ZoomIn className="mr-2 h-4 w-4" />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOut className="mr-2 h-4 w-4" />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Maximize2 className="mr-2 h-4 w-4" />
                    Full Screen
                    <MenubarShortcut>⌃⌘F</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Preferences</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Theme</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarRadioGroup value="light">
                        <MenubarRadioItem value="light">Light</MenubarRadioItem>
                        <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                        <MenubarRadioItem value="system">System</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                    <MenubarShortcut>⌘,</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="border rounded-lg p-4 min-h-[200px] bg-muted/50">
              <p className="text-sm text-muted-foreground">
                Document editing area...
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>
              Basic implementation of a menubar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar'

// Basic Menubar
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New File <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open <MenubarShortcut>⌘O</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Save <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

// With Checkbox Items
<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarCheckboxItem checked>
      Show Sidebar
    </MenubarCheckboxItem>
    <MenubarCheckboxItem>
      Show Toolbar
    </MenubarCheckboxItem>
  </MenubarContent>
</MenubarMenu>

// With Radio Group
<MenubarMenu>
  <MenubarTrigger>Theme</MenubarTrigger>
  <MenubarContent>
    <MenubarRadioGroup value="light">
      <MenubarRadioItem value="light">Light</MenubarRadioItem>
      <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
      <MenubarRadioItem value="system">System</MenubarRadioItem>
    </MenubarRadioGroup>
  </MenubarContent>
</MenubarMenu>

// With Submenu
<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarSub>
      <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>document1.pdf</MenubarItem>
        <MenubarItem>project.zip</MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
  </MenubarContent>
</MenubarMenu>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using menubars effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Logical organization:</strong> Group related commands together and use consistent menu names across applications.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Keyboard shortcuts:</strong> Include shortcuts for frequently used actions to improve efficiency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Clear labels:</strong> Use concise, descriptive labels that clearly indicate what each menu item does.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Visual hierarchy:</strong> Use separators to group related items and create visual breaks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Appropriate item types:</strong> Use checkboxes for toggles, radio groups for exclusive options, and regular items for actions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Disable unavailable actions:</strong> Show disabled items rather than hiding them to maintain consistency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Limit nesting:</strong> Avoid deeply nested submenus (max 2-3 levels) to maintain usability.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Icons for clarity:</strong> Use icons sparingly to reinforce meaning, not replace clear text labels.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

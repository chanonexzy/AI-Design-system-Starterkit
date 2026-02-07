'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch disabled />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-4 w-4 transition-colors ${!isDark ? 'text-yellow-500' : 'text-muted-foreground'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle theme"
      />
      <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-blue-500' : 'text-muted-foreground'}`} />
    </div>
  )
}

export function ThemeToggleWithLabel() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="theme-toggle" className="text-sm font-medium">
          Dark Mode
        </Label>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <Switch disabled id="theme-toggle" />
          <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center justify-between space-x-2 w-full">
      <Label htmlFor="theme-toggle" className="text-sm font-medium cursor-pointer">
        Dark Mode
      </Label>
      <div className="flex items-center space-x-2">
        <Sun className={`h-4 w-4 transition-colors ${!isDark ? 'text-yellow-500' : 'text-muted-foreground'}`} />
        <Switch
          id="theme-toggle"
          checked={isDark}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          aria-label="Toggle theme"
        />
        <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-blue-500' : 'text-muted-foreground'}`} />
      </div>
    </div>
  )
}

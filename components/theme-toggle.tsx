'use client'

import * as React from 'react'
import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('primary')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4 text-yellow-500 transition-all" />
      case 'dark':
        return <Moon className="h-4 w-4 text-blue-400 transition-all" />
      case 'primary':
        return <Palette className="h-4 w-4 text-blue-500 transition-all" />
      default:
        return <Sun className="h-4 w-4 transition-all" />
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'primary' : 'light'} theme`}
      className="transition-all"
    >
      {getIcon()}
    </Button>
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
        <span className="text-sm font-medium">Theme</span>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <Sun className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('primary')
    } else {
      setTheme('light')
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      case 'primary':
        return 'Primary'
      default:
        return 'Theme'
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4 text-yellow-500 transition-all" />
      case 'dark':
        return <Moon className="h-4 w-4 text-blue-400 transition-all" />
      case 'primary':
        return <Palette className="h-4 w-4 text-blue-500 transition-all" />
      default:
        return <Sun className="h-4 w-4 transition-all" />
    }
  }

  return (
    <div className="flex items-center justify-between space-x-2 w-full">
      <span className="text-sm font-medium">
        Theme: {getThemeLabel()}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={cycleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'primary' : 'light'} theme`}
        className="transition-all"
      >
        {getIcon()}
      </Button>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1 rounded-md ${
          theme === 'light' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded-md ${
          theme === 'dark' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-1 rounded-md ${
          theme === 'system' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'
        }`}
      >
        System
      </button>
    </div>
  )
}
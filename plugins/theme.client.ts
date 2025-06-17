export default defineNuxtPlugin(() => {
  // This runs on client-side only to prevent hydration mismatch
  if (typeof window !== 'undefined') {
    const getSystemTheme = (): 'light' | 'dark' => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Get saved theme or default to system
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    const theme = savedTheme || 'system'
    
    // Determine resolved theme
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme

    // Apply theme immediately to prevent flash
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      const currentTheme = localStorage.getItem('theme')
      if (currentTheme === 'system' || !currentTheme) {
        const newResolvedTheme = getSystemTheme()
        root.classList.remove('light', 'dark')
        root.classList.add(newResolvedTheme)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
  }
})
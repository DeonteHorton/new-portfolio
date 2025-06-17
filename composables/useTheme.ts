export const useTheme = () => {
  const theme = ref<'light' | 'dark' | 'system'>('system')
  const resolvedTheme = ref<'light' | 'dark'>('light')

  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const updateTheme = (newTheme: 'light' | 'dark' | 'system') => {
    theme.value = newTheme
    
    if (typeof window === 'undefined') return

    // Save to localStorage
    localStorage.setItem('theme', newTheme)

    // Determine resolved theme
    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme
    resolvedTheme.value = resolved

    // Apply theme to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return

    // Get saved theme or default to system
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    const initialTheme = savedTheme || 'system'
    
    // Set initial theme without saving again
    theme.value = initialTheme
    const resolved = initialTheme === 'system' ? getSystemTheme() : initialTheme
    resolvedTheme.value = resolved

    // Apply to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme.value === 'system') {
        const newResolved = getSystemTheme()
        resolvedTheme.value = newResolved
        root.classList.remove('light', 'dark')
        root.classList.add(newResolved)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme.value)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    updateTheme(nextTheme)
  }

  const setLightMode = () => updateTheme('light')
  const setDarkMode = () => updateTheme('dark')
  const setSystemMode = () => updateTheme('system')

  const isDark = computed(() => resolvedTheme.value === 'dark')
  const isLight = computed(() => resolvedTheme.value === 'light')
  const isSystem = computed(() => theme.value === 'system')

  // Initialize on client side
  onMounted(() => {
    initTheme()
  })

  return {
    theme: readonly(theme),
    resolvedTheme: readonly(resolvedTheme),
    isDark,
    isLight,
    isSystem,
    toggleTheme,
    setLightMode,
    setDarkMode,
    setSystemMode,
    updateTheme,
  }
}
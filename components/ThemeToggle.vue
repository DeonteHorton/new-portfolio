<template>
  <div class="relative theme-toggle">
    <Button
      variant="ghost"
      size="sm"
      @click="toggleTheme"
      @contextmenu="handleRightClick"
      class="h-9 w-9 rounded-full p-0 hover:bg-muted transition-all duration-200"
      :title="getToggleTitle()"
    >
      <!-- Sun Icon (Light Mode) -->
      <Icon
        name="lucide:sun"
        class="h-4 w-4 transition-all duration-300 scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />
      <!-- Moon Icon (Dark Mode) -->
      <Icon
        name="lucide:moon"
        class="absolute h-4 w-4 transition-all duration-300 scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <!-- System Icon (System Mode) -->
      <Icon
        name="lucide:monitor"
        class="absolute h-4 w-4 transition-all duration-300"
        :class="isSystem ? 'scale-100 opacity-50' : 'scale-0 opacity-0'"
      />
    </Button>

    <!-- Theme Options Dropdown (Optional) -->
    <Transition
      name="theme-dropdown"
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="showDropdown"
        class="absolute right-0 top-full mt-2 w-36 bg-popover border border-border rounded-md shadow-lg z-50"
      >
        <div class="p-1">
          <button
            @click="setLightMode"
            class="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors"
            :class="{ 'bg-muted': theme === 'light' }"
          >
            <Icon name="lucide:sun" class="h-4 w-4" />
            Light
          </button>
          <button
            @click="setDarkMode"
            class="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors"
            :class="{ 'bg-muted': theme === 'dark' }"
          >
            <Icon name="lucide:moon" class="h-4 w-4" />
            Dark
          </button>
          <button
            @click="setSystemMode"
            class="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors"
            :class="{ 'bg-muted': theme === 'system' }"
          >
            <Icon name="lucide:monitor" class="h-4 w-4" />
            System
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const {
  theme,
  resolvedTheme,
  isDark,
  isLight,
  isSystem,
  toggleTheme,
  setLightMode,
  setDarkMode,
  setSystemMode,
} = useTheme()

const showDropdown = ref(false)

const getToggleTitle = () => {
  if (theme.value === 'light') {
    return 'Switch to dark mode'
  } else if (theme.value === 'dark') {
    return 'Switch to system mode'
  } else {
    return `System mode (currently ${resolvedTheme.value})`
  }
}

// Close dropdown when clicking outside
const handleOutsideClick = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.theme-toggle')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

// Alternative: Right-click or long-press for dropdown
const handleRightClick = (event: Event) => {
  event.preventDefault()
  showDropdown.value = !showDropdown.value
}
</script>

<style scoped>
/* Additional smooth transitions for theme switching */
.theme-toggle {
  position: relative;
}

/* Smooth icon transitions */
.lucide-sun,
.lucide-moon,
.lucide-monitor {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between">
      <NuxtLink
        to="/"
        class="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        Deonte
      </NuxtLink>
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.name"
          :to="link.path"
          class="relative transition-colors hover:text-foreground/80 group"
        >
          {{ link.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </NuxtLink>
      </nav>
      <!-- Mobile menu button -->
      <Button variant="ghost" size="icon" class="md:hidden" @click="isMenuOpen = !isMenuOpen">
        <div class="space-y-1.5">
          <div class="w-6 h-0.5 bg-foreground"></div>
          <div class="w-6 h-0.5 bg-foreground"></div>
          <div class="w-6 h-0.5 bg-foreground"></div>
        </div>
      </Button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav class="container py-4">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.name"
          :to="link.path"
          class="block py-2 px-4 hover:bg-muted/50 rounded-lg"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

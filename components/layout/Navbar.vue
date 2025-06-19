<template>
  <header class="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
    <div class="container flex h-16 items-center justify-between">
      <NuxtLink
        to="/"
        class="font-bold text-2xl bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
          <Logo />
      </NuxtLink>
      <div class="flex items-center gap-2">
        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.name"
            :to="link.path"
            class="relative transition-colors hover:text-foreground/80 group hover-effect"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
          </NuxtLink>
        </nav>
        
        <!-- Theme Toggle -->
        <ThemeToggle />
        
        <!-- Mobile menu button -->
        <Button variant="ghost" size="icon" class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <div class="space-y-1.5">
            <div class="w-6 h-0.5 bg-foreground"></div>
            <div class="w-6 h-0.5 bg-foreground"></div>
            <div class="w-6 h-0.5 bg-foreground"></div>
          </div>
        </Button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="up-to-down" mode="out-in">
        <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-16 left-0 right-0 border-b bg-background/95"
        >
        <nav class="container py-4 space-y-2">
            <NuxtLink
            v-for="link in navigationLinks"
            :key="link.name"
            :to="link.path"
            class="block py-2 px-4 hover:bg-muted/50 rounded-lg"
            @click="isMenuOpen = false"
            >
            {{ link.name }}
            </NuxtLink>
            
            <!-- Theme toggle for mobile -->
            <div class="flex items-center justify-between py-2 px-4">
              <span class="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
        </nav>
        </div>
    </Transition>
  </header>
</template>

<style scoped>
  .up-to-down-leave-active {
    transition: all 0.5s ease-out;
  }
  .up-to-down-leave-to {
    filter: opacity(0);
    transform: translatey(-100%);
  }

  .up-to-down-enter-active {
    transition: all 0.5s ease-in;
  }
  .up-to-down-enter-from {
    filter: opacity(0);
    transform: translatey(-100%);
  }

  .hover-effect {
      /* cursor: pointer; */
      transition: transform 0.2s ease-in-out;
  }
  .hover-effect:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
  }
</style>

<script setup lang="ts">

const isMenuOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Contact', path: '/contact' }
]
</script>

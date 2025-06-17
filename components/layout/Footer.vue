<template>
  <footer class="border-t">
    <div class="container py-8">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div class="flex flex-col items-center md:items-start gap-4">
          <p class="text-muted-foreground text-sm">
            © {{ new Date().getFullYear() }} Deonte Horton. All rights reserved.
          </p>
          <div class="flex gap-6 text-muted-foreground">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-foreground transition-colors"
            >
              <Icon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/deontehorton',
    icon: 'lucide:github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/deonte-horton',
    icon: 'lucide:linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/deonte_horton_?s=21&t=wREG7ofuOGWLM6Ld5OS_UQ',
    icon: 'lucide:twitter'
  },
    {
    name: 'Codepen',
    url: 'https://codepen.io/DeonteHorton',
    icon: 'lucide:codepen'
  }
]
</script>

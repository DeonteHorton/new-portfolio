<template>
  <Card class="group overflow-hidden">
    <!-- Project Image -->
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
    </div>

    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="text-xl">{{ title }}</CardTitle>
        <div class="flex gap-2">
          <a 
            v-if="demoLink"
            :href="demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-muted transition-colors"
            title="Live Demo"
          >
            <Icon name="lucide:external-link" class="h-4 w-4" />
          </a>
          <a
            v-if="githubLink"
            :href="githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-muted transition-colors"
            title="View Source"
          >
            <Icon name="lucide:github" class="h-4 w-4" />
          </a>
        </div>
      </div>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>

    <CardContent>
      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in technologies" 
          :key="tech"
          class="px-2 py-1 text-xs rounded-full bg-muted"
        >
          {{ tech }}
        </span>
      </div>
    </CardContent>

    <CardFooter>
      <NuxtLink 
        :to="detailsLink" 
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        View Details
        <Icon name="lucide:arrow-right" class="h-4 w-4 ml-1" />
      </NuxtLink>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  technologies: string[]
  detailsLink: string
  demoLink?: string
  githubLink?: string
}>()</script>
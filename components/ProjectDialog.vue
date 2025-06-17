<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogContent class="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
      <DialogHeader>
        <DialogTitle class="text-2xl font-bold">{{ project.name }}</DialogTitle>
        <DialogDescription class="text-base">
          {{ project.description }}
        </DialogDescription>
      </DialogHeader>

      <div class="flex-1 overflow-y-auto space-y-6 pr-2">
        <!-- Project Image -->
        <div v-if="project.projectImage" class="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10">
          <img
            :src="project.projectImage.url"
            :alt="project.name"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- Project Details -->
        <div class="space-y-4">
          <!-- Full Description -->
          <div v-if="project.longDescription">
            <h3 class="text-lg font-semibold mb-2">About This Project</h3>
            <p class="text-muted-foreground leading-relaxed">{{ project.longDescription }}</p>
          </div>

          <!-- Key Features -->
          <div v-if="project.features && project.features.length > 0">
            <h3 class="text-lg font-semibold mb-2">Key Features</h3>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <!-- Technologies Used -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech.name"
                class="px-3 py-1.5 text-sm rounded-full bg-muted font-medium"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>

          <!-- Project Links -->
          <div v-if="project.demoLink || project.githubLink" class="flex gap-3 pt-2">
            <Button
              v-if="project.demoLink"
              as-child
              class="flex items-center gap-2"
            >
              <a
                :href="project.demoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="lucide:external-link" class="h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button
              v-if="project.githubLink"
              as-child
              variant="outline"
              class="flex items-center gap-2"
            >
              <a
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="lucide:github" class="h-4 w-4" />
                View Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'

interface Props {
  project: {
    name: string
    description: string
    longDescription?: string
    features?: string[]
    projectImage?: {
      url: string
    }
    technologies: Array<{
      name: string
    }>
    demoLink?: string
    githubLink?: string
  }
}

defineProps<Props>()
</script>
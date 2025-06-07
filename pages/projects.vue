<template>
  <div class="container py-16 space-y-16">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        My
        <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <p class="text-xl text-muted-foreground">
        A collection of web applications and experiments I've built over the years
      </p>
    </div>

    <!-- Projects Grid -->
      <div class="max-w-full mx-auto text-5xl text-center">
        Coming soon
      </div>

    <!-- No results state -->
    <div v-if="filteredProjects.length === 0" class="text-center py-12">
      <Icon name="lucide:search-x" class="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
      <p class="text-muted-foreground">No projects found with the selected filters.</p>
      <Button @click="selectedTags = []" variant="outline" class="mt-4">
        Clear filters
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { find } = useStrapi()
const projects = ref({})
const tags = ref({})

try {
  projects.value = await find('projects',
    {
      sort: ['publishedAt:asc'],
      populate: {
        projectImage: {
          populate: "*"
        },
        technologies: {
          fields: ['name']
        }
      }
    }
  ).then(response => response.data)

} catch (error) {
  console.error('Error fetching blogs:', error)
}

const selectedTags = ref<string[]>([])

try {
  tags.value = await find('project-technologies', {fields: ['id', 'name']}).then(response => response.data)
} catch (error) {
  console.error('Error fetching tags:', error)
}

// Filter projects based on selected tags
const filteredProjects = computed(() => {
  if (selectedTags.value.length === 0) {
    return projects.value
  }
  return projects.value.filter(project => {
    return selectedTags.value.some(tag => {
      return project.technologies.map(tech => tech.name).includes(tag)
    })
  })
})

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}
</script>

<style scoped>
.projects-enter-active,
.projects-leave-active {
  transition: all 0.3s ease;
}

.projects-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.projects-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.projects-move {
  transition: transform 0.3s ease;
}
</style>

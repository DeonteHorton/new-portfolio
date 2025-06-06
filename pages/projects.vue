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

    <!-- Filter Tags -->
    <div class="flex flex-wrap justify-center gap-2">
      <Button
        v-for="tag in tags"
        :key="tag.id"
        @click="toggleTag(tag)"
        :variant="selectedTags.includes(tag) ? 'default' : 'outline'"
        size="sm"
        class="rounded-full"
      >
        {{ tag.name }}
      </Button>
      <Button
        v-if="selectedTags.length > 0"
        @click="selectedTags = []"
        variant="ghost"
        size="sm"
        class="rounded-full"
      >
        Clear all
      </Button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TransitionGroup name="projects">
        <div v-for="project in filteredProjects" :key="project.name">
        <!-- <div v-for="project in projects" :key="project.name"> -->
          <Card class="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
            <!-- Project Image -->
            <div class="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-600/10">
              <img
                v-if="project.projectImage"
                :src="project.projectImage.url"
                :alt="project.name"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div v-else class="absolute inset-0 flex items-center justify-center">
                <Icon name="lucide:code-2" class="h-16 w-16 text-muted-foreground/30" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <CardHeader class="flex-grow">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <CardTitle class="text-xl line-clamp-1">{{ project.name }}</CardTitle>
                  <CardDescription class="mt-2 line-clamp-2">{{ project.description }}</CardDescription>
                </div>
                <div class="flex gap-1">
                  <a
                    v-if="project.demoLink"
                    :href="project.demoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-full hover:bg-muted transition-colors"
                    title="Live Demo"
                    @click.stop
                  >
                    <Icon name="lucide:external-link" class="h-4 w-4" />
                  </a>
                  <a
                    v-if="project.githubLink"
                    :href="project.githubLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-full hover:bg-muted transition-colors"
                    title="View Source"
                    @click.stop
                  >
                    <Icon name="lucide:github" class="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardHeader>

            <CardContent class="pt-0">
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.technologies.slice(0, 5)"
                  :key="tech"
                  class="px-2 py-1 text-xs rounded-full bg-muted"
                >
                  {{ tech.name }}
                </span>
                <span
                  v-if="project.technologies.length > 5"
                  class="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  +{{ project.technologies.length - 5 }}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </TransitionGroup>
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

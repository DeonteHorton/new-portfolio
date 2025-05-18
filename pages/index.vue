<template>
  <!-- Hero Section -->
  <section class="container py-24 md:py-32">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      <div class="space-y-8 max-w-2xl">
        <div class="space-y-4">
          <div class="inline-block">
            <span class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20">
              {{ role}} at Vectorworks
            </span>
          </div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span class="block">Hi, I'm</span>
            <span class="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Deonte Horton
            </span>
            <span class="block mt-2">{{ role }}</span>
          </h1>
          <p class="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Full Stack Developer with 4+ years of experience building modern web applications.
            Specialized in Laravel PHP, Vue.js, and other modern technologies.
            Currently developing innovative CAD and BIM software solutions at Vectorworks.
            Based in Jackson, Mississippi.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/projects">
            <Button class="group relative overflow-hidden rounded-full px-6 h-12 transition-transform hover:scale-105">
              <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></span>
              <span class="relative flex items-center justify-center gap-2">
                View Projects
                <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <Button variant="outline" class="rounded-full px-6 h-12 transition-transform hover:scale-105">
              Contact Me
            </Button>
          </NuxtLink>
        </div>
      </div>
      <div class="relative">
        <!-- Decorative elements -->
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-xl"></div>
        <Card class="relative w-full max-w-lg mx-auto backdrop-blur-sm bg-background/95">
          <CardHeader>
            <CardTitle class="text-xl font-semibold">Recent Projects</CardTitle>
            <CardDescription>Check out some of my latest work</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <NuxtLink
                v-for="project in projects"
                :key="project.name"
                :to="project.path"
                class="group relative overflow-hidden rounded-lg border p-4 transition-all hover:bg-muted/50 block"
              >
                <div class="flex items-center gap-4">
                  <div class="flex-1 space-y-1">
                    <h3 class="font-semibold leading-none tracking-tight">{{ project.name }}</h3>
                    <p class="text-sm text-muted-foreground">{{ project.description }}</p>
                  </div>
                  <Button variant="ghost" size="icon" class="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="lucide:chevron-right" class="h-4 w-4" />
                  </Button>
                </div>
              </NuxtLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="container py-24 relative">
    <div class="absolute inset-0 bg-grid-white/10 -z-10"></div>
    <h2 class="text-3xl font-bold tracking-tight text-center mb-16">
      <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Skills & Technologies
      </span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="skill in skills"
        :key="skill.name"
        class="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <CardHeader>
          <CardTitle class="text-xl">{{ skill.name }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ skill.description }}</p>
        </CardContent>
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
const role = "Full Stack Web Developer";

const projects = [
  {
    name: "GPT-3 Chat Application",
    description: "A Laravel Inertia application built to chat with the GPT-3 AI",
    path: "/projects/gpt3-chat",
  },
  {
    name: "Destiny 2 Clan Portal",
    description: "A React app with Node.js and SocketIO for gaming clan management",
    path: "/projects/destiny2-clan"
  },
  {
    name: "2D Game Development",
    description: "A 2D tile platformer built with TypeScript and Phaser Framework",
    path: "/projects/game-dev"
  }
]

const skills = [
  {
    name: "Frontend",
    description: "Vue.js, JavaScript, TypeScript, HTML5, CSS, Tailwind CSS, Inertia.js"
  },
  {
    name: "Backend",
    description: "PHP, Laravel, MySQL/MariaDB, Node.js, RESTful APIs"
  },
  {
    name: "DevOps",
    description: "Docker, Ubuntu, Linux, Vultr, Digital Ocean, Cloudflare, CI/CD"
  },
  {
    name: "Tools",
    description: "Git, GitHub, Zed/VS Code/Jetbrains, Buddys work (CI/CD), Mac/Windows/Linux (Ubuntu/Fedora)"
  }
]

</script>

<style>
/* .bg-grid-white/10 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='1' height='100'/%3E%3Crect x='100' y='0' width='1' height='100'/%3E%3Crect x='0' y='0' width='100' height='1'/%3E%3Crect x='0' y='100' width='100' height='1'/%3E%3C/g%3E%3C/svg%3E");
} */
</style>

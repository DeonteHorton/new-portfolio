<template>
    <div>
        <!-- Hero Section -->
        <section class="container py-24 md:py-32">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div class="space-y-8 max-w-2xl">
              <div class="space-y-4">
                <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span class="block">Hi, I'm</span>
                  <span class="block bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Deonte Horton
                  </span>
                  <span class="block text-4xl mt-2">{{ role }}</span>
                  <span class="block font-normal text-muted-foreground text-2xl mt-2">Greater Jackson Area of Mississippi</span>
                </h1>
                <p class="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Full Stack Web Developer with 4+ years of experience building modern web applications.
                  Specialized in Laravel/PHP, Nuxt/Vue.js, and other modern technologies.
                </p>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/projects">
                  <Button class="group relative overflow-hidden rounded-full px-6 h-12 transition-transform hover:scale-105">
                    <span class="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600"></span>
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
            <div class="relative items-center pfp">
              <!-- Decorative elements -->
              <div class="mx-auto wavy-background opacity-20 bg-linear-to-r from-blue-500 to-purple-600"></div>
              <img src="/pfp.jpg" alt="Deonte Horton" loading="lazy" class="mx-auto object-cover max-w-lg w-full wavy-border ">
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="container py-24 relative">
          <div class="absolute inset-0 bg-grid-white/10 -z-10"></div>
          <h2 class="text-3xl font-bold tracking-tight text-center mb-16">
            <span class="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              v-for="skill in skills"
              :key="skill.name"
              class="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div class="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <CardTitle class="text-xl">{{ skill.name }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">{{ skill.description }}</p>
              </CardContent>
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </Card>
          </div>
        </section>
    </div>
</template>

<style scoped>

.pfp {
    transition: transform 0.2s ease;
}
.pfp:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(74, 144, 226, 0.5));
}

</style>

<script setup lang="ts">
useSeoMeta({
  title: "Deonte | Welcome to my portfolio",
  ogTitle: "Deonte | Welcome to my portfolio",
  description: "A website about me and my skills.",
  ogDescription: "A website about me and my skills.",
  ogImage: "/pfp.jpg",
  twitterCard: "summary",
})

const role = "Full Stack Web Developer";

const skills = [
  {
    name: "Frontend",
    description: "Nuxt/Vue.js, JavaScript/TypeScript, HTML5, CSS, Tailwind CSS, Inertia.js"
  },
  {
    name: "Backend",
    description: "PHP, Laravel, MySQL/MariaDB, Node.js, RESTful APIs"
  },
  {
    name: "DevOps",
    description: "Docker, Ubuntu, Linux, Vultr, Digital Ocean, Buddys work (CI/CD)"
  },
  {
    name: "Tools",
    description: "Git, GitHub, Zed/VS Code, Mac/Windows/Linux (Ubuntu/Fedora)"
  }
]

</script>

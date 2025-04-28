<template>
  <div class="container py-16">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Let's
        <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Connect
        </span>
      </h1>
      <p class="text-xl text-muted-foreground">
        Have a project in mind? I'd love to hear about it.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- Contact Form -->
      <Card class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 pointer-events-none"></div>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm @submit="handleSubmit" />
        </CardContent>
      </Card>

      <!-- Contact Information -->
      <div class="space-y-8">
        <Card v-for="(item, index) in contactInfo" :key="index">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon :name="item.icon" class="h-5 w-5" />
              {{ item.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">{{ item.content }}</p>
            <a 
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:text-blue-600 mt-2 inline-block"
            >
              {{ item.linkText }}
            </a>
          </CardContent>
        </Card>

        <!-- Social Links -->
        <Card>
          <CardHeader>
            <CardTitle>Connect on Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full border hover:bg-muted transition-colors"
              >
                <Icon :name="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactInfo = [
  {
    icon: 'lucide:mail',
    title: 'Email',
    content: 'deonte.horton11@gmail.com',
    link: 'mailto:deonte.horton11@gmail.com',
    linkText: 'Send an email'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Location',
    content: 'Jackson, Mississippi',
  },
  {
    icon: 'lucide:briefcase',
    title: 'Work',
    content: 'Software Developer at Vectorworks',
    link: 'https://www.vectorworks.net/',
    linkText: 'Visit Vectorworks'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/DeonteHorton',
    icon: 'lucide:github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/deonte-horton',
    icon: 'lucide:linkedin'
  },
  {
    name: 'Portfolio',
    url: 'http://localhost:3000',
    icon: 'lucide:globe'
  }
]

const handleSubmit = (formData: any) => {
  // Implement your form submission logic here
  console.log('Form submitted:', formData)
}
</script>
<template>
  <div class="container py-16">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Let's
        <span class="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Connect!
        </span>
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- Contact Form -->
      <Card class="overflow-hidden bg-linear-to-r from-blue-500/5 to-purple-600/5">
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

useSeoMeta({
  title: "Deonte | Contact me",
  ogTitle: "Deonte | Contact me",
  description: "Reach out to me if you have any questions or like to connect.",
  ogDescription: "Reach out to me if you have any questions or like to connect.",
  ogImage: "/pfp.jpg",
  twitterCard: "summary",
})

const contactInfo = [
  {
    icon: 'lucide:mail',
    title: 'Email',
    content: 'horton@deonte.dev',
    link: 'mailto:horton@deonte.dev',
    linkText: 'Send an email'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Location',
    content: 'Greater Jackson Area, Mississippi',
  },
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
    name: 'Twitter',
    url: 'https://x.com/deonte_horton_?s=21&t=wREG7ofuOGWLM6Ld5OS_UQ',
    icon: 'lucide:twitter'
  }
]

const handleSubmit = (data: any) => {
  // The form component handles the API call, this is just for any additional handling
  console.log('Form submitted successfully:', data)
}

</script>

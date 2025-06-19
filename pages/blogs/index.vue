<template>
    <div class="bg-background py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl pb-16">
                    Blog
                    <span class="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Section
                    </span>
                </h2>
                <p class="mt-2 text-lg/8 text-muted-foreground">Blogs about the stuff I either learned, interested in, or daily life stuff!</p>
            </div>
            <div v-if="blogs.length > 0" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <a v-for="blog in blogs" :key="blog.id" :href="`/blogs${blog.slug}`" class="block group">
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <div class="relative w-full mb-5 overflow-hidden rounded-2xl">
                            <img :src="blog?.seo?.shareImage?.url" :alt="blog?.seo?.shareImage?.alternativeText" class="aspect-video w-full bg-muted object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 group-hover:scale-105" />
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-border ring-inset" />
                        </div>
                        <div class="flex items-center gap-x-4 text-xs">
                            <time :datetime="blog.publishedAt" class="text-muted-foreground">{{ formatDate(blog.publishedAt) }}</time>
                            <div v-if="blog.blogCategories?.length" class="flex gap-2">
                                <div
                                    v-for="category in blog.blogCategories"
                                    :key="category.id"
                                    class="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground hover:bg-accent transition-colors"
                                >
                                    {{ category.text }}
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                                {{ blog.title }}
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">{{ blog.description }}</p>
                        </div>
                    </article>
                </a>
            </div>

            <!-- No blogs state -->
            <div v-else class="text-center py-12 mt-10 border-t border-border pt-10 sm:mt-16 sm:pt-16">
                <div class="mx-auto max-w-md">
                    <Icon name="lucide:file-text" class="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 class="mt-2 text-sm font-semibold text-foreground">No blogs available</h3>
                    <p class="mt-1 text-sm text-muted-foreground">Check back soon for new blog posts.</p>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup lang="ts">
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

// Replace $fetch with useFetch - this fixes hydration mismatch
const { data: blogsData } = await useFetch('/api/strapi/blogs', {
  default: () => [],
  key: 'blogs'
})

// Access the data through computed property
const blogs = computed(() => blogsData.value || [])

useSeoMeta({
  title: "Deonte | Blog",
  ogTitle: "Deonte | Blog",
  description: "Blogs about the stuff I either learned, interested in, or daily life stuff!",
  ogDescription: "Blogs about the stuff I either learned, interested in, or daily life stuff!",
  ogImage: "/pfp.jpg",
  twitterCard: "summary",
})

const formatDate = (date: any) => {
  return df.format(date.toDateTimeString)
}



</script>

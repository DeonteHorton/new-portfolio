<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl pb-16">Blog Section</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Blogs about the stuff I either learned, interested in, or daily life stuff!</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="blog in blogs" :key="blog.id" class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative w-full mb-5">
                    <img :src="blog?.seo?.shareImage?.url" :alt="blog?.seo?.shareImage?.alternativeText" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                <div class="flex items-center gap-x-4 text-xs">
                    <time :datetime="blog.publishedAt" class="text-gray-500">{{ formatDate(blog.publishedAt) }}</time>
                    <div v-if="blog.blogCategories?.length" class="flex gap-2">
                    <div
                        v-for="category in blog.blogCategories"
                        :key="category.id"
                        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {{ category.text }}
                    </div>
                    </div>
                </div>
                <div class="group relative">
                    <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a :href="`/blogs${blog.slug}`">
                        <span class="absolute inset-0" />
                        {{ blog.title }}
                    </a>
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ blog.description }}</p>
                </div>
                </article>
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

const blogs = await $fetch('/api/strapi/blogs')

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

<!-- <template>
  <div class="container py-16">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <p>Blog page content coming soon...</p>
  </div>
</template> -->

<template>
    <!-- <div class="container py-16">
        <h1 class="text-4xl font-bold mb-8">Blog</h1>
    </div> -->
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Blog</h2>
            <p class="mt-2 text-lg/8 text-gray-600"></p>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="blog in blogs" :key="blog.id" class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="blog.datetime" class="text-gray-500">{{ blog.datetime }}</time>
                <a :href="blog.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ blog.category.title }}</a>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a :href="`/blogs/${blog.href}`">
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

<script setup>
const blogs = [
  {
    id: 1,
    title: 'First Blog Post',
    href: 'first-blog',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Second Blog Post',
    href: 'second-blog',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Third Blog Post',
    href: 'third-blog',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },

]
</script>

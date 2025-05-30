<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base/7 text-gray-700">
      <p class="text-base/7 font-semibold text-indigo-600">Introducing</p>
      <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{{ blog.title }}</h1>
      <p class="mt-6 text-xl/8">{{ blog.description }}</p>
      <div v-for="content in blog.content" class="my-10" id="content">
          <div v-if="content['__component'] == 'shared.rich-text'">
              <h2 id="rich-text-heading" v-if="content.heading">{{ content.heading }}</h2>
              <div id="rich-text-body" v-if="content.body" v-html="content.body"></div>
          </div>
          <div v-if="content['__component'] == 'shared.media'">
              <figure class="mt-16">
                <img class="aspect-video rounded-xl bg-gray-50 object-cover" :src="content.media?.url" :alt="content.altText" />
                <figcaption v-if="content.copy" class="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                 {{ content.copy }}
                </figcaption>
              </figure>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()

const { find } = useStrapi()
const blog = ref({})

blog.value = await find('blogs', {
  filters: {
    "slug": `/${route.params.slug}`
  },
  populate: {
    content: {
      populate: "*"
    },
    seo: {
      populate: "*"
    }
  }
}).then(response => response.data[0])

useSeoMeta({
  title: blog.value.seo.metaTitle,
  ogTitle: blog.value.seo.metaTitle,
  description: blog.value.seo.metaDescription,
  ogDescription: blog.value.seo.metaDescription,
  ogImage: blog.value.seo.shareImage.url,
  twitterCard: blog.value.seo.shareImage.url,
})
</script>

<style>
    #content {
        #rich-text-heading {
            @apply text-3xl font-semibold
        }
        #rich-text-body {
            @apply text-base
        }

        blockquote {
            @apply my-10 border-l border-indigo-600 pl-9
        }
        ul {
            @apply list-disc pl-6
        }
        ol {
            @apply list-decimal pl-6
        }
    }

</style>

<template>
  <div class="bg-background px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base/7 text-foreground">
      <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">{{ blog.title }}</h1>
      <p class="mt-6 text-xl/8 text-muted-foreground">{{ blog.description }}</p>
      <div v-for="content in blog.content" class="my-10" id="content">
          <div v-if="content['__component'] == 'shared.rich-text'">
              <h2 id="rich-text-heading" v-if="content.heading">{{ content.heading }}</h2>
              <div id="rich-text-body" v-if="content.body" v-html="content.body"></div>
          </div>
          <div v-if="content['__component'] == 'shared.media'">
              <figure class="mt-16">
                <img class="aspect-video rounded-xl bg-muted object-cover" :src="content.media?.url" :alt="content.altText" />
                <figcaption v-if="content.copy" class="mt-4 flex gap-x-2 text-sm/6 text-muted-foreground">
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

const { data: blogsData } = await useFetch(`/api/strapi/blogs?slug=/${route.params.slug}`, {
  default: () => [],
  key: `blog-${route.params.slug}`
})

const blog = computed(() => blogsData.value?.[0] || null)

useSeoMeta({
  title: blog?.seo?.metaTitle,
  ogTitle: blog?.seo?.metaTitle,
  description: blog?.seo?.metaDescription,
  ogDescription: blog?.seo?.metaDescription,
  ogImage: blog?.seo?.shareImage?.url,
  twitterCard: blog?.seo?.shareImage?.url,
})
</script>

<style>
    #content {
        #rich-text-heading {
            @apply text-3xl font-semibold text-foreground
        }
        #rich-text-body {
            @apply text-base text-foreground
        }

        blockquote {
            @apply my-10 border-l border-blue-500 pl-9 text-muted-foreground
        }
        ul {
            @apply list-disc pl-6 text-foreground
        }
        ol {
            @apply list-decimal pl-6 text-foreground
        }
        
        p {
            @apply text-foreground
        }
        
        strong {
            @apply font-semibold text-foreground
        }
        
        em {
            @apply italic text-foreground
        }
        
        a {
            @apply text-blue-500 hover:text-blue-600 transition-colors
        }
    }

</style>

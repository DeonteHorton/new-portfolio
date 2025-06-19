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
              <ZoomableImage 
                :src="content.media?.url" 
                :alt="content.altText" 
                :caption="content.copy"
              />
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
    @reference 'tailwindcss';
    
    #content {
        #rich-text-heading {
            font-size: 1.875rem;
            font-weight: 600;
            color: var(--foreground);
        }
        
        #rich-text-body {
            font-size: 1rem;
            color: var(--foreground);
        }

        blockquote {
            margin: 2.5rem 0;
            border-left: 1px solid #3b82f6;
            padding-left: 2.25rem;
            color: var(--muted-foreground);
        }
        
        ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            color: var(--foreground);
        }
        
        ol {
            list-style-type: decimal;
            padding-left: 1.5rem;
            color: var(--foreground);
        }
        
        p {
            color: var(--foreground);
            margin: 1rem 0;
        }
        
        strong {
            font-weight: 600;
            color: var(--foreground);
        }
        
        em {
            font-style: italic;
            color: var(--foreground);
        }
        
        a {
            color: #3b82f6;
            transition: color 0.2s;
        }
        
        a:hover {
            color: #2563eb;
        }
        
        h1 {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--foreground);
            margin: 2rem 0 1rem 0;
        }
        
        h2 {
            font-size: 1.875rem;
            font-weight: 600;
            color: var(--foreground);
            margin: 1.5rem 0 0.75rem 0;
        }
        
        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--foreground);
            margin: 1.25rem 0 0.5rem 0;
        }
        
        h4 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--foreground);
            margin: 1rem 0 0.5rem 0;
        }
        
        h5 {
            font-size: 1.125rem;
            font-weight: 500;
            color: var(--foreground);
            margin: 0.75rem 0 0.25rem 0;
        }
        
        h6 {
            font-size: 1rem;
            font-weight: 500;
            color: var(--foreground);
            margin: 0.5rem 0 0.25rem 0;
        }
        
        pre {
            background-color: #1e293b;
            color: #e2e8f0;
            padding: 1.5rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
            font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 0.875rem;
            line-height: 1.5;
        }
        
        code {
            background-color: #f1f5f9;
            color: #475569;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 0.875rem;
        }
        
        pre code {
            background-color: transparent;
            color: inherit;
            padding: 0;
            border-radius: 0;
        }
    }
</style>

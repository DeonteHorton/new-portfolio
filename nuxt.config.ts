export default defineNuxtConfig({
  devtools: { enabled: true },

   nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/projects',
        '/blogs',
      ]
    }
  },
  
  ssr: true,

  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (process.env.NODE_ENV === 'production') {
        try {
          // Import ofetch for use in config
          const { $fetch } = await import('ofetch')
          
          // Fetch all blog slugs using your API route
          const blogs = await $fetch('/api/strapi/blogs')
          
          const blogRoutes = blogs.map(blog => `/blogs${blog.slug}`)
          
          nitroConfig.prerender = nitroConfig.prerender || {}
          nitroConfig.prerender.routes = [
            ...(nitroConfig.prerender.routes || []),
            ...blogRoutes
          ]
          
          console.log(`Added ${blogRoutes.length} blog routes for prerendering:`, blogRoutes)
        } catch (error) {
          console.warn('Failed to fetch blog routes for prerendering:', error)
        }
      }
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
  ],

  runtimeConfig: {
    strapiUrl: process.env.NUXT_STRAPI_URL,
    strapiToken: process.env.NUXT_STRAPI_TOKEN,
    public: {
      strapiUrl: process.env.NUXT_STRAPI_URL
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: '',
    /**
     * Directory that the component lives in
     */
    componentDir: './components/ui'
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          innerHTML: `
            (function() {
              const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const savedTheme = localStorage.getItem('theme') || 'system';
              const resolvedTheme = savedTheme === 'system' ? getSystemTheme() : savedTheme;
              document.documentElement.classList.add(resolvedTheme);
            })()
          `,
          type: 'text/javascript'
        }
      ]
    }
  },

  compatibilityDate: '2025-04-24',
})

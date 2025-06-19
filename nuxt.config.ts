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

  modules: ['shadcn-nuxt', 'nuxt-icon', '@nuxt/image'],

  image: {
    cloudflare: {
      baseURL: process.env.NUXT_CLOUDFLARE_IMAGES_URL
    }
  },

  runtimeConfig: {
    strapiUrl: process.env.NUXT_STRAPI_URL,
    strapiToken: process.env.NUXT_STRAPI_TOKEN,
    public: {
      strapiUrl: process.env.NUXT_STRAPI_URL
    }
  },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
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

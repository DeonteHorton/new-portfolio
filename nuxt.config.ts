export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      ignore: ["/projects", "/blogs", "/blogs/*"]
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
    }
  },

  compatibilityDate: '2025-04-24',
})

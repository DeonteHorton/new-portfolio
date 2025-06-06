export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    '@nuxtjs/strapi',
  ],

  runtimeConfig: {
     strapi: {
       token: process.env.NUXT_STRAPI_TOKEN
     }
  },

  strapi: {
    url: process.env.NUXT_STRAPI_URL,
    token: process.env.NUXT_STRAPI_TOKEN,
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    devtools: true,
    cookieName: 'strapi_jwt'
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

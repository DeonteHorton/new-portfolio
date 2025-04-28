export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    '@nuxtjs/strapi',
  ],

  // strapi: {
  //   url: process.env.STRAPI_URL || 'http://localhost:1337',
  //   token: process.env.STRAPI_TOKEN || undefined
  //   prefix: '/api',
  //   admin: '/admin',
  //   version: 'v5',
  //   cookie: {},
  //   cookieName: 'strapi_jwt'
  // },


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

  compatibilityDate: '2025-04-24',
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxtjs/seo',
    'nuxt-og-image',
  ],
  components: true,
  css:  ["@/assets/css/tailwind.css"],
  googleFonts: {
    base64: true,
    overwriting: true,
    families: {
      'Geist Mono': [400, 500, 700],
    },
  },
  ogImage: {
    fonts: ['Geist Mono:400', 'Geist Mono:500', 'Geist Mono:700'],
    siteUrl: process.env.SITE_URL,
    runtimeCaching: true,
  },
  site: {
    url: process.env.SITE_URL,
  },
})
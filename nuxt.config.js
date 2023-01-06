export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 4000,
  },
  head: {
    title: 'berkayuzun-dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Welcome to my personal website! My name is Berkay Uzun and I am a frontend developer with a passion for developing solutions. Thank you for visiting!',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'frontend developer, front-end developer, developer, Berkay UZUN',
      },
      { hid: 'author', name: 'author', content: 'Berkay UZUN' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

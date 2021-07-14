import pkg from './package'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt stack development'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': process.env.API_URL || 'http://localhost:3000/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: process.env.API_URL || 'http://localhost:3000/api'
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000
  },

  // Customizing the Progress Bar
  loading: {
    color: 'DodgerBlue',
    height: '3px'
  }
}

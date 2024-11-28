// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', [
    '@nuxtjs/google-fonts',
    {
      families: {
        'DM Sans': [400, 700],
      },
    },
  ], '@pinia/nuxt', '@nuxt/eslint', '@nuxthub/core'],

  colorMode: {
    preference: 'light',
  },

  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/global.css', '~/assets/css/variables.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', id: 'favicon' }
      ],
    },
  },

  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'favicon'
        }
      }
    }
  },

  compatibilityDate: '2024-11-03',
});
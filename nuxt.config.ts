// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        // Default theme
        default: 'github-light',
        // Theme used in dark-mode
        dark: 'github-dark',
      }
    },
  },
  compatibilityDate: '2024-07-06',
});

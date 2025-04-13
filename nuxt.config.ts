// https://nuxt.com/docs/api/configuration/nuxt-config
export
default defineNuxtConfig({
    devtools:
    {
      enabled:
      true
    },
    extends: ['shadcn-docs-nuxt'],
    i18n: {
      defaultLocale: 'cn',
      locales: [{
        code: 'cn',
        name: '简体中文',
        language: 'zh-CN',
      },
      {
        code: 'en',
        // language 2 letters code (e.g. 'fr')
        name: 'English',
        // language name (e.g. 'Français')
        language: 'en-US',
        // language ISO code (e.g. 'fr-FR')
      },
      ],
    },
    content: {
      documentDriven: true,
      highlight: {
        theme: {
          // Default theme
        default:
          'github-light',
          // Theme used in dark-mode
          dark: 'github-dark',
        }
      },
    },
    compatibilityDate: '2024-07-06',
  });
import { defineI18nConfig } from '@nuxtjs/i18n';

export default defineI18nConfig(() => ({
  legacy: true,
  locale: 'zh-CN',
  messages: {
    en: {
      // Add here all english strings defined in app.config.ts e.g. titles in header.nav or toc.title
      // Default UI strings are already translated out of the box

      shiki: 'shiki', // for example: site title
    },
  },
}));

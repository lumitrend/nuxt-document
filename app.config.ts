export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Vaeluon',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Vaeluon',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
          {
        title: '首页',
        to: '/',
        target: '_self',
        showLinkIcon: false,
        icon: 'lucide:github',
        
      },
      {
          title: '文档',
          to: '/docs/',
          target: '_self',
          showLinkIcon: false,
          icon: 'lucide:github',
      },
            {
          title: '博客',
          to: '//blog.vaeluon.com',
          target: '_blank',
          showLinkIcon: true,
          icon: 'lucide:github',
      },
            {
          title: '官网',
          to: '//vaeluon.com',
          target: '_blank',
          showLinkIcon: true,
          icon: 'lucide:github',
      },
            {
          title: '社区',
          to: '//github.com/lumitrend/community/',
          target: '_blank',
          showLinkIcon: true,
          icon: 'lucide:github',
      },
            {
          title: '关于',
          to: '/about/',
          target: '_self',
          showLinkIcon: false,
          icon: 'lucide:github',
      },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/lumitrend/',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2025 Vaeluon',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/lumitrend',
        target: '_blank',
      },
      {
        icon: 'lucide:bluesky',
        to: 'https://bsky.app/profile/vaeluon.com',
        target: '_blank',
      },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
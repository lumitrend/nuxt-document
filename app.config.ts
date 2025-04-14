export default defineAppConfig({
    shadcnDocs:
    {
      site:{
        name: 'Vaeluon',
        description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
        ogImage: '/assets/og.png',
        ogImageComponent: 'BlogPost',
        ogImageColor: 'light',
        },
      theme: {
        customizable: true,
        color: 'zinc',
        radius: 0.5,
      },
      banner: {
        enable: false,
        showClose: true,
        //to: 'https://github.com',
        content: '测试一下头部心细',
        //target: '_blank',
        border: true,
      },
      header: {
        showLoadingIndicator: true,
        title: 'Vaeluon',
        showTitle: true,
        border: false,
        darkModeToggle: true,
        languageSwitcher: {
          enable: true,
          triggerType: 'icon',
          dropdownType: 'select',
        },
        logo: {
          light: '/logo.svg',
          dark: '/logo-dark.svg',
        },
        showTitleInMobile: false,
        nav: [
          {
          title: '首页',
          to: '/',
          target: '_self',
          showLinkIcon: false,
          icon: 'lucide:rocket',
        },
          {
          title: '文档',
          to: '/docs/',
          target: '_self',
          showLinkIcon: false,
          icon: 'lucide:book',
          },
          {
          title: '博客',
          to: '/blog/',
          target: '_self',
          showLinkIcon: false,
          icon: 'lucide:pen',
          },
          {
          title: '支持',
          icon: 'lucide:heart-headshake',
          links: [
            {
            title: '社区',
            to: '//github.com/lumitrend/community/',
            target: '_blank',
            showLinkIcon: true,
            icon: 'lucide:messages-square',
            },
            {
            title: '关于',
            to: '/about/',
            target: '_self',
            showLinkIcon: false,
            icon: 'lucide:square-user'
            },
            {
            title: '协议',
            to: '/agreement/',
            showLinkIcon: false,
            icon: 'lucide:book-open-text',
            },
            {
            title: '赞赏',
            to: '/sponsor/',
            icon: 'lucide:heart',
            },
          ],
          },
          {
          title: '产品', 
          links: [
          {
          title: 'OgImage',
          to: '//OgImage.vaeluon.com',
          description: '获取网站OgImage封面',
          target: '_blank',
          icon: 'lucide:code'
          },
        {
          title: 'Github OgImage',
          to: '//ghog.vaeluon.com',
          description: '制作并获取Github仓库专属OgImage图片',
          target: '_blank',
          icon: 'lucide:github'
        },
        {
          title: 'Readme.MD Edit',
          to: '//github.com',
          description: 'Github自述文件 README 信息卡扩展',
          target: '_blank',
          icon: 'lucide:arrow-big-down-dash'
        },
        {
          title: 'Steam信息卡',
          to: '//stesm.vaeluon.com',
          description: '制作并获取Steam用户信息以及专属OgImage图片',
          target: '_blank',
          icon: 'lucide:swords'
        },
        {
          title: '全部产品',
          to: '//products.vaeluon.com',
          description: '查看所有开源项目产品信息',
          target: '_blank',
          icon: 'lucide:box'
        },
        ],
          },
        ],
        links: [
          {
          icon: 'lucide:github',
          to: 'https://github.com/lumitrend/',
          target: '_blank',
          },
          {
          icon: 'lucide:heart',
          to: '//sponsor.vaeluon.com',
          target: '_blank',
          }
        ],
      },
      aside: {
        useLevel: true,
        collapse: false,
        collapseLevel: 1,
        folderStyle: 'default',
      },
      main: {
        padded: true,
        breadCrumb: true,
        showTitle: true,
        codeCopyToast: true,
        codeCopyIcon: 'lucide:copy',
        codeCopyToastText: '复制到剪贴板！',
        fieldRequiredText: '必填',
        pm: ['npm', 'pnpm', 'bun', 'yarn'],
        editLink: {
          enable: true,
          pattern: 'https://github.com/lumitrend/docs/edit/main/content/:path',
          text: '编辑此页',
          icon: 'lucide:square-pen',
          placement: ['docsFooter', 'toc'],
        },
        },
      footer: {
        credits: 'Copyright © 2025 Vaeluon',
        links: [
          {
          icon: 'lucide:github',
          to: 'https://github.com/lumitrend',
          target: '_blank',
          },
          {
          icon: 'lucide:twitter',
          to: 'https://x.com/Vaeluon',
          target: '_blank',
          },
          {
          icon: 'lucide:youtube',
          to: 'https://www.youtube.com/@evanyanet',
          target: '_blank',
          },
          {
          icon: 'lucide:tv',
          to: 'https://space.bilibili.com/397615069',
          target: '_blank',
          },
        ],
      },
      toc: {
        enable: true,
        enableInMobile: true,
        enableInHomepage: false,
        title: '页面导航',
        links: [
          {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
          },
          {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
          target: '_blank',
          }
        ],
      },
      search: {
        enable: true,
        inAside: false,
        style: 'input',
        placeholder: '搜索...',
        placeholderDetailed: '文档搜索...',
      }
    }
  });
import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'vi',
  lastUpdated: true,
  locales: {
    '/': {
      lang: 'vi',
      title: 'Graby',
      description: 'AI/ML Development Environment'
    },
    '/en/': {
      lang: 'en',
      title: 'Graby',
      description: 'AI/ML 开发环境'
    },
  },
  title: 'Graby Docs',
  description: 'Vite & Vue powered static site generator.',
  //base: '/graby-docs/',

  head:[
    // Google Analytics
    [
      'script',
      {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HRD26FG2QW' 
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HRD26FG2QW');"
    ],

    ['link', { rel: 'icon', href: '/logo.svg', alt:'envd'}],
    ['meta', { name: 'keywords', content: 'envd, AI, ML, development environment, data science, engineering teams, No Docker, only Python, Jupyter, VSCode, save time, Local & cloud, Repeatable builds, reproducible results'}],
    ['meta', { property: 'og:title', content: 'envd' }],
    ['meta', { property: 'og:description', content: 'A machine learning development environment for data science and AI/ML engineering teams.' }],
    ['meta', { property: 'og:url', content: 'https://envd.tensorchord.ai/' }],
    ['meta', { name: 'twitter:title', content: 'envd' }],
    ['meta', { name: 'twitter:description', content: 'AI/ML Development Environment' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@TensorChord' }],
  ],

  themeConfig: {
    algolia: {
      appId: 'PRG4V4VUL0',
      apiKey: 'eafda0b6482e051b4fd31478456ffa38',
      indexName: 'graby_docs',
    },
    localeLinks: {
      text: '',
      items: [
        { text: 'Tiếng Việt', link: '/' },
        { text: 'English', link: '/en/' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: '#' },
      { icon: 'facebook', link: '#' },
      { icon: 'discord', link: '#' }
    ],

    /* carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }, */
    nav: [
      { text: 'WPGraby.com', link: 'https://wpgraby.com' },
      { text: '+84 936 770 119', link: 'tel:0936770119' },
      { text: 'info@wpgraby.com', link: 'mailto:info@wpgraby.com' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Bắt đầu', link: '/' },
          { text: 'License', link: '/license' },
          { text: 'Site Configs', link: '/site-configs' },
          { text: 'Example', link: '/example' },
          
          // ...
        ],
      },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  },
});

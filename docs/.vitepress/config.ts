import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  siteTitle: 'Hello World',
  lang: 'en',
  title: 'Graby Docs',
  description: 'Vite & Vue powered static site generator.',
  //base: '/graby-docs/',

  head: [['meta', { name: 'theme-color', content: '#ff7800' }]],

  themeConfig: {
    algolia: {
      appId: 'PRG4V4VUL0',
      apiKey: 'eafda0b6482e051b4fd31478456ffa38',
      indexName: 'graby'
    },
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

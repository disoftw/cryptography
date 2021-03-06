const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cryptography',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/Cryptography/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/alvarez98',
    editLinks: false,
    logo: 'https://www.aaaimx.org/software/logo.png',
    docsDir: '',
    nextLinks: true,
    prevLinks: true,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Introducción',
        link: '/intro/'
      },
      {
        text: 'Métodos de Cifrado',
        link: '/methods/'
      },
      {
        text: 'Tipos de Cifrado',
        link: '/types/'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          title: 'Introducción',
          collapsable: false,
        }
      ],
      '/methods/': [
        {
          title: 'Métodos de Cifrado',
          collapsable: false,
          children: [
            'caesar-cipher',
            'vigenere-cipher',
            'hashing',
            'hashed-passwords',
            'salted-passwords'
          ]
        }
      ],
      '/types/': [
        {
          title: 'Tipos de Cifrado',
          collapsable: false,
          children: [
            'symmetric',
            'aes',
            'asymmetric',
            'digital-signature',
            'examples'
          ]
        }
      ],
    },
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'es-MX', // this will be set as the lang attribute on <html>
        title: 'VuePress',
        description: 'Vue'
      },
      '/en/': {
        lang: 'en-US',
        title: 'VuePress',
        description: 'Vue'
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
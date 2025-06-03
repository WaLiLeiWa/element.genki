import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "元氣小攻略OxO",
  description: "元素2D中文攻略",
  lang: 'zh-TW',
  lastUpdated: true,
  cleanUrls: true,
  srcDir: './src',
  themeConfig: {
    logo: '../assets/element.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '元素攻略',
        items: [
          { text: '職業' },
          { text: '裝備' },
          { text: '技能書' },
          { text: '符文' },
          { text: '潛力' },
          { text: '副職業' },
          { text: '寶物' },
          { text: '怪物' }
        ]
      },
      {
        text: '八轉前期',
        items: [
          { text: '練等流程', link: '/beginner/' },
        ]
      },
      {
        text: '八轉後期',
        items: [
          { text: '練等流程', link: '/advanced/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/' }
    ]
  }
})

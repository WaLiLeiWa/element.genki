import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "元氣小攻略OxO",
  description: "元素2D中文攻略",
  base: "/element.genki/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/element.genki/favicon.svg",
      },
    ],
  ],
  lang: "zh-TW",
  lastUpdated: true,
  cleanUrls: true,
  srcDir: "./src",
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    lastUpdated: {
      text: "更新日期",
      formatOptions: {
        dateStyle: "medium",
      },
    },
    sidebar: [
      {
        text: "開始",
        link: "/start",
      },
      {
        text: "元素攻略",
        items: [
          { text: "職業", link: "/job" },
          { text: "裝備" },
          { text: "技能書", link: "/skill" },
          { text: "符文" },
          { text: "潛力" },
          { text: "副職業" },
          { text: "寶物" },
          { text: "怪物" },
        ],
      },
      {
        text: "練等推薦流程",
        items: [
          { text: "八轉前期", link: "/beginner/" }, 
          { text: "八轉後期" },
        ],
      },
    ],

    socialLinks: [{ icon: "discord", link: "https://discord.com/" }],
  },
});

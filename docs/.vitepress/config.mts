import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shincode_Blog",
  description: "shincode_blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "無料ではじめる",
        items: [
          {
            text: "ShinCode_Campで学ぶ🚀",
            link: "https://code-s-school-5bc2.thinkific.com/bundles/shincode-camp",
          },
        ],
      },
      {
        text: "Udemyクーポン",
        items: [
          {
            text: "Udemy割引クーポン",
            link: "http://shincode.info/2021/12/31/udemy-discount-coupon/",
          },
        ],
      },
    ],

    sidebar: [
      {
        items: [
          { text: "ShinCode_Campについて", link: "/posts/shincode_camp" },
          { text: "ブログ記事一覧", link: "/posts/postList" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://github.com/vuejs/vitepress" },
      { icon: "youtube", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});

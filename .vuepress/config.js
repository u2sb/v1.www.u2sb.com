module.exports = {
  title: "u2sb",
  description: "我们正在做一些很帅的事",
  dest: "dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "Documents",
        icon: "reco-message",
        items: [
          {
            text: "弹幕服务器",
            link: "https://dandoc.u2sb.top/",
          },
          {
            text: "hexo-tag-mmedia",
            link: "/docs/hexo-tag-mmedia/",
          }
        ],
      },
      {
        text: "About",
        icon: "reco-suggestion",
        items: [
          {
            text: "关于我们",
            link: "/blogs/other/aboutme.html",
            icon: "reco-faq",
          },
          {
            text: "GitHub",
            link: "https://github.com/u2sb",
            icon: "reco-github",
          },
          {
            text: "QQ群",
            link: "https://blog.xxwhite.com/assets/html/qq-groups.html",
            icon: "reco-qq",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: "叉叉白",
        desc: "听我跟你瞎白话",
        email: "xxwhite@foxmail.com",
        link: "https://blog.xxwhite.com",
      },
    ],
    logo: "/img/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "u2sb",
    // 作者头像
    authorAvatar: "/img/avatar.png",
    // 备案号
    //record: 'xxxx',
    // 项目开始时间
    startYear: "2020",
    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require("markdown-it-imsize"));
    },
  },
  plugins: [
    ["sitemap", { hostname: "https://www.u2sb.top" }],
    ["vuepress-plugin-pangu"],
  ],
};

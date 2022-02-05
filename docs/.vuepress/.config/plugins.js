export default {
  sitemap: { hostname: "https://www.u2sb.com" },
  mmedia: {
    artplayer: {
      src: {
        playbackRate: true,
        whitelist: ["*"],
      },
    },
  },
  pangu: {},

  "one-click-copy": {
    copySelector: [
      'div[class*="language-"] pre',
      'div[class*="aside-code"] aside',
    ],
    copyMessage: "复制成功",
    duration: 1000,
    showInMobile: false,
  },
  // 放大图片
  zooming: {
    selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
    options: {
      bgColor: "rgba(0,0,0,0.6)",
    },
  },
  "fulltext-search": {},
};

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "开源软件",
    items: [
      {
        text: "弹幕服务器",
        link: "https://dandoc.u2sb.com/"
      },
      {
        text: "MetingJS.Server",
        link: "/open-sw/#MetingJsServer"
      },
      {
        text: "vuepress-plugin-mmedia",
        link: "/open-sw/#vuepress-plugin-mmedia"
      },
      {
        text: "hexo-tag-mmedia",
        link: "/open-sw/#hexo-tag-mmedia"
      }
    ]
  }
];

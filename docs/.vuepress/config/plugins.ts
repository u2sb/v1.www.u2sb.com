import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";

import type { SmPlayerPluginOption } from "vuepress-plugin-smplayer/types";

const hostname = `https://${fs.readFileSync(
  resolve(__dirname, "../public", "CNAME")
)}`;

export default <UserPlugins>[
  ["sitemap", { hostname }],
  [
    "smplayer",
    {
      meting: {
        api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
      },
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
        },
      },
    } as SmPlayerPluginOption,
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  ["fulltext-search"],
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>-<%- frontmatter.permalink %>",
      needComments: true,
      // 其他的 Vssue 配置
      clientId: "7b8bed21c94a97015e77",
      clientSecret: "9e0815a9c50ba3cad8da138d14d4a179be691467",
      owner: "u2sb",
      repo: "v1.www.u2sb.com",
      admins: ["u2sb", "MonoLogueChi"],
      locale: "zh-CN",
      perPage: 12,
    },
  ],
];

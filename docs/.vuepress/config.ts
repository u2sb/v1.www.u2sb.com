import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./.config/themeConfig";
import markdown from "./.config/markdown";
import plugins from "./.config/plugins";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "u2sb",
  description: "You Are Shuai Bi",
  dest: "dist",
  shouldPrefetch: () => false,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "vdoing",
  themeConfig: themeConfig,
  markdown: markdown,
  plugins: plugins
});

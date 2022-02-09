import { HeadTags } from "vuepress/config";
export default <HeadTags>[
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no"
    }
  ]
];

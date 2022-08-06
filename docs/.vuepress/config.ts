import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { nav, side } from "./layout";
//@ts-ignore
export default defineUserConfig<DefaultThemeOptions>({
  head: [
    ["meta", { name: "application-name", content: "Datalink Documentation" }],
    ["link", { rel: "icon", href: "https://media.discordapp.net/attachments/997744059584106506/1001513676823601222/109857116-removebg-preview11.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net" }],
    // ["script", { defer: true, 'data-domain': 'docs.tovyblox.xyz', src: "https://analytics.whooopdev.xyz/js/plausible.js" }],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet",
      },
    ],
  ], 

  locales: {
    "/": {
      lang: "en-US",
      title: "Datalink Documentation",
      description:
        "Documentation for Datalink, the lightweight, open-source analytics system.",
    },
  },

  themeConfig: {
    logo: "https://media.discordapp.net/attachments/997744059584106506/1001513676823601222/109857116-removebg-preview11.png",
    repo: "datalinkhq/datalink",
    docsBranch: 'master',
    docsRepo: "datalinkhq/guide",
    editLinkPattern: ':repo/edit/:branch/docs/:path',

    locales: {
      "/": {
        navbar: nav.en,
        sidebar: side.en,
      },
    },
  },
});

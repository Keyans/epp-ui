/*
 * @Author: your name
 * @Date: 2020-10-22 17:47:42
 * @LastEditTime: 2020-10-26 10:04:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/epp-ui/docs/.vuepress/config.js
 */
module.exports = ctx => ({
  title: "epp-ui",
  description: "一款基于管理后台的运用",
  base:ctx.isPro ? "./":"./dev",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://mvp-web-1300522992.image.myqcloud.com/img/coco_toc/favicon.ico",
      },
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  themeConfig: {
    logo:
      "https://mvp-web-1300522992.image.myqcloud.com/img/coco_toc/favicon.ico",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/pages/" },
      {
        text: "Github",
        link: "http://git.code.oa.com/demeter_web/npm_epp_ui.git",
      },
    ],
    sidebar: {
      "/pages/": [
        {
          title: "table组件",
          collapsable: true,
          children: ["one.md"],
        },
      ],
    },
  },
});

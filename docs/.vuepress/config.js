/*
 * @Author: your name
 * @Date: 2020-10-22 17:47:42
 * @LastEditTime: 2020-10-27 21:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/epp-ui/docs/.vuepress/config.js
 */
module.exports = (ctx) => ({
  title: "epp-ui",
  description: "一款基于管理后台的运用",
  base: "/epp-ui/",
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
          children: [
            {
              title: "起步",
              path: "",
            },
            {
              title: "table组件",
              path: "table",
            },
          ],
        },
      ],
      "/guide/": [
        {
          title: "起步",
          collapsable: false,
          children: [
            {
              title: "快速入门",
              collapsable: false,
              path: "",
            },
            {
              title: "部署",
              collapsable: false,
              path: "step",
            },
            {
              title: "B端常用网站",
              collapsable: false,
              path: "collect",
            },
          ],
        },
      ],
    },
  },
});

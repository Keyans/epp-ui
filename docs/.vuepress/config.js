/*
 * @Author: your name
 * @Date: 2020-10-22 17:47:42
 * @LastEditTime: 2020-10-28 14:53:11
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
      { text: "指南", link: "/guide/step" },
      { text: "组件", link: "/pages/table" },
      { text: "工具库", link: "https://ares.nb.qq.com/jsdocs/index.html" },
      {
        text: "Github",
        link: "http://git.code.oa.com/demeter_web/npm_epp_ui.git",
      },
    ],
    sidebar: {
      "/pages/": [
        {
          title: "基础组件",
          collapsable: false,
          children: [
            {
              title: "icon图标",
              collapsable: false,
              path: "icon",
            },
            {
              title: "button按钮",
              collapsable: false,
              path: "button",
            },
            {
              title: "table表格",
              collapsable: false,
              path: "table",
            },
            {
              title: "form表单",
              collapsable: false,
              path: "form",
            },
            {
              title: "steps步骤条",
              collapsable: false,
              path: "steps",
            },
            {
              title: "dispickers省市区三级联动组件",
              collapsable: false,
              path: "dispickers"
            },
            {
              title: "tags标签",
              collapsable: false,
              path: "tags"
            },
            {
              title: "switch组件",
              collapsable: false,
              path: "switch"
            },
          ],
        },
        {
          title: "业务组件",
          collapsable: false,
          children: [
            {
              title: "特别说明",
              collapsable: false,
              path: "business-component-description"
            },
            {
              title: "breadcrumb面包屑",
              collapsable: false,
              path: "bread",
            },
            {
              title: "img-upload 图片上传组件",
              collapsable: false,
              path: "img-upload"
            },
            {
              title: "search-bank 选择银行/支行组件",
              collapsable: false,
              path: "search-bank"
            },
            {
              title: "category 选择类目组件",
              collapsable: false,
              path: "category"
            }
          ],
        },
      ],
      "/guide/": [
        {
          title: "起步",
          collapsable: false,
          children: [
            {
              title: "部署",
              collapsable: false,
              path: "step",
            },
            {
              title: "组件开发流程",
              collapsable: false,
              path: "dev-process",
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

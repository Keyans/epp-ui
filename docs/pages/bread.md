## 面包屑导航

### 动态面包屑的配置

动态面包屑的配置。

<demo-block>
  <example-breadcrumb-base-bread slot="source"></example-breadcrumb-base-bread>
<<< @/docs/.vuepress/components/example/breadcrumb/base-bread.vue
</demo-block>

## 使用说明

适用项目：所有 B 端系统
引入前置、需要安装js工具库,具体工具库使用规则,请点击<a href="https://ares.nb.qq.com/jsdocs/index.html">更多</a>
```javascript
tnpm i @tencent/nb-tools
```
引用代码：
在`router/index.js`中
```javascript
import { BreadInterceptors } from "@tencent/nb-tools"; // 倒入面包屑方法
router.afterEach((to, from) => {
  BreadInterceptors(to, from);
});
```

在对应的子路由中`index.js`中,采用 `name` 存放、所以必须配置`name`,以商家端规则中心为例子,`children`中`menu:true`则为开启动态路由，注意第一级侧边栏名称`menu->title:'规则中心'`需要配置

```javascript
import Layout from "@/layout/layout";
import {
  Owner, // 店主
  Admin, // 超级管理员
  GROUPSHOP_OWNER, // 群小店店主
  OP, // 运营人员
  CSR, // 客服人员
} from "@router/role/roleMap";

const ruleCenterRouterMap = {
  path: "/rulecenter",
  component: Layout,
  alwaysShow: true,
  meta: {
    title: "规则中心",
    iconClass: "nb-icon-user",
    icon: "icon_product",
  },
  children: [
    {
      path: "/rulecenter/index",
      name: "/rulecenter/index",
      component: () => import("@views/rulecenter/index.vue"),
      meta: {
        title: "规则中心",
        roles: [Owner, Admin, OP, GROUPSHOP_OWNER],
        micro: true, //用于微前端的路由判断,不是商家端可忽略
        menu: true, //开启对应的动态路由
      },
    },
  ],
};
export default ruleCenterRouterMap;
```
代码中使用如下、需要按照`name`的方式进行跳转
```javascript
    handleClick(row) {
      this.$router.push({
        name: '/rulecenter/detail',
        query: {
          articleId: row.RuleID,
          articleTitle: row.MainTitle,
          PlatformRuleCategoryID: row.PlatformRuleCategoryID,
        },
        params: {
          routerTitle: row.MainTitle,
        },
      });
    },
```


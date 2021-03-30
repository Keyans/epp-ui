/*
 * @Author: your name
 * @Date: 2020-09-11 17:29:13
 * @LastEditTime: 2020-10-15 18:14:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qun/src/router/router.js
 */
import Main from "@/views/Main.vue";
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: "/login",
  name: "login",
  meta: {
    title: "Login - 登录"
  },
  component: () => import("@/views/login.vue")
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: "/",
  name: "otherRouter",
  component: Main
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/template',
    name: 'appRouter',
    component: Main,
    children:[
      { path: 'base_render', meta:{title:"基础模版渲染"},name: 'base_render', component: () => import(/* webpackChunkName: "base_render" */ '@/views/template/base-render/index.vue') },
    ]
  },
  {
    path: '/example',
    name: 'appRouter',
    component: Main,
    children:[
      { path: 'base_tpls', meta:{title:"基础模版渲染"},name: 'base_tpls', component: () => import(/* webpackChunkName: "base_tpls" */ '@/views/example/base-tpl/index.vue') },
      { path: 'order_table', meta:{title:"基础模版渲染"},name: 'order_table', component: () => import(/* webpackChunkName: "order_table" */ '@/views/example/order-table/index.vue') },
    ]
  },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [loginRouter, otherRouter, ...appRouter];

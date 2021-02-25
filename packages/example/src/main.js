/*
 * @Author: your name
 * @Date: 2020-10-21 16:12:35
 * @LastEditTime: 2020-10-22 16:37:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/epp-ui/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import NbDesign from "@tencent/nb-design";
import "@tencent/nb-design/lib/theme-chalk/index.css";

import "@/assets/css/element-variables.scss"; //引入自定义主题
import "@/assets/css/common.scss"; //引入公共样式
// import eppUi from "../epp-ui/lib/epp-ui.umd";
// import eppUi from "@tencent/epp-ui";
// import { Button, Link } from "lerna-demo-test-ui";

// console.log(eppUi, 22222);

Vue.use(NbDesign);
Vue.use(eppUi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

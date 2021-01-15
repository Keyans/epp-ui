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
import NbDesign from "@tencent/nb-design";
import "@tencent/nb-design/lib/theme-chalk/index.css";
// import eppUi from "../epp-ui/lib/epp-ui.umd";
import eppUi from "@tencent/epp-ui";
import { Button, Link } from "lerna-demo-test-ui";
// import { examplate } from "../epp-ui/lib/epp-examplate/index.js";

// console.log(template, 1273891273);
// Vue.use(Button);
// Vue.use(Link).use(Button);

// import eppUiTest from "@tencent/epp-ui-test";
Vue.use(NbDesign);
// Vue.use(eppUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

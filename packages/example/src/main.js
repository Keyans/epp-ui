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
import store from "./store";


import { router } from "./router";
import NbDesign from "@tencent/nb-design";
import "@tencent/nb-design/lib/theme-chalk/index.css";

<<<<<<< HEAD
import "@/assets/css/element-variables.scss"; //引入自定义主题
import "@/assets/css/common.scss"; //引入公共样式
console.log(eppUi,123123)
=======
// import "@/assets/css/element-variables.scss"; //引入自定义主题
// import "@/assets/css/common.scss"; //引入公共样式
>>>>>>> 7169bc1b494770c4615353cdb69a37773129cf17

// import eppUi from "@tencent/epp-ui"
// import '@tencent/epp-ui/lib/epp-ui.css';
import eppUi from "../../epp-ui/lib/epp-ui.common"
import "../../epp-ui/lib/epp-ui.css"
Vue.use(NbDesign);
Vue.use(eppUi);
// Vue.prototype.inherit =(options)=>eppUi.eppTemplate.inherit(options)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

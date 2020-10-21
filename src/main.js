/*
 * @Author: your name
 * @Date: 2020-10-21 16:12:35
 * @LastEditTime: 2020-10-21 21:40:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/epp-ui/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import NbDesign from "@tencent/nb-design";
import "@tencent/nb-design/lib/theme-chalk/index.css";
import eppUiTest from "@tencent/epp-ui";

Vue.use(NbDesign);
// Vue.use(ElementUI);
Vue.use(eppUiTest);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

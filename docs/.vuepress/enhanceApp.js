import '@tencent/epp-ui/lib/epp-ui.css';
import NbDesign from "@tencent/nb-design";
import '@tencent/nb-design/lib/theme-chalk/index.css';

import DemoBlock from "./components/demo-block/demo-block.vue";
export default({
  Vue, // VuePress 正在使用的 Vue 构造函数
  isServer
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(NbDesign);
  Vue.component("demo-block", DemoBlock);
  Vue.mixin({
    mounted(){
      import("@tencent/epp-ui/lib/epp-ui.common.js").then(m=>{
        Vue.use(m.default)
      })
    }
  })
};

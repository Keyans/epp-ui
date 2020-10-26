import NbDesign from "@tencent/nb-design";
import eppTable from "../../src/packages/epp-table/epp-table.vue";
import DemoBlock from "./components/demo-block/demo-block.vue";
import "@tencent/nb-design/lib/theme-chalk/index.css";
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(NbDesign);
  Vue.component("epp-table", eppTable);
  Vue.component("demo-block", DemoBlock);
};

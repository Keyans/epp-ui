import NbDesign from "@tencent/nb-design";
import eppTable from "../../packages/epp-ui/src/epp-table/epp-table.vue";
import eppForm from "../../packages/epp-ui/src/epp-form/epp-form.vue";
import eppSteps from "../../packages/epp-ui/src/epp-steps/epp-steps.vue";
import eppDispickers from "../../packages/epp-ui/src/epp-dispickers/epp-dispickers.vue";
import eppTags from "../../packages/epp-ui/src/epp-tags/epp-tags.vue";
import DemoBlock from "./components/demo-block/demo-block.vue";
import "@tencent/nb-design/lib/theme-chalk/index.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(NbDesign);
  Vue.component(eppTable.name, eppTable);
  Vue.component(eppForm.name, eppForm);
  Vue.component(eppSteps.name, eppSteps);
  Vue.component(eppDispickers.name, eppDispickers);
  Vue.component(eppTags.name, eppTags);
  Vue.component("demo-block", DemoBlock);
};

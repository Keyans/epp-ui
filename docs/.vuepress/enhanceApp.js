import NbDesign from "@tencent/nb-design";
import EppTable from "../../packages/epp-ui/src/epp-table/epp-table.vue";
import EppForm from "../../packages/epp-ui/src/epp-form/epp-form.vue";
import EppSteps from "../../packages/epp-ui/src/epp-steps/epp-steps.vue";
import EppDispickers from "../../packages/epp-ui/src/epp-dispickers/epp-dispickers.vue";
import EppTags from "../../packages/epp-ui/src/epp-tags/epp-tags.vue";
import EppSwitch from "../../packages/epp-ui/src/epp-switch/epp-switch.vue";
import EppBreadcrumb from "../../packages/epp-ui/src/epp-breadcrumb/epp-breadcrumb.vue";
import EppButton from "../../packages/epp-ui/src/epp-button/epp-button.vue";
import EppIcon from "../../packages/epp-ui/src/epp-icon/epp-icon.vue";
import DemoBlock from "./components/demo-block/demo-block.vue";
import "@tencent/nb-design/lib/theme-chalk/index.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(NbDesign);
  Vue.component(EppTable.name, EppTable);
  Vue.component(EppForm.name, EppForm);
  Vue.component(EppSteps.name, EppSteps);
  Vue.component(EppDispickers.name, EppDispickers);
  Vue.component(EppTags.name, EppTags);
  Vue.component(EppSwitch.name, EppSwitch);
  Vue.component(EppButton.name, EppButton);
  Vue.component(EppIcon.name, EppIcon);
  Vue.component("demo-block", DemoBlock);
  Vue.mixin({
    mounted(){
      Vue.component(EppBreadcrumb.name, EppBreadcrumb);
    }
  })
};

<template>
  <div>
    <test-tpl></test-tpl>
    <component is="componentName"></component>
      <!-- <epp-form ref="eppForm" :formConfig="formConfig"></epp-form> -->    <!-- <epp-steps
    :active="active"
    :steps-list="stepsList"
    direction="vertical"
  ></epp-steps> -->
    <!-- <test-form :formConfig="formConfig"></test-form> -->
    <!-- <div :is="`nb-radio-group`" v-model="radio3">
      <nb-radio label="1" border>备选项1</nb-radio>
      <nb-radio label="2" border>备选项2</nb-radio>
    </div> -->
    <!-- <nb-radio-group v-model="radio3" size="small">
      <nb-radio label="1" border>备选项1</nb-radio>
      <nb-radio label="2" border disabled>备选项2</nb-radio>
    </nb-radio-group> -->
  </div>
</template>

<script>
import config from "./config";
import inherit  from "./transform"
console.log(inherit(config),123123)
import testTpl from "./epp-template/epp-template"
// import { inherit } from "../../../../../epp-ui/lib/epp-ui.common";
// import { inherit } from "@tencent/epp-ui-test"
export default {
  components:{testTpl},
  mixins: [inherit(config)],
};
</script>

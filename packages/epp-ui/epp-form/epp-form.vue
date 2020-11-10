<template>
  <div>
    <nb-form
      :model="config.formData"
      :ref="config.ref"
      :label-width="config.labelWidth"
      :label-position="config.labelPosition"
      :inline="config.inline"
      :rules="config.rules"
    >
      <nb-form-item
        v-for="(item, index) in config.formItem"
        :key="index"
        :label="item.label"
        :prop="item.model"
      >
        <eppFormComponent
          :value="config.formData[item.model]"
          :componentConfig="item"
          @update="handleUpdateFormComponent"
        >
        </eppFormComponent>
      </nb-form-item>
      <nb-form-item v-if="!!config.btn.length">
        <nb-button
          v-for="(button, index) in config.btn"
          :key="index"
          :type="button.type"
          :size="button.size"
          @click="button.click || (() => null)"
          >{{ button.name }}</nb-button
        >
      </nb-form-item>
    </nb-form>
  </div>
</template>

<script>
import eppFormComponent from "./epp-form-component";
export default {
  name: "eppForm",
  props: {
    formConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: { eppFormComponent },
  data() {
    return {
      defaultConfig: {
        ref: "eppForm",
        labelPosition: "right", //默认为右对齐
        inline: true, //默认为横向展示
        labelWidth: "80px", //默认label为80
        buttonShow: true, //设置查询按钮默认存在
        btn: [], // 表单按钮
      },
    };
  },
  computed: {
    //为props增加默认配置
    config() {
      return Object.assign(this.defaultConfig, this.formConfig);
    },
  },
  mounted() {},
  methods: {
    handleUpdateFormComponent({ key, value }) {
      this.formConfig.formData[key] = value;
    },
    getFormData() {
      return this.$props.formConfig.formData || {};
    },
    validate(callback) {
      const { ref } = this.config;
      this.$refs[ref].validate(callback);
    },
    resetForm() {
      const { ref } = this.config;
      this.$refs[ref].resetFields();
      return this.config.formData;
    },
  },
};
</script>

<style></style>

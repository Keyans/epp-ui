<template>
  <div>
    <nb-form
      :model="config.formData"
      :ref="config.ref"
      :label-width="config.labelWidth"
      :inline="config.inline"
      :rules="config.rules"
    >
      <nb-form-item
        v-for="(item, index) in config.formItem"
        :key="index"
        :label="item.label"
        :prop="item.key"
      >
        <components
          :is="item.type"
          v-model="config.formData[item.key]"
        ></components>
      </nb-form-item>
      <nb-form-item v-if="!!config.btn.length">
        <nb-button
          v-for="(button, index) in config.btn"
          :key="index"
          :type="button.type"
          :size="button.size"
          >{{ button.name }}</nb-button
        >
      </nb-form-item>
    </nb-form>
  </div>
</template>

<script>
export default {
  name: "eppForm",
  props: {
    formConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      defaultConfig: {
        ref: "eppForm",
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
  mounted() {
    console.log(this.config);
  },
  methods: {
    resetForm() {
      const { ref } = this.config;
      this.$refs[ref].resetFields();
      Object.assign(this[ref], this.$options.data()[ref]);
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="eppForm">
    <nb-form
      v-bind="config"
      :rules="rules"
      :model="config.formData"
      @submit.native.prevent
    >
      <nb-row :gutter="config.gutter">
        <template v-for="(item, index) in config.formItem">
          <nb-col :key="index" :span="computedSpan" style="min-height:51px;">
            <nb-form-item
              :label="item.label"
              :prop="item.model"
              class="epp-width"
            >
              <eppFormComponent
                :value="config.formData[item.model]"
                :componentConfig="item"
                @update="handleUpdateFormComponent"
                @updateEvent="
                  (e) => {
                    handleUpdateEvent(e, item);
                  }
                "
                v-bind:style="
                  item.styleObject ? item.styleObject : config.styleObject
                "
              >
              </eppFormComponent>
            </nb-form-item>
          </nb-col>
        </template>
        <nb-col :span="computedSpan">
          <div v-if="!!config.btn.length" style="width:100%">
            <nb-button
              v-for="(button, index) in config.btn"
              :key="index"
              v-bind="button"
              :size="config.size"
              @click="handleClick(button)"
              >{{ button.name }}</nb-button
            >
          </div>
        </nb-col>
      </nb-row>
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
    rules: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  components: { eppFormComponent },
  data() {
    return {
      defaultConfig: {
        ref: "eppForm",
        labelPosition: "right", // 默认为右对齐
        inline: false, // 默认为横向展示
        size: "small",
        labelWidth: "80px", // 默认label为80
        buttonShow: true, // 设置查询按钮默认存在
        btn: [
          {
            type: "primary",
            name: "查询",
            click: () => {
              this.$emit('getFormData',this.config.formData)
            },
          },
          {
            type: "",
            name: "重置",
            click: () => {
              this.resetForm();
            },
          },
        ], // 表单按钮
        gutter: 0, // 属性来指定每一栏之间的间隔，默认间隔为 0
        col: 3, // 设置默认一列展示的行数
        mainspan: 24, //设置总栅格数、默认为24
        styleObject: { //设置默认的绑定样式
          width: "100%",
        },
      },
    };
  },
  computed: {
    // 为props增加默认配置
    config() {
      return Object.assign(this.defaultConfig, this.formConfig);
    },
    //获取栅栏span
    computedSpan() {
      return Math.floor(this.config.mainspan / this.config.col);
    },
  },
  methods: {
    handleClick(btn) {
      btn.click && btn.click();
    },
    //处理表单事件
    handleUpdateEvent({ val, type }, item) {
      item[type] && item[type](val);
    },
    //处理表单数据
    handleUpdateFormComponent({ key, value }) {
      this.formConfig.formData[key] = value;
      this.formConfig.onUpdateData &&
        this.formConfig.onUpdateData(...arguments);
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

<style scoped lang="scss">
.epp-width {
  width: 100%;
}
.epp-width .nb-form-item__content {
  font-size: 20px;
}
/deep/ .nb-form-item__content {
  width: calc(100% - 110px);
  line-height: 50px;
}
</style>

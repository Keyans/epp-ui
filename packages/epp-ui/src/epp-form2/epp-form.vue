<template>
  <div class="epp-form" ref="wrapper">
    <nb-row justify="center" type="flex">
      <nb-col>
        <nb-form
          :rules="rules"
          :model="config.formData"
          v-bind="config"
          @submit.native.prevent
        >
          <nb-row :gutter="config.gutter">
            <template v-for="(formItem, field) of formDescData">
              <nb-col
                :key="field"
                :span="computedSpan"
                v-if="formItem._vif"
                style="min-height: 51px"
              >
                <nb-form-item v-bind="formItem" :prop="field" class="epp-width">
                  <!-- 增加自定义render渲染 -->
                  <template>
                    <item-render
                      :data="config.formData"
                      :render="formItem.render"
                      v-if="formItem.render"
                    ></item-render>
                    <!-- 渲染el支持的component -->
                    <eppFormComponent
                      v-else
                      :componentConfig="formItem"
                      :value="config.formData[field]"
                      :field="field"
                      @update="handleUpdateFormComponent"
                    >
                    </eppFormComponent>
                  </template>
                </nb-form-item>
              </nb-col>
            </template>
            <nb-col :span="computedSpan" v-if="!!config.btn.length">
              <nb-form-item :label-width="config.inline ? '10px' : null">
                <nb-button
                  v-for="(button, index) in config.btn"
                  :key="index"
                  v-bind="button"
                  :size="config.size"
                  @click="handleClick(button)"
                  >{{ button.name }}</nb-button
                >
              </nb-form-item>
            </nb-col>
          </nb-row>
        </nb-form>
      </nb-col>
    </nb-row>
  </div>
</template>

<script>
import eppFormComponent from "./epp-form-component";
import itemRender from "./item-render";
import { throttle } from "loadsh";
const cloneDeep = require("clone");

export default {
  name: "eppForm2",
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
  components: { eppFormComponent, itemRender },
  data() {
    return {
      formDescData: {},
      defaultConfig: {
        ref: "eppform",
        inline: false, // 默认为横向展示
        mainspan: 24, // 设置总栅格数、默认为24
        labelWidth: "80px", // 默认label为80
        gutter: 0, // 属性来指定每一栏之间的间隔，默认间隔为 0
        col: 3, // 设置默认一列展示的行数
        btn: [
          {
            type: "primary",
            name: "查询",
            click: () => {
              this.getFormData();
            },
          },
          {
            name: "重置",
            click: () => {
              this.resetForm();
            },
          },
        ], // 表单按钮
      },
    };
  },
  computed: {
    // 为props增加默认配置
    config() {
      return Object.assign(this.defaultConfig, this.formConfig);
    },
    // 获取栅栏span
    computedSpan() {
      return Math.floor(this.config.mainspan / this.config.col);
    },
  },
  watch: {
    // 同步数据
    "config.formDesc": {
      handler(formDesc) {
        const oldFormDescData = {};
        // 去除被删除字段
        Object.keys(this.formDescData)
          .filter((key) => formDesc[key])
          .forEach((key) => {
            oldFormDescData[key] = this.formDescData[key];
          });
        this.formDescData = Object.assign(
          {},
          oldFormDescData,
          cloneDeep(formDesc)
        );
        this.checkLinkage()
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // 处理表单数据
    handleUpdateFormComponent({ key, value }) {
      this.handleChange(key, value);
      this.checkLinkage();
    },
    //改变数据
    handleChange(field, val) {
      this.formConfig.formData[field] = val
      this.formConfig.onUpdateData &&
        this.formConfig.onUpdateData(...arguments);
    },
    // 当类型为函数时的请求
    getFunctionAttr(fn, field) {
      return fn(
        this.config.formData,
        this.formDescData[field],
        this.formDescData
      );
    },
    //设置隐藏和显示
    setVif(formItem, field) {
      let vif = true;
      if (typeof formItem.vif === "function") {
        vif = Boolean(this.getFunctionAttr(formItem.vif, field));
        if (!vif) {
          // 如果隐藏, 则使用其默认值
          this.handleChange(field, formItem.defaultValue);
        }
      } else if (typeof formItem.vif === "boolean") {
        vif = formItem.vif;
      }
      this.$set(formItem, "_vif", vif);
    },
    // 检测联动
    checkLinkage() {
      this.checkLinkageFn = throttle(() => {
        const formDescData = this.formDescData;
        Object.keys(formDescData).forEach((field) => {
          const formItem = formDescData[field];
          // 1.设置 vif
          this.setVif(formItem, field);
          // 2.设置 disabled
          let disabled = null;
          if (typeof formItem.disabled === "function") {
            disabled = this.getFunctionAttr(formItem.disabled, field);
          } else if (typeof formItem.disabled === "boolean") {
            disabled = formItem.disabled;
          }
          this.$set(formItem, "_disabled", disabled);
        });
      }, 300);
      this.checkLinkageFn();
    },
    handleClick(btn) {
      btn.click && btn.click();
    },
    resetForm() {
      const { ref } = this.config;
      this.$refs[ref].resetFields();
    },
    getFormData() {
      this.$emit("getFormData", this.config.formData);
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
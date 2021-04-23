<template>
  <component
    v-bind="componentConfig"
    :is="componentType(componentConfig.componentType)"
    :options="
      componentConfig.componentType === 'cascader' ? componentConfig.options : null
    "
    v-model="controlModel"
    :type="filterType"
    @input="handleInput(controlModel)"
    @click.native="click"
    @blur="blur"
    @focus="focus"
    @clear="clear"
    @keyup.native="keyup"
  >
    <!-- 判断是否有对应的children、并且是否有对应的options -->
    <template
      v-if="componentConfig.children && componentConfig.children.options"
    >
      <component
        v-for="(op, index) in componentConfig.children.options"
        :label="op[componentConfig.children.label] || op.label"
        :value="op[componentConfig.children.value] || op.value"
        :is="componentType(componentConfig.children.type || 'option')"
        :key="index"
      >
        <template v-if="componentConfig.children.type === 'radio'">
          {{ op[componentConfig.children.value] || op.value }}
        </template>
      </component>
    </template>
  </component>
</template>

<script>
import nbtools from "@tencent/nb-tools";

export default {
  name: "eppFormComponent",
  props: {
    componentConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
    value: [Array, String, Number, Object, Boolean, Date],
  },
  data() {
    return {
      controlModel: this.value,
      filterType:undefined,
    };
  },
  watch: {
    value(newValue) {
      this.controlModel = newValue;
    },
    controlModel(newValue) {
      const key = this.$props.componentConfig.model;
      this.$emit("update", { key, value: newValue });
    },
  },
  methods: {
    // 处理输入事项
    handleInput(val) {
      // 如果存在输入的input、则按照@input事件优先触发
      if (this.componentConfig.input) {
        this.controlModel = this.componentConfig.input(val);
        return;
      }
      // 如果存在valueType、则按照valueType传入类型触发工具库中的方法
      if (nbtools[this.componentConfig.valueType]) {
        this.controlModel = nbtools[this.componentConfig.valueType](val);
      }
    },
    componentType(type) {
      let typeName = type;
      if (type === 'textarea') {
        typeName = 'input';
        this.filterType = 'textarea';
      } else {
        this.filterType = this.componentConfig.type || undefined;
      }
      return `nb-${typeName}`;
    },
    //点击事件
    click(event) {
      this.valifyHandler(event.type);
    },
    //失焦事件
    blur(event) {
      this.valifyHandler(event.type);
    },
    //聚焦事件
    focus(event) {
      this.valifyHandler(event.type);
    },
    //清除事件
    clear(event) {
      this.valifyHandler("clear");
    },
    //keyup事件
    keyup(event) {
      let firstUpperCase = event.code
        .toLowerCase()
        .replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
      this.valifyHandler(`${event.type}${firstUpperCase}`);
    },
    //处理事件
    valifyHandler(type) {
      const val = this.controlModel;
      this.$emit("updateEvent", { val, type });
    },
  },
};
</script>

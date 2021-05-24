<template>
  <!-- 单独处理radio、由于radio在动态component渲染时会报错，用div来处理-->
  <div
    v-if="componentConfig.type === 'radio'"
    :is="componentType(componentConfig.type)"
    @input="handleInput"
    v-model="controlModel"
    v-on="componentConfig.on"
    v-bind="componentConfig.attrs"
    :class="componentConfig.class"
    :style="componentConfig.style"
    :type="filterType"
  >
    <!-- 判断是否有对应的options -->
    <template v-if="componentConfig.options">
      <component
        v-for="(op, index) in componentConfig.options"
        v-bind="op"
        :is="handleChildType(componentType(componentConfig.type))"
        :key="index"
      >
        <template v-if="op.text">{{ op.text }}</template>
      </component>
    </template>
  </div>
  <!-- 父级options用来处理cascader的映射
   -->
  <component
    v-else
    :is="componentType(componentConfig.type)"
    @input="handleInput"
    v-model="controlModel"
    v-on="componentConfig.on"
    :options="componentConfig.type === 'cascader'?componentConfig.options:null"
    v-bind="componentConfig.attrs"
    :class="componentConfig.class"
    :style="componentConfig.style"
    :type="filterType"
  >
    <!-- 判断是否有对应的options -->
    <template
      v-if="componentConfig.options && componentConfig.type !== 'cascader'"
    >
      <component
        v-for="(op, index) in componentConfig.options"
        v-bind="op"
        :is="handleChildType(componentType(componentConfig.type))"
        :key="index"
      >
        <template v-if="op.text">{{ op.text }}</template>
      </component>
    </template>
  </component>
</template>

<script>
import nbtools from '@tencent/nb-tools';

export default {
  props: {
    componentConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
    field: {
      type: String,
      require: true,
    },
    value: [Array, String, Number, Object, Boolean, Date],
  },

  data() {
    return {
      controlModel: this.componentConfig.default || this.value,
      filterType: undefined,
    };
  },
  watch: {
    value(newValue) {
      this.controlModel = newValue;
    },
    controlModel(newValue) {
      const key = this.field;
      this.$emit('update', { key, value: newValue });
    },
  },
  methods: {
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
    // 处理子类型select、radio、checkbox
    handleChildType(type) {
      // const reg = /.*(?<!-group)$/;
      // reg.test(type);
      // return reg.test(type) ? 'nb-option' : type.substring(0, type.length - 6);
    },
    // 处理组件类型
    componentType(type) {
      let typeName = this.handleTimePicker(type);
      // 判断是否具有radio、或则checkbox,则成为一个数组
      if (typeName.includes('-radio') || typeName.includes('-checkbox')) {
        typeName = `${typeName}-group`;
      }
      // 判断是否为epp-前缀开头的
      // const eppReg = /^(epp-).*/;
      // if (eppReg.test(type)) {
      //   typeName = type;
      // }
      return typeName;
    },
    // 处理时间选择器
    handleTimePicker(type) {
      const typeList = [
        'year',
        'month',
        'date',
        'week',
        'datetime',
        'datetimerange',
        'daterange',
      ];
      const filterType = typeList.filter(item => item === type)[0];// 做类型判断
      const typeName = type === 'textarea' ? 'input' : type; // 是否为textarea类型
      const text = filterType ? 'nb-date-picker' : `nb-${typeName}`;// 选择是否为时间
      this.filterType = type === 'textarea' ? type : filterType; // 如果是textarea做判断
      // 默认加上nb开头
      return text;
    },
  },
};
</script>

<style>
</style>

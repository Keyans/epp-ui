<template>
  <component
    :is="componentType(componentConfig.componentType)"
   
    v-on="inputListeners"
    v-bind="componentConfig"
    v-bind:value="value"
  >
    <!-- 判断是否有对应的children、并且是否有对应的options -->
    <template
      v-if="componentConfig.children && componentConfig.children.length > 0"
    >
      <component
        v-for="(op, index) in componentConfig.children"
        :key="index"
        v-bind="op"
        :is="componentType(op.type)"
      ></component>
      <!-- <component
        v-for="(op, index) in componentConfig.children.options"
        :label="op[componentConfig.children.label] || op.label"
        :value="op[componentConfig.children.value] || op.value "
        :is="componentType(componentConfig.children.type || 'option')"
        v-bind="op"
        :key="index"
      >
      <template v-if="componentConfig.children.type === 'radio'">
        {{op[componentConfig.children.value] || op.value}}
      </template>
      </component> -->
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
  computed: {
    formData() {
      console.log(this.$parent.$props);
    },
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            console.log(event, 456);
            // const val = vm.controlModel;
            // const type = event.target.value
            // vm.$emit("updateEvent", { val, type });
            vm.$emit('update:value', event)
          },
          blur: function (event) {
            console.log(event.target.value, 456);
            vm.$emit('update:value', event.target.value)

            // const val = vm.controlModel;
            // const type = event.target.value
            // vm.$emit("updateEvent", { val, type });
            // vm.$emit('input', event.target.value)
          },
        }
      );
    },
  },
  mounted() {
    console.log(this.$listeners, 123123);
  },
  methods: {
    // 处理输入事项
    // handleInput(val) {
    //   // 如果存在输入的input、则按照@input事件优先触发
    //   if (this.componentConfig.input) {
    //     this.controlModel = this.componentConfig.input(val);
    //     return;
    //   }
    //   // 如果存在valueType、则按照valueType传入类型触发工具库中的方法
    //   if (nbtools[this.componentConfig.valueType]) {
    //     this.controlModel = nbtools[this.componentConfig.valueType](val);
    //   }
    // },
    componentType(type) {
      return `nb-${type}`;
    },
    // //点击事件
    // click(event) {
    //   this.valifyHandler(event.type);
    // },
    // //失焦事件
    // blur(event) {
    //   this.valifyHandler(event.type);
    // },
    // //聚焦事件
    // focus(event) {
    //   this.valifyHandler(event.type);
    // },
    // //清除事件
    // clear(event) {
    //   this.valifyHandler("clear");
    // },
    //keyup事件
    // keyup(event) {
    //   let firstUpperCase = event.code
    //     .toLowerCase()
    //     .replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    //   this.valifyHandler(`${event.type}${firstUpperCase}`);
    // },
    // //处理事件
    // valifyHandler(type) {
    //   const val = this.controlModel;
    //   this.$emit("updateEvent", { val, type });
    // },
  },
};
</script>

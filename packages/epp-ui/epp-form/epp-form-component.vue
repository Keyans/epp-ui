<template>
  <component
  :is="componentType(componentConfig.type)"
  v-model="controlModel"
  :type="componentConfig.targetType"
  :range-separator="componentConfig.rangeSeparator"
  :start-placeholder="componentConfig.startPlaceholder"
  :end-placeholder="componentConfig.endPlaceholder"
  :picker-options="componentConfig.pickerOptions"
  :align="componentConfig.right"
  :minlength="componentConfig.minlength"
  :maxlength="componentConfig.maxlength"
  :clearable="componentConfig.clearable"
  :disabled="componentConfig.disabled"
  :max="componentConfig.max"
  :min="componentConfig.min"
  :step="componentConfig.step"
  :show-word-limit="componentConfig.showWordLimit"
  :placeholder="componentConfig.placeholder">
    <component
      v-for="(op, index) in componentConfig.children"
      :label="op.label"
      :value="op.value"
      :is="componentType(op.type)"
      :key="index"
    ></component>
  </component>
</template>

<script>
  export default {
    name: 'eppFormComponent',
    props: {
      componentConfig: {
        type: Object,
        required: true,
        default: () => {},
      },
      value: [Array, String, Number, Object, Boolean, Date]
    },
    data() {
      return {
        controlModel: this.value
      }
    },
    watch: {
      value(newValue) {
        this.controlModel = newValue
      },
      controlModel(newValue) {
        const key = this.$props.componentConfig.model
        this.$emit("update", { key: key, value: newValue });
      }
    },
    computed: {
      formData(){
        console.log(this.$parent.$props)
      }
    },
    methods: {
      componentType(type) {
        return `nb-${type}`
      }
    }
  }
</script>
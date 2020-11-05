<template>
  <component 
  :is="componentConfig.type" 
  v-model="controlModel" 
  :placeholder="componentConfig.placeholder">
    <component 
      v-for="(op, index) in componentConfig.children"
      :label="op.label"
      :value="op.value"
      :is="op.type"
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
    }
  }
</script>

<style lang="less" scoped>

</style>
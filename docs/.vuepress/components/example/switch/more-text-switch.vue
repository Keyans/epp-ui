<template>
  <div>
    <epp-switch :status.sync="switchStatus" @change="getstatus" activeText="测试打开超长的文字" inactiveText="关闭超长的文字啊啊啊啊"></epp-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchStatus: false
    }
  },
  methods: {
    getstatus() {
      console.log(this.switchStatus)
    }
  }
}
</script>

<style>

</style>
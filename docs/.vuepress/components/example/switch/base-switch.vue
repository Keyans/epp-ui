<template>
  <div>
    <epp-switch :status.sync="switchStatus" @change="getstatus"></epp-switch>
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
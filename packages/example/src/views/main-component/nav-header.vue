<template>
  <div class="flex-center-between">
      <div class="logo"></div>
      <div class="">床单被罩（店铺ID：5
        <nb-button type="text" @click="logoOut">退出</nb-button></div>
  </div>
</template>
<script>
export default {
  methods:{
    logoOut(){
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
<template>
  <nb-container>
    <nb-header v-if="isShow">
      <nav-header style="height:100%"></nav-header>
    </nb-header>
    <nb-container>
      <nb-aside v-if="isShow" width="250px">
        <nav-aside></nav-aside>
      </nb-aside>
      <nb-main class="main-container">
        <bread-crumb></bread-crumb>
        <router-view></router-view>
      </nb-main>
    </nb-container>
  </nb-container>
</template>
<script>
import NavHeader from "./main-component/nav-header"; //头部导航
import NavAside from "./main-component/nav-aside"; //左边栏
import BreadCrumb from "./main-component/bread-crumb"; //面包屑
export default {
  data() {
    return {
      isCollapse: false,
      isShow: true,
    };
  },
  components: {
    NavHeader,
    NavAside,
    BreadCrumb,
  },
};
</script>
<style lang="scss" scoped>
/deep/ .nb-main {
  padding: 0;
}
</style>

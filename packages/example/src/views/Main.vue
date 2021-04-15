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
    <epp-confirm
    subTitle="确认弹窗标题"
    desc="请确认是否OK？"
    :dialog-visible="showConfirm"
    :on-cancel="cancel"
    :on-success="success"
    width="50%">
    </epp-confirm>
    <epp-alert
    subTitle="提示弹窗标题"
    desc="123456"
    type="nb-icon-star-on"
    :dialog-visible="showAlert"
    width="50%">
    </epp-alert>
  </nb-container>
</template>
<script>
import NavHeader from "./main-component/nav-header"; //头部导航
import NavAside from "./main-component/nav-aside"; //左边栏
import BreadCrumb from "./main-component/bread-crumb"; //面包屑
import EppConfirm from "./main-component/epp-confirm"; //确认弹窗
import EppAlert from "./main-component/epp-alert"; //提示弹窗
export default {
  data() {
    return {
      isCollapse: false,
      isShow: false,
      showConfirm: true,
      showAlert: false,
    };
  },
  methods: {
    cancel: () => {alert('123');return false},
    success: () => {alert('abc');}
  },
  components: {
    NavHeader,
    NavAside,
    BreadCrumb,
    EppConfirm,
    EppAlert
  },
};
</script>
<style lang="scss" scoped>
/deep/ .nb-main {
  padding: 0;
}
</style>

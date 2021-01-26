<!--
 * @Author: your name
 * @Date: 2020-09-12 09:20:46
 * @LastEditTime: 2020-10-16 14:32:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /coco_tob_cms/Users/abbotwu/project/qun/src/views/main-component/aside-menu.vue
-->
<template>
  <nb-menu
    default-active="1-1"
    class="nb-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    collapse-transition
  >
    <nb-submenu index="1">
      <template slot="title">
        <i class="nb-icon-location"></i>
        <span slot="title">商品管理</span>
      </template>
      <nb-menu-item-group>
        <nb-menu-item index="1-1" @click="goPath(1)">群小店管理</nb-menu-item>
        <nb-menu-item index="1-2" @click="goPath(2)">群小店推广</nb-menu-item>
      </nb-menu-item-group>
    </nb-submenu>
  </nb-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    goPath(type){
      let name = type==1?'/groupShop':"/groupSpread"
      this.$router.push(name)
    }
  },
};
</script>

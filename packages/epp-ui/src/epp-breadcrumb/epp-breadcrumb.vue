<!--
 * @Author: your name
 * @Date: 2020-09-23 11:13:55
 * @LastEditTime: 2020-10-16 17:50:48
 * @LastEditors: Please set LastEditors
 * @Description: 本面包屑采用name跳转、所以必须配置对应的name
 * @FilePath: /qun/src/views/main-component/breadcrumb.vue
-->
<template>
  <div class="breadcrumb">
    <span v-show="!isHome" class="pointer-color" @click="handBack">
      <i class="nb-icon-arrow-left"></i>
      <span>返回</span>
      <span class="orClass">|</span>
    </span>
    <nb-breadcrumb separator-class="nb-icon-arrow-right">
      <nb-breadcrumb-item
        v-for="(item, k) in breadList"
        :key="k"
        :class="{ pageTitle: isHome, pageFont: !isHome }"
      >
        <router-link
          v-if="item.name"
          :to="{ name: item.name, query: item.query, params: item.params }"
        >
          {{
            item.params.routerTitle ? item.params.routerTitle : item.title
          }}</router-link
        >
        <a v-else>
          {{ item.params.routerTitle ? item.params.routerTitle : item.title }}
        </a>
      </nb-breadcrumb-item>
    </nb-breadcrumb>
  </div>
</template>

<script>

export default {
  name: "eppBreadcrumb",
  data() {
    return {
      isHome: false,
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      this.isHome = this.$route.meta.menu || false;
      this.breadList = JSON.parse(sessionStorage.getItem("breadList"));
    },
    handBack() {
      let list = JSON.parse(sessionStorage.getItem("breadList"));
      if(!list) return;
      list.pop(); //第一次删除面包屑的最后一个
      let obj = list.pop(); //第二次拿到最后的obj对象用来返回上一级
      this.$router.push({
        name: obj.name,
        query: obj.query,
        params: obj.params
      });
    }
  }
};
</script>
<style scoped>
.pageFont {
  font-size: 16px;
}
.pointer-color {
  color: #0052d9;
  cursor: pointer;
}
.breadcrumb {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
}
.orClass {
  margin-left: 10px;
  margin-right: 10px;
}
.pageTitle {
  font-size: 20px;
  font-weight: 700;
  font-family: PingFangSC-Medium;
  color: rgba(0, 0, 0, 0.88);
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-09-23 11:13:55
 * @LastEditTime: 2020-10-16 17:50:48
 * @LastEditors: Please set LastEditors
 * @Description: 本面包屑采用name跳转、所以必须配置对应的name
 * @FilePath: /qun/src/views/main-component/breadcrumb.vue
-->
<template>
  <div class="flex-center">
    <span class="pointer-color" @click="handBack" v-show="isHome">
      <i class="nb-icon-arrow-left"></i>
      <span>返回</span>
      <span class="micro-ml10 micro-mr10">|</span>
    </span>
    <nb-breadcrumb separator-class="nb-icon-arrow-right">
      <nb-breadcrumb-item
        v-for="(item,k) in breadList"
        :class="{'pageTitle':!isHome,'pageFont':isHome}"
        :key="k"
      >
      <router-link v-if="item.name" :to="{name:item.name,query:item.query,params:item.params}"> {{item.params.routerTitle?item.params.routerTitle:item.title}}</router-link>
      <a v-else>
        {{item.params.routerTitle?item.params.routerTitle:item.title}}
      </a>
      </nb-breadcrumb-item>
    </nb-breadcrumb>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isHome: true,
      breadList: [], // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
       this.breadList =  JSON.parse(sessionStorage.getItem("breadList"))
        if(this.breadList && this.breadList.length > 1){
            this.isHome = true;
        }else{
            this.isHome = false;
        }
    },
    handBack() {
      let list  = JSON.parse(sessionStorage.getItem("breadList"))
      list.pop() //第一次删除面包屑的最后一个
      let obj = list.pop(); //第二次拿到最后的obj对象用来返回上一级
      this.$router.push(
        {
          name:obj.name,
          query:obj.query,
          params:obj.params
        }
      )
    },
  },
  created() {
    this.getBreadcrumb();
  },
};
</script>
<style scoped>
 .pageFont{
   font-size:16px;
}
.pointer-color{
color:#0052D9;cursor:pointer;
}
</style>

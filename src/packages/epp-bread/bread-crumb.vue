
<template>
  <div class="flex-center micro-mr20 micro-mb20">
    <span class="pointer-color" @click="handBack" v-show="isHome">
      <i class="el-icon-arrow-left"></i>
      <span>返回</span>
      <span class="micro-ml10 micro-mr10">|</span>
    </span>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item,k) in breadList"
        :class="{'pageTitle':!isHome,'pageFont':isHome}"
        :key="k"
      >
      <router-link v-if="item.name" :to="{name:item.name,query:item.query,params:item.params}"> {{item.params.routerTitle?item.params.routerTitle:item.title}}</router-link>
      <a v-else>
        {{item.params.routerTitle?item.params.routerTitle:item.title}}
      </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  name:"eppBreadcrumb",
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
        if(this.breadList.length > 1){
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
.flex-center{
  display: flex;
  align-items: center;
}
.micro-mr20{
  margin-right:20px;
}
.micro-mb20{
  margin-bottom:20px;
}
.micro-ml10{
  margin-left:10px;
}
.micro-mr10{
  margin-right:10px;
}
.pageTitle{
  font-size: 20px;
  font-weight: 700;
  font-family:PingFangSC-Medium;
  color:rgba(0,0,0,0.88) !important
}
.pageFont{
   font-size:16px;
}
.pointer-color{
color:#0052D9;cursor:pointer;
}
</style>

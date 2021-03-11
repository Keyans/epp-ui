<template>
  <div>
    <!-- 上部分头部 -->
    <nb-header class="headerToolbar">
      <HeaderContainer></HeaderContainer>
    </nb-header>
    <!-- 下部分内容 -->
    <nb-container class="container">
      <!-- 左侧区域 -->
      <nb-aside class="leftAside">
        <LeftContainer></LeftContainer>
      </nb-aside>
      <!-- 中间区域 -->
      <nb-main class="centerMain">
        <MainContainer></MainContainer>
      </nb-main>
      <!-- 右侧区域 -->
      <nb-aside class="rightAside">
        <RightContainer></RightContainer>
      </nb-aside>
    </nb-container>
  </div>
</template>

<script>
import HeaderContainer from "./container/Header";
import LeftContainer from "./container/Left";
import MainContainer from "./container/Main";
import RightContainer from "./container/Right";

export default {
  components: {
    HeaderContainer,
    LeftContainer,
    MainContainer,
    RightContainer,
  },
};
</script>

<style scoped>
.headerToolbar {
  height: 64px;
  line-height: 64px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.container {
  position: relative;
  height: calc(100% - 64px);
}
.centerMain {
  margin-left: 200px;
  margin-right: 262px;
  height: 100%;
  overflow: auto;
  padding: 20px;
}
.leftAside {
  position: absolute;
  height: 100%;
  width: 200px;
  left: 0;
  top: 0;
  padding-top: 10px;
}
.rightAside {
  position: absolute;
  height: 100%;
  width: 262px;
  right: 0;
  top: 0;
}
</style>
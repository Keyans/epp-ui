<template>
  <div>
    <component :is="`componentName`">
      <div class="mb-20">
        <nb-button type="primary" size="small"> 创建预售</nb-button>
        <span class="font-color"
          ><epp-icon icon="epp-icon-Announcementmanagement"></epp-icon
          >可设置定金预售活动，提前锁定大量意向用户，精准营销</span
        >
      </div>
    </component>
  </div>
</template>

<script>
import config from "./config";
import inherit from "./transform";
// import { inherit }  from "@tencent/epp-ui" 正式环境使用这个
export default {
  extends: inherit(config),
};
</script>
<style scoped>
.mb-20{
  margin-bottom: 20px;
}
.font-color{
  color: #FD9116;
}
</style>
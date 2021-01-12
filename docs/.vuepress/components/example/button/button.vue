<template>
  <div>
    <div class="demo">
      <nb-button type="primary">主按钮</nb-button>
      <nb-button type="primary" plain>次按钮</nb-button>
      <nb-button>辅按钮</nb-button>
      <nb-button type="danger">危险按钮</nb-button>
    </div>

    <div class="demo">
      <nb-button :loading="true" type="primary">loading状态</nb-button>
      <nb-button :disabled="true" type="primary">禁用状态</nb-button>
    </div>

    <div class="demo">
      <nb-button class="" type="primary">宽版按钮</nb-button>
      <nb-button class="">宽版按钮</nb-button>
    </div>
  </div>
</template>

<style lang="scss">
.demo {
  padding: 0 0 20px;
}
</style>
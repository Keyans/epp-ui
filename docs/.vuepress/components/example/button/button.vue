<template>
  <div>
    <div class="demo">
      <h3>常规按钮</h3>
      <epp-button type="primary">主按钮</epp-button>
      <epp-button type="secondary">次按钮</epp-button>
      <epp-button>辅按钮</epp-button>
    </div>

    <div class="demo">
      <epp-button :disabled="true" type="primary">主按钮</epp-button>
      <epp-button :disabled="true" type="secondary">次按钮</epp-button>
      <epp-button :disabled="true">辅按钮</epp-button>
    </div>

    <div class="demo">
      <epp-button :loading="true" type="primary">主按钮</epp-button>
      <epp-button :loading="true" type="secondary">次按钮</epp-button>
      <epp-button :loading="true">辅按钮</epp-button>
    </div>

    <div class="demo">
      <h3>宽版大按钮</h3>
      <p>大页面表单使用宽版大按钮</p>

      <epp-button type="primary" size="big" wide>宽版大按钮</epp-button><br /><br />
      <epp-button type="secondary" size="big" wide>宽版大按钮</epp-button><br /><br />
      <epp-button size="big" wide>宽版按钮</epp-button>
    </div>

    <div class="demo">
      <h3>小版按钮</h3>
      <p>部分浮层、弹层提示场景使用小版按钮</p>

      <epp-button type="primary" size="mini">主按钮</epp-button>
      <epp-button type="secondary" size="mini">次按钮</epp-button>
      <epp-button size="mini">辅按钮</epp-button>
    </div>

    <div class="demo">
      <epp-button :disabled="true" type="primary" size="mini">主按钮</epp-button>
      <epp-button :disabled="true" type="secondary" size="mini">次按钮</epp-button>
      <epp-button :disabled="true" size="mini">辅按钮</epp-button>
    </div>

    <div class="demo">
      <epp-button :loading="true" type="primary" size="mini">主按钮</epp-button>
      <epp-button :loading="true" type="secondary" size="mini">次按钮</epp-button>
      <epp-button :loading="true" size="mini">辅按钮</epp-button>
    </div>

    <div class="demo">
      <h3>图标按钮</h3>

      <epp-button type="primary" icon="nb-icon-edit"></epp-button>
      <epp-button type="primary" icon="nb-icon-share"></epp-button>
      <epp-button type="primary" icon="nb-icon-delete"></epp-button>
      <epp-button type="primary" icon="nb-icon-search">搜索</epp-button>
      <epp-button type="primary">上传<i class="nb-icon-upload nb-icon--right"></i></epp-button>
    </div>
  </div>
</template>

<style lang="scss">
.demo {
  padding: 0 0 20px;
}
</style>
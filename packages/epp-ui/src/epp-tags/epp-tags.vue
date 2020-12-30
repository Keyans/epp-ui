<template>
  <div class="epp-tags-warper">
    <div class="epp-tags-status" :class="[`epp-tags-status__${type}`]">
      <span class="epp-tags-poin" :class="[`epp-tags-poin__${type}`]"></span>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "eppTags",
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary" // primary、success、danger、warning
    }
  }
};
</script>


<style lang="scss">
.epp-tags-warper {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  line-height: 28px;
  display: inline-block;
  .epp-tags-status {
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 14px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    &.epp-tags-status__primary {
      background: #e0eafb;
      color: #0050e1;
    }
    &.epp-tags-status__success {
      background: #e1f2e0;
      color: #2ea121;
    }
    &.epp-tags-status__danger {
      background: #feedee;
      color: #f5222d;
    }
    &.epp-tags-status__warning {
      background: rgba(250, 144, 24, 0.12);
      color: #fe8800;
    }
    .epp-tags-poin {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      margin-right: 4px;
      &.epp-tags-poin__primary {
        background: #0050e1;
      }
      &.epp-tags-poin__success {
        background: #2ea121;
      }
      &.epp-tags-poin__danger {
        background: #f5222d;
      }
      &.epp-tags-poin__warning {
        background: #fe8800;
      }
    }
  }
}
</style>
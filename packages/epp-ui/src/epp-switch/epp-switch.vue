<template>
  <div class="epp-switch-warper">
    <nb-switch
      :value="status"
      class="epp-switch-container__noscoped"
      :width="68"
      :active-text="activeText"
      :inactive-text="inactiveText"
      @change="switchChange"
    ></nb-switch>
  </div>
</template>

<script>
export default {
  name: "eppSwitch",
  props: {
    activeText: {
      type: String,
      default: "开启"
    },
    inactiveText: {
      type: String,
      default: "关闭"
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchChange(val) {
      this.$emit("update:status", val);
      this.$emit("change", val);
    }
  }
};
</script>

<style lang="scss">
.epp-switch-warper {
  display: inline-block;
}
.epp-switch-container__noscoped {
  position: relative;
  left: -30px;

  &.is-checked {
    .nb-switch__core {
      &::after {
        left: 94% !important;
      }
    }
  }
  .nb-switch__label {
    user-select: none;
  }
  .nb-switch__core {
    height: 28px !important;
    border-radius: 15px;
    &::after {
      width: 20px;
      height: 20px;
      top: 3px;
    }
  }
  .nb-switch__labnb--left {
    position: relative;
    left: 57px;
    color: #fff;
    z-index: -1111;
  }
  .nb-switch__labnb--right {
    position: relative;
    right: 57px;
    color: #fff;
    z-index: -1111;
  }
  .nb-switch__labnb--right.is-active {
    z-index: 1111;
    color: #fff !important;
  }
  .nb-switch__labnb--left.is-active {
    z-index: 1111;
    color: #9c9c9c !important;
  }
}
</style>
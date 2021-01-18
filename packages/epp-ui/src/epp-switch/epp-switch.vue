<template>
  <div class="epp-switch">
    <nb-switch
      :value="status"
      class="epp-switch-container__noscoped"
      :active-text="activeText"
      :inactive-text="inactiveText"
      @change="switchChange"
      ref="eppSwitchLabel"
      :class="{ 'epp-container__noscoped-unchecked': !status }"
    ></nb-switch>
  </div>
</template>

<script>
export default {
  name: "eppSwitch",
  props: {
    activeText: {
      type: String,
      default: "开启",
    },
    inactiveText: {
      type: String,
      default: "关闭",
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.changeLabelText(this.status);
    });
  },
  methods: {
    changeLabelText(status) {
      // 设置当前的label值
      this.activeLabel = status ? this.activeText : this.inactiveText;
      const el = this.$refs.eppSwitchLabel.$el;
      const children = el.children || [];
      if (children && children.length) {
        for (let i = 0; i < children.length; i++) {
          if (children[i].className === "nb-switch__core") {
            children[i].innerText = this.activeLabel;
          }
        }
      }
    },
    // 变更事件
    switchChange(val) {
      this.changeLabelText(val);
      this.$emit("update:status", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="scss">
.epp-switch {
  display: inline-block;
  height: 28px;
}
.epp-switch-container__noscoped {
  &.is-checked {
    .nb-switch__core {
      padding: 0 25px 0 10px;
      &::after {
        left: calc(100% - 4px) !important;
      }
    }
  }
  .nb-switch__label {
    user-select: none;
    display: none;
  }
  .nb-switch__core {
    height: 28px;
    border-radius: 15px;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 10px 0 25px;
    display: flex;
    align-items: center;
    width: unset !important;
    color: #fff;
    user-select: none;
    &::after {
      width: 20px;
      height: 20px;
      top: 3px;
    }
  }
}
.epp-container__noscoped-unchecked {
  .nb-switch__core {
    color: #9c9c9c;
    justify-content: flex-end;
  }
}
</style>
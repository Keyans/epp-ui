<template>
  <nb-dialog
    :title="title"
    class="epp-dialog epp-confirm"
    :visible.sync="isShow"
    width="30%">
    <div class="tips">
      <i class="nb-icon-warning-outline tip-icon"></i>
      <span class="tip-context">
        <span class="tip-title">{{subTitle}}</span>
        <span class="tip-desc" v-if="!!desc">{{desc}}</span>
      </span>
    </div>
    <span slot="footer" class="dialog-footer">
      <nb-button @click="clickCancel">取 消</nb-button>
      <nb-button type="primary" @click="clickOK">确 定</nb-button>
    </span>
  </nb-dialog>
</template>

<script>
export default { 
  name: "EppConfirm",
  data() {
    return {
      isShow: this.dialogVisible
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: "请确认"
    },
    desc: {
      type: String,
      default: ""
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "30%"
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    onSuccess: {
      type: Function,
      default: () => {},
    }
  },
  methods: {
    clickOK() {
      if (this.onSuccess) {
        this.isShow = this.onSuccess() === false;
      } else {
        this.isShow = false;
      }
    },
    clickCancel() {
      if (this.onCancel) {
        this.isShow = this.onCancel() === false;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>


<style lang="scss">
.epp-dialog.epp-confirm {
  .tip-icon {
    color: #0052D9;
    font-size: 28px;
    vertical-align: top;
  }

  .tip-context {
    padding: 0 13px;
    display: inline-block;
    max-width: 80%;
  }

  .tip-title {
    padding: 4px 0 8px;
    color: #000;
    font-size: 16px;
    display: block;
  }

  .nb-button {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .nb-dialog__header {
    border-bottom: 0 none;
  }

  .nb-dialog__footer {
    border-top: 0 none;
  }
}
</style>
<template>
  <nb-dialog
    :title="title"
    class="epp-dialog epp-alert"
    :visible.sync="isShow"
    :width="width">
    <div class="tips">
      <i
        :class="icon"
      ></i>
      <span class="tip-context">
        <span class="tip-title">{{subTitle}}</span>
        <span class="tip-desc" v-if="!!desc">{{desc}}</span>
      </span>
    </div>
  </nb-dialog>
</template>

<script>
export default {
  name: 'EppAlert',
  data() {
    return {
      isShow: this.dialogVisible,
      icon: this.handleTypeValue(this.type),
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '确认吗？',
    },
    desc: {
      type: String,
      default: '',
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '30%',
    },
    /**
     * @enum type
     * normal
     * warning
     * error
     * success
     */
    type: {
      type: String,
      default: 'normal',
    },
  },
  methods: {
    handleTypeValue(type = 'normal') {
      const valueIconMap = {
        normal: 'nb-icon-warning-outline tip-icon',
        warning: 'nb-icon-warning tip-icon',
        error: 'nb-icon-error tip-icon',
        success: 'nb-icon-success tip-icon',
      };

      let iconClassString = valueIconMap[this.type];

      if (!iconClassString) {
        iconClassString = `${this.type} tip-icon`;
      }

      return iconClassString;
    },
  },
};
</script>


<style lang="scss">
.epp-dialog.epp-alert {
  .tip-icon {
    color: #0052D9;
    font-size: 28px;
    vertical-align: top;
  }

  .tip-context {
    padding: 0 13px 60px;
    display: inline-block;
    max-width: 80%;
  }

  .tip-title {
    padding: 4px 0 8px;
    color: #000;
    font-size: 16px;
    display: block;
  }

  .nb-dialog__header {
    border-bottom: 0 none;
  }

  .nb-dialog__footer {
    border-top: 0 none;
  }
}
</style>

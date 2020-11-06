<template>
  <div
    :class="['epp-steps', alignCenter ? 'epp-steps--center' : '']"
    :style="'width:' + widthUnit"
  >
    <nb-steps
      finish-status="success"
      :active="active"
      :align-center="alignCenter"
      :space="space"
    >
      <nb-step
        v-for="(item, index) in stepsList"
        :key="index"
        :title="item.title"
        :description="item.description"
      ></nb-step>
    </nb-steps>
  </div>
</template>

<script>
export default {
  name:"eppSteps",
  props: {
    stepsList: {
      type: Array,
      default: () => []
      /*
      示例：
      [
        { title: "填写小店基础信息" },
        { title: "指定小店店长" },
        { title: "启用群小店" }
      ]
       */
    },
    width: {
      type: String,
      default: "auto"
    },
    active: {
      type: Number,
      default: 0
    },
    space: {
      type: Number,
      default: 140
    },
    alignCenter: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    widthUnit: function() {
      let val = "auto";

      try {
        let strWidth = String(this.width);

        if (strWidth.indexOf("%") !== -1) {
          val = strWidth;
        } else {
          val = `${strWidth}px`;
        }
      } catch (error) {}

      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
.epp-steps {
  $successColor: #0052d9;
  $finishColor: #0052d9;
  $processColor: #0052d9;
  $waitColor: #8f959e;

  &.epp-steps--center {
    margin: 0 auto;

    .nb-steps {
      justify-content: center;
    }
  }
  & /deep/ {
    .nb-step__icon {
      width: 28px;
      height: 28px;
    }
    .nb-step__icon.is-text {
      border-width: 1px;
    }
    .nb-step__icon-inner {
      font-weight: 400;
    }
    .nb-step__title {
      font-size: 14px;
    }
    .nb-step__line {
      background-color: #dee0e3;
    }
    .nb-step__line-inner {
      border-bottom-width: 0 !important;
    }
    .nb-step.is-horizontal .nb-step__line {
      height: 1px;
      top: 12px;
      left: 28px;
      margin: 0 13px !important;
    }
    .nb-step.is-center .nb-step__line {
      left: 50%;
      right: -50%;
      margin: 0 26px !important;
    }

    // 成功打勾状态
    .nb-step__head.is-success {
      color: $successColor;
      border-color: $successColor;

      .nb-step__line {
        background-color: $successColor;
      }
      .nb-step__icon {
        background: #eff3fd;
      }
      .nb-step__icon-inner {
        font-weight: 700;
        font-size: 16px;
      }
    }
    .nb-step__title.is-success,
    .nb-step__description.is-success {
      color: #1f2329;
    }
    // 完成状态
    .nb-step__title.is-finish,
    .nb-step__description.is-finish {
      color: #1f2329;
    }
    .nb-step__head.is-finish {
      color: $finishColor;
      border-color: $finishColor;

      .nb-step__icon {
        background: #eff3fd;
      }
      .nb-step__line {
        background-color: $finishColor;
      }
    }
    //当前状态
    .nb-step__head.is-process,
    .nb-step__description.is-process {
      color: $processColor;
      border-color: $processColor;

      .nb-step__icon-inner {
        color: #ffffff;
      }
      .nb-step__icon {
        background: $processColor;
      }
    }
    .nb-step__title.is-process {
      color: $processColor;
    }
    //未开始状态
    .nb-step__head.is-wait,
    .nb-step__description.is-wait {
      color: $waitColor;
      border-color: $waitColor;
    }
    .nb-step__title.is-wait {
      color: $waitColor;
    }
  }
}
</style>

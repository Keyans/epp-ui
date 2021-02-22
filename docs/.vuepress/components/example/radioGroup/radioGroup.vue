<template>
  <div>
    <nb-radio-group
      v-model="selectRadio"
      size="small"
    >
      <nb-radio-button
        v-for="(item, index) in selectRadioList"
        :key="index"
        :label="item.name"
      >
        {{ item.label }}
      </nb-radio-button>
    </nb-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectRadio: "auditing",
      selectRadioList: [
        {
          label: "审核中",
          value: 2,
          name: "auditing",
        },
        {
          label: "审核拒绝",
          value: 4,
          name: "reject",
        },
        {
          label: "已撤销",
          value: 5,
          name: "cancle",
        },
        {
          label: "审核通过",
          value: 3,
          name: "success",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../../packages/epp-ui/src/epp-radio-group/radio-group-reset.scss";
</style>
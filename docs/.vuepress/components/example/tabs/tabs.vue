<template>
  <nb-tabs :value="active" @tab-click="handleClick">
    <nb-tab-pane
      v-for="item in tabList"
      :key="item.name"
      :label="item.label"
      :name="item.name"
      :disabled="item.disabled"
    >
      <span slot="label">{{ item.label }}</span></nb-tab-pane
    >
  </nb-tabs>
</template>

<script>
export default {
  name: "epp-tabs",
  data() {
    return {
      active: "标签一",
      tabList: [
        {
          label: "标签一label",
          name: "标签一",
        },
        {
          label: "标签二label",
          name: "标签二",
        },
        {
          label: "标签三label",
          name: "标签三",
        },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      this.$emit("tabChoose", tab.name);
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../packages/epp-ui/src/epp-tabs/tab-reset.scss";
</style>
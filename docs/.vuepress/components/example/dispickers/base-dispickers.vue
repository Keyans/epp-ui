<template>
  <div>
          <!-- v-if="districts" -->
    <epp-dispickers
      :districts="districts"
      :province="province"
      :city="city"
      :area="area"
      :hideArea="hideArea"
      :onlyProvince="onlyProvince"
      :type="type"
      :disabled="disabled"
      :provinceDisabled="provinceDisabled"
      :cityDisabled="cityDisabled"
      :areaDisabled="areaDisabled"
      @selected="onSelected"
    ></epp-dispickers>
  </div>
</template>
<script>
export default {
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" },
    hideArea: { type: Boolean, default: false }, //是否隐藏区
    onlyProvince: { type: Boolean, default: false },// 只展示省
    type: { type: String, default: "" }, // 是否切换移动手机模式 输入“mobile”即可兼容移动手机 默认为web端
    disabled: { type: Boolean, default: false }, //省市区都不可输入
    provinceDisabled: { type: Boolean, default: false },// 省不可输入
    cityDisabled: { type: Boolean, default: false },// 区不可输入
    areaDisabled: { type: Boolean, default: false },// 区不可输入
  },
  data() {
    return {
      districts: null,
    };
  },
  methods: {
    onSelected(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="scss" scoped>
.error-hint {
  margin-top: 14px;
  color: red;
  cursor: pointer;
}
</style>

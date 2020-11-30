<template>
  <div>
    <!-- v-if="districts" -->
    <epp-dispickers
      v-model="aread"
      :districts="districts"
      :province="province"
      :city="city"
      :area="area"
      @selected="onSelected"
    ></epp-dispickers>
    <div v-if="errorHint" class="error-hint" @click="refreshData">
      暂无数据,请点击重试
    </div>
  </div>
</template>
<script>
// 引入相应后台接口,具体情况可支持更改
// import districtsAPI from "@api/modules/districts";
// import { forOwn, get } from "lodash";
export default {
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" }
  },
  data() {
    return {
      aread: "",
      districts: null,
      errorHint: false
    };
  },
  created() {
    // this.getsubaddresslist();
  },
  methods: {
    onSelected(data) {
      this.$emit("selected", data);
    },
    refreshData() {
      this.getsubaddresslist();
    },
    getsubaddresslist() {
      let json = {};
      districtsAPI.getsubaddresslist(json, this).then(
        res => {
          let templateList = {};
          forOwn(res.data, (value, key) => {
            templateList[key] = value.areas;
          });
          this.districts = templateList;
          // this.errorHint = true;
        },
        err => {
          this.districts = {};
          this.errorHint = true;
        }
      );
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

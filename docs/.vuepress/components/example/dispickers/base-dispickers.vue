<template>
  <div>
          <!-- v-if="districts" -->
    <epp-dispickers
      :districts="districts"
      :province="province"
      :city="city"
      :area="area"
      @selected="onSelected"
    ></epp-dispickers>
  </div>
</template>
<script>
export default {
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" }
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

<template>
  <div>
    <!-- <use-distpickers
      :province="province"
      :city="city"
      :area="area"
      @selected="onSelected"
    ></use-distpickers> -->
  </div>
</template>
<script>
// import useDistpickers from "./container/epp_distpicker";
export default {
  // components: { useDistpickers },
  data() {
    return {
      province: "",
      city: "",
      area: ""
    };
  },
  methods: {
    onSelected(data) {
      console.log("-------------", data);
    }
  }
};
</script>

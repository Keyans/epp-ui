<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <epp-icon :icon="item" :size="60"></epp-icon>
        <div>{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "epp-icon-complete",
        "epp-icon-Announcementmanagement",
        "epp-icon-Accountcenter",
        "epp-icon-Aftersales",
        "epp-icon-Commoditymanagement",
        "epp-icon-Batchpayment",
        "epp-icon-homepage",
        "epp-icon-Businessmanagement",
        "epp-icon-Errorfailure",
        "epp-icon-Contactcustomerservice",
        "epp-icon-Hidedescription",
        "epp-icon-MarketingCenter",
        "epp-icon-Ordermanagementadjudication",
        "epp-icon-RuleCenter",
        "epp-icon-NotificationCenter",
        "epp-icon-Platformcustomerservice",
        "epp-icon-LogisticsCentre",
        "epp-icon-Selectionmanagement",
        "epp-icon-PenaltyCenter",
        "epp-icon-Storemanagement",
        "epp-icon-shopmanagement",
        "epp-icon-delivery",
        "epp-icon-Import",
        "epp-icon-241"
      ],
    };
  },
};
</script>

<style scoped>
ul{
  position: relative;
  display:flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  text-align: center;
  width: 250px;
  border:1px solid #dedede;
  margin-bottom:20px;
  margin-right: 20px;
  padding:20px;
}
</style>

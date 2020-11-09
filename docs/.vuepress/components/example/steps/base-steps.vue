<template>
    <epp-steps
    :active="active"
    :steps-list="stepsList"
  ></epp-steps>
</template>

<script>
export default {
  data(){
    return{
      active: 1, //补助
      stepsList: [{ title: "步骤一" }, { title: "步骤二" },{ title: "步骤三" }, { title: "步骤四" }],
    }
  }
}
</script>
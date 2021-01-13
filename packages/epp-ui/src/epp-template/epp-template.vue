<template>
  <div>
    <epp-form></epp-form>
    <slot></slot>
    <epp-table></epp-table>
  </div>
</template>

<script>
import eppForm from "../epp-form/epp-form.vue";
export default {
  components: { eppForm },
};
</script>

<style></style>

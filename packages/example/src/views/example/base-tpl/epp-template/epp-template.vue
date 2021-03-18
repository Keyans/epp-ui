<template>
  <div>
    <epp-form
      v-bind="config"
      :ref="config.ref"
      :formConfig="config.formConfig"
      @getFormData="getFormData"
    ></epp-form>
    <slot></slot>
    <epp-table
      v-loading="config.loading"
      :column="config.tableData.column"
      :data="config.tableData.data"
      @size-change="handleSizeChange"
      @p-current-change="handleCurrentChange"
      v-bind="config"
    ></epp-table>
  </div>
</template>

<script>
import commonMix from "./mixin"
export default {
  mixins:[commonMix]
};
</script>

<template>
  <div>
    <epp-form
      v-bind="config"
      @getFormData="getFormData"
      :ref="config.formConfig.ref"
    ></epp-form>
    <slot></slot>
    <epp-table
      v-loading="config.tableConfig.loading"
      @size-change="handleSizeChange"
      @p-current-change="handleCurrentChange"
      v-bind="config.tableConfig"
    ></epp-table>
    <nb-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <nb-button @click="dialogVisible = false">取 消</nb-button>
        <nb-button type="primary" @click="dialogVisible = false">确 定</nb-button>
      </span>
    </nb-dialog>
  </div>
</template>

<script>
import commonMix from './mixin';
export default {
  name: 'eppListTpl',
  mixins: [commonMix],
};
</script>

<template>
  <div>
    <epp-form
      v-bind="config"
      @getFormData="getFormData"
    ></epp-form>
    <slot></slot>
    <epp-table
      v-loading="config.loading"
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
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </nb-dialog>
  </div>
</template>

<script>
import commonMix from "./mixin";
export default {
  name: "eppListTpl",
  mixins: [commonMix],
};
</script>
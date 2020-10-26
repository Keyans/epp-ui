<template>
  <div>
    <epp-table
      ref="lbTable"
      highlight-current-row
      :column="tableData.column"
      :data="tableData.data"
      @current-change="handleCurrentChange"
    >
    </epp-table>
    <div style="margin-top: 20px">
      <nb-button @click="setCurrent(tableData.data[1])">选中第二行</nb-button>
      <nb-button @click="setCurrent()">取消选择</nb-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        column: [
          {
            type: "index",
            align: "center",
          },
          {
            prop: "date",
            label: "日期",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "address",
            label: "地址",
          },
        ],
        data: [
          {
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
      },
      currentRow: null,
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.lbTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>

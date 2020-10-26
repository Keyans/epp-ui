<template>
    <div id="App">
        <epp-table
          ref="multipleTable"
          pagination
          :total="10"
          :column="tableData.column"
          :data="tableData.data"
          @selection-change="handleSelectionChange"
          @size-change="handleSizeChange"
          @p-current-change="handleCurrentChange"
        >
        </epp-table>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tableData: {
        column: [
          {
            type:"selection"
          },
          {
            prop: "date",
            label: "日期"
          },
          {
            prop: "name",
            label: "姓名"
          },
          {
            prop: "address",
            label: "地址12312"
          }
        ],
        data: [
          {
            date: "2016-05-02",
            name: "王小虎1123123",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ]
      },
    }
  },
  methods: {
    handleSelectionChange(selection){
      console.log(selection)
    },
    handleSizeChange(val){
      console.log(val)
      // this.currentPage = 1;
      // this.pageSize = val;
      // this.createData();
    }
  }
}
</script>

<style>
.app-main{
    width: 100%;
    height: 100%;
}
</style>

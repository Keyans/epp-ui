<template>
    <div id="App">
        <epp-form :formConfig="formConfig"></epp-form>
        <epp-table
          ref="multipleTable"
          :column="tableData.column"
          :data="tableData.data"
        >
        </epp-table>
    </div>
</template>

<script>
import eppForm from "./packages/epp-form/epp-form"
export default {
  components:{eppForm},
  data(){
    return{
      formConfig:{
        formData:{
            number:"",
            id:""
        },
        formItem:[
          {
            label:"违规单号",
            model:"number",
            type:"nb-input"
          },
          {
            label:"店铺id",
            model:"id",
            type:"nb-slider"
          }
        ]
      },
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
  }
}
</script>

<style>
.app-main{
    width: 100%;
    height: 100%;
}
</style>

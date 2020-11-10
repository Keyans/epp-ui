<template>
  <div id="App">
    <epp-form ref="eppForm" :formConfig="formConfig"></epp-form>
    <epp-table :column="tableData.column" :data="tableData.data"> </epp-table>
    <nb-button @click="testClick">测试点击</nb-button>
  </div>
</template>

<script>
import eppForm from "../epp-ui/epp-form/epp-form.vue"
import eppTable from "../epp-ui/epp-table/epp-table.vue"
export default {
  components:{eppForm,eppTable},
  data() {
    return {
      tableData: {
        column: [
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
      formConfig: {
        rules: {
          number: [{ required: true, message: "请输入", trigger: "blur" }],
        },
        formData: {
          number: "",
          id: "",
          date: "",
          switchValue: false,
        },
        btn: [
          {
            type: "primary",
            name: "提交",
            click: () => {
              console.log(this.$refs.eppForm.getFormData());
            },
          },
          {
            type: "",
            name: "重置",
            click: () => {
              this.$refs.eppForm.validate();
            },
          },
        ],
        formItem: [
          {
            label: "switch",
            model: "switchValue",
            type: "switch",
          },
          {
            label: "违规单号",
            model: "number",
            type: "input",
          },
          {
            label: "店铺id",
            model: "id",
            type: "select",
            children: [
              {
                type: "option",
                label: "区域一",
                value: "shanghai",
              },
              {
                type: "option",
                label: "区域二",
                value: "beijing",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    getEppFormData() {
      console.log(this.$refs.eppForm.getFormData());
    },
    testClick(){
      console.log(this.$refs.eppForm.validate())
    }
  },
};
</script>

<style>
.app-main {
  width: 100%;
  height: 100%;
}
</style>

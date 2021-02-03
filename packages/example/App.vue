<template>
  <div id="App">
    <epp-template></epp-template>
    <epp-steps :active="active" :steps-list="stepsList"></epp-steps>
  </div>
</template>

<script>
import EppTemplate from "../epp-ui/src/epp-template/epp-template.vue";
import EppSteps from "../epp-ui/src/epp-steps/epp-steps.vue";

export default {
  components: { EppTemplate, EppSteps },
  provide() {
    return {
      provideSortable: this.edit,
    };
  },
  data() {
    return {
      active: 1, //补助
      stepsList: [
        { title: "步骤一" },
        { title: "步骤二" },
        { title: "步骤三" },
        { title: "步骤四" },
      ],
      direction: "vertical",
      loading: false,
      pageSize: 5,
      currentPage: 1,
      edit: true,
      tableData2: {
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
            cc: 1,
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 2,
            date: "2016-05-02",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 3,
            date: "2016-05-02",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 4,
            date: "2016-05-02",
            name: "王小虎4",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 5,
            date: "2016-05-02",
            name: "王小虎5",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 6,
            date: "2016-05-02",
            name: "王小虎6",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
      },
      tableData: {
        column: [
          {
            type: "selection",
            reserveSelection: true,
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
        data: [],
      },
      newData: [
        {
          id: 1,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: `王小虎-2`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: `王小虎-3`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 4,
          date: "2016-05-02",
          name: `王小虎-4`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 5,
          date: "2016-05-02",
          name: `王小虎-5`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 6,
          date: "2016-05-03",
          name: `王小虎-6`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 7,
          date: "2016-05-04",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 8,
          date: "2016-05-05",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 9,
          date: "2016-05-06",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 10,
          date: "2016-05-07",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 11,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 12,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 13,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 14,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
        {
          id: 15,
          date: "2016-05-02",
          name: `王小虎-1`,
          address: "上海市普陀区金沙江路1",
        },
      ],
      formConfig: {
        formData: {
          number: "",
          id: "",
          date: "",
        },
        formItem: [
          {
            label: "违规单号",
            model: "number",
            componentType: "input",
          },
          {
            label: "店铺id",
            model: "id",
            componentType: "select",
            children: {
              options: [
                {
                  label: "区域一",
                  value: "shanghai",
                },
                {
                  label: "区域二",
                  value: "beijing",
                },
              ],
            },
          },
        ],
      },
    };
  },
  created() {
    this.createData();
  },
  methods: {
    handleEdit(bol) {
      this.edit = bol;
    },
    clickButton() {
      console.log(this.$refs.test.data);
    },
    createData(length) {
      this.loading = true;
      if (this.currentPage === 1) {
        setTimeout(() => {
          this.tableData.data = this.newData.slice(0, 5);
          this.loading = false;
        }, 1000);
      } else if (this.currentPage === 2) {
        setTimeout(() => {
          this.tableData.data = this.newData.slice(5, 10);
          this.loading = false;
        }, 1000);
      } else {
        setTimeout(() => {
          this.tableData.data = this.newData.slice(10);
          this.loading = false;
        }, 1000);
      }
    },
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
      this.createData(this.pageSize);
    },
    handleCurrentChange() {
      this.createData(this.pageSize);
    },
    getEppFormData() {
      console.log(this.$refs.eppForm.getFormData());
    },
  },
};
</script>

<style>
.app-main {
  width: 100%;
  height: 100%;
}
</style>

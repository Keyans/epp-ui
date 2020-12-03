<template>
  <div id="App">
    <epp-form ref="eppForm" :formConfig="formConfig"></epp-form>
    <epp-table
      :key="1"
      v-loading="loading"
      ref="multipleTable"
      :column="tableData.column"
      :data="tableData.data"
      :current-page.sync="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :total="100"
      :page-size="pageSize"
      pagination
      :sortable="true"
      row-key="id"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @p-current-change="handleCurrentChange"
    >
    </epp-table>
    <epp-table
      :key="2"
      :column="tableData2.column"
      :data="tableData2.data"
      :sortable="true"
      row-key="cc"
    >
    </epp-table>
  </div>
</template>

<script>
import eppForm from "../epp-ui/src/epp-form/epp-form.vue";
import eppTable from "../epp-ui/src/epp-table/epp-table.vue";
export default {
  components: { eppForm, eppTable },
  data() {
    return {
      loading: false,
      pageSize: 5,
      currentPage: 1,
      tableData2: {
        column: [
          {
            type: "index",
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
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 5,
            date: "2016-05-02",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            cc: 6,
            date: "2016-05-02",
            name: "王小虎3",
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
  created() {
    this.createData();
  },
  methods: {
    createData(length) {
      this.loading = true;
      console.log(this.currentPage);
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

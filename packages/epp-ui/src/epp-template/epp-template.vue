<template>
  <div>
    <epp-form
      v-bind="config"
      :ref="config.ref"
      :formConfig="config.formConfig"
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
import EppForm from "../epp-form/epp-form.vue";
import EppTable from "../epp-table/epp-table.vue";
export default {
  name: "eppTemplate",
  components: { EppForm, EppTable },
  props: {
    templateConfig: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      //默认的Template配置
      defaultTemplate: {
        //表格
        ref: "eppForm",
        formConfig: {
          formData: {
            number: "",
            id: "",
            date: "",
            switchValue: "",
          },
          formItem: [
            {
              label: "测试",
              model: "switchValue",
              componentType: "input",
            },
            {
              label: "违规单号",
              model: "number",
              componentType: "input",
            },
            {
              label: "时间",
              model: "date",
              componentType: "date-picker",
              type: "datetimerange",
              rangeSeparator: "至",
              startPlaceholder: "开始日期",
              endPlaceholder: "结束日期",
              placeholder: "选择时间",
            },
            {
              label: "店铺id",
              model: "id",
              componentType: "select",
              children: {
                label: "label",
                value: "value",
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
        //表单
        currentPage: 1,
        pageSize: 5,
        pagination: true,
        loading: false,
        layout: "total, sizes, prev, pager, next, jumper",
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
      },
    };
  },
  computed: {
    // 为props增加默认配置
    config() {
      return Object.assign(this.defaultTemplate, this.templateConfig);
    },
  },
  methods: {
    handleSizeChange(val) {
      if (this.config.handleSizeChange) {
        this.config.handleSizeChange(val);
      } else {
        this.config.currentPage = 1;
        this.config.pageSize = val;
        this.createData();
      }
    },
    handleCurrentChange(){
      
    },
    createData() {
      if (this.config.createData) {
        this.config.createData();
      } else {
        this.config.loading = true;
        let data = [];
        for (let i = 0; i < length; i++) {
          data.push({
            date: "2016-05-02",
            name: `王小虎-${this.config.currentPage}-${i + 1}`,
            address: `上海市普陀区金沙江路 -${this.config.currentPage}-${i + 1} 弄`,
          });
        }
        setTimeout(() => {
          this.config.tableData.data = data;
          this.config.loading = false;
        }, 1000);
      }
    },
  },
};
</script>

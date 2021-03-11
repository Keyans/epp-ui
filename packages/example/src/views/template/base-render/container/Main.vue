<template>
  <div>
    <component
      :is="currentTabComponent"
      :templateConfig="templateConfig"
    ></component>
  </div>
</template>

<script>
import { templateConfig } from "../index";
import testTemplate from "../epp-template/epp-template";
import axios from "axios";
export default {
  components: { testTemplate },
  data() {
    return {
      // templateConfig,
      currentTabComponent: "epp-table",
      templateConfig,
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
    formConfig() {
      return this.$store.state.setPage.formConfig;
    },
    // templateConfig() {
    //   return this.$store.state.setPage.templateConfig;
    // },
  },
  created() {
    this.currentTabComponent = "test-template";
    this.request();
  },
  methods: {
    request() {
      let _this = this;
      axios
        .get("#/template/base_render")
        .then(function (response) {
          setTimeout(() => {
            _this.templateConfig = _this.defaultTemplate;
          }, 3000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>


import ApiConfigTrigger from './api_config_trigger';

export default {
  templateName: 'eppListTpl',
  data() {
    return {
      //默认的Template配置
      defaultTemplate: {        
        queryFormApi: {
        apiPath: 'platformrule/queryrule',
        reqData: {
          ModuleID: 2,
          Offset: 0,
          Limit: 10,
          PlatformRuleCategoryID: 0,
          Keyword: '',
        },
        vueDataPath: 'defaultTemplate.tableConfig',
        apiDataPath: 'Data',
        // api响应配置
        responseConfig: {
          fieldMapping: [
            {
              oldFieldName: 'Rules',
              newFieldName: 'data',
            },
          ],
          // 响应数据字段全局处理（data 参数是映射好的数据），需要返回一个对象
          transformResponse: (newData, vueData, resData) => {
            console.log('newData: ', newData);
            console.log('vueData: ', vueData);
            console.log('resData: ', resData);
            vueData.testTitle = '配置化完成';
            // test
            const newTestField = 'testField';
            return {
              ...newData,
              newTestField,
            };
          },
        },
        onResSuccess: (resData, vueData) => {},
        onResError: (errInfo, vueData) => {},
        onResFinally: (vueData) => {},
        },
        //表格
        formConfig: {
          ref: "eppForm",
          col:4,
          size:"small",
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
              styleObject: {
                //设置自定义的样式
                width: "230px",
              },
            },
            {
              label: "时间",
              model: "date",
              componentType: "date-picker",
              type: "datetimerange",
              rangeSeparator: "至",
              styleObject: {
                //设置自定义的样式
                width: "220px",
              },
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
        tableConfig: {
          currentPage: 1,
          pageSize: 5,
          pagination: true,
          loading: false,
          layout: "total, sizes, prev, pager, next, jumper",
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
      return this.defaultTemplate;
    },
  },
}
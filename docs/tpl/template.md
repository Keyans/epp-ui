## list模版

基础模版的用法。

<demo-block>
  <template-listTpl-base-list slot="source"></template-listTpl-base-list>

  <<< @/docs/.vuepress/components/template/listTpl/base-list.vue
</demo-block>

基础模版的`config.js`。

```js



import ApiTrigger from './api_config_trigger';
import { cloneDeep, omit } from 'lodash';

export default {
  data() {
    return {
      // 默认的Template配置
      dialogVisible: false,
      defaultTemplate: {
        queryFormApi: {
          reqData: {
            Offset: 0, Limit: 5,
          },
          cloneReqData: {},
          vueDataPath: '',
          apiDataPath: '',
          // api响应配置
          responseConfig: {
          // 响应数据字段全局处理（data 参数是映射好的数据），需要返回一个对象
            transformResponse: (newData, vueData, resData) => {
              // test
              const newTestField = 'testField';
              return {
                ...newData,
                newTestField,
              };
            },
          },
          onResSuccess: (resData, vueData) => {

          },
          onResError: (errInfo, vueData) => {},
          onResFinally: (vueData) => {},
        },
        // 表格
        formConfig: {
          ref: 'eppForm',
          formData: {},
          formItem: [],
        },
        // 表单
        tableConfig: {
          currentPage: 1,
          pageSize: 5,
          pagination: true,
          loading: false,
          total: 0,
          layout: 'total, sizes, prev, pager, next, jumper',
          column: [
            {
              prop: 'date',
              label: '日期',
            },
            {
              prop: 'name',
              label: '姓名',
            },
            {
              prop: 'address',
              label: '地址',
            },
          ],
          data: [
            {
              cc: 1,
              date: '2016-05-02',
              name: '王小虎1',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              cc: 2,
              date: '2016-05-02',
              name: '王小虎2',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              cc: 3,
              date: '2016-05-02',
              name: '王小虎3',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              cc: 4,
              date: '2016-05-02',
              name: '王小虎4',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              cc: 5,
              date: '2016-05-02',
              name: '王小虎5',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              cc: 6,
              date: '2016-05-02',
              name: '王小虎6',
              address: '上海市普陀区金沙江路 1518 弄',
            },
          ],
        },
      },
    };
  },
  created() {
    this.getFormData();
  },
  computed: {
    // 为props增加默认配置
    config() {
      return this.defaultTemplate;
    },
  },
  methods: {
    getFormData(data) {
      const { queryFormApi } = this.defaultTemplate;
      if (queryFormApi) {
        // 赋值clone请求data,判断数据是否变更，变更需要修改offset和currentPage为默认值
        const { reqData } = queryFormApi;
        this.defaultTemplate.tableConfig.loading = true;
        Object.assign(reqData, data);
        // 判断clone数据是否为空对象
        if (JSON.stringify(queryFormApi.cloneReqData) !== '{}') {
          // 对请求数据clone，移除不需要的属性
          const fnReqData = cloneDeep(omit(reqData, ['Offset', 'Limit']));
          // 如果请求数据发生变更,则修改offset和currentPage为默认值
          if (JSON.stringify(queryFormApi.cloneReqData) !== JSON.stringify(fnReqData)) {
            this.defaultTemplate.tableConfig.currentPage = 1;
            reqData.Offset =  0;
          }
        }
        // 存一份设置属性
        queryFormApi.cloneReqData = cloneDeep(omit(reqData, ['Offset', 'Limit']));
        const queryFormApiTrigger = new ApiTrigger(queryFormApi, this);
        // 页面loading
        queryFormApiTrigger.sendApi()
          .finally(() => {
            // 关闭loading
            this.defaultTemplate.tableConfig.loading = false;
          });
      }
    },
    handleSizeChange(val) {
      this.defaultTemplate.tableConfig.currentPage = 1;
      this.defaultTemplate.queryFormApi.reqData.Offset =  0;
      this.defaultTemplate.queryFormApi.reqData.Limit = this.defaultTemplate.tableConfig.pageSize = val;
      this.getFormData();
    },
    handleCurrentChange(val) {
      this.defaultTemplate.tableConfig.currentPage  = val;
      this.defaultTemplate.queryFormApi.reqData.Offset = (val - 1) * this.defaultTemplate.queryFormApi.reqData.Limit;
      this.getFormData();
    },
  },
};



```

## 表单模版

基础表单的用法。

<demo-block>
  <template-listTpl-base-list slot="source"></template-listTpl-base-list>
  <<< @/docs/.vuepress/components/template/listTpl/base-list.vue
</demo-block>

基础模版的`config.js`。

```js
export default{
  templateName:"eppTemplate",
  data(){
    return{
     defaultTemplate: {
       //表格
       formConfig: {
         formData: {
           number: "",
           id: "",
         },
         formItem: [
           {
             label: "测试12313",
             model: "switchValue",
             componentType: "input",
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
        tableData:{
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
          }
          ],
        }
       },
     },
    }
  },
  created(){
     console.log(this)
  },
   //tab配置
   methods:{
    getFormData(){
      console.log(454)
    },
    handleSizeChange(val) {
      console.log(val,8989)
    },
   }
}


```




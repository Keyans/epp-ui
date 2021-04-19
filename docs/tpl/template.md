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
  templateName: 'eppListTpl',
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
  <template-formTpl-base-form slot="source"></template-formTpl-base-form>
  <<< @/docs/.vuepress/components/template/formTpl/base-form.vue
</demo-block>

基础模版的`config.js`。

```js

const pickerOptions = {
  shortcuts: [
    {
      text: "今天",
      onClick(picker) {
        picker.$emit("pick", new Date());
      },
    },
    {
      text: "昨天",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit("pick", date);
      },
    },
    {
      text: "一周前",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", date);
      },
    },
  ],
};
export default{
  templateName: 'eppFromTpl',
  data() {
    return {
      formConfig: {
        col: 1,
        inline: false, // 默认为横向展示
        onUpdateData: (...data) => {},
        labelPosition: "left",
        formData: {
          title: "",
          valueType: "",
          category: [],
          valueType1: [],
          girlfriend: false,
          dateTime: "",
          test1: "",
          test2: "",
          test3: "",
        },
        formDesc: {
          girlfriend: {
            type: "radio",
            label: "是否有女朋友",
            labelWidth: "120px",
            options: [
              { text: "有", label: true },
              { text: "无", label: false },
            ],
          },
          girlfriendName: {
            type: "input",
            label: "女朋友名字",
            labelWidth: "100px",
            vif(data) {
              return data.girlfriend === true;
            },
          },
          activeName: {
            type: "input",
            label: "活动名称",
            on: {
              blur: (e) => {
                console.log(e.target.value);
              },
              focus: (e) => {
                console.log(e.target.value);
              },
            },
          },
          activePlace: {
            type: "select",
            label: "活动区域",
            options: [
              { value: "选项1", label: "区域一" },
              { value: "选项2", label: "区域一" },
            ],
          },
          category: {
            type: "cascader",
            label: "活动类目",
            options: [
              {
                value: "dongman",
                label: "动漫",
                children: [
                  { value: "dongmanzatan", label: "动漫杂谈" },
                  { value: "donghuajishu", label: "动画技术" },
                  { value: "dongmanzixun", label: "动漫资讯" },
                ],
              },
              {
                value: "biancheng",
                label: "编程",
                children: [
                  { value: "vue", label: "Vue" },
                  { value: "css", label: "CSS" },
                  { value: "html", label: "HTML" },
                  { value: "js", label: "JavaScript" },
                ],
              },
            ],
          },
          activeTime: {
            type: "datetime",
            label: "活动时间",
            attrs: {
              placeholder: "选择日期时间",
              pickerOptions,
            },
          },
          delivery: {
            type: "switch",
            label: "即时配送",
          },
          activeType: {
            type: "checkbox",
            label: "活动性质",
            default: [],
            options: [
              { label: "美食/餐厅线上活动" },
              { label: "地推活动" },
              { label: "线下主题活动" },
              { label: "单纯品牌曝光" },
            ],
          },
          activeSource: {
            type: "radio",
            label: "特殊资源",
            options: [
              { text: "线上品牌商攒助", label: "up" },
              { text: "线下场地免费", label: "down" },
            ],
          },
          activeStatus: {
            type: "textarea",
            label: "活动形式",
          },
          dateTime: {
            type: "datetimerange",
            label: "时间选择",
            render: (h, data) => {
              return (
                <span>
                  <nb-input
                    v-model={data.test1}
                    onChange={this.changeValue}
                  ></nb-input>
                  <nb-input v-model={data.test2}></nb-input>
                  <nb-input v-model={data.test3}></nb-input>
                </span>
              );
            },
          },
        },
      },
    };
  },
  methods:{
    changeValue(val) {
      console.log(val);
    },
    getFormData(data) {
      console.log(data, 123123);
    },
  }
}

```




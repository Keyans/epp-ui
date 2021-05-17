/* eslint-disable no-multi-assign */
import ApiTrigger from '../../../utils/apiConfigTrigger';
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
            transformResponse: (newData) => {
              // test
              const newTestField = 'testField';
              return {
                ...newData,
                newTestField,
              };
            },
          },
        },
        // 表格
        formConfig: {
          ref: 'eppForm',
          col: 4,
          size: 'small',
          formData: {
            number: '',
            id: '',
            date: '',
            switchValue: '',
          },
          formItem: [
            {
              label: '测试',
              model: 'switchValue',
              componentType: 'input',
              styleObject: {
                // 设置自定义的样式
                width: '230px',
              },
            },
            {
              label: '时间',
              model: 'date',
              componentType: 'date-picker',
              type: 'datetimerange',
              rangeSeparator: '至',
              styleObject: {
                // 设置自定义的样式
                width: '220px',
              },
              startPlaceholder: '开始日期',
              endPlaceholder: '结束日期',
              placeholder: '选择时间',
            },
            {
              label: '店铺id',
              model: 'id',
              componentType: 'select',
              children: {
                label: 'label',
                value: 'value',
                options: [
                  {
                    label: '区域一',
                    value: 'shanghai',
                  },
                  {
                    label: '区域二',
                    value: 'beijing',
                  },
                ],
              },
            },
          ],
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

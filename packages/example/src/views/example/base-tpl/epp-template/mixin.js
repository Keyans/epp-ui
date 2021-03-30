
import ApiTrigger from '../../../utils/apiConfigTrigger';

export default {
  data() {
    return {
      //默认的Template配置
      defaultTemplate: {        
        queryFormApi: {
        reqData: {
          Offset: 0, Limit: 5
        },
        // api响应配置
        responseConfig: {
          // 响应数据字段全局处理（data 参数是映射好的数据），需要返回一个对象
          transformResponse: (newData, vueData, resData) => {
            vueData.testTitle = '配置化完成';
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
        //表格
        formConfig: {
          ref: "eppForm",
          formData: {},
          formItem: []
        },
        //表单
        tableConfig: {
          currentPage: 1,
          pageSize: 5,
          pagination: true,
          loading: false,
          total:0,
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
  created(){
    this.getFormData()
 },
  computed: {
    // 为props增加默认配置
    config() {
      return this.defaultTemplate;
    },
  },
  methods: {
    handleClose(){
      
    },
    getFormData(data) {
      if (this.defaultTemplate.queryFormApi) {
        Object.assign(this.defaultTemplate.queryFormApi.reqData, data);
        const queryFormApiTrigger = new ApiTrigger(this.defaultTemplate.queryFormApi, this);
        // 页面loading
        const loading = this.$loading({
          lock: true,
          text: '加载中...',
          background: 'rgba(255, 255, 255, 0.6)',
        });
        queryFormApiTrigger.sendApi()
          .finally(() => {
            // 关闭loading
            loading.close();
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
}
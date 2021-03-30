export default{
  data(){
    return{
     defaultTemplate: {
       //表格
       formConfig: {
         size:"small",
         formData: {
           number: "",
           id: "",
         },
         formItem: [
           {
             label: "测试",
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
        column: [
          {
            prop: "date",
            label: "日期",
          },
          {
            prop: "name",
            label: "姓名",
          },
        ],
        data: [
        {
          cc: 1,
          date: "2016-05-02",
          name: "234213",
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
        ],
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


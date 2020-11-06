<template>
    <div id="App">
        <epp-form
          ref="eppForm"
          :formConfig="formConfig"
        ></epp-form>
    </div>
</template>

<script>
export default {
  data(){
    return{
      formConfig:{
        rules: {
          number: [{ required: true, message: '请输入', trigger: 'blur' }]
        },
        formData:{
          number:"",
          id: "",
          date: '',
          switchValue: false
        },
        btn: [{
          type: 'primary',
          name: '提交',
          click: () => {
            console.log(this.$refs.eppForm.getFormData());
          }
        },
        {
          type: '',
          name: '重置',
          click: () => {
            this.$refs.eppForm.resetForm()
          }
        }],
        formItem:[
          {
            label:"switch",
            model:"switchValue",
            type:"switch"
          },
          {
            label:"违规单号",
            model:"number",
            type:"input"
          },
          {
            label:"时间",
            model:"date",
            type:"date-picker",
            targetType: 'datetimerange',
            rangeSeparator: "至",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            placeholder: "选择时间"
          },
          {
            label:"店铺id",
            model:"id",
            type:"select",
            children: [{
              type:"option",
              label: "区域一",
              value: 'shanghai'
            },{
              type:"option",
              label: "区域二",
              value: 'beijing'
            }]
          }
        ]
      },
    }
  },
  methods: {
    getEppFormData() {
      console.log(this.$refs.eppForm.getFormData())
    }
  }
}
</script>

<style>
.app-main{
    width: 100%;
    height: 100%;
}
</style>

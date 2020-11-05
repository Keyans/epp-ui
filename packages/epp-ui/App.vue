<template>
    <div id="App">
        <epp-form 
          ref="eppForm"
          :formConfig="formConfig"
        ></epp-form>
    </div>
</template>

<script>
import eppForm from "./epp-form/epp-form"
export default {
  components:{eppForm},
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
            type:"nb-switch"
          },
          {
            label:"违规单号",
            model:"number",
            type:"nb-input"
          },
          {
            label:"时间",
            model:"date",
            type:"nb-date-picker",
            placeholder: "选择时间"
          },
          {
            label:"店铺id",
            model:"id",
            type:"nb-select",
            children: [{
              type:"nb-option",
              label: "区域一",
              value: 'shanghai'
            },{
              type:"nb-option",
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

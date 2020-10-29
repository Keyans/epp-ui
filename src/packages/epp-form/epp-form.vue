<template>
  <div>
    <nb-form :model="config.formData" :ref="config.formData" :label-width="config.labelWidth" :inline="config.inline" :rules="config.rules">
      <nb-form-item  v-for="(item,index) in config.formItemList" :key="index" :label="item.label" :prop="item.key">
          <components
          :is="item.type"
          v-model="config.formData[item.key]">
          </components>
      </nb-form-item>
      <nb-form-item v-if="config.buttonShow">
        <nb-button type="primary" size="small">查询</nb-button>
        <nb-button size="small" @click="resetForm(config.formData)">重置</nb-button>
      </nb-form-item>
    </nb-form>
  </div>
</template>

<script>
export default {
  name:"eppForm",
  props:{
    formConfig:{
      type: Object,
      required:true,
      default:()=>{}
    },
  },
  data(){
    return{
      defaultConfig:{
          inline:true,//默认为横向展示
          labelWidth:"80px",//默认label为80
          buttonShow:true,//设置查询按钮默认存在
      }
    }
  },
  computed:{
    //为props增加默认配置
    config(){
      return Object.assign(this.defaultConfig,this.formConfig)
    },
  },
  mounted(){
    console.log(this.config)
  },
  methods:{
    resetForm(formName){
      this.$refs[formName].resetFields();
      Object.assign(this[formName], this.$options.data()[formName]);
    }
  }
}
</script>

<style>

</style>
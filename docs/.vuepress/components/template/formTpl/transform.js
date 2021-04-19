import Vue from "vue"
export default (config)=>{
 config.extends = config.extends || Vue.options.components[config.templateName]
 return {
    components:{
      componentName:config
    },
    mixins: [config],
  }
}

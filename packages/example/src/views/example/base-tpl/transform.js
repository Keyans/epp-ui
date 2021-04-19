import Vue from "vue"
import template from "./epp-template/epp-template"
export default (config)=>{
 config.extends = config.extends || Vue.options.components[config.templateName] || template
 return {
    components:{
      componentName:config
    }
  }
}

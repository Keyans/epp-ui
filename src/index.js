/*
 * @Author: your name
 * @Date: 2020-10-21 14:45:39
 * @LastEditTime: 2020-10-21 21:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/npmTest/src/index.js
 */
import eppTable from './packages/epp-table/index.js';

const components = [
  eppTable
]

const install = function(Vue){
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default{
  version:'1.4.4',
  install,
  eppTable
}
/*
 * @Author: your name
 * @Date: 2020-10-21 14:52:55
 * @LastEditTime: 2020-10-21 15:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/npmTest/src/package/eppDemo/index.js
 */
// 这里import 的 btn和btnDemo.vue的name属性名相同 ！
import template from "./epp-switch.vue";
// 给组件配置install方法
template.install = (Vue) => Vue.component(template.name, template);

export default template;

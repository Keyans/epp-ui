/*
 * @Author: your name
 * @Date: 2020-10-21 14:52:55
 * @LastEditTime: 2020-10-21 15:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/npmTest/src/package/eppDemo/index.js
 */
// 这里import 的 btn和btnDemo.vue的name属性名相同 ！
import btn from "./epp-table.vue";
// 给组件配置install方法
btn.install = (Vue) => Vue.component(btn.name, btn);

export default btn;

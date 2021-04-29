import template from './epp-alert.vue';
// 给组件配置install方法
template.install = Vue => Vue.component(template.name, template);

export default template;

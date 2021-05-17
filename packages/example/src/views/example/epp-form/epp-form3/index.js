import form from './epp-form.vue';
// 给组件配置install方法x
form.install = Vue => Vue.component(form.name, form);

export default form;

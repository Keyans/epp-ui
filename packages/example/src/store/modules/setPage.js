export default {
  state: {
    // 表单配置
    formConfig: {
      formData: {},
      formItem: [],
    },
    // 表格配置
    tableConfig: {
      column: [],
      data: [],
    },
    // 模版配置
    templateConfig: {},
  },
  mutations: {
    setFormConfig(state, data) {
      state.formConfig = data;
    },
    setTableConfig(state, data) {
      state.formConfig = data;
    },
    setTemplateConfig(state, data) {
      state.templateConfig = data;
    },
  },
  actions: {
  },
  getters: {

  },
};

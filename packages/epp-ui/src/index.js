//配置自动化注入,根据src文件夹下的index进行注入
const modulesFiles = require.context("./", true, /\.js$/);
//获取对应的componets
const components = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const index = moduleName.lastIndexOf("/");
  const subName = moduleName.substring(index + 1, moduleName.length);
  const value = modulesFiles(modulePath);
  if (subName === "index") {
    //判断是否为index文件
    if (value.default.name) {
      modules[value.default.name] = value.default;
    }
  }
  return modules;
}, {});
const install = function(Vue) {
  Object.keys(components).forEach((item) => {
    if (components[item].name) { //如果存在name则进行组件注册
      Vue.component(components[item].name, components[item]);
    }
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default Object.assign(components, { install, version: "1.0.0" });

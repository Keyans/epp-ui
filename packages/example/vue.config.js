const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  css: {
    extract: false, // 组件的样式是否另外打包成单独的css文件。默认为true
    // 因为我这个组件并不复杂，css代码又不多，不想使用组件的时候还要显式的去import css，所以就不另外打包成单独的css文件了
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'));
  },
  // productionSourceMap: false // 是否生成sourcemap，默认是true
};

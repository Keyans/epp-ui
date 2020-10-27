module.exports = {
  ssh: {
    host: "9.135.90.39",
    username: "root",
    password: "QAdth*2847Ny",
    port: 36000,
    // privateKey: '/Users/zzetao/.ssh/id_rsa'
    // 更多配置：https://github.com/mscdex/ssh2#client-methods
  },
  keepReleases: 10, // 保存历史版本数量
  workspace: "docs/.vuepress/dist", // {相对路径}  待发布文件目录
  deployTo: "/root/epp-ui/public/", // {绝对路径}  线上部署目录
  verify: false, // 是否需要输入验证码验证，默认true
};

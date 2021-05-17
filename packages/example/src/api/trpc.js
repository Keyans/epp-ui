import NBTrpc from '@tencent/nb-trpc';

const TRPC = {};
const config = {
  version: 1,
  serverUrl: '/fcgi',
  biz: 'YZ',
  header: {
    Utype: 2,
  },
};
// 设置请求
TRPC.newRequest = function (path, data, context) {
  return new Promise((resolve, reject) => {
    NBTrpc.newRequest(path, data, config)
      .then((res) => {
        const result = JSON.parse(res.data);
        resolve(result);
      })
      .catch((errTrpc) => {
        if (
          errTrpc.code === 9999
          || errTrpc.code === 10000
          || errTrpc.code === 10005
        ) {
          if (context && context.$router) {
            context.$router.push('/login');
          } else {
            window.location.hash = '/login';
          }
        }
        let errorTips = errTrpc.errInfo;
        if (!errorTips) {
          errorTips = `请求失败: ${path}`;
        }
        if (context && context.$message) {
          context.$message.error(errorTips);
        }
        reject(errTrpc);
      });
  });
};
// 获取图片上传设置
TRPC.uploadImg = (url, data) => TRPC.newRequest(url, data);
export default TRPC;

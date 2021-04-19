import NBTrpc from "@tencent/nb-trpc";

let TRPC = {}
let config = {
  version: 1,
  serverUrl: "/fcgi",
  biz: "YZ",
  header: {
    Utype: 2
  }
};
TRPC.generateDUA = function () {
  return `DV=${this.version}&PL=Web`;
};
TRPC.getRequestID = function () {
  const withLine = true; // 带不带横线
  const len = 36; // 长度为36
  let radix = 16; // 16进制
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uuid = [];
  let i;
  radix = radix || chars.length;
  if (withLine) {
    let r;
    uuid[8] = '-';
    uuid[13] = '-';
    uuid[18] = '-';
    uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < len; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  } else {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)];
    }
  }
  return uuid.join('');
};
//设置请求
TRPC.newRequest = function(path, data, context) {
  return new Promise((resolve, reject) => {
    NBTrpc.newRequest(path, data, config)
      .then(res => {
        let result = JSON.parse(res.data);
        resolve(result);
      })
      .catch(errTrpc => {
        if (
          errTrpc.code === 9999 ||
          errTrpc.code === 10000 ||
          errTrpc.code === 10005
        ) {
          if (context && context.$router) {
            context.$router.push("/login");
          } else {
            window.location.hash = "/login";
          }
        }
        let errorTips = errTrpc.errInfo;
        if (!errorTips) {
          errorTips = "请求失败: " + path;
        }
        if (context && context.$message) {
          context.$message.error(errorTips);
        }
        reject(errTrpc);
      });
  });
};
export default TRPC

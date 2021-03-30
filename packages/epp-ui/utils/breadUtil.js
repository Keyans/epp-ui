// 面包屑拦截
export const BreadInterceptors = (to, from) => {
  if (to.meta.micro) {
    const list = JSON.parse(sessionStorage.getItem('breadList'));
    if (list && list.length > 1 && from.name === null) {
      return;
    }
    // 如果刚开始没有返回默认进入首页
    if (from.name === null || to.meta.menu) {
      sessionStorage.setItem(
        'breadList',
        JSON.stringify([
          {
            name: to.name,
            title: to.meta.title,
            query: to.query,
            params: to.params,
          },
        ]),
      );
    } else {
      const isValue = list.some(item => item.name === to.name); // 判断是不是有相同的路由存入
      if (isValue) {
        const index = list.findIndex(item => item.name === to.name); // 查找对应的index
        const sliceArr = index === 0 ? [list[0]] : list.slice(0, index + 1); // 如果index为0则只保留第一个、否则按照找到对应的顺序进行切割
        sessionStorage.setItem('breadList', JSON.stringify(sliceArr));
      } else {
        const obj = {
          name: to.name,
          title: to.meta.title,
          query: to.query,
          params: to.params,
        };
        list.push(obj);
        sessionStorage.setItem('breadList', JSON.stringify(list));
      }
    }
  } else {
    sessionStorage.removeItem('breadList');
  }
};

import TRPC from "@/api/trpc";

const API = {};

// 获取底部筛选图表数据
API.getIndicatortreadBottom = data => {
    return TRPC.newRequest("dmsmarketcenter/groupshopindicatortread", data);
  };

export default API;

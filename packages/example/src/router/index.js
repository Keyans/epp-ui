import Vue from "vue"
import VueRouter from "vue-router"
import { BreadInterceptors } from "@tencent/epp-ui-test"; // 倒入面包屑方法
// import { BreadInterceptors } from "../../../epp-ui/lib/epp-ui.common"
import { routers } from './router';
Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
  routes: routers
};

export const router = new VueRouter(RouterConfig);

//before
router.beforeEach((to, from, next) => {
  next();
});
//after
router.afterEach((to,from) => {
  BreadInterceptors(to,from)
});

//重写router push方法
const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location){
  return routerPush.call(this,location).catch(error=>error)
}



/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:20:18
 * @FilePath: \DjjBlogs\src\route\index.ts
 * @LastEditors: djj
 * @LastEditTime: 2023-07-14 18:48:37
 */
import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import {initDynamicRouter} from "./modules/dynamicRoute";
import {staticRoute,errorRouter} from "@/route/modules/staticRoute"
import {getStorage,setStorage} from "@/utils/index"
import {ElMessage} from "element-plus"
import {userAuthStore} from "@/store/modules/auth"

const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes:[...staticRoute,...errorRouter],                 //路由表
    strict: false,
    scrollBehavior:()=>({top:0})       //滚动位子
})

//设置白名单
const whiteList:string[]=["/login"]

router.beforeEach(async(to,from,next)=>{
  if(true){
    await initDynamicRouter()
  }
 next()
})
/**
 * @description 重置路由
 * */

 export const resetRouter = () => {
  const authStore = userAuthStore();
  authStore.flatMenuListGet.forEach(route => {
    const { name } = route;
    if (name && router.hasRoute(name)) router.removeRoute(name);
  });

  /**
 * @description 路由跳转错误
 * */
router.onError(error => {
  console.warn("路由错误", error.message);
});
};
export default router
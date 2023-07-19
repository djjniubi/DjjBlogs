/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:20:18
 * @FilePath: \DjjBlogs\src\route\index.ts
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-19 10:41:24
 */
import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import {initDynamicRouter} from "./modules/dynamicRoute";
import {staticRoute,errorRouter} from "@/route/modules/staticRoute"
import {getStorage,setStorage} from "@/utils/index"
import {ElMessage} from "element-plus"
import {userAuthStore} from "@/store/modules/auth"
import {GlobalStore} from "@/store"
import { fi } from "element-plus/es/locale";
const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes:[...staticRoute,...errorRouter],                 //路由表
    strict: false,
    scrollBehavior:()=>({top:0})       //滚动位子
})

//设置白名单
const whiteList:string[]=["/login"]
//路由拦截
router.beforeEach(async(to,from,next)=>{
  const userStore=GlobalStore();
  const authStore = userAuthStore();
  //判断是否在登录页
  if(to.path.toLocaleLowerCase()==="/login"){
     if(userStore.token)return next(from.fullPath);
     resetRouter();
     return next()
  }
  //判断是否有 Token，没有重定向到 login 页面
  if(!userStore.token){
    return next({path:"/login",replace:true}) 
  }
  if(!authStore.authMenuList.length){
    await initDynamicRouter();
    return next({...to,replace:true})
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
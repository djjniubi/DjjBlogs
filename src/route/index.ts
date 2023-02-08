import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import {dynamic,staticRouter} from "./modules/dynamicRoute";
import staticRoute from "@/route/modules/staticRoute"
//读取view 所有文件
// const modules=import.meta.glob("../view/**/*.vue")
// console.log("modules",modules);

const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes:staticRoute,                 //路由表
    scrollBehavior:()=>({top:0})       //滚动位子
})
export default router
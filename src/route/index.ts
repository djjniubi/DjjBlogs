import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
const routes:Array<RouteRecordRaw>=[{
    path:"/",
    component:()=>import("../layouts/index.vue")
},{
    path:"/home",
    component:()=>import("../view/home/index.vue")
}]
//读取view 所有文件
// const modules=import.meta.glob("../view/**/*.vue")
// console.log("modules",modules);

const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes,                          //路由表
    scrollBehavior:()=>({top:0})       //滚动位子
})
export default router
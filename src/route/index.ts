import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import {dynamic,staticRouter} from "./modules/dynamicRoute";
const routes:RouteRecordRaw[]=[{
    path:"/",
    redirect:"/home/index",
 
},{
    path:"/layouts",
    name:"layouts",
    component:()=>import("../layouts/index.vue"),
    redirect:"/home/index",
    children:[
        {
            path:"/home/index",
            name:"home",
            component:()=> import("../view/home/index.vue")
        }
    ]
}]
//读取view 所有文件
// const modules=import.meta.glob("../view/**/*.vue")
// console.log("modules",modules);

const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes:staticRouter,                          //路由表
    scrollBehavior:()=>({top:0})       //滚动位子
})
export default router
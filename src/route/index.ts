import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import {dynamic,dynamicRouter} from "./modules/dynamicRoute";
import staticRoute from "@/route/modules/staticRoute"
import {getStorage,setStorage} from "@/utils/index"
import {ElMessage} from "element-plus"
const router = createRouter({
    history:createWebHashHistory(),    //路由模式
    routes:[...dynamicRouter,...staticRoute],                 //路由表
    scrollBehavior:()=>({top:0})       //滚动位子
})

//设置白名单
const whiteList:string[]=["/login"]

// router.beforeEach(async(to,from,next)=>{
    
//     const token =getStorage("token")
//     if(token){
//         if(to.path==="/login"||to.path==="/"){
//             next()
//         }else{
//             next()
//         }
        
//     }else{
//         if(whiteList.indexOf(to.path) !== -1){
//             next() 
//         }else{
//             ElMessage({
//                 message:"登录已过期，请重新登录！",
//                 type:"error"
//             })
    
//             next(`/login?redirect=${to.path}`)
//         }
        
//     }
// })
export default router
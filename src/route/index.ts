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
import {getStorage,setStorage} from "@/utils/index"
import {ElMessage} from "element-plus"
//设置白名单
const whiteList:string[]=["/login"]

router.beforeEach(async(to,from,next)=>{
    
    const token =getStorage("token")
    if(token){
        if(to.path==="/login"){
            next()
        }
        next()
    }else{
        if(whiteList.indexOf(to.path) !== -1){
            next() 
        }else{
            ElMessage({
                message:"登录已过期，请重新登录！",
                type:"error"
            })
    
            next(`/login?redirect=${to.path}`)
        }
        
    }
})
export default router
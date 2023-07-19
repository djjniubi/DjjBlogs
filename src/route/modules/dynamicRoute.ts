
/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-07-17 09:53:51
 */
import router from "@/route/index"
import {RouteRecordRaw} from "vue-router"
import {userAuthStore} from "@/store/modules/auth";


//动态路由
const viewModules=import.meta.glob("/src/view/**/*.vue")
console.log("viewModules",viewModules);

export const initDynamicRouter= async ()=>{
    const authStore=userAuthStore();
         
     try {
           await authStore.getAuthMenuList();
        authStore.authMenuListGet.forEach(item=>{
            if(item.component && typeof item.component==='string'){
                item.component=viewModules[`/src/view${item.component}.vue`];
                console.log("viewModules",item.component);
                
            }
             if(item.meta.isFull){
                router.addRoute(item as unknown as RouteRecordRaw)
             }else{
                router.addRoute("layout", item as unknown as RouteRecordRaw)
             }
        })
     } catch (error) {
        console.log("eee",error);
        
     }
}




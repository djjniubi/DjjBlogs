
import {RouteRecordRaw} from "vue-router"
/**
 * @param name ==>  菜单名
 * @param path  ==> 菜单路径
 * @param mera  ==>  菜单信息
 * @param component  ==>组件路径
 * @param  children  ==>子路由
 */

//静态路由
export const staticRouter:Array<RouteRecordRaw>=[
    {
        path:"/",
        redirect:"/login",
        
        children:[
            {path:"/login",
            component:()=> import("@/view/login/index.vue")
           }
        ]
    },
    {
        path:"/404",
        name:"404",
        children:[
            {
                path:"/404",
                name:"home",
                component:()=> import("@/components/ErrorMessage/404.vue"),
                meta:{
                    title:"404页面"
                }
            }
        ]
    },
    {
        path:'/:pathMatch(.*)',
        redirect:"/404"
    }
]

export default staticRouter
/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:20:18
 * @FilePath: \DjjBlogs\src\route\modules\staticRoute.ts
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 13:58:33
 */

import {RouteRecordRaw} from "vue-router"
/**
 * @param name ==>  菜单名
 * @param path  ==> 菜单路径
 * @param mera  ==>  菜单信息
 * @param component  ==>组件路径
 * @param  children  ==>子路由
 */

//静态路由
export const staticRoute:Array<RouteRecordRaw>=[
    {
        path:"/",
        redirect:"/home/index"
    },
    {
       path:"/login",
        name:"login",
        component:()=>import("@/view/login/index.vue")
    },
    {
        path:"/layout",
        name:"layout",
        component:()=>{import("@/layouts/index.vue")},
        redirect:"/home/index",
        children:[]
    },
    {
        path:"/largeDataScreen/index",
        name:"largeDataScreen",
        component:()=>import("@/view/largeDataScreen/index.vue")
    }
    
]

/**
 * errorRouter (错误页面路由)
 */

 export const errorRouter =[
    {
        path:"/404",
        name:"404",
        component:()=> import("@/components/ErrorMessage/404.vue"),
        meta: {
            title: "404页面"
          }
    },
    {
        path:'/:pathMatch(.*)',
        redirect:"/404"
    }
 ]

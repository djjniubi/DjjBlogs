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
        redirect:"/home/index"
    },
    {
        path:"/login",
        name:"login",
        component:()=> import("../../view/login/index.vue"),
        meta: {
			title: "登录"
		}
    },
    {
        path:"/layouts",
        name:"layouts",
        component:()=> import("../../layouts/index.vue"),
        redirect:"/home/index",
        children:[
            {
                path:"/home/index",
                name:"home",
                component:()=> import("../../view/home/index.vue")
            }
        ]
    },
    {
        path:"/articleList",
        name:"articleList",
        component:()=> import("../../layouts/index.vue"),
        children:[{
            
            path:"/articleList/index",
            name:"list",
            component:()=> import("../../view/articleList/index.vue")
        }]
    }
]

//动态路由
export const dynamic=[{
    name:"首页",
    path:"/home/index",
    mera:{
        icon:""
    },
    component:"/home/index"
},{
    name:"文章列表",
    path:"/articleList/index",
    mera:{
        icon:""
    },
    component:"/articleList/index"
}]


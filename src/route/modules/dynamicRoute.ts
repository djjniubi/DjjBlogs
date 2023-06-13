/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-13 13:50:08
 */
import {RouteRecordRaw} from "vue-router"
import layouts from "@/layouts/index.vue"
type Config ={
    title:String,
    icon:String,
    menuOrder:Number,
    children?:[]
}
/**
 * @param name ==>  菜单名
 * @param path  ==> 菜单路径
 * @param meta  ==>  菜单信息
 * @param component  ==>组件路径
 * @param  children  ==>子路由
 */

//动态路由
//读取view 所有文件
const viewPageAll=import.meta.glob("/src/view/**/page.ts",{eager:true,import:"default"})
const viewAll=import.meta.glob("/src/view/**/*index.vue")
const viewAllArr=Object.entries(viewPageAll)

/*路由*/
const  newRuoteAll=viewAllArr.map(([pagePath,config]:any)=>{
    let path = pagePath.replace("/src/view","").replace("/page.ts","/index");
        path=path|| "/"
    const name =path.split("/").filter(Boolean).join("-")||"index"
    const compPath=pagePath.replace("page.ts","index.vue")
    let masterObj:any={path,name,component:layouts,meta: config,children:[]}
    let sonObj={path,name,component: viewAll[compPath],meta: config,children:config.children?config.children:[]}
    if(config.children){
        // console.log("config66",config);
    }
    masterObj.children.push(sonObj)
    return masterObj
})
/* 导航 */ 
const  newNav=viewAllArr.map(([pagePath,config]:any)=>{
    // console.log("newNav",config);
    // console.log("pagePath",pagePath);
    let path:any = pagePath.replace("/src/view","").replace("/page.ts","/index");
        path=path|| "/"
    const name =path.split("/").filter(Boolean).join("-")||"index"
    const compPath=pagePath.replace("page.ts","index.vue")
    return {
        path,
        name,
        component: viewAll[compPath],  
        meta: config,
        children:config.children?config.children:[]
    }
})
//对路由进行排序
function fun(a:any,b:any){
    return a.meta.menuOrder-b.meta.menuOrder
}
//动态路由  路由接口参数 (导航格式)
export const dynamic=newNav.sort(fun)


//路由格式
export const dynamicRouter:Array<RouteRecordRaw>=newRuoteAll.sort(fun)
console.log("newRuoteAll",newRuoteAll);
// export const dynamic=[{
//     name:"首页",
//     path:"/home/index",
//     meta:{
//         icon:"HomeFilled"
//     },
//     component:"/home/index",
//     children:[]
// },{
//     name:"文章列表",
//     path:"/articleList/index",
//     meta:{
//         icon:"Tickets"
//     },
//     component:"/articleList/index",
//     children:[]
// }]




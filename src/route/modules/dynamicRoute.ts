import {RouteRecordRaw} from "vue-router"
import layouts from "@/layouts/index.vue"
/**
 * @param name ==>  菜单名
 * @param path  ==> 菜单路径
 * @param mera  ==>  菜单信息
 * @param component  ==>组件路径
 * @param  children  ==>子路由
 */

//动态路由
//读取view 所有文件
const viewPageAll=import.meta.glob("/src/view/**/page.ts",{eager:true,import:"default"})
const viewAll=import.meta.glob("/src/view/**/*index.vue")
const viewAllArr=Object.entries(viewPageAll)
const  newRuoteAll=viewAllArr.map(([pagePath,config])=>{
    let path = pagePath.replace("/src/view","").replace("/page.ts","/index");
        path=path|| "/"
    const name =path.split("/").filter(Boolean).join("-")||"index"
    const compPath=pagePath.replace("page.ts","index.vue")
    let masterObj:any={path,name,component:layouts,meta: config,children:[]}
    let sonObj={path,name,component: viewAll[compPath],meta: config,children:[]}
    masterObj.children.push(sonObj)
    return masterObj
})
const  newNav=viewAllArr.map(([pagePath,config])=>{
    let path:any = pagePath.replace("/src/view","").replace("/page.ts","/index");
        path=path|| "/"
    const name =path.split("/").filter(Boolean).join("-")||"index"
    const compPath=pagePath.replace("page.ts","index.vue")

    return {
        path,
        name,
        component: viewAll[compPath],  
        meta: config,
        children:[]
    }
})
//对路由进行排序
function fun(a:any,b:any){
    return a.meta.menuOrder-b.meta.menuOrder
}
//动态路由  路由接口参数 (导航格式)
export const dynamic=newNav.sort(fun)
console.log("newRuoteAll",newRuoteAll);

//路由格式
export const dynamicRouter:Array<RouteRecordRaw>=newRuoteAll.sort(fun)
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




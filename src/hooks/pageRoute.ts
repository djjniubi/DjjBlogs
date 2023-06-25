/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-25 08:55:55
 * @LastEditTime: 2023-06-25 13:50:34
 */
import router from "@/route/index";
import layouts from "@/layouts/index.vue"
/**
 * @descriptio 抽取项目view文件夹下有page.ts的文件作为菜单
 */
/**
 * @descriptio 抽取项目view文件夹下有page.ts的文件作为菜单
 */

 export const getAuthMenuListApi=()=>{
    const viewPage=import.meta.glob("/src/view/**/page.ts",{eager:true,import:"default"});
    const viewAll=import.meta.glob("/src/view/**/*index.vue");
    const viewPageAll=Object.entries(viewPage)
    const newRuoteAll=viewPageAll.map(([pagePath,config]:any)=>{
     let path=pagePath.replace("/src/view","").replace("/page.ts","/index");
     const name =path.split("/").filter(Boolean).join("-")||"index";
     const compPath=pagePath.replace("page.ts","index.vue");
     let masterObj:any={path,name,component:viewAll[compPath],meta: config};
     let sonObj={path,name,component: viewAll[compPath],meta: config,children:config.children?config.children:[]}
     if(config.isFull||!config.children){
        // router.addRoute(masterObj)
     }else if(config.children){
        masterObj.children=[sonObj]
        // router.addRoute("layout",masterObj)
     }
     return masterObj
    })
    //  console.log("newRuoteAll",newRuoteAll);
     
    return newRuoteAll
}


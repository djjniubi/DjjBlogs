/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-13 09:55:02
 * @LastEditTime: 2023-06-13 15:18:55
 */
import router from "@/route";
import {defineStore} from "pinia";
import {TabsState,TabsMenuProps} from "../interface/index"
export const userTabsStore =defineStore("tabsStore",{
    state:():TabsState=>{
     return {
        tabsMenuList:[]
     }   
    },
    actions:{
        //添加tabs
        addTabs(tabsData: TabsMenuProps){
            const list=this.tabsMenuList.filter((item:TabsMenuProps)=>item.path===tabsData.path);
            if(list.length>0)return
            this.tabsMenuList.push(tabsData)
        },
        //移除tabs
        removeTabs(tabsKey:string){
           const tabsMenuList=this.tabsMenuList
           tabsMenuList.forEach((item,index)=>{
            if(item.path!==tabsKey) return
            const nextTab =tabsMenuList[index+1]||tabsMenuList[index-1];
            if(!nextTab)return
            router.push(nextTab.path)
           })
            this.tabsMenuList=tabsMenuList.filter((item)=>item.path !==tabsKey)
        }
    },
    persist:{
        paths:["tabsMenuList"]
    }
})
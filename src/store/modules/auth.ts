/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-21 09:43:48
 * @LastEditTime: 2023-08-03 10:08:48
 */
import {defineStore} from "pinia";
import{AuthState} from "../interface/index";
import {getFlatMapList,getShowMenuList} from "@/utils/index";
import routerData from "@/assets/json/authMenuList.json";
export const userAuthStore=defineStore('minUserAuthStore',{
    state:():AuthState=>{
        return{
            //按钮权限
            authButtonList:{},
            //路由菜单列表
            authMenuList:[]
        }
    },
    getters:{
        //按钮权限
        authButtonListGet:state=>state.authButtonList,
        //路由菜单列表
        authMenuListGet:state=>getFlatMapList(state.authMenuList),
        //扁平化菜单
        flatMenuListGet:state=>getShowMenuList(state.authMenuList)
    },
    actions:{
        //获取路由数据
        getAuthMenuList(){
            this.authMenuList=routerData.data
        }
    }
})
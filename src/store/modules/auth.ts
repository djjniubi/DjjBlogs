/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-21 09:43:48
 * @LastEditTime: 2023-06-25 13:25:44
 */
import {defineStore} from "pinia";
import{AuthState} from "../interface/index";
import {getAuthMenuListApi} from "@/hooks/pageRoute";
import {getFlatMapList} from "@/utils/index"
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
        flatMenuListGet:state=>getFlatMapList(state.authMenuList)
    },
    actions:{
        getAuthMenuList(){
            this.authMenuList=getAuthMenuListApi()
        }
    }
})
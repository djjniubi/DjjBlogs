/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-21 09:43:48
 * @LastEditTime: 2023-06-21 10:08:55
 */
import {defineStore} from "pinia";
import{AuthState} from "../interface/index"
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
        authMenuListGet:state=>state.authMenuList
    }
})
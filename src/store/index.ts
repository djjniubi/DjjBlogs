/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 08:23:52
 * @LastEditTime: 2023-06-13 14:15:38
 */
import { defineStore ,createPinia} from "pinia";
import { counterState } from "./interface/index";
import {setStorage,getStorage,removeStorage} from "@/utils/index";
import {THEME_COLORS} from "@/config";
import piniaPluginPersistedstate  from "pinia-plugin-persistedstate";
export const GlobalStore = defineStore({
    //id: 必须的 
    id:"GlobalState",
    state: (): counterState =>({
                token:getStorage("token")|| "",
                userInfo:getStorage("userInfo")|| "",
                // themeConfig
                themeConfig:{
                    //布局方式  纵向  lengthways  |  经典  classics  |  横向 crosswise  |  分栏  subfield
                    layouts:"lengthways",
                    //折叠菜单
                    isCollapse:false,
                    //主题颜色
                    themeColor:THEME_COLORS,
                    //暗黑模式
                    isDarkness:false,
                    //灰色模式
                    isGray:false,
                    //色弱模式
                    isColorWeakness:false
                }
        }) ,
    getters: {},
    actions: {
        //setToken
        setToken(token: string) {
            setStorage("token",token)
            this.token = token
            
        },
        // setUserInfo
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
            setStorage("userInfo",userInfo)
        },
        //removeUser at Tokn
        removeUser(){
            removeStorage("token")
            removeStorage("userInfo")
        },
        // setThemeConfig
		setThemeConfig(themeConfig: any) {
            setStorage("themeConfig",themeConfig)
			this.themeConfig = themeConfig;
		}
    },
    persist:{
        paths:["token","userInfo","themeConfig"]
    }
})
const pinia =createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia


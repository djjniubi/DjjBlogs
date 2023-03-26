import { defineStore ,createPinia} from "pinia"
import { counterState } from "./interface/index"
import {setStorage,getStorage,removeStorage} from "@/utils/index"
export const GlobalStore = defineStore({
    //id: 必须的 
    id:"GlobalState",
    state: (): counterState =>({
                token:getStorage("token")|| "",
                userInfo:getStorage("userInfo")|| "",
                // themeConfig
                themeConfig:{
                    //折叠菜单
                    isCollapse:false
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
    }
})
const pinia =createPinia()
export default pinia


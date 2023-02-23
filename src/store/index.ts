import { defineStore ,createPinia} from "pinia"
import { counterState } from "./interface/index"
import {setStorage,getStorage,removeStorage} from "@/utils/index"
export const GlobalStore = defineStore("counterState", {
    state: (): counterState => {
        return {
            token:getStorage("token")|| "",
            userInfo:getStorage("userInfo")|| ""
        }
    },
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
        }
    }
})
const pinia =createPinia()
export default pinia


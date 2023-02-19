import { defineStore ,createPinia} from "pinia"
import { counterState } from "./interface/index"
import {setStorage,getStorage} from "@/utils/index"
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
            console.log("token",token);
            setStorage("token",token)
            this.token = token
            
        },
        // setUserInfo
        setUserInfo(userInfo: any) {
            console.log("userInfo",userInfo);
            this.userInfo = userInfo;
            setStorage("userInfo",userInfo)
        },
    }
})
const pinia =createPinia()
export default pinia


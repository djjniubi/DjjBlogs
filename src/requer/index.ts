import axios from "axios"
import type {AxiosInstance,AxiosError,AxiosRequestConfig,AxiosResponse} from "axios"
import {setStorage,getStorage,removeStorage} from "@/utils/index"
import {ResultEnum} from "@/enums/httpEnums"
import {errorType} from "@/requer/errorType"
import {GlobalStore} from "@/store"
import router from "@/route"
const globalStore=GlobalStore()
const config ={
    baseURL:import.meta.env.VITE_API_URL as string,
    timeout:ResultEnum.TIMEOUT as number,
}
const http:AxiosInstance=axios.create(config)
// http.defaults.withCredentials=true
//请求拦截
http.interceptors.request.use((config)=>{
    const token = getStorage("token")
    if(token){
        config.headers["Authorization"]="Bearer "+token
    }
    return config
},(error:AxiosError)=>{
    return Promise.reject(error)
})  

//响应拦截
http.interceptors.response.use((response:AxiosResponse)=>{
    console.log("response",document.cookie.split(" "));
    let message = ''
    const {data} =response
    if(data.code==200){
        return data
    }else{
        message =  errorType(data?.code)
        globalStore.removeUser()
    }
},(error:AxiosError)=>{
    let message = ''
    // HTTP 状态码
    const status = error.response?.status ||"0"
    errorType(status)
    switch (status) {
        case 401:
            message="登入过期,请重新登入"
            globalStore.removeUser()
            router.push("/login")
            break;
    
        default:
            break;
    }
    return Promise.reject(error)
})
export default http
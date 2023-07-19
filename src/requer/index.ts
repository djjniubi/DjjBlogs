/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-07-18 16:38:33
 */
import axios from "axios"
import type {AxiosInstance,AxiosError,AxiosRequestConfig,AxiosResponse} from "axios"
import {setStorage,getStorage,removeStorage} from "@/utils/index"
import {ResultEnum} from "@/enums/httpEnums"
import {errorType} from "@/requer/errorType"
import {GlobalStore} from "@/store"
import router from "@/route"
const globalStore=GlobalStore();
console.log("import.meta.env.VITE_API_URL ",import.meta.env.VITE_API_URL);

const config ={
    baseURL:import.meta.env.VITE_API_URL as string,
    timeout:ResultEnum.TIMEOUT as number,
}
const http:AxiosInstance=axios.create(config)
http.defaults.withCredentials=true
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
    const {code} =data
    // return data
    if(code==200){
        return data
    }else if(code==401){
        // message =  errorType(code)
        globalStore.removeUser()
    }else if(code==404){
        message=data.message
        return data
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
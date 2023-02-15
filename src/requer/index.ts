import axios from "axios"
import type {AxiosInstance,AxiosError,AxiosRequestConfig,AxiosResponse} from "axios"
import {setStorage,getStorage} from "@/utils/index"
const http:AxiosInstance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:60000,
    headers:{
        "content-type":"application/json; charset=utf-8",
        " Access-Control-Allow-Credentials":true,
    },
     
    // withCredentials:true,
   
    
})
// http.defaults.withCredentials=true
//请求拦截
http.interceptors.request.use((config)=>{
    const token = getStorage("token")
    if(token){
        config.headers["Authorization"]="Bearer"+token
    }
    return config
},(error:AxiosError)=>{
    return Promise.reject(error)
})  

//响应拦截
http.interceptors.response.use((response: AxiosResponse)=>{
    console.log("response",document.cookie);
    
    const {data} =response
    return data
},(error:AxiosError)=>{
    let message = ''
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
        case 401:
            message="登入过期,请重新登入"
            break;
    
        default:
            break;
    }
    return Promise.reject(error)
})
export default http
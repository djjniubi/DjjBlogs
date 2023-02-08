import axios from "axios"
import type {AxiosInstance,AxiosError,AxiosRequestConfig,AxiosResponse} from "axios"

const http:AxiosInstance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:60000
})
//请求拦截
http.interceptors.request.use((config)=>{
    return config
},(error:AxiosError)=>{
    return Promise.reject(error)
})  

//响应拦截
http.interceptors.response.use((response: AxiosResponse)=>{
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
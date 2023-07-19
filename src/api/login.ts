/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-07-19 08:06:54
 */
import http from "@/requer/index"
//注册用户
export const register=(data:any)=>{
    return http.request({
        url:"/api/user/add",
        method:"POST",
        data:data
    })
}

//登录 /user/login
export const userLogin=(data:any)=>{
    return http.request({
        url:"/api/v1/login",
        method:"POST",
        data:data,
    
    })
}
//验证验证码 /code/auth
export const codeAuth=(code:any)=>{
    return http.request({
        url:`/api/auth/${JSON.stringify(code["code"])}`,
        method:"GET",
        
    })
}
//获取验证码 /code/captcha
export const codeCaptcha=()=>{
    return http.request({
        url:"/api/captcha",
        method:"GET",
        withCredentials:true
    })
}
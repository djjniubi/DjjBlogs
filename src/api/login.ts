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
        url:"/api/user/login",
        method:"POST",
        data:data
    })
}
//验证验证码 /code/auth
export const codeAuth=(code:any)=>{
    return http.request({
        url:`/code/auth/${JSON.stringify(code["code"])}`,
        method:"GET",
    })
}
//获取验证码 /code/captcha
export const codeCaptcha=()=>{
    return http.request({
        url:"/code/captcha",
        method:"GET"
    })
}
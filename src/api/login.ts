import http from "@/requer/index"
//注册用户
export const register=(data:any)=>{
    return http.request({
        url:"/api/user/add",
        method:"POST",
        data:data
    })
}

//获取验证码 /code/captcha
export const codeCaptcha=()=>{
    return http.request({
        url:"/code/captcha",
        method:"GET"
    })
}
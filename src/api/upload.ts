import http from "@/requer"

export const upload=(data:any)=>{
    return http.request({
        url:"/upload",
        method:"POST",
        data:data
    })
}
import http from "@/requer";
//获取文章列表 /api/article/list

export function articleList(data:any){
    return http.request({
        url:"/api/article/list",
        method:"GET",
    })
}
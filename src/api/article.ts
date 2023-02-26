import http from "@/requer";
//获取文章列表 /api/article/list
export function articleList(data:any){
    return http.request({
        url:"/api/article/list",
        method:"GET",
    })
}

//新增文章 /api/article/add
export function articleAdd(data:any){
    return http.request({
        url:"/api/article/add",
        method:"post",
        data
    })
}

//修改文章  /api/article/update
export function articleUpdate(data:any){
    return http.request({
        url:"/api/article/update",
        method:"put",
    })
}

//删除文章  /api/article/delete/:id
export function articleDelete(id:any){
    return http.request({
        url:`/api/article/delete${id}`,
        method:"DELETE",
    })
}

//文章详情  /api/article/particulars/:id
export function articleParticulars(id:any){
    return http.request({
        url:`/api/article/particulars/${id}`,
        method:"GET",
    })
}

//文章分类列表 /api/categories/list

export function categoriesList(query:any){
    return http.request({
        url:`/api/categories/list`,
        method:"GET",
    })
}
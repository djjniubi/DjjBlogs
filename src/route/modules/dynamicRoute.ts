/**
 * @param name ==>  菜单名
 * @param path  ==> 菜单路径
 * @param mera  ==>  菜单信息
 * @param component  ==>组件路径
 * @param  children  ==>子路由
 */
const dynamic=[{
    name:"首页",
    path:"/home/index",
    mera:{
        icon:""
    },
    component:"/home/index"
},{
    name:"文章列表",
    path:"/articleList/index",
    mera:{
        icon:""
    },
    component:"/articleList/index"
}]

export default dynamic
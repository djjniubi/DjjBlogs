/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-13 11:48:32
 */
import Upload from "@/components/Upload/index.vue"
export default {
    title:"常用组件",
    menuOrder:3,
    icon:"Tickets",
    isAffix:false,
    meta:{
        icon:"Tickets",
        title:"常用组件",
        isAffix:false 
    },
    children:[{title:"文件上传",name:"",path:"/component/upload",icon:"Tickets",meta:{title:"文件上传",icon:"Tickets"},component:Upload}]
}
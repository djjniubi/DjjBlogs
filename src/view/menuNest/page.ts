/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-13 08:25:06
 * @LastEditTime: 2023-06-13 14:20:22
 */
import Menu1 from "./component/Menu1.vue";
import Menu2 from "./component/Menu2.vue";
export default {
    title:"嵌套菜单",
    menuOrder:2,
    icon:"Tickets",
    isAffix:false,
    children:[
        {
            title:"嵌套菜单1",
            name:"嵌套菜单1",
            icon:"Tickets",
            path:"/component/menu1",
            meta:{
                title:"嵌套菜单1",
                icon:"Tickets",
                isAffix:false 
            },
            children:[
                {
                    title:"嵌套菜单1",
                    name:"嵌套菜单1",
                    icon:"Tickets",
                    path:"/component/menu1",
                    meta:{
                        title:"嵌套菜单1",
                        icon:"Tickets",
                        path:"/component/menu1",
                        isAffix:false 
                    },
                    component:Menu1,
                },
            ]
        },
        {
            title:"嵌套菜单2",
            name:"嵌套菜单2",
            icon:"Tickets",
            path:"/component/menu2",
            meta:{
                title:"嵌套菜单2",
                icon:"Tickets",
            },
            children:[
                {
                    title:"嵌套菜单2",
                    name:"嵌套菜单2",
                    icon:"Tickets",
                    path:"/component/menu2",
                    meta:{
                        title:"嵌套菜单2",
                        icon:"Tickets",
                        path:"/component/menu2",
                    },
                    component:Menu2,
                },
            ]
        },
        
    ]
}
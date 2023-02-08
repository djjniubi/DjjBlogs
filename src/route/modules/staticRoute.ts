import { RouteRecordRaw } from "vue-router"
const staticRoute: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home/index"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/view/login/index.vue"),
        meta: {}
    },
    {
        path: "/layouts",
        name: "layouts",
        component: () => import("@/layouts/index.vue"),
        redirect: "/home/index",
        children: [
            {
                path: "/home/index",
                name: "home",
                component: () => import("@/view/home/index.vue")
            }
        ]
    },
    {
        path: "/articleList",
        name: "articleList",
        component: () => import("@/layouts/index.vue"),
        children: [{

            path: "/articleList/index",
            name: "list",
            component: () => import("@/view/articleList/index.vue")
        }]
    }
]
export default staticRoute
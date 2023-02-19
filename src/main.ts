import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//ElementPlus
import ElementPlus from "element-plus"
//ElementPlus css
import "element-plus/dist/index.css"
//element icon
import * as Icons from '@element-plus/icons-vue'
//router
import router from './route'
import pinia from "@/store"
const app=createApp(App)

// 注册element icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(router).use(ElementPlus).use(pinia).mount('#app')

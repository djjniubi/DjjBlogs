import { createApp } from 'vue';
import "@/style/index.scss";
import App from './App.vue';
//ElementPlus
import ElementPlus from "element-plus";
//ElementPlus css
import "element-plus/dist/index.css";
//element icon
import * as Icons from '@element-plus/icons-vue';
//icon
import "@/assets/icon/iconfont.scss";
//element (内置的暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'
//国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
//router
import router from './route'
import pinia from "@/store"
const app=createApp(App)

// 注册element icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(router).use(ElementPlus,{locale:zhCn}).use(pinia).mount('#app')

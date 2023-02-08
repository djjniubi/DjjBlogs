<template>
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px">
            <div class="nav-menu">
                <el-scrollbar >
                   <el-menu :router="true" background-color="#545c64" text-color="#fff">
                    <NavMenu :menuList="menuList"/>
                   </el-menu>
                </el-scrollbar>
            </div>
        </el-aside>
        <el-container>
            <!-- 头部 -->
            <el-header>
                <div class="">
                    <ToolBarLeft/>
                </div>
                <ToolBarRight/>
            </el-header>
            <!-- 内容主体 -->
            <el-main>
                <div></div>
               <Main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import NavMenu from './components/Menu/NavMenu.vue';
import ToolBarLeft from "./components/Header/ToolBarLeft.vue"
import ToolBarRight from "./components/Header/ToolBarRight.vue"
import {useRouter,useRoute } from "vue-router"
import {dynamic} from "../route/modules/dynamicRoute"
import Main from "./components/Main/Main.vue"
const router = useRouter();
console.log("router",router);
const menuList:object[]=dynamic
    const route = useRoute()
    const modules=import.meta.glob("../view/**/*.vue")
console.log("modules",modules);
</script>

<style lang="scss" scoped>
.nav-menu{
    width:  210px;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    background-color: #545c64;
    .el-scrollbar {
				height: calc(100% - 55px);
				.el-menu {
					overflow-x: hidden;
					border-right: none;
				}
			}
}
.el-container{
    width: 100%;
    height: 100%;
    .el-aside{
        width: auto;
        overflow: inherit;
    }
    .el-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.el-main{
    padding: 10px 12px;
    background-color: #f0f2f5;
}
</style>
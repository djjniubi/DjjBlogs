<template>
    <el-container>
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
            <el-header>
                <div class="">
                    <ToolBarLeft/>
                    <!-- <div>首页</div> -->
                </div>
                <ToolBarRight/>
            </el-header>
            <el-main>
                <div></div>
               <!-- <Home/> -->
                <router-view v-slot="{ Component, route }">
                    <div>{{ route }}</div>
                    <div>{{ Component  }}</div>
                    <!-- <transition appear name="fade-transform" mode="out-in">
                        <keep-alive :include="'Homn'">
                            <component :is="Component" :key="route.path"></component>
                        </keep-alive>
                    </transition> -->
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import NavMenu from './components/Menu/NavMenu.vue';
import ToolBarLeft from "./components/Header/ToolBarLeft.vue"
import ToolBarRight from "./components/Header/ToolBarRight.vue"
import {useRouter,useRoute } from "vue-router"
import dynamic from "../route/modules/dynamicRoute"
import Home from "../view/home/index.vue"
const router = useRouter();
console.log("router",router);
const menuList:object[]=dynamic
    const route = useRoute()

    console.log("route",route.query);
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
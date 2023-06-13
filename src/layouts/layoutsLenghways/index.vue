<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 08:23:52
 * @LastEditTime: 2023-06-13 20:20:01
-->
<template>
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px">
            <div class="nav-menu">
                <div class="logo row-center-center" :style="{width:themeConfig.isCollapse?'56px':'210px' }"><img src="../../assets/vue.svg" alt="logo" srcset=""><span class="text" v-show="!themeConfig.isCollapse">Vite+Vue3+ts</span></div>
                
                <el-scrollbar >
                   <el-menu class="el-menu-vertical-demo" :collapse="themeConfig.isCollapse" :default-active="route.path" active-text-color="#ffd04b" background-color="#191a20" text-color="#fff"  @open="handleOpen"
                   @close="handleClose">
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
        <el-container class="lenghways-main">
            <Main/>
        </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import {ref,computed} from "vue"
import NavMenu from '../components/Menu/NavMenu.vue';
import ToolBarLeft from "../components/Header/ToolBarLeft.vue"
import ToolBarRight from "../components/Header/ToolBarRight.vue"
import {useRouter,useRoute } from "vue-router"
import {dynamic} from "../../route/modules/dynamicRoute"
import Main from "../components/Main/Main.vue"
import {GlobalStore} from "@/store"
const router = useRouter();

const menuList:object[]=dynamic;
const globalStore =GlobalStore();
const themeConfig =computed(()=>globalStore.themeConfig);
const route = useRoute();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen",key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose",key, keyPath)
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>
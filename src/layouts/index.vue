<template>
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px">
            <div class="nav-menu">
                <el-scrollbar >
                   <el-menu class="el-menu-vertical-demo" :default-active="router.currentRoute.value.fullPath" active-text-color="#79bbff" :router="true" background-color="#545c64" text-color="#fff"  @open="handleOpen"
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
            <el-main>
                <div></div>
               <Main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import {ref} from "vue"
import NavMenu from './components/Menu/NavMenu.vue';
import ToolBarLeft from "./components/Header/ToolBarLeft.vue"
import ToolBarRight from "./components/Header/ToolBarRight.vue"
import {useRouter,useRoute } from "vue-router"
import {dynamic} from "../route/modules/dynamicRoute"
import Main from "./components/Main/Main.vue"
const router = useRouter();
 console.log("router2222",router.currentRoute.value.fullPath
)
const menuList:object[]=dynamic
const route = useRoute()
const activeIndex=ref("0")
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen",key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose",key, keyPath)
}
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
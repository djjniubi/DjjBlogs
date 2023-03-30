<template>
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px">
            <div class="nav-menu">
                <el-scrollbar >
                   <el-menu class="el-menu-vertical-demo" :collapse="themeConfig.isCollapse" :default-active="router.currentRoute.value.fullPath" active-text-color="#79bbff" :router="true" background-color="#545c64" text-color="#fff"  @open="handleOpen"
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
import {ref,computed} from "vue"
import NavMenu from './components/Menu/NavMenu.vue';
import ToolBarLeft from "./components/Header/ToolBarLeft.vue"
import ToolBarRight from "./components/Header/ToolBarRight.vue"
import {useRouter,useRoute } from "vue-router"
import {dynamic} from "../route/modules/dynamicRoute"
import Main from "./components/Main/Main.vue"
import {GlobalStore} from "@/store"
const router = useRouter();
const menuList:object[]=dynamic;
const globalStore =GlobalStore();
const themeConfig =computed(()=>globalStore.themeConfig);
const route = useRoute();
const activeIndex=ref("0");
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen",key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose",key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-container {
	width: 100%;
	height: 100%;
	.el-aside {
		width: auto;
		overflow: inherit;
		background-color: #191a20;
		border-right: 1px solid #191a20;
		.nav-menu {
			display: flex;
			flex-direction: column;
			height: 100%;
			transition: all 0.3s ease;
			.el-scrollbar {
				height: 100%;
				.el-menu {
					overflow-x: hidden;
					border-right: none;
				}
			}
		}
	}
	.el-header {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 55px;
		padding: 0 15px;
		border-bottom: 1px solid #f1f1f1;
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
}
</style>
<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 14:13:30
 * @LastEditTime: 2023-07-14 21:59:01
-->
<template>
  <!-- 分栏布局 -->

  <el-container>
    <div class="father-navmenu">
        <div class="logo row-center-center">
            <img class="logo-image" src="../../assets/vue.svg" alt="">
        </div>
        <el-scrollbar >
            <div class="scroll-item column-center-center" v-for="(item,index) in menuList" :key="item.path"  @click="fatherMenu(item)">
                 <el-icon size="22">
                    <component :is="item.meta.icon"></component>
                 </el-icon>
                 <span >{{ item.meta.title }}</span>
            </div>
        </el-scrollbar>
    </div>
    <el-aside :class="{'no-aside':!subMenuList.length}" :style="{ width: themeConfig.isCollapse ? '65px' : '210px' }">
       <el-menu :collapse="themeConfig.isCollapse" :default-active="route.currentRoute.value.fullPath" :unique-opened="true">
        <NavMenu :menuList="subMenuList"></NavMenu>
       </el-menu>
    </el-aside>
  <el-container>
    <el-header class="row-between-center">
      <ToolBarLeft />
      <ToolBarRight />
    </el-header>
    <Main />
  </el-container>
  </el-container>
</template>
<script setup lang="ts">
import {ref,watch,computed} from "vue";
import {useRoute,useRouter} from "vue-router";
import NavMenu from "../components/Menu/NavMenu.vue";
import ToolBarLeft from "../components/Header/ToolBarLeft.vue";
import ToolBarRight from "../components/Header/ToolBarRight.vue";
import Main from "../components/Main/Main.vue";

import { GlobalStore } from "@/store";
import { userAuthStore } from "@/store/modules/auth";

const minuserAuthStore = userAuthStore();
const menuList: any[] = minuserAuthStore.flatMenuListGet;
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const route=useRouter()
console.log("route",route);

const subMenuList=ref<any>([])
const fatherMenu =(data: any)=>{
    if(data.children) {
        subMenuList.value=data.children
    }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
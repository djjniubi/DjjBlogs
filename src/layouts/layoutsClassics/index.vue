<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 08:23:52
 * @LastEditTime: 2023-07-14 18:14:42
-->

<!-- 经典布局 -->
<template>
  <el-container>
    <el-header>
      <div class="row-center-center">
        <div class="logo row-center-center">
        <img class="logo-img" src="../../assets/vue.svg" alt="">
        <span class="logo-text" style="font-size: 22px;">Vite+Vue+TS</span>
        </div>
        <ToolBarLeft />
      </div>
      <ToolBarRight />
    </el-header>
    <el-container class="left-menu">
      <el-aside width="360px">
        <div class="nav-menu">
          <el-scrollbar>
            <el-menu class="el-menu-vertical-demo" :collapse="themeConfig.isCollapse" :default-active="activeMenu"  @open="handleOpen" @close="handleClose">
              <NavMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
    <el-container class="classics-main">
      <Main />
    </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import NavMenu from "../components/Menu/NavMenu.vue";
import ToolBarLeft from "../components/Header/ToolBarLeft.vue";
import ToolBarRight from "../components/Header/ToolBarRight.vue";
import { useRouter, useRoute } from "vue-router";
import Main from "../components/Main/Main.vue";
import { GlobalStore } from "@/store";

import {userAuthStore} from "@/store/modules/auth"
const route = useRoute();

const minuserAuthStore=userAuthStore();
const menuList:object[]=minuserAuthStore.flatMenuListGet;
const activeMenu =computed(()=>(route.meta.activeMenu?route.meta.activeMenu:route.path))
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const handleOpen = (key: string, keyPath: string[]) => {

};
const handleClose = (key: string, keyPath: string[]) => {
 
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

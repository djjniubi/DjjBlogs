<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 14:13:30
 * @LastEditTime: 2023-06-12 16:25:09
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
    <el-aside :class="{'no-aside':!subMenuList.length}">
       <el-menu>
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
import {ref,watch} from "vue";
import {useRoute} from "vue-router";
import NavMenu from "../components/Menu/NavMenu.vue";
import ToolBarLeft from "../components/Header/ToolBarLeft.vue";
import ToolBarRight from "../components/Header/ToolBarRight.vue";
import Main from "../components/Main/Main.vue";
import {dynamic} from "@/route/modules/dynamicRoute";
const route=useRoute()
const menuList= dynamic;
const subMenuList=ref<any>([])
    watch(()=>[route],()=>{
    console.log("66666");
    
   })
const fatherMenu =(data: any)=>{
 
    if(data.children) {
        subMenuList.value=data.children
        console.log("fatherMenu",data);
        console.log("subMenuList",subMenuList.value);
        
    }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
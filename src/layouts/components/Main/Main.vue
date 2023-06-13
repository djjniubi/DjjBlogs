<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-13 09:35:09
-->
<template>
    <Tabs/>
    <el-main>
        <router-view v-slot="{ Component, route }">
        <!-- <transition appear name="fade-transform" mode="out-in"> -->
            <keep-alive :include="'Homn'">
                <component :is="Component" :key="route.path"></component>
            </keep-alive>
        <!-- </transition> -->
    </router-view>
    </el-main>
</template>
<script setup lang="ts"> 
import Tabs from "../Tabs/index.vue"
</script>
<style lang="scss">
.el-main{
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: var(--el-bg-color-page);
    padding: 10px 12px;
}
</style>
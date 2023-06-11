<!--
 * @Author: 前端菜鸟-->邓建军
 * @Date: 2023-02-24 21:05:07
 * @FilePath: \DjjBlogs\src\layouts\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-10 11:53:33
-->
<template>
<component :is="layoutsCompont[globalStore.themeConfig.layouts]"></component>
<ThemeDrawer/>
</template>

<script setup lang="ts">
import ThemeDrawer  from "./components/ThemeDrawer/index.vue"
import layoutsClassics from "./layoutsClassics/index.vue";
import layoutsLengthways from "./layoutsLenghways/index.vue"
import {GlobalStore} from "@/store"
const globalStore =GlobalStore();
const layoutsCompont:{[key:string]:any}={
    classics:layoutsClassics,
    lengthways:layoutsLengthways,
    crosswise:layoutsClassics,
    subfield:layoutsClassics
}
</script>

<style lang="scss" scoped>
</style>
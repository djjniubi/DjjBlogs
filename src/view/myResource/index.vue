<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-21 21:02:27
 * @FilePath: \DjjBlogs\src\view\myResource\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-07-23 18:20:27
-->
<template>
  <div class="resource">
    我的资源
    <ScroullTabel :config="config"/>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

const config={
  headerData:['姓名','年龄','月薪'],
  headerWidth:80,
  headerHeight:50,
  headerFontSize:18,
  headerFontWeight:700
  
}
import ScroullTabel from "./component/ScroullTabel.vue"
</script>
<style lang="scss" scoped>
.resource {
  width: 100%;
  height: 100%;
  background-color: white;
}


</style>

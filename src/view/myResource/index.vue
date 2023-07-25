<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-21 21:02:27
 * @FilePath: \DjjBlogs\src\view\myResource\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-24 09:22:00
-->
<template>
  <div class="resource">
    我的资源
    <ScroullTabel :config="config"/>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref,onMounted } from "vue";

const config:Ref=ref({});
config.value={
  //标题数据
  headerData:['姓名','年龄','月薪'],
  //标题宽度
  headerWidth:80,
  //标题高度
  headerHeight:50,
  //标题字号
  headerFontSize:18,
  //标题是否加粗
  headerFontWeight:700,
  //标题背景色
  headerBg:"#fd5565"
  
}
onMounted(()=>{
  setTimeout(() => {
  config.value.headerBg="#bf1125"
}, 2000);
})

import ScroullTabel from "./component/ScroullTabel.vue"
</script>
<style lang="scss" scoped>
.resource {
  width: 100%;
  height: 100%;
  background-color: white;
}


</style>

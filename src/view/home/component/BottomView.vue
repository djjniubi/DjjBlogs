<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-13 22:40:58
 * @FilePath: \DjjBlogs\src\view\home\component\BottomView.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-14 23:44:01
-->
<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <SearchView />
    </el-col>
    <el-col :span="12"> 
        <ClassifyView />
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import SearchView from "./Search/index.vue";
import ClassifyView from "./Classify/index.vue";
</script>

<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-14 23:42:07
 * @FilePath: \DjjBlogs\src\view\home\component\Classify\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-15 00:10:49
-->
<template>
    <el-card class="box-card">
        <template #header>
          <div class="card-header row-between-center">
            <span>分类销量排行</span>
            <el-radio-group v-model="radio1" class="view-radio-group">
            <el-radio-button label="品类" />
            <el-radio-button label="商品" />
          </el-radio-group>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
      </el-card>
</template>
<script setup lang="ts">
import {ref} from "vue";
const radio1 = ref("品类");
</script>

<style lang="scss" scoped>
.card-header{
    .view-radio-group{
        text-align: right;
    }
}
</style>
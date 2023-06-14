<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-14 23:40:50
 * @FilePath: \DjjBlogs\src\view\home\component\Search\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-15 00:01:36
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>搜索关键词</span>
      </div>
    </template>
    <div class="search-view-wapper">
      <div class="search-view-item1 row-start-center">
        <div class="view-item">
          <div>搜索用户数</div>
          <div>93,634</div>
          <div></div>
        </div>
        <div class="view-item">
          <div>搜索量</div>
          <div>198,782</div>
          <div></div>
        </div>
      </div>
      <div class="search-view-item2">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="ranking" label="排名" />
          <el-table-column prop="antistop" label="关键词"/>
          <el-table-column prop="searchVolume" label="搜索总量"/>
          <el-table-column prop="searchUser" label="搜索用户数" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const tableData = [
  {
    ranking: "1",
    antistop: "Tom",
    searchVolume: "7888",
    searchUser:"7888"
  },
  {
    ranking: "2",
    antistop: "Tom",
    searchVolume: "7888",
    searchUser:"7888"
  },
  {
    ranking: "3",
    antistop: "Tom",
    searchVolume: "7888",
    searchUser:"7888"
  },
  {
    ranking: "4",
    antistop: "Tom",
    searchVolume: "7888",
    searchUser:"7888"
  },
];
</script>
<style lang="scss" scoped>
.search-view-wapper {
  .search-view-item1 {
    .view-item {
      flex: 1;
    }
  }
}
</style>

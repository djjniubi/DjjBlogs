<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-14 23:40:50
 * @FilePath: \DjjBlogs\src\view\home\component\Search\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-15 23:17:21
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
          <div id="search-echart" :style="{ width: '100%', height: '100%' }"></div>
        </div>
        <div class="view-item">
          <div>搜索量</div>
          <div>198,782</div>
          <div id="ranking-echart" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
      <div class="search-view-item2">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="ranking" label="排名" />
          <el-table-column prop="antistop" label="关键词"/>
          <el-table-column prop="searchVolume" label="搜索总量"/>
          <el-table-column prop="searchUser" label="搜索用户数" />
        </el-table>
        <el-pagination class="pagination" background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {EChartsOption} from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
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
const arr1=[220,215,5,190,180,56,110,80,10,130,120,120,60,90,80,10,8,7,6,5,0];
const arr2=[562,443,553,236,52,145,635,123,423,326,254,261,259,225,250,350,420,125,330,540,220]
function setOption(seriesData:number[]):EChartsOption{
  return {
    xAxis:{
      type:"category",
      show:false,
      boundaryGap:false
    },
    yAxis:{
      show:false,
    },
    series:[
      {
        type:"line",
        data:seriesData,
        areaStyle:{
          color:"rgba(95,187,255,.5)",
        },
        lineStyle:{
          width:0
        },
        itemStyle:{
          opacity:0
        },
        smooth:true
      }
    ],
    grid:{
      top:0,
      right:0,
      left:0,
      bottom:0

    }
  }
}

onMounted(()=>{
  nodeElemt("#search-echart", setOption(arr1));
  nodeElemt("#ranking-echart", setOption(arr2));
})
</script>
<style lang="scss" scoped>
.search-view-wapper {
  display: flex;
  flex-direction: column;
  height: 452px;
  .search-view-item1 {
    .view-item {
      flex: 1;
      padding: 0 10px;
    }
  }
  .search-view-item2{
    margin-top: 20px;
    .pagination{
      margin-top: 20px;
     display: flex;
     justify-content: end;
    }
  }
}
</style>

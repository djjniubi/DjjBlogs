<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 08:40:15
 * @LastEditTime: 2023-06-14 15:53:02
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-menu class="sales-view-menu" mode="horizontal" :default-active="'1'" @select="onMenu">
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="2">Processing Center</el-menu-item>
        </el-menu>
        <div class="header-right row-end-center">
          <el-radio-group v-model="radio1" class="view-radio-group">
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
          <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="To" start-placeholder="Start date" end-placeholder="End date" :shortcuts="shortcuts" :size="size" />
        </div>
      </div>
    </template>
    <div id="sales-dom" :style="{width:'70%',height:'500px'}"></div>
    <div>
       <div></div>
       <div></div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import * as echarts from "echarts";
import {EChartsOption} from "echarts"
const radio1 = ref("New York");
const size = ref<"default" | "large" | "small">("default");
const value2 = ref("");
const shortcuts = [
  {
    text: "上周",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "上个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "最近三个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
const onMenu = (index: string) => {
  console.log("onMenu", index);
};
/** 图表配置*/
function setOption():EChartsOption{
 return {
  tooltip:{trigger:'axis'},
  series:[{
    name: 'Direct',
    type:"bar",
    data:[410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
    tooltip:{
      show:true
    }
  }],
  xAxis:{
    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  },
  yAxis:{}
 }
}
onMounted(()=>{
  const dom=document.querySelector("#sales-dom") as HTMLElement;
  const chare =echarts.init(dom);
  chare.setOption(setOption())
})
</script>

<style lang="scss" scoped>
:deep(.el-card__header) {
  padding: 0;
  border: none;
}
.card-header {
  position: relative;
  display: flex;
  .sales-view-menu{
    width: 100%;
    margin-left: 15px;
    .el-menu-item{
      height: 50px;
      line-height: 50px;
    }
  }
  .header-right {
    position: absolute;
    top: 0;
    right: 15px;
    height: 50px;
    .view-radio-group{
      margin-right: 15px;
    }
  }
}
</style>

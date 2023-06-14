<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 08:40:15
 * @LastEditTime: 2023-06-14 23:34:35
-->
<template>
  <div style="margin-bottom: 20px;">
    <el-card class="box-card" :body-style="{padding:'0 20px 20px 20px'}">
    <template #header>
      <div class="card-header">
        <el-menu class="sales-view-menu" mode="horizontal" :default-active="'1'" @select="onMenu">
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
        <div class="header-right row-end-center">
          <el-radio-group v-model="radio1" class="view-radio-group">
            <el-radio-button label="今日" />
            <el-radio-button label="本周" />
            <el-radio-button label="本月" />
            <el-radio-button label="今年" />
          </el-radio-group>
          <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="到" start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :size="size" />
        </div>
      </div>
    </template>
    <div class="sales-view-chart-wrapper">
      <div id="sales-dom" class="echart"></div>
    <div class="sales-view-list">
       <div class="sales-view-title">排行榜</div>
       <div class="sales-view-wrapper">
           <div class="list-item row-start-center" v-for="item in list" :key="item.no">
           <div :class="['list-item-no','row-center-center',item.no<=3?'top-no':'']">{{ item.no }}</div>
          <div>{{ item.name }}</div>
        <div class="list-item-money">{{ item.money }}</div>
       </div>
       </div>
       
    </div>
    </div>
  </el-card>
  </div>
  
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import * as echarts from "echarts";
import {EChartsOption} from "echarts"
const radio1 = ref("今日");
const size = ref<"default" | "large" | "small">("default");
const value2 = ref("");
const list=ref([
  {
    no:1,
    name:"排行榜",
    money:200
  }, {
    no:2,
    name:"排行榜",
    money:200
  }, {
    no:3,
    name:"排行榜",
    money:200
  }, {
    no:4,
    name:"排行榜",
    money:200
  }, {
    no:5,
    name:"排行榜",
    money:200
  }, {
    no:6,
    name:"排行榜",
    money:200
  }, {
    no:7,
    name:"排行榜",
    money:200
  },
])
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
  title:{
    text:"年度销售额",
    textStyle:{
      fontSize:12,
      color:"#666"
    },
    top:20,
    left:25
  },
  tooltip:{trigger:'axis'},
  series:[{
    name: 'Direct',
    type:"bar",
    data:[410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
    barWidth:"35%",
    tooltip:{
      show:true
    }
  }],
  xAxis:{
    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  },
  yAxis:{},
  grid:{
    bottom:20
  }
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
.sales-view-chart-wrapper{
  display: flex;
  height: 270px;
  .echart{
    flex: 0 0 70%;
    width: 70%;
    height: 100%;
  }
  .sales-view-list{
    flex: 1;
    height: 100%;
    .sales-view-title{
      margin-top: 20px;
      font-size: 12px;
      color: #666;
    }
    .sales-view-wrapper{
      margin-top: 15px;
      .list-item{
      
      padding: 6px 20px 6px 0;
      .list-item-no{
      width: 20px;
      height: 20px;
      margin-right: 8px;
      &.top-no{
      background-color:var(--el-text-color-primary);
      border-radius: 50%;
      color:var(--el-bg-color);
      font-weight: 500;
    }

    }
    .list-item-money{
      flex: 1;
      text-align: right;
    }
    }
    }
    

   
    
}
}

</style>

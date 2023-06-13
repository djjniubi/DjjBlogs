<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card">
        <CommonCar title="累计销售额" value="￥ 32,039,165">
          <template #default>
            <div class="compare-wrapper column-center-start">
              <div class="compare">
                <span>日同比</span>
                <span class="emphasis">7.33%</span>
                <div class="increase"></div>
              </div>
              <div class="compare">
                <span>月同比</span>
                <span class="emphasis">7.33%</span>
                <div class="decrease"></div>
              </div>
            </div>
          </template>
          <template #footer>
            <span>昨日销售额</span>
            <span class="emphasis">￥ 30,000,000</span>
          </template>
        </CommonCar>
      </el-card></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <CommonCar title="累计订单量" value="￥ 2,157,420">
          <template #default>
            <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div>
          </template>
          <template #footer>
            <span>昨日订单量</span>
            <span class="emphasis">￥ 2,000,000</span>
          </template>
        </CommonCar></el-card
      ></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <CommonCar title="今日交易用户数" value="81,014">
          <template #default>
            <div id="total-user-chart" :style="{width:'100%',height:'100%'}"></div>
          </template>
          <template #footer>
            <span>退货率</span>
            <span class="emphasis">5.14%</span>
          </template>
        </CommonCar>
      </el-card></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <CommonCar title="累计用户数" value="1,087,503">
          <template #default>
            <div id="total-user2-chart" :style="{width:'100%',height:'100%'}"></div>
          </template>
          <template #footer>
            <span>昨日订单量</span>
            <span class="emphasis">￥ 2,000,000</span>
          </template>
        </CommonCar></el-card
      ></el-col
    >
  </el-row>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import * as echarts from "echarts";
import CommonCar from "./CommonCar/CommonCar.vue";
onMounted(()=>{
    const charDom=document.getElementById("total-orders-chart") as HTMLElement  ;
    const charDom2=document.getElementById("total-user-chart") as HTMLElement  ;
    const charDom3=document.getElementById("total-user2-chart") as HTMLElement  ;
    const chart= echarts.init(charDom);
    chart.setOption({
    xAxis:{
        type:"category",
        show:false,
        boundaryGap:false
    },
    yAxis:{
        show:false
    },
    series:[{
        type:"line",
        data:[620,432,220,532,790,430,220,320,532,320,834,690,530,220,620],
        areaStyle:{
            color:"purple"
        },
        lineStyle:{
            width:0
        },
        itemStyle:{
            opacity:0
        },
        smooth:true
    }],
    grid:{
        top:0,
        bottom:0,
        right:0,
        left:0
    }
   })
    
   const chart2= echarts.init(charDom2);
   chart2.setOption({
    color:['#3398DB'],
    series:[{
        type:"bar",
        data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],
        barWidth:"60%"
    }],
    xAxis:{
        type:"category",
        show:false,
        data:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],
    },
    yAxis:{
        show:false
    },
    grid:{
        top:0,
        bottom:0,
        right:0,
        left:0
    }
   })
   const chart3= echarts.init(charDom3);
   chart3.setOption({
    // color:['#3398DB'],
    series:[{
        type:"bar",
        stack:"总量",
        data:[200],
        barWidth:10,
        itemStyle:{
            color:"#45c946"
        }
    },{
        type:"bar",
        stack:"总量",
        data:[50],
        barWidth:10,
        itemStyle:{
            color:"#eee"
        }
    }],
    xAxis:{
        type:"value",
        show:false,
    },
    yAxis:{
        type:"category",
        show:false
    },
    grid:{
        top:0,
        bottom:0,
        right:0,
        left:0
    }
   })
})

</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    .increase,
    .decrease {
      width: 0;
      height: 0;
      border-width: 4px;
      border-style: solid;
    }
    .increase {
      border-color: transparent transparent red transparent;
      margin: 0 0 3px 5px;
    }
    .decrease {
      border-color: green transparent transparent transparent;
      margin: 3px 0 0 5px;
    }
  }
}
.emphasis {
  margin-left: 5px;
  font-weight: 700;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

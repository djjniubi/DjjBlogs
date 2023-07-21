<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 15:58:08
 * @LastEditTime: 2023-07-21 15:50:16
-->
<template>
  <div class="year-view">
    <div id="year-box" :style="{ width: '100%', height: '100%', marginTop: '25px' }"></div>
  </div>
</template>
<script setup lang="ts" name="Year">
import { ref, onMounted } from "vue";
import { EChartsOption } from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
function renderPieChart():EChartsOption{
    return {
      xAxis:{type:"category",data:["2015年","2016年","2017年","2018年","2019年","2020年","2021年","2022年","2023年"]},
      yAxis:{type:"value",name:"风险数",axisLine:{show:true},interval:100,max:500},
      toolbox:{},
      tooltip:{},
      series:[
        {   name:"item",
            type:"line",
            data:[150,210,110,220,310,290,190,270,190],
            symbolSize:10
        }
      ]
    }
}
onMounted(()=>{
    nodeElemt("#year-box",renderPieChart())
})
</script>
<style lang="scss" scoped>
.year-view {
  width: 920px;
  height: 340px;
  background-image: url("../../../../assets/icons/折线图.svg");
}
</style>

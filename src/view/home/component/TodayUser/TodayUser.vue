<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 09:00:33
 * @LastEditTime: 2023-06-14 13:29:43
-->
<template>
  <CommonCar title="今日交易用户数" value="81,014">
    <template #default>
      <div id="today-user-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template #footer>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </CommonCar>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import CommonCar from "../CommonCar/CommonCar.vue";
import { nodeElemt } from "@/hooks/echatesHook";
import {EChartsOption} from "echarts";
function setOption():EChartsOption {
  return {
    color: ["#3398DB"],
    tooltip:{
      trigger:"axis"
    },
    series: [
      { 
        name: 'Direct',
        type: "bar",
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
        barWidth: "60%",
        tooltip:{show:true}
      },
    ],
    xAxis: {
      type: "category",
      data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00"],
      show: false,
    },
    yAxis: {
      show: false,
    },
    grid: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
  };
}
onMounted(() => {
  nodeElemt("#today-user-chart", setOption());
});
</script>

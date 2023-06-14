<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 09:01:00
 * @LastEditTime: 2023-06-14 10:00:38
-->
<template>
  <common-car title="累计订单量" value="￥ 2,157,420">
    <template #default>
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template #footer>
      <span>昨日订单量</span>
      <span class="emphasis">￥ 2,000,000</span>
    </template>
  </common-car>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import CommonCar from "../CommonCar/CommonCar.vue";
import { nodeElemt } from "@/hooks/echatesHook";
function setOption() {
  return {
    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: "line",
        data: [620, 432, 220, 532, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
        areaStyle: {
          color: "purple",
        },
        lineStyle: {
          width: 0,
        },
        itemStyle: {
          opacity: 0,
        },
        smooth: true,
      },
    ],
    grid: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
  };
}
onMounted(() => {
  nodeElemt("#total-orders-chart", setOption());
});
</script>

<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 15:56:25
 * @LastEditTime: 2023-07-21 15:18:32
-->
<template>
  <div class="monthly-view">
    <div id="monthly-box" :style="{ width: '100%', height: '100%', marginTop: '25px' }"></div>
  </div>
</template>
<script setup lang="ts" name="Monthly">
import { ref, onMounted } from "vue";
import { EChartsOption } from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
const mockData = [
  ["product", "2022", "2023"],
  ["1", 120, 150],
  ["2", 120, 150],
  ["3", 150, 190],
  ["4", 120, 150],
  ["5", 150, 190],
  ["6", 210, 280],
  ["7", 250, 330],
  ["8", 120, 150],
  ["9", 300, 390],
  ["10", 90, 110],
  ["11", 50, 80],
  ["12", 330, 440],
];
function renderPieChart(mockData: Array<any>): EChartsOption {
  return {
    legend: {
      top: "5%",
      right: "10%",
      itemStyle: {
        borderWidth: 1,
        borderColor: "#fff",
        borderType: "solid",
        borderDashOffset: 10,
        borderJoin: "round",
      },
      data: [
        { name: "2022", icon: "circle" },
        { name: "2023", icon: "circle" },
      ],
      lineStyle: {
        width: 1,
        type: "solid",
      },
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {},
    dataset: { source: mockData },
    xAxis: { type: "category", name: "月份", nameTextStyle: { color: "#fff" }, axisTick: { show: false }, axisLabel: { color: "#fff" } },
    yAxis: {
      type: "value",
      boundaryGap: [0, "10%"],
      name: "风险数",
      position: "left",
      alignTicks: true,
      axisLine: { show: true, symbol: ["none", "arrow"], symbolSize: [8, 20], symbolOffset: [0, 15] },
      nameTextStyle: { color: "#fff" },
      axisTick: { show: false },
      axisLabel: { color: "#fff" },
    },
    series: [{ type: "bar",color:"#FDB146" }, { type: "bar",color:"#3DB6FC" }],
  };
}
onMounted(() => {
  nodeElemt("#monthly-box", renderPieChart(mockData));
});
</script>
<style lang="scss" scoped>
.monthly-view {
  width: 920px;
  height: 340px;
  background-image: url("../../../../assets/icons/柱状图.svg");
}
</style>

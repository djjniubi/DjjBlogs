<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 09:01:56
 * @LastEditTime: 2023-06-14 11:40:33
-->
<template>
  <CommonCar title="累计用户数" value="1,087,503">
    <template #default>
      <div id="total-user-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template #footer>
      <div class="row-start-center">
        <div class="compare row-start-center" style="margin-right: 10px;">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
        </div>
        <div class="compare row-start-center" >
          <span>月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
  </CommonCar>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import CommonCar from "../CommonCar/CommonCar.vue";
import { nodeElemt } from "@/hooks/echatesHook";
import { EChartsOption } from "echarts";
function setOption(): EChartsOption {
  return {
    series: [
      {
        type: "bar",
        stack: "总量",
        data: [200],
        barWidth: 10,
        itemStyle: {
          color: "#45c946",
        },
      },
      {
        type: "bar",
        stack: "总量",
        data: [50],
        barWidth: 10,
        itemStyle: {
          color: "#eee",
        },
      },
      {
        type: "custom",
        data: [200],
        renderItem: (params, api) => {
          const value = api.value(0);
          const endPoint = api.coord([value, 0]);
          return {
            type: "group",
            position: endPoint,
            children: [
              {
                type: "path",
                shape: {
                  d: "M952.32 715.2l-416-485.376c-12.16-14.176-36.448-14.176-48.608 0l-416 485.376c-8.128 9.472-9.984 22.848-4.768 34.176C72.16 760.704 83.488 768 96 768l832 0c12.512 0 23.84-7.296 29.056-18.624S960.448 724.672 952.32 715.2z",
                  x: -5,
                  y: 10,
                  width: 20,
                  height: 20,
                },
                style: {
                  fill: "#45c946",
                },
              },
              {
                type: "path",
                shape: {
                  d: "M957.056 338.624C951.84 327.296 940.512 320 928 320L96 320c-12.512 0-23.84 7.296-29.088 18.624-5.216 11.36-3.328 24.704 4.768 34.208l416 485.344c6.08 7.104 14.944 11.2 24.288 11.2s18.208-4.096 24.288-11.2l416-485.344C960.448 363.328 962.272 349.984 957.056 338.624z",
                  x: -5,
                  y: -(10 + 20),
                  width: 20,
                  height: 20,
                },
                style: {
                  fill: "#45c946",
                },
              },
            ],
          };
        },
      },
    ],
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
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
  nodeElemt("#total-user-chart", setOption());
});
</script>

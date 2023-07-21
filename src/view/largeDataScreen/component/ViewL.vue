<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 15:27:09
 * @LastEditTime: 2023-07-21 11:49:23
-->
<template>
  <div class="view-l">
    <div class="view-item1 row-between-start">
      <div class="item-l column-center-center">
        <div class="column-center-center ma-b-15 view-number">
          <p class="text1">1860</p>
          <p style="font-size: 14px; color: white">隐患排查数</p>
        </div>
        <div class="row-start-center l-view" style="">
          <div class="row-center-center view-l-box" style="">
            <p style="font-size: 14px">隐患排查率</p>
          </div>
          <div style="text-align: center; flex: 1">
            <p style="color: white">60%</p>
          </div>
        </div>
      </div>
      <div class="item-r column-center-center">
        <div class="column-center-center ma-b-15 view-number">
          <p class="text1">1655</p>
          <p style="font-size: 14px; color: white">隐患修复数</p>
        </div>
        <div class="row-start-center l-view" style="">
          <div class="row-center-center view-l-box" style="">
            <p style="font-size: 14px">隐患修复率</p>
          </div>
          <div style="text-align: center; flex: 1">
            <p style="color: white">89%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="view-item2">
      <div id="classify-echart" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </div>
</template>
<script setup lang="ts" name="ViewL">
import { ref, onMounted } from "vue";
import { EChartsOption } from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
type ParamsType = {
  legendname: string;
  value: number;
  percent: string;
};
const mockData = [
  { legendname: "A部门", value: 200, percent: "07.02%" },
  { legendname: "B部门", value: 360, percent: "12.64%" },
  { legendname: "C部门", value: 560, percent: "19.67%" },
  { legendname: "D部门", value: 189, percent: "06.64%" },
  { legendname: "E部门", value: 487, percent: "17.11%" },
  { legendname: "F部门", value: 365, percent: "12.82%" },
  { legendname: "G部门", value: 685, percent: "24.06%" },
];
function renderPieChart(mockData: Array<ParamsType>): EChartsOption {
  return {
    tooltip: {
      show: true,
      trigger: "item",
      formatter: function (params) {
        console.log("params", params);

        const data = params as any;
        return `${data.seriesName}<br/> ${data.marker}${data.data.legendname}<br/>数量: ${data.data.value}<br/>占比:${data.data.percent}`;
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        data: mockData,
        label: {
          show: true,
          position: "outer",
          formatter: function (params) {
            const data = params.data as ParamsType;
            return `${data.legendname}`;
          },
        },
        itemStyle:{
            borderWidth:5,
            borderColor: "rgba(0,0,0,0.9)",
            borderRadius:10  
        },
        radius: ["30%", "80%"],
      },
    ],
  };
}
onMounted(() => {
  nodeElemt("#classify-echart", renderPieChart(mockData));
});
</script>
<style lang="scss" scoped>
.view-l {
  width: 560px;
  height: 620px;
  position: absolute;
  left: 0;
  .view-item1 {
    width: 100%;
    margin-bottom: 20px;
    .item-l,
    .item-r {
      width: 274px;
      height: 160px;
    }
    .item-l {
      background-image: url("../../../assets/icons/左上角.svg");
    }
    .text1 {
      font-size: 48px;
      color: #58dbff;
      font-weight: bold;
    }
    .l-view {
      width: 230px;
      height: 32px;
      border: 1px solid #fff;
      border-radius: 6px;
      overflow: hidden;
    }
    .view-l-box {
      width: 138px;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 106, 225, 1) 0%, rgba(22, 183, 255, 1) 100%);
      border-radius: 6px;
      color: white;
    }
    .item-r {
      background-image: url("../../../assets/icons/左上角.svg");
    }
  }
  .view-item2 {
    width: 100%;
    height: 440px;
    background-image: url("../../../assets/icons/占比图.svg");
  }
}
</style>

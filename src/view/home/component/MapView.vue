<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-13 22:41:17
 * @FilePath: \DjjBlogs\src\view\home\component\MapView.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-21 08:51:38
-->
<template>
  <div>
    <div ref="mapEcharts" style="width: 100%;height: 680px;"></div>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,onMounted} from "vue";
import "echarts/extension/bmap/bmap";
import * as echarts from "echarts";
const mapEcharts =ref<any>(null);
  const state = reactive({
      datas: [
        {
          name: '海门',
          value: [121.15, 31.89, 100],
        },
        {
          name: '鄂尔多斯',
          value: [109.781327, 39.608266, 154],
        },
        {
          name: '舟山',
          value: [122.207216, 29.985295, 80],
        },
        {
          name: '金昌',
          value: [102.188043, 38.520089, 130],
        },
        {
          name: '乳山',
          value: [121.52, 36.89, 200],
        },
      ],
    })
function initEchart(){
const myMap =echarts.init(mapEcharts.value);
const option={
  title:{text:"百度地图",  left: 'center'},
   bmap:{
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
   },
   tooltip: {
          trigger: 'item',
        },
   series: [
          {
            name: 'assets',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: state.datas,
            symbolSize: function (val:any) {
              return val[2] / 5
            },
            encode: {
              value: 2,
            },
            label: {
              position: 'top',
            },
            itemStyle: {
              color: '#ddb926',
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
        ]
}
myMap.setOption(option);
}

onMounted(()=>{
  initEchart()
})
</script>
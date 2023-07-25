<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-14 23:42:07
 * @FilePath: \DjjBlogs\src\view\home\component\Classify\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-24 08:59:15
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header row-between-center">
        <span>分类销量排行</span>
        <el-radio-group v-model="radio1" class="view-radio-group">
          <el-radio-button label="品类" />
          <el-radio-button label="商品" />
        </el-radio-group>
      </div>
    </template>
    <div class="search-view-wapper">
      <div id="classify-echart" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { EChartsOption } from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
import { type } from "os";
const radio1 = ref("品类");
type ParamsType = {
  legendname: string;
  value: number;
  percent: string;
  name: string;
};

type FormatterParamsType = {
  componentType: "series";
  // 系列类型
  seriesType: string;
  // 系列在传入的 option.series 中的 index
  seriesIndex: number;
  // 系列名称
  seriesName: string;
  // 数据名，类目名
  name: string;
  // 数据在传入的 data 数组中的 index
  dataIndex: number;
  // 传入的原始数据项
  data: Object;
  // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
  value: number | Array<any> | Object;
  // 坐标轴 encode 映射信息，
  // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
  // value 必然为数组，不会为 null/undefied，表示 dimension index 。
  // 其内容如：
  // {
  //     x: [2] // dimension index 为 2 的数据映射到 x 轴
  //     y: [0] // dimension index 为 0 的数据映射到 y 轴
  // }
  encode: Object;
  // 维度名列表
  dimensionNames: Array<String>;
  // 数据的维度 index，如 0 或 1 或 2 ...
  // 仅在雷达图中使用。
  dimensionIndex: number;
  // 数据图形的颜色
  color: string;
  // 饼图/漏斗图的百分比
  percent: number;
  // 旭日图中当前节点的祖先节点（包括自身）
  treePathInfo: Array<any>;
  // 树图/矩形树图中当前节点的祖先节点（包括自身）
  treeAncestors: Array<any>;
};
const mockData = [
  {
    legendname: "粉面粥店",
    value: 67,
    percent: "15.40%",
    name: "粉面粥店|15.40%",
  },
  {
    legendname: "快餐",
    value: 97,
    percent: "22.40%",
    name: "快餐|22.40%",
  },
  {
    legendname: "汉堡炸鸡",
    value: 92,
    percent: "21.15%",
    name: "汉堡炸鸡|21.15%",
  },
];
function renderPieChart(mockData: Array<any>): EChartsOption {
  return {
    title: [
      {
        text: "品类分布",
        textStyle: {
          fontSize: 14,
          color: "#666",
        },
        left: 20,
        top: 20,
      },
      {
        text: "累计订单量",
        subtext: "320",
        left: "34.5%",
        top: "42.5%",
        textStyle: {
          fontSize: 14,
        },
        subtextStyle: {
          fontSize: 28,
        },
        textAlign: "center",
      },
    ],
    tooltip: {
      show: true,
      trigger: "item",
      formatter: function (params) {
        const data = params as any;
        return `${data.seriesName}<br/> ${data.marker}${data.data.legendname}<br/>数量: ${data.data.value}<br/>占比:${data.data.percent}`;
      },
    },
    series: [
      {
        name: "品类分布",
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
        itemStyle: {
          borderWidth: 4,
          borderColor: "#fff",
        },
        center: ["35%", "50%"],
        radius: ["45%", "60%"],
        labelLine: {
          length: 5,
          length2: 3,
        },
        clockwise: true,
      },
    ],
    legend: {
      type: "scroll",
      orient: "vertical",
      height: 250,
      left: "70%",
      top: "middle",
      textStyle: {},
    },
  };
}

onMounted(() => {
  nodeElemt("#classify-echart", renderPieChart(mockData));
});
</script>

<style lang="scss" scoped>
.card-header {
  .view-radio-group {
    text-align: right;
  }
}
.search-view-wapper {
  height: 452px;
  display: flex;
  flex-direction: column;
}
</style>

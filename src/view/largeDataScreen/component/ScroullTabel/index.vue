<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-31 08:54:30
 * @LastEditTime: 2023-08-01 15:43:51
-->
<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-31 08:54:30
 * @LastEditTime: 2023-08-01 14:31:34
-->
<template>
  <div class="table-box" :id="id">
    <div class="header" v-if="isHideHeader" :style="{ backgroundColor: headerBg, height: `${headerHeight}px`, fontWeight: headerFontWeight, fontSize: headerFontSize, color: headerColor }">
      <div
        class="header-item"
        v-for="(headerItem, headerIndex) in headerData"
        :key="headerIndex"
        :style="{width:`${columnWidth[headerIndex]}px`,lineHeight:headerHeight,...headerStyle[headerIndex] as object}"
        :align="align[headerIndex]"
        v-html="headerItem"
      ></div>
    </div>
    <div class="row-box" :style="{ height: `${height - headerHeight}px` }" @mouseleave="mouseleave" @mouseout="">
      <div
        class="row-item"
        v-for="(rowItem,rowIndex) in (currentRowsData as any)"
        :key="rowItem.rowIndex"
        :style="{
          height: `${rowHeights[rowIndex]}px`,
          lineHeight: `${rowHeights[rowIndex]}px`,
          fontSize: 16,
          color: '#000',
          fontWeight: 'normal',
          backgroundColor: `${rowItem.rowIndex % 2 === 0 ? rowBg[0] : rowBg[1]}`,
        }"
      >
        <div
          class="item"
          v-for="(item, index) in rowItem.data"
          :key="item + index"
          :align="align[index]"
          v-html="item"
          :style="{width:`${columnWidth[index]}px`,...rowStyle[index] as object}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useScreen } from "@/hooks/useScreen";
import { ParameterConfiguration, assign, cloneDeep } from "./index";
const props = defineProps({
  config: {
    type: Object,
    defalet: () => {},
  },
});
//参数配置
const defaultConfig: ParameterConfiguration = {
  headerData: [],
  headerStyle: [],
  headerBg: "",
  headerHeight: 0,
  headerFontSize: 0,
  headerFontWeight: "",
  headerIndex: false,
  headerIndexConter: "#",
  headerIndexStyle: {},
  headerIndexData: [],
  rowIndexStyle: {},
  data: [],
  rowNum: 5,
  moveNum: 1,
  aligns: [],
  duration: 2000,
  isHideHeader: true,
  tagBGC: "",
  rowStyle: [],
};
const id = ref(`scroull-${uuidv4()}`);
const { width, height } = useScreen(id.value);
//标题内容
const headerData = ref([]);
//标题的高度
const headerHeight = ref(0);
//标题的背景
const headerBg = ref("");
//标题自定义样式
const headerStyle: Ref = ref([]);
//标题的字体粗细
const headerFontWeight: Ref = ref("");
//标题的字号
const headerFontSize: Ref = ref("");
//标题字体的颜色
const headerColor = ref("#fff");
//动态宽度
const columnWidth: Ref = ref([]);
//是否显示标题
const isHideHeader = ref(true);
//列表内容
const rowData: Ref = ref([]);
//列表的隔断背景
const rowBg=ref(['#ccc','#fff'])
//列表自定义样式
const rowStyle: Ref = ref([]);
//列表每列的高度
const rowHeights: Ref = ref([]);
//对齐方式
const align: Ref = ref([]);
//当前指针位置
const currentIndex = ref(0);
//
const currentRowsData = ref([]);
//是否停止轮播
const isAnimationStop = ref(false);
//当前需要显示的列表数
const rowNum = ref(5);
const actualConfig = ref({});
let avgHeight: number;
/**计算宽度 */
const calculateWidth = (config: ParameterConfiguration, data: any[] = []) => {
  let usedWidth = 0;
  let usedColumnNum = 0;
  let avgWidth = 0;
  let _columnWidth = [];
  let _align: string[] = config.aligns;
  if (_align.length === 0) {
    _align = new Array(config.isHideHeader ? data.length : config.data.length).fill("center");
  }
  align.value = _align;
  if (config.isHideHeader) {
    //判断一下是否定义了宽度,如果定义了就以这个宽度计算,没有定义自动撑满
    config.headerStyle.forEach((style: any) => {
      if (style.width) {
        usedWidth = style.width.replace("px", "");
        usedColumnNum++;
      }
    });

    avgWidth = (width.value - usedWidth) / (data.length - usedColumnNum);
    _columnWidth = new Array(headerData.value.length).fill(avgWidth);
    config.headerStyle.forEach((style: any, index) => {
      if (style.width) {
        const headerWidth = style.width.replace("px", "");
        _columnWidth[index] = headerWidth;
      }
    });
    headerStyle.value = config.headerStyle;
    columnWidth.value = _columnWidth;
  } else {
    avgWidth = width.value / config.data.length;
    _columnWidth = new Array(config.data.length).fill(avgWidth);
    columnWidth.value = _columnWidth;
  }
};
/**计算列表高度 */
const calculateHeight = (config: ParameterConfiguration) => {
  rowNum.value = config.rowNum;
  const unusedHeight = height.value - config.headerHeight;
  if (rowNum.value > rowData.value.length) {
    rowNum.value = rowData.value.length;
  }
  avgHeight = unusedHeight / rowNum.value;
  rowHeights.value = new Array(rowNum.value).fill(avgHeight);
  console.log("rowHeights",rowHeights);
  
};
/*处理标题数据*/
const handleHeader = (config: ParameterConfiguration) => {
  const _headerData: Array<string> = cloneDeep(config.headerData);
  if (!config.isHideHeader) {
    isHideHeader.value = false;
    calculateWidth(config);
    return;
  }
  if(config.headerData.length===0){
    isHideHeader.value = false;
    calculateWidth(config);
    return
  }
  if (config.headerIndex) {
    _headerData.unshift(config.headerIndexConter);
  }
  calculateWidth(config, _headerData);
  headerBg.value = config.headerBg;
  headerHeight.value = config.headerHeight;
};
/*处理列表数据*/
const handleRows = (config: ParameterConfiguration) => {
  const _rowData: Array<[string]> = cloneDeep(config.data);
  if (config.headerIndex) {
    _rowData.forEach((rows, index) => {
      const tagText = `<span style="background-color:${config.tagBGC};padding:4px;border-radius:4px;">${index + 1}</span>`;
      rows.unshift(tagText);
    });
  }
  rowStyle.value = config.rowStyle;
  rowData.value = _rowData.map((item, index) => ({ data: item, rowIndex: index }));
};
/*执行动画*/
const startAnimation = async () => {
  const { moveNum, rowNum, duration } = actualConfig.value as ParameterConfiguration;
  const totalLength = rowData.value.length;
  if (totalLength < rowNum) return;
  const index = currentIndex.value;
  const _roswData = cloneDeep(rowData.value);
  const rows = _roswData.slice(index);
  const newRows = _roswData.slice(0, index);
  rows.push(...newRows);
  currentRowsData.value = rows;
  //先将所有行的高度还原
  rowHeights.value = new Array(totalLength).fill(avgHeight);
  const waitTime = 300;
  if (isAnimationStop.value) return;
  await new Promise((resolve) => setTimeout(resolve, waitTime));
  // 将moveNum的行高度设置0
  rowHeights.value.splice(0, moveNum, ...new Array(moveNum).fill(0));
  currentIndex.value += moveNum;
  // 是否到达最后一组数据
  const isLast = currentIndex.value - totalLength;
  if (isLast >= 0) {
    currentIndex.value = 0;
  }
  await new Promise((resolve) => setTimeout(resolve, duration - waitTime));
  await startAnimation();
};
/*停止动画*/
const stopStartAnimation = () => {
  isAnimationStop.value = true;
};
//移出恢复动画
const mouseleave=()=>{
//  isAnimationStop.value=false;
//  startAnimation()
};
/*更新数据*/
const undate = () => {
  stopStartAnimation();
  const _actualConfig = assign(defaultConfig, props.config as object);
  if (_actualConfig.headerData.length === 0 && _actualConfig.data.length === 0) return;
  handleHeader(_actualConfig);
  handleRows(_actualConfig);
  calculateHeight(_actualConfig);
  actualConfig.value = _actualConfig;
  isAnimationStop.value = false;
  startAnimation();
};

watch(
  () => props.config,
  () => {
    console.log("watch", props.config);
    undate();
  }
);
</script>

<style scoped lang="scss">
@mixin text {
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-box {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  .header-item {
    @include text;
  }
}
.row-box {
  overflow: hidden;
  .row-item {
    display: flex;
    transition: all 0.3s linear;
    .item {
      @include text;
    }
  }
}
</style>

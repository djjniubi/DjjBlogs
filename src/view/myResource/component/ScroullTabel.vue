<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-23 18:05:52
 * @FilePath: \DjjBlogs\src\view\myResource\component\ScroullTabel.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-31 09:13:23
-->
<template>
  <div class="resource" ref="scroull" :id="id">
    <div v-if="isHideHeader" class="header" :style="`background-color:${headerBg};height:${headerHeight}px;font-weight:${headerFontWeight};font-size:${headerFontSize}px;color:${headerColor}`">
      <div class="header-item" v-for="(headerItem, index) in headerData" :key="index" :style="`width:${columnWidth[index]}px;line-height:${headerHeight}px;`" :align="align[index]" v-html="headerItem"></div>
    </div>
    <div class="row" :style="`height:${height - headerHeight}px`">
      <div
        class="row-item"
        v-for="(rowItem, rowIndex) in currentRowsData"
        :key="rowItem.rowIndex"
        :style="` height:${rowHeights[rowIndex]}px;line-height:${rowHeights[rowIndex]}px;font-size:${18}px;color:${'#000'};font-weight:${700};background-color:${rowItem.rowIndex % 2 === 0 ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0.3)'};`"
        
      >  
        <div class="item" v-for="(item, index) in rowItem.data" :key="item + index" :align="align[index]"  v-html="item" :style="{width:`${columnWidth[index]}px`,color: '#000',...rowStyle[index] as object}"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ScroullTabel">
import { ref, Ref, watch, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useScreen } from "@/hooks/useScreen";
const props = defineProps({
  config: {
    type: Object,
    defalet: () => {},
  },
});

const defaultConfig = {
  //标题数据;格式:['a','b','c']
  headerData: [],
  //标题的样式:[{},{},{}]
  headerStyle: [],
  //标题的背景色
  headerBg: "transparent",
  //标题的高度
  headerHeight: 0,
  //标题字体字号
  headerFontSize:16,
  //标题是字体是否加粗
  headerFontWeight:'',
  //是否展示标题序号
  headerIndex: false,
  //序列号标题内容
  headerIndexConter: "#",
  //序列号标题样式
  headerIndexStyle: {
    width: "50px",
  },
  //序列号标题内容
  headerIndexData:[],
  //序号列内容的样式
  rowIndexStyle:{
    width: '50px'
  },
  //内容数据 二维数组
  data: [],
  //展示多少条数据
  rowNum: 5,
  //移动的位置
  moveNum: 1,
  //居中的方式
  aligns:[],
  //动画间隔
  duration:2000,
  //是否显示标题
  isHideHeader:true,
  //排名tag背景颜色
  tagBGC:"rgba(144,65,66,0.6)",
  rowStyle:[]
};
const id = ref(`scroull-${uuidv4()}`);
const { width, height } = useScreen(id.value);
const headerData: Ref = ref([]);
const headerHeight = ref(0);
const headerWidth = ref(0);
const headerFontSize = ref(0);
const headerFontWeight = ref('');
const headerBg = ref("");
const headerColor = ref("#fff");
const align = ref([]);
const currentRowsData: Ref = ref([]);
const rowData: Ref = ref([]);
const currentIndex = ref(0);
const actualConfig = ref({});
const isAnimationStop = ref(false);
const scroull = ref(null);
const rowNum = ref(defaultConfig.rowNum);
const rowHeights: Ref = ref([]);
const isHideHeader=ref(true);
const columnWidth=ref([]);
const rowStyle=ref([]);
let avgHeight: number;


console.log("useScreen ", width.value, height.value);
async function startAnimation() {
  const config = actualConfig.value;
  const { moveNum, rowNum,duration } = config as any;
  const totalLength = rowData.value.length;
  if (totalLength < rowNum) return;
  const index = currentIndex.value;

  const _roswData = cloneDeep(rowData.value);
  const rows = _roswData.slice(index);

  const newRows = _roswData.slice(0, index);
  // console.log("newRows",newRows);
  rows.push(...newRows);
  // debugger

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
  // console.log("isLast",isLast,totalLength);

  if (isLast >= 0) {
    currentIndex.value = 0;
  }
  await new Promise((resolve) => setTimeout(resolve, duration - waitTime));
  await startAnimation();
}
function handleHeader(config: any) {
const _headerData =cloneDeep(config.headerData);
const _headerStyle=cloneDeep(config.headerStyle);
const _rowData=cloneDeep(config.data);
const _rowStyle=cloneDeep(config.rowStyle);
let _align=cloneDeep(config.aligns);

if(config.headerIndex){
  _headerData.unshift(config.headerIndexConter);
  _rowData.forEach((rows:any, index:number) => {
    const tagText=`<span style="background-color:${config.tagBGC};padding:4px;border-radius:4px;">${index+1}</span>`;
    rows.unshift(tagText)
  });
}
//动态计算列宽
let usedWidth = 0;
let usedColumnNum = 0
_headerStyle.forEach((style:any)=>{
  //判断一下是否定义了宽度,如果定义了就以这个宽度计算,没有定义自动撑满
  if(style.width){
    usedWidth=style.width.replace("px","");
    usedColumnNum++
  }
})

const avgWidth=(width.value-usedWidth)/(_headerData.length-usedColumnNum);
const _columnWidth=new Array(_headerData.length).fill(avgWidth);
_headerStyle.forEach((style:any,index:number)=>{
  //判断一下是否定义了宽度,如果定义了就以这个宽度计算,没有定义自动撑满
  if(style.width){
    const headerWidth=style.width.replace("px","");
      _columnWidth[index]=headerWidth
  }
})
columnWidth.value=_columnWidth as [];
console.log("_rowData",columnWidth.value);
if(_align.length===0){
  _align =new Array(_headerData.length).fill("center")
}
console.log("_align",_align);
align.value=_align
headerData.value=_headerData;
rowStyle.value=_rowStyle;
rowData.value = _rowData.map((item:string, index:number) => ({
  data: item,
  rowIndex: index,
}));
}

function handleRows(config: any) {
  //动态计算高度
  const { headerHeight } = config;
  rowNum.value = config.rowNum;
  console.log("unusedHeight", height.value,width.value);
  const unusedHeight = height.value - headerHeight;
  // 如果rowNum大于实际数据长度，则以实际数据长度为准
  if (rowNum.value > rowData.value.length) {
    rowNum.value = rowData.value.length;
  }
  avgHeight = unusedHeight / rowNum.value;
  rowHeights.value = new Array(rowNum.value).fill(avgHeight);
  console.log("avgHeight",avgHeight,headerHeight);
  
}
/**停止动画 */
function stopStartAnimation() {
  isAnimationStop.value = true;
}

function undate() {
  stopStartAnimation();
  const _actualConfig = assign(defaultConfig, props.config as object);
  if(!_actualConfig.isHideHeader||_actualConfig.headerData.length===0){
    _actualConfig.headerHeight=0;
    headerHeight.value=0;
    isHideHeader.value=false
  }

  handleHeader(_actualConfig);
  handleRows(_actualConfig);

  actualConfig.value = _actualConfig;
  isAnimationStop.value=false;
  startAnimation();
}
/**对数据进行拷贝 */
function cloneDeep(data:Array<object|[]>|object){
  if(typeof data==="string"||typeof data==="number") return data;
   return JSON.parse(JSON.stringify(data))
}
/**对象合并*/
function assign(objeData: object, objeData2: object): any {
  return Object.assign({}, objeData, objeData2);
}
onMounted(() => {});
watch(
  () => props.config,
  () => {
    console.log("watch", props.config);
    undate();
  }
);
</script>

<style lang="scss" scoped>
.resource {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

@mixin text {
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.header {
  display: flex;
  flex-direction: row;
  .header-item {
    @include text;
    transition: all 0.3s linear;
  }
}

.row {
  overflow: hidden;
  height: 250px;
  .row-item {
    display: flex;
    transition: all 0.3s linear;
    .item {
      @include text;
    }
    .index{
      padding: 3px;
      border-radius:3px;
    }
  }
}
</style>

<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-23 18:05:52
 * @FilePath: \DjjBlogs\src\view\myResource\component\ScroullTabel.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-26 17:28:24
-->
<template>
    <div class="resource" ref="scroull" id="scroull">
      <div class="header" :style="`background-color:${headerBg};height:${headerHeight}px;`">
        <div class="header-item" v-for="(headerItem, index) in headerData" :key="index" :style="`width:${headerWidth}px;line-height:${headerHeight}px;font-size:${headerFontSize}px;color:${headerColor[index]};font-weight:${headerFontWeight};`" :align="align[index]" v-html="headerItem"></div>
      </div>
      <div class="row">
        <div class="row-item" v-for="(rowItem,rowIndex) in currentRowsData" :key="rowItem.rowIndex" :style="` height:${50};line-height:${50}px;font-size:${18}px;color:${'#000'};font-weight:${700};background-color:${rowIndex%2===0?'#fff':'#ccc'};`" :align="'center'">
          <div class="item" v-for="(item,index) in rowItem.data" :key="item+index" v-html="item" style="width: 80px;color: #000;"></div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts" name="ScroullTabel">
import { ref, Ref,watch,onMounted } from "vue";
import {useScreen} from "@/hooks/useScreen";
const props= defineProps({
    config:{
        type:Object,
        defalet:()=>{}
    }
})
console.log("props",props.config);


const defaultConfig={
  //标题数据;格式:['a','b','c']
  headerData:[],
  //标题的样式:[{},{},{}]
  headerStyle:[],
  //标题的背景色
  headerBg:"#fd5566",
  //标题的高度
  headerHeight:50,
  //是否展示标题序号
  headerIndex:false,
  headerIndexConter:"#",
  headerIndexStyle:{
    with:"50px"
  },
  //内容数据 二维数组
  data:[["小王0","18","20"],["小王1","18","20"],["小王2","18","20"],["小王3","18","20"],["小王4","18","20"],["小王5","18","20"],["小王6","18","20"],["小王7","18","20"]],
  //展示多少条数据
  rowNum:5,
  //移动的位置
  moveNum:1
}
const headerData: Ref = ref(['姓名','年龄','月薪']);
const headerHeight=ref(50);
const headerWidth=ref(80);
const headerFontSize=ref(18);
const headerFontWeight=ref(700);
const headerBg=ref("#fd5566");
const headerColor=ref(["#000","#ccc","#ddd"]);
const align=ref(["center","center","center"]);
const currentRowsData:Ref =ref([]);
const rowData:Ref=ref([]);
const currentIndex=ref(0);
const actualConfig=ref({});
const isAnimationStop=ref(false);
const scroull=ref(null)
// const config:Ref=ref({});
// config.value={
//   headerData
// }
rowData.value=defaultConfig.data.map((item,index)=>({
 data:item,
 rowIndex:`王${index}`
}))

console.log("useScreen",useScreen("scroull"));
console.log("rowData",rowData.value);
async function startAnimation(){
  const  config =actualConfig.value;
  const {moveNum,rowNum}=config as any;
  const totalLength =rowData.value.length;
 if(totalLength<rowNum) return;
 const index=currentIndex.value;
 console.log("index",index);

 const _roswData=JSON.parse(JSON.stringify(rowData.value));
const rows = _roswData.slice(index);
console.log("rows",rows);
const newRows=_roswData.slice(0, index);
// console.log("newRows",newRows);
rows.push(...newRows)
  // debugger

  currentRowsData.value= rows;
 if(isAnimationStop.value)return;
 await new Promise(resolve=>setTimeout(resolve,2000));
 currentIndex.value+=moveNum;
  // 是否到达最后一组数据
  const isLast = currentIndex.value - totalLength;
  console.log("isLast",isLast,totalLength);
  
  if(isLast>=0){
    currentIndex.value=0
  }
//  await startAnimation()
}
function handleHeader(config:any){
  //动态计算高度
  const{headerHeight}=config;
  console.log("handleHeader888",props.config);
}


function handleRows(config:any){
  console.log("handleRows",config);
  
}
function undate(){
  const _actualConfig=assign(defaultConfig,props.config as object);
  handleHeader(_actualConfig);
  
  
  actualConfig.value=_actualConfig;
  console.log("actualConfig",actualConfig.value);
  startAnimation()
}

//对象合并
function assign(objeData:object,objeData2:object):any{
  return Object.assign({},objeData,objeData2)
}
onMounted(()=>{
  // console.log("scroull",scroull);
  console.log("useScreen222222",useScreen("scroull"));
  // startAnimation()
})
watch(()=>props.config,()=>{
  console.log("watch",props.config);
  undate()
},{immediate:true})
</script>

<style lang="scss" scoped>
.resource {
  width: 100%;
  height: 100%;
  background-color: white;
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

.row{
  // overflow: hidden;
  height: 250px;
  .row-item{
    display: flex;
    .item{
      @include text
    }
  }
}
</style>
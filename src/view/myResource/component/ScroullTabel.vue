<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-23 18:05:52
 * @FilePath: \DjjBlogs\src\view\myResource\component\ScroullTabel.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-07-23 22:45:09
-->
<template>
    <div class="resource">
      我的资源
      <div class="header" :style="`background-color:#fd5566;height:${headerHeight}px;`">
        <div class="header-item" v-for="(headerItem, index) in headerData" :key="index" :style="`width:${headerWidth}px;line-height:${headerHeight}px;font-size:${headerFontSize}px;color:${headerColor[index]};font-weight:${headerFontWeight};`" :align="align[index]" v-html="headerItem"></div>
      </div>
      <div class="row">
        <div class="row-item" v-for="(rowItem,rowIndex) in rowData" :key="rowIndex" :style="` height:${50};line-height:${50}px;font-size:${18}px;color:${'#000'};font-weight:${700};background-color:${rowIndex%2===0?'#fff':'#ccc'};`" :align="'center'">
          <div class="item" v-for="(item,index) in rowItem" :key="index" v-html="item" style="width: 80px;color: #000;"></div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, Ref } from "vue";
const props= defineProps({
    config:{
        type:Object,
        defalet:{}
    }
})
console.log("props",props.config);

const headerData: Ref = ref(['姓名','年龄','月薪']);
const headerHeight=ref(50);
const headerWidth=ref(80);
const headerFontSize=ref(18);
const headerFontWeight=ref(700);
const headerColor=ref(["#000","#ccc","#ddd"])
const align=ref(["center","center","center"])
const rowData:Ref=ref([]);
const config:Ref=ref({});
config.value={
  headerData
}

const defaultConfig={
  //标题数据;格式:['a','b','c']
  headerData:[],
  //标题的样式:[{},{},{}]
  headerStyle:[],
  //标题的背景色
  headerBg:"",
  //标题的高度
  headerHeight:0,
  //是否展示标题序号
  headerIndex:false,
  headerIndexConter:"#",
  headerIndexStyle:{
    with:"50px"
  },
  //内容数据 二维数组
  data:[["小王1","18","20"],["小王2","18","20"],["小王3","18","20"],["小王4","18","20"],["小王5","18","20"]],
  //展示多少条数据
  rowNum:5
}
rowData.value=defaultConfig.data
function add() {
    const {headerData,headerWidth} =props.config as any;
    console.log("headerData",headerData,headerWidth);
    
}
add();

function startAnimation(){

}
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
  .row-item{
    display: flex;
    .item{
      @include text
    }
  }
}
</style>
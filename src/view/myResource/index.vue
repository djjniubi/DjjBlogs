<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-07-21 21:02:27
 * @FilePath: \DjjBlogs\src\view\myResource\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-07-31 00:36:49
-->
<template>
  <div class="resource">
    我的资源
    <div style="width: 100%;height:400px;">
      <ScroullTabel :config="config"/>
    </div>
   
    <div v-html="`<el-icon><WarningFilled /></el-icon>`"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref,onMounted } from "vue";
import ScroullTabel from "./component/ScroullTabel.vue"
const config:Ref=ref({});


function undate(){
  config.value={
  //标题数据
  headerData:[],
  //标题宽度
  headerWidth:80,
  //标题高度
  headerHeight:50,
  //标题字号
  headerFontSize:18,
  //标题是否加粗
  headerFontWeight:700,
  //标题背景色
  headerBg:"#fd5565",
  //序列号标题的内容默认#
  headerIndexConter:"排名",
  //列表样式
  rowStyle:[{color:"red",width:"100px"},{color:"red",width:"250px"},{color:"red",width:"150px"}],
  headerIndex:false,
  data:[ [`<div style="width:100%;height:100%"><span style="background-color:red;border-radius:50%;color:#fff;padding:0 10px">!</span></div>`, "A部门排查出隐患122个", "2023-07-31"],
    ["小王1", "18", "20"],
    ["小王2", "18", "20"],
    ["小王3", "18", "20"],
    ["小王4", "18", "20"],
    ["小王5", "18", "20"],
    ["小王6", "18", "20"],
    ["小王7", "18", "20"],],
    aligns:["left","left","right"]
}
}
onMounted(()=>{
  undate()
})


</script>
<style lang="scss" scoped>
.resource {
  width: 100%;
  height: 100%;
  background-color: white;
}


</style>

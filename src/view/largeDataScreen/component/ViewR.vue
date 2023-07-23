<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 15:27:09
 * @LastEditTime: 2023-07-22 02:06:01
-->
<template>
  <div class="view-l">
    <div class="view-item1"></div>
    <div class="view-item2 ">
      <div class="row-around-center" style="padding-top:35px ;height: 100%;">
      <div class="column-center-center" style="width: 224px; height: 100%">
        <div style="position: relative">
          <div class="row-center-center" style="width: 132px; height: 132px; border: 1px solid #fff; border-radius: 50%;z-index: 2;">
            <div id="lfet-box" :style="{width:'118px',height:'118px',zIndex:'2'}"></div>
          </div>
          <div style="width: 110px; height: 56px;position: absolute;bottom: -25px;left: 10px;">
            <img src="../../../assets/icons/圆.png" alt="" style="width: 100%;height:100%" />
          </div>
        </div>
        <div>
            <div class="row-start-end" style="color: white;margin-top: 56px;">
                <p style="font-size: 14px;margin-right: 25px;">高风险部门</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">12</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
            <div class="row-start-end" style="color: white;margin-top: 12px;">
                <p style="font-size: 14px;margin-right: 25px;">低风险部门</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">8</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
            <div class="row-start-end" style="color: white;margin-top: 12px;">
                <p style="font-size: 14px;margin-right: 25px;">无风险部门</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">10</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
        </div>
      </div>
      <div style="width:2px;height:348px;background:#23DBFC;"></div>
      <div class="column-center-center" style="width: 224px;height:100%">
        <div style="position: relative">
          <div class="row-center-center" style="width: 132px; height: 132px; border: 1px solid #fff; border-radius: 50%;z-index: 2;">
            <div id="right-box" :style="{width:'118px',height:'118px',zIndex:'2'}"></div>
          </div>
          <div style="width: 110px; height: 56px;position: absolute;bottom: -25px;left: 10px;">
            <img src="../../../assets/icons/圆.png" alt="" style="width: 100%;height:100%" />
          </div>
        </div>
        <div>
            <div class="row-start-end" style="color: white;margin-top: 56px;">
                <p style="font-size: 14px;margin-right: 25px;">高风险事件</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">129</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
            <div class="row-start-end" style="color: white;margin-top: 12px;">
                <p style="font-size: 14px;margin-right: 25px;">中风险事件</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">88</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
            <div class="row-start-end" style="color: white;margin-top: 12px;">
                <p style="font-size: 14px;margin-right: 25px;">低风险事件</p>
                <p style="font-size: 36px;color: #58DBFF; font-weight: 700;line-height: 1;">109</p>
                <p style="font-size: 18px;color: #58DBFF; font-weight: 700;">个</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="ViewR">
import { ref, onMounted } from "vue";
import { EChartsOption } from "echarts";
import { nodeElemt } from "@/hooks/echatesHook";
const lfetBox={text:"86",color:"#FCB223"};
const rightBox={text:"86",color:"#FC5659"};
type MokeData={
  text:string,
  color:string
}
function renderPieChart(mokeData:MokeData):EChartsOption{
    return{
        graphic:[{
            type:"text",
            top:'40%',
            left:"30%",
            style:{
                text:mokeData.text,
                fill:mokeData.color,
                fontSize:36
            }
        },{
            type:"text",
            top:'50%',
            left:"65%",
            style:{
                text:"%",
                fill:mokeData.color,
                fontSize:16
            } 
        }],
        series:[
            {type:"pie",data:[{value:100}],radius:["70%","100%"],color:mokeData.color,emphasis:{scale:false}}
        ]
    }
}

onMounted(()=>{
    nodeElemt("#lfet-box",renderPieChart(lfetBox));
    nodeElemt("#right-box",renderPieChart(rightBox))
})
</script>
<style lang="scss" scoped>
.view-l {
  width: 560px;
  height: 620px;
  position: absolute;
  right: 0;
  .view-item1 {
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
    background-image: url("../../../assets/icons/信息.svg");
  }
  .view-item2 {
    width: 100%;
    height: 440px;
    background-image: url("../../../assets/icons/重要指标.svg");
  }
}
</style>

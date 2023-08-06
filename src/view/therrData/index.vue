<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-08-03 13:40:48
 * @LastEditTime: 2023-08-07 01:31:00
-->
<template>
    <div style="height: 100vh;" ref="webglThree">
        <div id="messageTag"
    style="width:500px;height:400px;position: absolute;color: #fff;z-index: 2;font-size: 16px;">
    <div style="position:relative;">
      <div style="position: absolute;left: 0px;top: 0px;">
        <img src="../../assets/threeImag/bg.png" alt="" style="width:400px;opacity: 1.0;">
      </div>
      <div id="granaryName" style="position:absolute;left:25px;top:40px;font-size:16px">平房仓 P_01</div>
      <div style="position:absolute;left:290px;top:25px">
        <img src="../../assets/threeImag/temperature.png" alt="" style="width:50px;">
      </div>

      <div style="position:absolute;left:330px;top:40px">
        <span id="temperature">19</span>℃
      </div>
      <div id="grain" style="position:absolute;left:170px;top:50px">
        <span id="grain">红豆</span>(吨)
      </div>
      <div style="position:absolute;left:80px;top:85px;font-size:60px;color:#00ffff;vertical-align:middle">
        <img id="grainImg" src="../../assets/threeImag/redBean.png" alt="" style="width:60px;">
      </div>
      <div style="position:absolute;left:155px;top:80px;font-size:60px;color:#00ffff;vertical-align:middle">
        <span id="weight">3600</span>t
      </div>
      <div style="position:absolute;left:70px;top:170px;padding:8px 25px;border-radius:30px;border:1px solid #00ffff;">
        仓高—<span id="granaryHeight">12</span>m</div>
      <div style="position:absolute;left:225px;top:170px;padding:8px 25px;">
        粮高— <span id="grainHeight">5</span> m
      </div>
    </div>
  </div>
    </div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {scene} from "./scene/scene";
import {render,renderer} from "./render/Render";
import {tag} from "./scene/tag";
import {choose,chooseMesh} from "./scene/choose";
import  messageData from "./scene/messageData";
const webglThree=ref<HTMLElement|null>(null)
    const  messageTag=tag("messageTag");
    
    onMounted(()=>{
        console.log("messageTag",messageTag.value);
        scene.add(messageTag.value)
        let idArr = ["granaryName", "temperature",
      "grain", "grainImg", "weight", "granaryHeight", "grainHeight"];
      addEventListener("click",(event)=>{
        if(chooseMesh){
            messageTag.value.element.style.visibility = 'hidden';
        };
        choose(event,messageTag.value);
        // 选中不同粮仓，HTML标签信息跟着改变
        if(chooseMesh){
            idArr.forEach( (id)=> {
          var dom:any = document.getElementById(id);
          if(id=="grainImg"){
            console.log(messageData[chooseMesh.name][id]);
            
            dom.src = messageData[chooseMesh.name][id];//设置图片路径
          }else{
            dom.innerHTML = messageData[chooseMesh.name][id];
          }
          
        })
        messageTag.value.element.style.visibility = 'visible';//显示标签        
        // messageTag.position.copy(chooseMesh.getWorldPosition());//通过粮仓世界坐标设置标签位置
        messageTag.value.position.copy(chooseMesh.point);//射线在粮仓表面拾取坐标

        // 数字滚动动画
        var weightDOM = document.getElementById("weight")
        weightDOM.innerHTML = 0;
        var weightMax = messageData[chooseMesh.name]["weight"];//粮仓重量
        var weight = 0;//粮仓初始重量
        var interval = setInterval(function () {
          if (weight < weightMax) {
            weight += Math.floor(weightMax/50);//重量累加
            document.getElementById("weight").innerHTML = weight;
          }else{
            clearInterval(interval);//一旦达到粮食重量，取消周期性函数interval
          }
        }, 5);

        }
      })
    webglThree.value?.appendChild(renderer.domElement);
    render()
    })
</script>
<style lang="scss" scoped>

</style>
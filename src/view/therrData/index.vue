<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-08-03 13:40:48
 * @LastEditTime: 2023-08-07 17:08:53
-->
<template>
  <div style="height: 100vh;position: relative;overflow: hidden;" ref="webglThree" id="webglThree">
  
  </div>
  <div id="messageTag" style="visibility: hidden; width: 500px; height: 400px; position: absolute; color: #fff; z-index: 2; font-size: 16px">
      <div style="position: relative">
        <div style="position: absolute; left: 0px; top: 0px">
          <img src="../../assets/threeImag/bg.png" alt="" style="width: 400px; opacity: 1" />
        </div>
        <div id="granaryName" style="position: absolute; left: 25px; top: 40px; font-size: 16px">{{ granaData.granaryName }}</div>
        <div style="position: absolute; left: 290px; top: 25px">
          <img src="../../assets/threeImag/temperature.png" alt="" style="width: 50px" />
        </div>

        <div style="position: absolute; left: 330px; top: 40px"><span id="temperature">{{ granaData.temperature }}</span>℃</div>
        <div id="grain" style="position: absolute; left: 170px; top: 50px"><span id="grain">{{ granaData.grain }}</span>(吨)</div>
        <div style="position: absolute; left: 80px; top: 85px; font-size: 60px; color: #00ffff; vertical-align: middle">
          <img id="grainImg" :src="granaData.grainImg" alt="" style="width: 60px" />
        </div>
        <div style="position: absolute; left: 155px; top: 80px; font-size: 60px; color: #00ffff; vertical-align: middle"><span id="weight">{{ granaData.weight }}</span>t</div>
        <div style="position: absolute; left: 70px; top: 170px; padding: 8px 25px; border-radius: 30px; border: 1px solid #00ffff">仓高—<span id="granaryHeight">{{ granaData.granaryHeight }}</span>m</div>
        <div style="position: absolute; left: 225px; top: 170px; padding: 8px 25px">粮高— <span id="grainHeight">{{ granaData.grainHeight }}</span> m</div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { scene } from "./scene/scene";
import { render, renderer } from "./render/Render";
import { tag } from "./scene/tag";
import { choose, chooseMesh } from "./scene/choose";
import messageData from "./scene/messageData";
const webglThree = ref<HTMLElement | null>(null);
const granaData=ref({
  granaryName:"",
  temperature:"",
  grain:"",
  grainImg:"",
  weight:0,
  granaryHeight:0,
  grainHeight:""
})

const messageTag = tag("messageTag");
onMounted(() => {
 webglThree.value?.appendChild(renderer.domElement);
 console.log("renderer");
 
  scene.add(messageTag.value);
  render();

});
addEventListener("click", (event) => {
  if (chooseMesh) {
    messageTag.value.element.style.visibility = "hidden";
  }
  choose(event);
  if (chooseMesh) {
    granaData.value=messageData[chooseMesh.name]
    messageTag.value.element.style.visibility = "visible"; //显示标签
    messageTag.value.position.copy(chooseMesh.point)
  }
});
</script>
<style lang="scss" scoped></style>

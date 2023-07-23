<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 17:50:02
 * @FilePath: \DjjBlogs\src\components\AdaptiveContainer\index.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-07-22 00:28:48
-->
<template>
    <div id="container" ref="container" :style="{width:`${options?.width}px`,height:`${options?.height}px`}">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import {ref,getCurrentInstance,onMounted,onUnmounted} from "vue";
const props=defineProps({
    options:{
        type:Object
    }
})
const width=ref(0);
const height=ref(0);
//视口宽高
const originalWidth=ref(0);
const originalHeight=ref(0);
const context:any=getCurrentInstance()?.proxy;
let dom: any
/**
 * @descriptio 初始化
 */
const init=()=>{
    dom=context?.$refs["container"];
    if(context?.options&&context.options.width&&context.options.height){
        width.value=context.options.width;
        height.value=context.options.height
    }else{
        width.value=dom.clientWidth;
        height.value=dom.clientHeight;
    }
    if(!originalWidth.value||!originalHeight.value){
        originalWidth.value=window.innerWidth;
        originalHeight.value=window.innerHeight;
    }
}

const updateSize=()=>{
    if(width.value&&height.value){
       dom.style.width=`${width.value}px`;
       dom.style.height=`${height.value}px`;
    }else{
        dom.style.width=`${originalWidth.value}px`;
       dom.style.height=`${originalHeight.value}px`;
    }
}
const updateScale=()=>{
    //获取视口尺寸
    const currentWidth=document.body.clientWidth;
    const currentHeight=document.body.clientHeight;
    //大屏最终的宽度
    const realWidth=width.value||originalWidth.value;
    const  realHeight=height.value||originalHeight.value;
    const widthScale=currentWidth/realWidth;
    const heightScale=currentHeight/realHeight;
    dom.style.transform=`scale(${widthScale.toFixed(2)},${heightScale.toFixed(2)})`
}
const onResize=()=>{
    init();
    updateScale()
}
onMounted(()=>{
    init();
    updateSize();
    updateScale();
    window.addEventListener("resize",onResize)
})
onUnmounted(()=>{
    window.removeEventListener("resize",onResize)
})
</script>
<style lang="scss" scoped>
#container{
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin:left top;
    z-index: 999;
}
</style>
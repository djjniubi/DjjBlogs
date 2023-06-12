<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 09:41:02
 * @LastEditTime: 2023-06-12 14:10:27
-->
<template>
   <div style="margin-right: 15px;">
       <i class="iconfont icon-zhuti fs-24" @click="open"></i>
   </div>
</template>
<script setup lang="ts">
import mittBus from '@/utils/mittBus';

const open=()=>{
    mittBus.emit("openDrawer")
}
</script>

<style lang="scss" scoped>
 .fs-24{
    font-size: 24px;
 }
</style>
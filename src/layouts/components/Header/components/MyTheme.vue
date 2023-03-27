<template>
   <div>
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
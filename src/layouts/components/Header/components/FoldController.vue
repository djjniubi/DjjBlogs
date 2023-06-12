<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-12 10:07:58
-->
<template>
   <el-icon class="collapse-icon" @click="collapse" size="22">
     <component :is="themeConfig.isCollapse?'expand':'fold'"></component>
   </el-icon>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {GlobalStore} from "@/store"

const globalStore =GlobalStore()
const themeConfig=computed(()=>globalStore.themeConfig);
const collapse=()=>{
	globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: !themeConfig.value.isCollapse });

}
</script>

<style lang="scss" scoped>
.collapse-icon{
  cursor: pointer;
}
</style>
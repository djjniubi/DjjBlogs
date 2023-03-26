<template>
   <el-icon @click="collapse">
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
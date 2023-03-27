<template>
    <el-switch v-model="themeConfig.isDarkness" @change="change" inline-prompt :active-icon="Moon" :inactive-icon="Sunny"/>
</template>
<script setup lang="ts">
import{computed} from "vue";
import {GlobalStore} from "@/store";
import {customTheme} from "@/hooks/customTheme";
import {Moon,Sunny} from "@element-plus/icons-vue"
const globalStore=GlobalStore()
const themeConfig =computed(()=>globalStore.themeConfig);
const {switchTo} =customTheme()
const change=()=>{switchTo()}
</script>
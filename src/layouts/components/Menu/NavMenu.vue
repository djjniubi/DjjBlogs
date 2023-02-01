<template>
    
        <el-menu-item index="1" route="/home">
            <template #title>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Navigator Four</span>
        </el-menu-item>    
        <div v-for="item in menuList" :key="item">{{ item }}</div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// defineProps(["menuList"])
const props=defineProps(["menuList"])
console.log("defineProps",props);

</script>
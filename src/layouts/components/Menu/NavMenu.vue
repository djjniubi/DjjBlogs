<template>
    <template v-for="(item,index) in menuList" :key="item.path">
        <el-sub-menu v-if="item.children.length>0">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item index="1-1">item one</el-menu-item>
        </el-sub-menu>
        <el-menu-item  v-else :index="item.path" @click="clickMenu(item)">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router =useRouter()
const props=defineProps(["menuList"])
const clickMenu=(data:any)=>{
   router.push(data.path)
}
</script>
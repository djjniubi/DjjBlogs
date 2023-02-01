<template>
    <template v-for="(item,index) in menuList" :key="item.path">
        <el-menu-item :index="item.path" @click="clickMenu(item)">
            <template #title>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>{{ item.name }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router =useRouter()
const props=defineProps(["menuList"])
console.log("defineProps",props);
const clickMenu=(data:any)=>{
   console.log(data);
   router.push(data.path)
}
</script>
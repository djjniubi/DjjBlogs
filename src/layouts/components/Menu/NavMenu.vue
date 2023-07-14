<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-07-14 18:15:27
-->
<template>
  <template v-for="(item, index) in menuList" :key="item.path" style="background-color: transparent">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <NavMenu :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" @click="clickMenu(item)">
      <el-icon>
        <component :is="item.meta?.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item.meta?.title || item.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(["menuList"]);
const clickMenu = (data: any) => {
  router.push(data.path);
};
</script>

<style lang="scss" scoped>

.el-menu-item {
  background-color: transparent;
  &.is-active {
    background: #060708;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 4px;
      content: "";
      background: var(--el-color-primary);
    }
  }
}
</style>

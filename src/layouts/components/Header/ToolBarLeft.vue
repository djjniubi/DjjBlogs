<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-12 09:29:59
-->
<template>
    <div class="tool-bar-left">
        <FoldCollapse id="FoldCollapse"/>
        <!-- <Breadcrumb></Breadcrumb> -->
    </div>
</template>
<script setup lang="ts">
import FoldCollapse from "./components/FoldController.vue";
// import Breadcrumb from "./components/Breadcrumb.vue"
</script>
<style lang="scss" scoped>
.tool-bar-left{
    display: flex;
    align-items: center;
    justify-content: center;
	overflow: hidden;
	white-space: nowrap;
}
</style>
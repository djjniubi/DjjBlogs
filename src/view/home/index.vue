<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-13 19:50:52
 * @FilePath: \DjjBlogs\src\view\home\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 09:24:23
-->
<template>
    <top-view></top-view>
	<sales-view></sales-view>
	<bottom-view></bottom-view>
	<map-view></map-view>
</template>
<script lang="ts" setup name="WangEditor">
import {ref} from "vue"
import TopView from "./component/TopView.vue";
import SalesView from "./component/SalesView.vue";
import BottomView from "./component/BottomView.vue";
import MapView from "./component/MapView.vue";

</script>
<style lang="scss" scoped>

</style>
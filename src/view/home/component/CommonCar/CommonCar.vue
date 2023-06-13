<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-13 23:19:45
 * @FilePath: \DjjBlogs\src\view\home\component\CommonCar\CommonCar.vue
 * @LastEditors: djj
 * @LastEditTime: 2023-06-14 00:39:56
-->
<template>
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
        <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
        <slot name="footer"></slot>
    </div>
</template>
<script setup lang="ts">
const props= defineProps({
    title:String,
    value:String
})

console.log("title",props.title);

</script>
<style lang="scss" scoped>

.title{
    font-size: 12px;
    color:#999;
}
.value{
    font-size: 25px;
    margin-top: 5px;
    letter-spacing: 1px;
}
.chart{
    height: 60px;
}
.line{
    margin: 10px 0;
    border-top: 1px solid #eee;
}
.total{
    font-size: 12px;
    color: #666;
}
</style>
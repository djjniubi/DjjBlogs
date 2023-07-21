<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 15:54:30
 * @LastEditTime: 2023-07-20 16:35:29
-->
<template>
  <div class="row-between-start" style="position: absolute; bottom: -978px; width: 100%; height: 340px">
    <Monthly />
    <Year />
  </div>
</template>
<script setup lang="ts" name="ViewBtm">
import Monthly from "./Monthly/index.vue";
import Year from "./Year/index.vue";
</script>
<style lang="scss" scoped></style>

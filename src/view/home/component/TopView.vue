<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 08:40:15
 * @LastEditTime: 2023-06-14 10:15:45
-->
<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card">
        <TotalSase/>
      </el-card></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <TotalOrder/>
        </el-card
      ></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <TodyUser/>
      </el-card></el-col
    >
    <el-col :span="6">
      <el-card class="box-card">
        <TotalUser/>
       </el-card
      ></el-col
    >
  </el-row>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import * as echarts from "echarts";
import TotalSase from "./TotalSalse/TotalSalse.vue";
import TotalOrder from "./TotalOrder/TotalOrder.vue";
import TodyUser from "./TodayUser/TodayUser.vue";
import TotalUser from "./TotalUser/TotalUser.vue";

</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    .increase,
    .decrease {
      width: 0;
      height: 0;
      border-width: 4px;
      border-style: solid;
    }
    .increase {
      border-color: transparent transparent red transparent;
      margin: 0 0 3px 5px;
    }
    .decrease {
      border-color: green transparent transparent transparent;
      margin: 3px 0 0 5px;
    }
  }
}
.emphasis {
  margin-left: 5px;
  font-weight: 700;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

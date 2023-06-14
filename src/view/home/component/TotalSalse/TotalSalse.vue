<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 09:01:22
 * @LastEditTime: 2023-06-14 11:39:28
-->
<template>
    <common-car title="累计销售额" value="￥ 32,039,165">
        <template #default>
            <div class="compare-wrapper column-center-start">
              <div class="compare">
                <span>日同比</span>
                <span class="emphasis">7.33%</span>
                <div class="increase"></div>
              </div>
              <div class="compare" style="margin-top: 5px;">
                <span>月同比</span>
                <span class="emphasis">7.33%</span>
                <div class="decrease"></div>
              </div>
            </div>
          </template>
          <template #footer>
            <span>昨日销售额</span>
            <span class="emphasis">￥ 30,000,000</span>
          </template>
    </common-car>
</template>
<script setup lang="ts">
import CommonCar from "../CommonCar/CommonCar.vue"
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
}
</style>
<style lang="scss">
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

    .emphasis {
  margin-left: 5px;
  font-weight: 700;
}
</style>
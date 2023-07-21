<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-20 10:58:37
 * @LastEditTime: 2023-07-20 16:17:25
-->
<template>
    <div class="row-center-center">
          <div class="head-box row-center-center" style="">
            <img class="img-center" src="../../../assets/icons/title.svg" alt="图片加载失败" srcset="" style="">
            <p class="head-text" style="">xx集团风险隐患走势</p>
            <img class="img-l" src="../../../assets/icons/title-l.svg" alt="图片加载失败" style="">
            <img class="img-r" src="../../../assets/icons/title-r.svg" alt="图片加载失败" style="">
          </div>
        </div>
</template>
<script setup lang="ts" name="Head"></script>
<style lang="scss" scoped>
.head-box{
    width: 1860px;
    height: 75px;
    // position: relative;
    .img-center{
        width: 1126px;
        height: 75px;
    }
    .head-text{
        font-size: 30px;
        color: #23CEFD;
        font-weight: bold;
        position: absolute;
        top: 0;
        margin: 16px auto;
    }
    .img-l,.img-r{
        position: absolute;
    }
    .img-l{
        left: 0;
    }
    .img-r{
        right: 0;
    }
}

</style>

<template>
    <div class="breadcrumb-box">
        <el-breadcrumb separator="/">
            <TransitionGroup mode="out-in">
                <el-breadcrumb-item :to="{ path: '/' }"><el-icon><HomeFilled /></el-icon>homepage</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </TransitionGroup>
          </el-breadcrumb>
    </div>
</template>
<script setup lang="ts">
import {useRoute,useRouter} from "vue-router"
const route =useRoute();
const router=useRouter();
</script>
<style lang="scss" scoped>
.breadcrumb-box{
    margin-left: 10px;
}
</style>
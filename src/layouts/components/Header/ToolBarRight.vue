<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 08:23:52
 * @LastEditTime: 2023-06-12 14:10:01
-->
<template>
    <div class="tool-bar-r">
        <div class="row-center-center">
            <MyTheme/>
            <ThemeSwitch/>
        </div>
       <span class="username">admin</span>
       <div class="avatar">
			<img src="../../../assets/images/avatar.gif" alt="avatar" />
		</div>
    </div>
</template>
<script setup lang="ts">
import  MyTheme from './components/MyTheme.vue';
import ThemeSwitch from "@/components/ThemeSwitch/index.vue";
</script>
<style lang="scss" scoped>
.tool-bar-r{
    display: flex;
    align-items: center;
    justify-content: center;
}
    .avatar {
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
}

.username{
    margin: 0 20px;
}
</style>
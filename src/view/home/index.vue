<template>
    <div class="home">
        欢迎来到我的主页111888
		<WangEditor v-model:value="value"/>
    </div>
</template>
<script lang="ts" setup name="WangEditor">
import {ref} from "vue"
import WangEditor from "@/components/WangEditor/index.vue";
const value =ref("小美")
</script>
<style lang="scss" scoped>
.home {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
    background-color: #fff;
	.home-bg {
		width: 70%;
		margin-bottom: 20px;
	}
}
</style>
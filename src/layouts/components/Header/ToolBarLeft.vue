<template>
    <div class="tool-bar-left">
        <FoldCollapse id="FoldCollapse"/>
    </div>
</template>
<script setup lang="ts">
import FoldCollapse from "./components/FoldController.vue"
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
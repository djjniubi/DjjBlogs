<template>
  <el-drawer v-model="drawer" title="" direction="rtl" size="20%">
    <!-- 布局切换 -->
    <div class="title_item">布局切换</div>
    <div class="layouts-box">
        <!-- 纵向布局 -->
      <el-tooltip effect="dark" content="纵向" placement="top" :show-after="200">
         <div class="layouts-item lengthways" @click="changLayout('lengthways')">
            <div class="layouts-nav"></div>
            <div class="layouts-main">
                <div class="layouts-header"></div>
                <div class="layouts-conten"></div>
            </div>
            <el-icon class="okIcon" v-if="themeConfig.layouts==='lengthways'"><CircleCheckFilled /></el-icon>
         </div>
      </el-tooltip>
      <!-- 经典布局 -->
      <el-tooltip effect="dark" content="经典" placement="top" :show-after="200">
        <div class="layouts-item classic" @click="changLayout('classics')">
           <div class="layouts-nav"></div>
           <div class="layouts-main">
               <div class="layouts-header"></div>
               <div class="layouts-conten"></div>
           </div>
           <el-icon class="okIcon" v-if="themeConfig.layouts==='classics'"><CircleCheckFilled /></el-icon>
        </div>
     </el-tooltip>
     <!-- 横向布局 -->
     <el-tooltip effect="dark" content="横向" placement="top" :show-after="200">
        <div class="layouts-item crosswise" @click="changLayout('crosswise')">
           <div class="layouts-nav"></div>
           <div class="layouts-conten"></div>
           <el-icon class="okIcon" v-if="themeConfig.layouts==='crosswise'"><CircleCheckFilled /></el-icon>
        </div>
     </el-tooltip>
     <!-- 分栏布局 -->
     <el-tooltip effect="dark" content="分栏" placement="top" :show-after="200">
        <div class="layouts-item subfield" @click="changLayout('subfield')">
           <div class="layouts-nav"></div>
           <div class="layouts-tow"></div>
           <div class="layouts-conten"></div>
           <el-icon class="okIcon" v-if="themeConfig.layouts==='subfield'"><CircleCheckFilled /></el-icon>
        </div>
     </el-tooltip>
    </div>
    <!-- 全局主题 -->
    <div>
        <div class="title_item">全局主题</div>
        <div class="theme_item">
            <span>主题颜色</span>
            <el-color-picker v-model="themeConfig.themeColor" />
        </div>
        <div class="theme_item">
            <span>暗黑模式</span>
            <ThemeSwitch/>
        </div>
        <div class="theme_item">
            <span>灰色模式</span>
            <el-switch v-model="themeConfig.isGray" @change="change('isGray')" />
        </div>
        <div class="theme_item">
            <span>色弱模式</span>
            <el-switch v-model="themeConfig.isColorWeakness" @change="change('isColorWeakness')"  />
        </div>
    </div>
  </el-drawer>
</template>
<script setup lang="ts">
import { ref,computed } from "vue";
import mittBus from "@/utils/mittBus";
import {GlobalStore} from "@/store";
import ThemeSwitch from "@/components/ThemeSwitch/index.vue";
import {customTheme} from "@/hooks/customTheme";
const globalStore=GlobalStore()
const themeConfig=computed(()=>globalStore.themeConfig);
const changLayout=(data:string)=>{globalStore.setThemeConfig({...themeConfig.value,layouts:data})}
//是否打开抽屉
const drawer = ref(true);
mittBus.on("openDrawer", () => (drawer.value = true));
const {switchGray}=customTheme()
const change=(data:string)=>{switchGray(data)}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>

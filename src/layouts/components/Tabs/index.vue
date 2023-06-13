<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-12 11:09:55
 * @LastEditTime: 2023-06-13 15:13:44
-->
<template>
  <div class="tabs-box">
    <div class="tabs-item">
      <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsStore.tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.closable">
          <template #label>
            <el-icon class="tabs-icon" size="22">
              <component :is="item.icon"></component>
            </el-icon>
           {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
      <el-dropdown>
        <el-button size="small" type="primary">
            更多
          <el-icon class="el-icon--right" ><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from "vue";
import type { TabsPaneContext,TabPaneName } from "element-plus";
import {useRoute,useRouter} from "vue-router"
import {userTabsStore} from "@/store/modules/tabs"
const route=useRoute();
const router =useRouter();
const activeName = ref(route.fullPath);
const tabsStore=userTabsStore();
watch(()=>route.fullPath,()=>{
  activeName.value=route.fullPath;
  let {title,icon,menuOrder,isAffix} = route.meta
  
  const tabsParams={
            title:title as string,
            menuOrder:menuOrder as number,
            icon:icon as string,
            path:route.path as string,
            name:route.name as string,
            closable:!isAffix as boolean
  }
  tabsStore.addTabs(tabsParams)
  
},{ immediate: true })
/**hand Click */
const handleClick = (tab: TabsPaneContext) => {
  console.log(tab);
  router.push(tab.props.name as string)
};

/**tab Remove */
const tabRemove=(tab:TabPaneName)=>{
  if(tab===activeName.value){
    tabsStore.removeTabs(tab)
  }
}
</script>
<style lang="scss" scoped>
.tabs-box {
  background-color: var(--el-bg-color);
  .tabs-item {
    width: 100%;
    position: relative;
    .el-dropdown {
      position: absolute;
      top: 8px;
      right: 14px;
    }
    :deep(.el-tabs) {
      .el-tabs__header {
        box-sizing: border-box;
        height: 40px;
        padding: 0 10px;
        margin: 0;
        .el-tabs__nav-wrap {
          position: absolute;
          width: calc(100% - 110px);
          .el-tabs__nav{
            display: flex;
            border: none;
            .el-tabs__item{
                display: flex;
              align-items: center;
              justify-content: center;
              color: #afafaf;
              border: none;
              .tabs-icon{
                margin: 1.5px 4px 0 0;
                font-size: 15px;
              }
              .is-icon-close {
                margin-top: 1px;
              }
              &.is-active{
                color: var(--el-color-primary);
                &::before {
                    position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 0;
                  content: "";
                  border-bottom: 2px solid var(--el-color-primary) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-31 08:54:30
 * @LastEditTime: 2023-07-31 17:26:27
-->
<template>
  <div class="table-box" :id="id">
    <div class="header" v-if="isHideHeader">
      <div class="header-item"></div>
    </div>
    <div class="row-box">
      <div class="row-item">
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useScreen } from "@/hooks/useScreen";
import { ParameterConfiguration, assign, cloneDeep } from "./index";
import { tr } from "element-plus/es/locale";
const props = defineProps({
  config: {
    type: Object,
    defalet: () => {},
  },
});
//参数配置
const defaultConfig: ParameterConfiguration = {
  headerData: [],
  headerStyle: [],
  headerBg: "",
  headerHeight: 0,
  headerFontSize: 0,
  headerFontWeight: "",
  headerIndex: false,
  headerIndexConter: "",
  headerIndexStyle: {},
  headerIndexData: [],
  rowIndexStyle: {},
  data: [],
  rowNum: 0,
  moveNum: 0,
  aligns: [],
  duration: 0,
  isHideHeader: true,
  tagBGC: "",
  rowStyle: [],
};
const id = ref(`scroull-${uuidv4()}`);
const { width, height } = useScreen(id.value);
//标题内容
const headerData=ref([]);
//标题的高度
const headerHeight = ref(0);
//是否显示标题
const isHideHeader = ref(true);
//是否停止轮播
const isAnimationStop = ref(false);
/**计算宽度 */
const calculateWidth=(config:ParameterConfiguration)=>{
    let usedWidth = 0;
    let usedColumnNum = 0;
    let avgWidth=0;
    if(config.isHideHeader){
        //判断一下是否定义了宽度,如果定义了就以这个宽度计算,没有定义自动撑满
        config.headerStyle.forEach((style:any)=>{
            if(style.width){
                usedWidth=style.width.replace("px","");
                usedColumnNum++
            }
        })
        avgWidth=(width.value-usedWidth)/(headerData.value.length-usedColumnNum);
        const _columnWidth=new Array(headerData.value.length).fill(avgWidth);
        
    }
};
/*处理标题数据*/
const handleHeader = (config: ParameterConfiguration) => {
  const _headerData: Array<[string]> = cloneDeep(config.headerData);
  if (!config.isHideHeader) {
    isHideHeader.value = false;
    return;
  }
  if (config.headerIndex) {
    _headerData.forEach((row, index) => {
      const tagText = `<span style="background-color:${config.tagBGC};padding:4px;border-radius:4px;">${index + 1}</span>`;
      row.unshift(tagText);
    });
  }
};
/*处理列表数据*/
const handleRows = (config: ParameterConfiguration) => {};
/*执行动画*/
const startAnimation = () => {};
/*停止动画*/
const stopStartAnimation = () => {
  isAnimationStop.value = true;
};

/*更新数据*/
const undate = () => {
  stopStartAnimation();
  const _actualConfig = assign(defaultConfig, props.config as object);
  if (_actualConfig.headerData.length === 0 && _actualConfig.data.length === 0) return;
  isAnimationStop.value = false;
  startAnimation();
};

watch(
  () => props.config,
  () => {
    console.log("watch", props.config);
    undate();
  }
);
</script>

<style scoped lang="scss">
@mixin text {
  padding: 0 10px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-box {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  .header-item {
    @include text;
  }
}
.row {
  overflow: hidden;
  .row-item {
    display: flex;
    transition: all 0.3s linear;
    .item {
      @include text;
    }
  }
}
</style>

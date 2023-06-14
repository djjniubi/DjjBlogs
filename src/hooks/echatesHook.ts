/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-14 09:10:53
 * @LastEditTime: 2023-06-14 09:58:41
 */
import {onMounted} from "vue";
import * as echarts from "echarts";

export const nodeElemt=(name:string,option={})=>{
    const dom = document.querySelector(name) as HTMLElement;
    const chate =echarts.init(dom);
    chate.setOption(option)
}


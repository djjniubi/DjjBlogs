/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-26 16:54:10
 * @LastEditTime: 2023-07-28 21:46:17
 */
import{ref,onMounted}from "vue";
export const useScreen= (nodeID:string)=>{
   let width=ref(0);
   let height=ref(0);
   let dom:HTMLElement
   onMounted(()=>{
     dom=document.getElementById(nodeID) as HTMLElement;
     width.value=dom.clientWidth;
     height.value=dom.clientHeight;
   })
   return {width,height}
}
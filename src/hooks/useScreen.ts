/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-26 16:54:10
 * @LastEditTime: 2023-07-26 17:25:35
 */
import{ref,nextTick,Ref}from "vue";
const nodeHieght=ref(0);
const nodeWidth=ref(0)

export const useScreen= async(nodeID:string)=>{
    let node =  document.querySelector(`#${nodeID}`);
    await nextTick();
    node =  document.querySelector(`#${nodeID}`);
    nodeHieght.value=node?.clientHeight as number;
    nodeWidth.value=node?.clientWidth as number;
    const nodeCode={width:nodeWidth.value,height:nodeHieght.value}   
   return nodeCode
}
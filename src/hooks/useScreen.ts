/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-07-26 16:54:10
 * @LastEditTime: 2023-07-27 00:31:54
 */
import{ref,nextTick,Ref, reactive}from "vue";
const nodeHieght=ref(250);
const nodeWidth=ref(0)
const nodeCode={
    width:nodeWidth,
    height:nodeHieght
}


export const useScreen= (nodeID:string)=>{
    let node =  document.querySelector(`#${nodeID}`);
     nextTick(()=>{
        node =  document.querySelector(`#${nodeID}`);
        nodeHieght.value=node?.clientHeight as number;
        nodeWidth.value=node?.clientWidth as number;
     });
   return nodeCode
}
/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-08-06 21:08:59
 * @FilePath: \DjjBlogs\src\view\therrData\scene\tag.ts
 * @LastEditors: djj
 * @LastEditTime: 2023-08-07 00:56:02
 */
import {CSS2DRenderer,CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer";
import {ref,onMounted} from "vue";
const tag=(domId:string)=>{
   let dom:HTMLElement
   let label:any=ref(null)
   onMounted(()=>{
    dom=document.getElementById(domId) as HTMLElement;
    label.value=new CSS2DObject(dom);
    console.log("CSS2DObject",label);
    
    dom.style.pointerEvents="none"
   })
   return label
}

const labelRenderer=new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth,window.innerHeight);
labelRenderer.domElement.style.position="absolute";
//相对标签原来的位置偏移
labelRenderer.domElement.style.top="200px";
labelRenderer.domElement.style.left = '250px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);
export {tag,labelRenderer}
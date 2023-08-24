/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-08-06 21:08:59
 * @FilePath: \DjjBlogs\src\view\therrData\scene\tag.ts
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-24 16:12:05
 */
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { ref, onMounted } from "vue";

const tag = (domId: string) => {
   let label: any = null
   let dom: HTMLElement
   dom = document.getElementById(domId) as HTMLElement;
   label= new CSS2DObject(dom);
   dom.style.pointerEvents = "none";
   console.log("label",label);
   return label
}
  const labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.domElement.style.position = "absolute";
      //相对标签原来的位置偏移
      labelRenderer.domElement.style.top = "200px";
      labelRenderer.domElement.style.left = '250px';
      labelRenderer.domElement.style.pointerEvents = 'none';
      console.log("labelRenderer",labelRenderer);
export { tag,labelRenderer }
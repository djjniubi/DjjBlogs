/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-08-07 01:05:54
 * @FilePath: \DjjBlogs\src\view\therrData\scene\choose.ts
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-07 09:20:04
 */
import * as THREE from "three";
import {camera} from "../camera/Camera";
import {granaryArr} from "../scene/model";

let chooseMesh: any=null;
const choose=(event:any)=>{
if(chooseMesh){
    chooseMesh.material.color.set(0xffffff);
};
const  Sx = event.clientX;
const Sy = event.clientY;
const x = (Sx / window.innerWidth) * 2 - 1; //WebGL标准设备横坐标
const y = -(Sy / window.innerHeight) * 2 + 1; //WebGL标准设备纵坐标
const raycaster = new THREE.Raycaster();
raycaster.setFromCamera(new THREE.Vector2(x, y), camera);


const intersects = raycaster.intersectObjects(granaryArr);
if (intersects.length > 0) {
  console.log("intersects",intersects);
    chooseMesh = intersects[0].object;
    chooseMesh.material.color.set(0x00ffff);//选中改变颜色，这样材质颜色贴图.map和color颜色会相乘
    chooseMesh.point = intersects[0].point;
  }else{
    chooseMesh = null;
  }
}
export {choose,chooseMesh}
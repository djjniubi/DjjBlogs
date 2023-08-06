import * as THREE from "three";
// 引入Three.js扩展库
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
let width =window.innerWidth;
let height =window.innerHeight;
/**
 * 设置相机
 */

const camera =new THREE.PerspectiveCamera(40,width/height,1,3000);
camera.position.set(318,162,204);
camera.lookAt(0,0,0);

const renderer =new THREE.WebGLRenderer({
    antialias:true     //开启锯齿
});
//设置设备像素比率,防止Canvas画布输出模糊。
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width,height)
renderer.setClearColor(0x005577, 1);
const controls = new OrbitControls(camera, renderer.domElement);
export {camera,renderer}
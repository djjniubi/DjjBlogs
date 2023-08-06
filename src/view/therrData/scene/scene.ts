/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-08-06 21:08:28
 * @FilePath: \DjjBlogs\src\view\therrData\scene\scene.ts
 * @LastEditors: djj
 * @LastEditTime: 2023-08-06 22:19:25
 */
import * as THREE from "three";
import {model} from "../scene/model";
/**
 * 创建场景对象
 */

let scene = new THREE.Scene();
scene.add(model);
//环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);
export {scene}
<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:25:34
 * @FilePath: \DjjBlogs\src\view\largeDataScreen\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-21 10:17:05
-->
<template>
    <AdaptiveContainer>
      <div style="position: fixed;height: 100%;" ref="webgl"></div>
       <div class="row-center-center" >
        <div style="width: 1860px;position: relative;" >
          <Head/>
          <ViewL/>
          <ViewR/>
          <ViewBtm/>
        </div>
       </div>
    </AdaptiveContainer>
</template>

<script setup lang="ts">
import {ref,onMounted} from "vue";
import AdaptiveContainer from "@/components/AdaptiveContainer/index.vue";
import Head from './component/Heads.vue';
import ViewL from "./component/ViewL.vue";
import ViewR from "./component/ViewR.vue";
import ViewBtm from "./component/ViewBtm.vue";
import starsImg from "@/assets/images/stars.png";
import theEarthImg from "@/assets/images/map.jpg";
import earthhImg from "@/assets/images/earth.jpg";
import glowImg from "@/assets/images/glow.png";
import innerGlowImg from "@/assets/images/innerGlow.png";
import * as THREE from "three";
// 引入轨道控制器扩展库OrbitControls.js
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
const webgl=ref<HTMLElement|null>(null);
 //创建一个场景
 const scene = new THREE.Scene()
    //创建一个相机
    const camera =new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,100000)
    camera.position.set(0, 60, 300);

    //创建一个渲染器
    let  renderer = new THREE.WebGLRenderer({ antialias: true })
onMounted(()=>{
     //制作星星
     const starArr=[];
     for(let i=0;i<900;i++){
       const vertex=new THREE.Vector3();
       vertex.x=900*Math.random()-400;
       vertex.y=900*Math.random()-400;
       vertex.z=900*Math.random()-400;
       starArr.push(vertex.x,vertex.y,vertex.z)
     }
     const starrySky=new THREE.BufferGeometry();
     starrySky.setAttribute('position',new THREE.BufferAttribute( new Float32Array(starArr), 3 ));
     const texture = new THREE.TextureLoader().load(starsImg);
     console.log("texture",texture);
     
     const material = new THREE.PointsMaterial( { color:"rgba(255,255,255,0.1)",size:2,map:texture } )
     const start=new THREE.Points(starrySky,material);
     scene.add(start);
     //创建一个地球
     const theEarth =new THREE.SphereGeometry(60,60,60);
     const theEarthMap=new THREE.TextureLoader().load(theEarthImg)
     const theEarthMaterial = new THREE.MeshBasicMaterial( {map:theEarthMap } );

    const sphere = new THREE.Mesh( theEarth, theEarthMaterial);
    sphere.position.set(0,40,0);
    scene.add(sphere);
    //使用描边发光贴图
    const theEarthShine =new THREE.SphereGeometry(63,60,60);
    const theEartShinehMap=new THREE.TextureLoader().load(earthhImg);
    const theEarthShinehMaterial = new THREE.MeshBasicMaterial( {map:theEartShinehMap } );
    const sphereShine = new THREE.Mesh( theEarthShine, theEarthShinehMaterial);
    sphereShine.position.set(0,40,0);
    scene.add(sphereShine)
     //使用发光精灵
     const luminousTexture =new THREE.TextureLoader().load(glowImg);
     const luminousMaterial=new THREE.SpriteMaterial({map:luminousTexture,color: 0x4d76cf,transparent:true,
        depthWrite:false,
        depthTest:false,
        blending:THREE.AdditiveBlending});
        const luminousTheEarth=new THREE.Sprite(luminousMaterial);
        luminousTheEarth.scale.set(189,189,0);
        luminousTheEarth.position.set(0,40,0);
        scene.add(luminousTheEarth);

     //球内发光
     const luminousTexture2 =new THREE.TextureLoader().load(innerGlowImg);
     const luminousMaterial2=new THREE.SpriteMaterial({map:luminousTexture2,color: 0x4d76cf,transparent:true,
        depthWrite:false,
        depthTest:false,
        blending:THREE.AdditiveBlending});
        const luminousTheEarth2=new THREE.Sprite(luminousMaterial2);
        luminousTheEarth2.scale.set(126,126,0);
        luminousTheEarth2.position.set(0,40,0);
        scene.add(luminousTheEarth2);
    renderer.setSize(window.innerWidth,window.screen.height);
    //使用画布进行渲染到页面
    webgl.value?.appendChild(renderer.domElement)
    //轨道控制器
    const controls =new OrbitControls(camera, renderer.domElement)
    controls.autoRotate=true

     scene.background = new THREE.Color(0x030311);
     function render(){
        controls.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
       }
       render()
})
</script>

<style lang="scss">

</style>
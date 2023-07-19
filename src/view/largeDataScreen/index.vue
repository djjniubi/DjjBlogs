<!--
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:25:34
 * @FilePath: \DjjBlogs\src\view\largeDataScreen\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-11 14:00:09
-->
<template>
    <AdaptiveContainer>
    <div>1111</div>
    <img src="../../assets/cehngshi.svg" alt="" srcset="">
    <!-- <img src="../../assets/logo.svg" alt="" srcset=""> -->
    <!-- <svg viewBox="-10 -10 220 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" style="fill:none;stroke: blue; stroke-width: 1">
            <animateMotion dur="10s" repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
    </rect>
    </svg> -->
   
    <!-- <svg  version="1.1" width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect id="rectId" x="130" y="400" width="50" height="50" fill="rgb(129, 201, 149)" rx="25">
                <animateMotion dur="10s" repeatCount="indefinite"
                   path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50, z" />
            </rect>
        </g>
        <g >
            <rect x="200" y="200" width="420" height="220" fill="black">
              
            </rect>
            <circle id="Port" cx="220" cy="210" r="10" fill="blue">
                <animateMotion
                   path="M 0 0 V 190 Z"
                   dur="3s" repeatCount="indefinite" />
            </circle>
            <circle id="Port2" cx="250" cy="210" r="10" fill="blue">
                <animateMotion
                   path="M 0 0 V 190 Z"
                   dur="4s" repeatCount="indefinite" />
            </circle>
        </g>
        <use x="50" y="10" xlink:href="#Port" />
        <use x="50" y="10" xlink:href="#Port2" />
        <use x="110" y="10" xlink:href="#Port" />
    </svg> -->

    <!-- <svg class="dv-border-svg-container" width="100%" height="100%">
        <defs>
            <filter id="filterId" height="150%" width="150%" x="-25%" y="-25%">
                <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
                <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
                <feFlood flood-color="#7ce7fd" result="glowColor">
            <animate
              attributeName="flood-color"
              values="#7ce7fd"
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
            />
          </feFlood>
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        </defs>
        <path
        v-if="true && true"
        fill="transparent"
        stroke-width="2"
        stroke="#2e6099"
        :d="`
          M15 5 L ${200 - 15} 5 Q ${200 - 5} 5, ${200 - 5} 15
          L ${200 - 5} ${ 150- 15} Q ${200 - 5} ${150 - 5}, ${200 - 15} ${150 - 5}
          L 15, ${150 - 5} Q 5 ${150 - 5} 5 ${150 - 15} L 5 15
          Q 5 5 15 5
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        filter="url(#filterId)"
        stroke="#7ce7fd"
        :d="`M 20 5 L 15 5 Q 5 5 5 15 L 5 20`"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        filter="url(#filterId)"
        stroke="#7ce7fd"
        :d="`M ${200 - 20} 5 L ${200 - 15} 5 Q ${200 - 5} 5 ${200 - 5} 15 L ${200 - 5} 20`"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        filter="url(#filterId)"
        stroke="#7ce7fd"
        :d="`
          M ${200 - 20} ${150 - 5} L ${200 - 15} ${150 - 5}
          Q ${200 - 5} ${150 - 5} ${200 - 5} ${150 - 15}
          L ${200 - 5} ${150 - 20}
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        filter="url(#filterId)"
        stroke="#7ce7fd"
        :d="`
          M 20 ${150 - 5} L 15 ${150 - 5}
          Q 5 ${150 - 5} 5 ${150 - 15}
          L 5 ${150 - 20}
        `"
      />
    </svg> -->
    <svg width="800" height="800" style="border: 1px solid;">
        <!-- <ellipse cx="80" cy="80" rx="20" ry="50"></ellipse>
        <line x1="10" x2="50" y1="20" y2="50" stroke="red" stroke-width="3"></line>
        <line x1="10" x2="50" y1="10" y2="50" stroke="green" /> -->
         
        <!-- svg动画 -->
        <!-- 
           matrix(<a> <b> <c> <d> <e> <f>) 复杂变形
           [a c e]  =>  [2 2 2]  => 2*_x+2*_y+2=newX
           [b d f]  =>  [1 5 2]  => 1*_x+5*_y+2=newY

          顶点坐标
          [0,0]     => [newX,newY] => [2,2]
          [150,0]   => [newX,newY] => [302,152]
          [150,150] => [newX,newY] => [602,952]
          [0,150]   => [newX,newY] => [302,752]
         -->
        <!-- <rect width="150" height="150" fill="red" transform="matrix(2 1 2 5 2 2)"/> -->
         
          <!-- <circle cx="200" cy="200" r="180" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>
          <circle class="circle" cx="200" cy="200" r="180" stroke-width="20" stroke="#02bcfe" fill="transparent" transform="matrix(0 -1 1 0 0 400)"></circle> -->

         <circle cx="400" cy="400" r="200" stroke="#02bcfe" stroke-width="20" fill="transparent" ></circle>
         <circle cx="400" cy="400" r="160" stroke="#3be6cb" stroke-width="20" fill="transparent" ></circle>

    </svg>
    <!-- logo 描边 -->
<svg t="1688004548222" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3439" width="300" height="300" style="border: 1px solid;">
  <path class="logopath" d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#666666" p-id="3440"></path>
  <path class="logopath" d="M674.133333 608c-46.933333 57.6-100.266667 85.333333-162.133333 85.333333s-115.2-27.733333-162.133333-85.333333c-10.666667-12.8-32-14.933333-44.8-4.266667-12.8 10.666667-14.933333 32-4.266667 44.8 59.733333 70.4 130.133333 106.666667 211.2 106.666667s151.466667-36.266667 211.2-106.666667c10.666667-12.8 8.533333-34.133333-4.266667-44.8-12.8-10.666667-34.133333-8.533333-44.8 4.266667zM362.666667 512c23.466667 0 42.666667-19.2 42.666666-42.666667v-64c0-23.466667-19.2-42.666667-42.666666-42.666666s-42.666667 19.2-42.666667 42.666666v64c0 23.466667 19.2 42.666667 42.666667 42.666667zM661.333333 512c23.466667 0 42.666667-19.2 42.666667-42.666667v-64c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666666 42.666666v64c0 23.466667 19.2 42.666667 42.666666 42.666667z" fill="#666666" p-id="3441"></path>
</svg>

 <svg width="300" height="300" style="margin-left: 20px;border: 1px solid;">
    <rect x="0" width="100" height="50" fill="red">
             <!-- <set attributeName="x" attributeType="XML"  to="50" begin="2s"></set> -->
             <animate attributeName="x" attributeType="XML" from="0" to="50" dur="3s" repeatCount="indefinite"></animate>
             <animate attributeName="y" attributeType="XML" from="0" to="50" dur="3s" repeatCount="indefinite"></animate>
    </rect>
 </svg>
    <!-- <svg width="50px" height="50px">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="31.415, 31.415"
        stroke="#02bcfe"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0, 25 25;360, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="25"
        cy="25"
        r="10"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="15.7, 15.7"
        stroke="#3be6cb"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360, 25 25;0, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcfe;#3be6cb"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg> -->
    </AdaptiveContainer>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import AdaptiveContainer from "@/components/AdaptiveContainer/index.vue";


onMounted(()=>{
  const logo:any =document.getElementsByClassName("logopath")[0]
  console.log("logopath",logo.getTotalLength());
  
})
</script>

<style lang="scss">
.circle{
  // stroke-dasharray: 10 1131;
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from{
    stroke-dasharray: 0 1131;
  }
  to{
    stroke-dasharray: 1131 0;
  }
}
.logopath{
  fill: none;
  stroke: #333;
  stroke-width: 10;
  animation: logos 10s linear infinite forwards;
}

@keyframes logos {
  // from{
  //   stroke-dasharray: 5091;
  //   stroke-dashoffset: 5091;
  // }
  // to{
  //   stroke-dasharray: 5091;
  //   stroke-dashoffset: 0;
  // }
  0%{
    fill: white;
    stroke: #333;
    stroke-dasharray: 5091;
    stroke-dashoffset: 5091;
  }
  50%{
    fill: white;
    stroke: #333;
    stroke-dasharray: 5091;
    stroke-dashoffset: 0;
  }
  75%{
    fill: red;
    stroke: white;
  }
  100%{
    fill: blue;
    stroke: white; 
  }
}
</style>
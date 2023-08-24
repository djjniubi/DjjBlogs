/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-08-07 07:58:13
 * @LastEditTime: 2023-08-24 08:19:25
 */
import * as THREE  from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
//声明一组对象
const model =new THREE.Group();
//创建一个GLTF加载器
const loader =new GLTFLoader();
//粮仓模型对象集合
let  granaryArr:Array<any>=[];
loader.load("/model/modelZH.glb",(gltf)=>{
   console.log("gltf",gltf);
   
    gltf.scene.traverse((object:any)=>{
        if(object.type==="Mesh"){
            if(object.material.map&&object.material.color){
                object.material =new THREE.MeshLambertMaterial({
                    map:object.material.map,
                    color:object.material.color
                })
            }
        }
    })
    const group=gltf.scene.getObjectByName("粮仓");
    group?.traverse((obj)=>{

        if(obj.type==="Mesh"){
            granaryArr.push(obj)
        }
    });
    model.add(gltf.scene)
});

export {model,granaryArr}
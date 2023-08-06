import * as THREE  from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
//声明一组对象
const model =new THREE.Group();
//创建一个GLTF加载器
const loaser =new GLTFLoader();
//粮仓模型对象集合
let  granaryArr:Array<any>=[];
loaser.load("/model/modelZH.glb",(gltf)=>{
   console.log("gltf",gltf);
   
    gltf.scene.traverse((object)=>{
        let material=object as any
        if(object.type==="Mesh"){
            if(material.map&&material.color){
                material=new THREE.MeshLambertMaterial({
                    map:material.map,
                    color:material.color
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
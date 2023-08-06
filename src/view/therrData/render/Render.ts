import {scene} from "../scene/scene";
import {camera,renderer} from "../camera/Camera";
const render=()=>{
    renderer.render(scene,camera);
    requestAnimationFrame(render)
};

export { renderer,render}
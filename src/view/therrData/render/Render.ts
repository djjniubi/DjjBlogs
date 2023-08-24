import {scene} from "../scene/scene";
import {camera,renderer} from "../camera/Camera";
import {labelRenderer} from "../scene/tag"
const render=()=>{
    labelRenderer.render(scene,camera);
    renderer.render(scene,camera);
    requestAnimationFrame(render)
};

export { renderer,render}
import { loadFBX } from "../utiles/index";
import * as THREE from "three"
import {SurroundLine} from "../effect/SurroundLine"
export class City{
    constructor(scene){
        this.scene=scene
        this.loadCity()
    }

    loadCity(){
        //加载模型 渲染到画布上
        loadFBX("/src/model/shanghai.fbx").then(object=>{
           
            object.traverse(child=>{
                if(child.isMesh){
                    new SurroundLine(this.scene,child)
                }
            })
        })
    }
    start(){

    }
}
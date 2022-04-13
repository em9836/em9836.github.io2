/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {input, type} from "./os.js";
/** Turn on */
function on(){
    
}
/** turn off */
function off(){
    
}
function handleClick(evt){
    
}
function togglePower(){
    let p = document.querySelector("#power")[0];
    if (p.hasAttribute("style")){
        if (p.style.color ==="black"){
            p.style.color ==="green";
        }else if(p.style.color ==="green"){
            p.style.color ==="black";
        }
    }
    let screen = document.getElementById("term-body");
    
}
function globalListener({keyCode}){
    
}
function addHandlers(){
    document.addEventListener("keydown",globalListener);
    document.getElementById("power").addEventListener('click', togglePower);
}
export {togglePower, addHandlers, globalListener};
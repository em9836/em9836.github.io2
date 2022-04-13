/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {input} from "./os.js";
var startupLns = ["STARTING UP TERMINAL","","","",];
const users = ["admin","guest"];

function clear(){
    var x = document.getElementById("term-content");
    x.innerHTML="";
}
async startup = function(){
    clear();
    type("Welcome to TERMINAL #???"); 
};




var powerdown = () =>{
    
};

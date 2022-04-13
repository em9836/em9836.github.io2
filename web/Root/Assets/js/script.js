/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
var $id = function (id) {
    return document.getElementById(id);
};

const $sel = selector => document.querySelector(selector);
var toggleMenu = function(){
  var menu = document.getElementById("nlist");
  if (menu.classList.contains("show")){
      menu.classList.remove('show');
  }else {
      menu.classList.toggle("show");
  }
  
};
var toggleContent = function(cElement){
//    var btn = cElement;//this;
    var element = $id(cElement);
//    var toggleElements = document.getElementsByClassName("toggle-content");
    var e;
    if (element.hasAttribute("style")){
                if (element.style.display === "none"){
                    element.style.display = "block";
                }else if (element.style.display === "block"){
                    element.style.display = "none";
                }
            }else{
                element.setAttribute("style", "block");
            }
//    for (var i=1;i< toggleElements; i++){
//        e = toggleElements[i];
//        if (toggleElements[i] == element){
//            if (e.hasAttribute("style")){
//                if (e.style.display === "none"){
//                    e.style.display = "block";
//                }else if (e.style.display === "block"){
//                    e.style.display = "none";
//                }
//            }else{
//                e.setAttribute("style", "block");
//            }
//        }
//    }
};
/**
 * toggles box defined by element id.
 * @type void
 * @param {String} element
 * 
 */
var togglebox = function (element) {
    var e = $id(element);// for element
    try {
        if (e.hasAttribute("style")) {
            if (e.style.display === "none") {
                e.style.display = "block";// e.setAttribute("style", "block")
            } else if (e.style.display === "block") {
//            element.getAttribute("style");
                e.style.display = "none";
            }
        }
    } catch (e) {
    }
};
var glitchmod;

function getHeight() {
    return window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
}

function drawLines() {
    const lines = document.getElementsByClassName('line');
    if (lines.length) {
        for (let i = 0; i < lines.length; i++) {
            document.body.removeChild(lines[i]);
        }
    }

    for (i = 0; i < getHeight() / 10; i++) {
        const line = document.createElement("div");
        line.className = `line line-${i}`;
        line.style.top = `${i * 10}px`;
        const time = Math.random() * 5;
        line.style.animation = `lines ${time}s infinite`;
        document.body.appendChild(line);
    }
}

//window.onresize = function (event) {
//    drawLines();
//};


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var inputx = [
    async function recieve(val) {

    },
];
async function input(value) {
    return new Promise((resolve) => {
        const onKeyPress = (evt) => {
            keycode = event.keyCode;
            var printable = false;
            if ((keycode > 47 && keycode < 58) || // number keys
                    keycode === 32 || // spacebar & return key(s) (if you want to allow carriage returns)
                    (keycode > 64 && keycode < 91) || // letter keys
                    (keycode > 95 && keycode < 112) || // numpad keys
                    (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                    (keycode > 218 && keycode < 223)) {
                printable = true;
            }
            if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.target.setAttribute("contenteditable", false);
                let result = evt.target.textContent.toLowerCase.trim();
            }

        };
//       let typer = 
        return new Promise(async (resolve) => {

        });
    }, wait);
}
/**
 * 
 * @param {type} value
 * @returns {undefined}
 */
function addHistory(value) {

}
function getChar(keycode){
    
}

/**
 * type text on screen
 * @param {String|Array<String>} text
 * @param {Element} container
 * @param {Number} waitval
 * @returns {undefined}
 */
function type(text, container = document.querySelector("#term-content"), waitval) {
//  await;  type("Welcome to TERMINAL #???",{initialWait: 3000});

    var span = document.getElementById("output");
    if (span == null) {
        span = document.createElement("span");
        span.id = "output";
        span.setAttribute("id", "output");
        span.setAttribute("contenteditable", "true");
        span.innerHTML = "";
        document.querySelector("#term-content")[0].appendChild(span);
//    span.contenteditable = ""
    }
    for (const t of text) {
//        t.prototype.toUpperCase();
    }

    container.querySelector("#output").innerHTML+=span;
}
async function waitKey() {
    const handle = () => {
        document.addEventListener("keyup", handle);
    };
}
export {input, type, addHistory};
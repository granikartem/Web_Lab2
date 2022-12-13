"use strict";

let canvasContainer = document.getElementById("visualization_container");
let canvas = document.getElementById("areas");
let ctx = canvas.getContext("2d");
let form = document.querySelector(".send_form")

canvas.addEventListener("click", function (e) {
    let canvasX = e.pageX - this.offsetLeft,
        canvasY = e.pageY - this.offsetTop;
    console.log(canvasX, canvasY);
    if (validateR()) {
        sendDataToForm((canvasX -123 )/36, (122 - canvasY)/36);
        drawPoints(canvasX, canvasY);
    } else canvasContainer.classList.add("input_err");
});

window.onload = function () {
    let coordX = document.querySelectorAll(".x_cell");
    let coordY = document.querySelectorAll(".y_cell");
    for (let i = 0; i < coordX.length; i++) {
        drawPoints((coordX[i].innerHTML * 36) + 123, 122 - (coordY[i].innerHTML) * 36  );
    }
};

function setBackground(radius){
    console.log(radius)
    switch(radius) {
        case '0':
            $(canvas).removeClass()
            $(canvas).addClass("empty");
            break;
        case '1.0':
            $(canvas).removeClass()
            $(canvas).toggleClass("radius1");
            break;
        case '1.5':
            $(canvas).removeClass()
            $(canvas).toggleClass("radius15");
            break;
        case '2.0':
            $(canvas).removeClass()
            $(canvas).toggleClass("radius2");
            break;
        case '2.5':
            $(canvas).removeClass()
            $(canvas).toggleClass("radius25");
            break;
        case '3.0':
            $(canvas).removeClass()
            $(canvas).toggleClass("radius3");
            break;
    }
}

function sendDataToForm(xVal, yVal) {
    let x = document.getElementById('X');
    let y = document.getElementById('Y');
    x.value = (xVal).toString().substr(0, 6);
    y.value = (yVal).toString().substr(0, 6);
    form.submit();
}

function drawPoints(canvasX, canvasY) {
    ctx.beginPath();
    ctx.fillStyle = "#E40045";
    ctx.fillRect(canvasX, canvasY,2,2);
    ctx.fill();
    ctx.closePath();
}
"use strict";

let canvasContainer = document.getElementById("visualization_container");
let canvas = document.getElementById("areas");
let ctx = canvas.getContext("2d");
let width = 320;
let canvasR = 117;
let form = document.querySelector(".send_form")

canvas.addEventListener("click", function (e) {
    let canvasX = e.pageX - this.offsetLeft,
        canvasY = e.pageY - this.offsetTop;
    if (validateR()) {
        sendDataToForm(canvasX - width / 2, width / 2 - canvasY);
        drawPoints(canvasX, canvasY);
    } else canvasContainer.classList.add("input_err");
});

window.onload = function () {
    let coordX = document.querySelectorAll(".x_cell");
    let coordY = document.querySelectorAll(".y_cell");
    let coordR = document.querySelectorAll(".r_cell");
    for (let i = 0; i < coordX.length; i++) {
        console.log(coordX[i].innerHTML * canvasR / coordR[i].innerHTML, coordY[i].innerHTML * canvasR / coordR[i].innerHTML);
        drawPoints(coordX[i].innerHTML * canvasR / coordR[i].innerHTML + width / 2, width / 2 - coordY[i].innerHTML * canvasR / coordR[i].innerHTML);
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
    let r = document.getElementById('r_select');
    x.value = (xVal * r.value / canvasR).toString().substr(0, 6);
    y.value = (yVal * r.value / canvasR).toString().substr(0, 6);
    form.submit();
}

function drawPoints(canvasX, canvasY) {
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#E40045";
    ctx.fill();
    console.log(`${canvasX - width / 2} ${width / 2 - canvasY}`);
    ctx.closePath();
}
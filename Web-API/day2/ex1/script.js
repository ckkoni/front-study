const canvas = document.querySelector("canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

//绘制矩形

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 150);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(75, 75, 100, 100);

// ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
// ctx.fillRect(25, 100, 175, 50);

// ctx.lineWidth = 5;
// ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.strokeRect(25, 25, 175, 200);

//绘制路径

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

function degToRad(degress) {
    return (degress * Math.PI) /180;
}

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// // ctx.lineTo(150, 106);
// ctx.fill();

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

//绘制文本

// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas text", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas text", 50, 150);

// canvas.setAttribute("aria-label", "Canvas text");

//绘制图片

// const image = new Image();
// image.src = "firefox.png";

// image.addEventListener("load", () => ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175));
// canvas.setAttribute("aria-label", "Firefox Logo");

//循环

// ctx.translate(width / 2, height / 2);

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min ;
// }

// let length = 250;
// let moveOffset = 20;

// for (let i = 0; i < length; i++) {
//     ctx.fillStyle = "rgba(" + (255 - length) + ", 0, " + (255 - length) + ", 0.9)";
//     ctx.beginPath();
//     ctx.moveTo(moveOffset, moveOffset);
//     // ctx.lineTo(moveOffset + length, moveOffset);
//     // const triHeight = (length / 2) * Math.tan(degToRad(60));
//     // ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
//     // ctx.lineTo(moveOffset, moveOffset);
//     ctx.arc(moveOffset, moveOffset, length / 4, degToRad(0), degToRad(360));
//     ctx.fill();

//     length--;
//     moveOffset += 0.7;
//     ctx.rotate(degToRad(5));
// }

//动画

ctx.translate(width / 2, height / 2);
const image = new Image();
image.src = "walk-right.png";
image.onload = draw;

let sprite = 0;
let posX = 0;

function draw() {
    ctx.fillRect(-(width / 2), -(height / 2), width, height);
    ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);

    if (posX % 13 === 0) {
        if (sprite === 5) {
            sprite = 0;
        } else {
            sprite++;
        }
    }

    if (posX > width /2) {
        let newStartPos = -(width /2 + 102);
        posX = Math.ceil(newStartPos);
        console.log(posX);
    } else {
        posX += 2;
    }

    window.requestAnimationFrame(draw);
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 붓
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(325, 600, 50, 200);
ctx.fillRect(475, 600, 50, 200);
ctx.fillRect(400, 700, 50, 100);
ctx.fillRect(325, 580, 200, 20);
ctx.moveTo(325,580);
ctx.lineTo(425, 500);
ctx.lineTo(525, 580);
ctx.fill();
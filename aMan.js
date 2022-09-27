const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 붓
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(215 - 40, 200 - 15, 15, 100);
ctx.fillRect(350 - 40, 200 - 15, 15, 100);
ctx.fillRect(260 - 40, 200 - 15, 60, 200);

ctx.arc(250, 150, 25, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(240, 145, 4, 0, Math.PI, 2 * Math.PI);
ctx.arc(260, 145, 4, 0, Math.PI, 2 * Math.PI);
ctx.fill();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 붓
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 1;

// https://flatuicolors.com/
const colors = [ 
  "#ffcccc",
  "#cd84f1",
  "#7efff5",
  "#4b4b4b",
  "#7d5fff",
  "#fab1a0",
  "#dfe6e9",
  "#00b894",
  "#ff7675",
];

function onClick(event) {
  ctx.beginPath();
  // ctx.moveTo(400, 400);
  ctx.moveTo(Math.random() * 400, Math.random() * 400);
  const color = colors[ Math.floor(Math.random() * colors.length) ];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
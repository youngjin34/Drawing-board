const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 붓
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function canselPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canselPainting);
canvas.addEventListener("mouseleave", canselPainting); // canvas를 벗어나고 다시 돌아았을 때 마우스를 누르지 않아도 계속 그려지는 오류를 없앰
function drawCanvas() {
  ctx.font = "bold 35px serif";
  ctx.fillStyle = "#FFAA40";
  ctx.fillText("Hang Man", 50, 27);
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}

function drawGallows() {
  ctx.moveTo(120, 305);
  ctx.lineTo(280, 305);
  ctx.moveTo(260, 305);
  ctx.lineTo(260, 70);
  ctx.lineTo(180, 70);
  ctx.lineTo(180, 96);
  ctx.stroke();
}

function drawHead() {
  ctx.beginPath();
  ctx.arc(180, 120, 23, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.stroke();
}

function drawBody() {
  ctx.moveTo(180, 143);
  ctx.lineTo(180, 248);
  ctx.stroke();
}

function drawArm1() {
  ctx.moveTo(180, 175);
  ctx.lineTo(142, 167);
  ctx.stroke();
}

function drawArm2() {
  ctx.moveTo(180, 175);
  ctx.lineTo(218, 167);
  ctx.stroke();
}

function drawLeg1() {
  ctx.moveTo(180, 245);
  ctx.lineTo(145, 270);
  ctx.stroke();
}

function drawLeg2() {
  ctx.moveTo(180, 245);
  ctx.lineTo(215, 270);
  ctx.stroke();
}

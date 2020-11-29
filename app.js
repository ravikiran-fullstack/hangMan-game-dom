let killCount = 0;
let inputCount = 0;
let randomTestWord = "";
let testWordHint = "";
let ctx = "";

const startGameBtn = document.querySelector("#startGameBtn");
startGameBtn.addEventListener("click", startGame);

const correctAnswer = document.querySelector("#correctAnswer");

function startGame(e) {
  randomTestWord = gameWords[Math.ceil(Math.random() * 8)];
  testWordHint = document.querySelector("#testWordHint");
  testWordHint.innerHTML = randomTestWord.hint;
  correctAnswer.innerHTML = "";
  document.getElementById("inputBoxes").innerHTML = "";
  ctx = document.getElementById("hangmanCanvas").getContext("2d");
  generateInputBoxes(randomTestWord.word.length);
  clearCanvas(ctx, document.getElementById("hangmanCanvas"));
  drawCanvas();
  enableAllAlphaButtons();
}

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

function generateInputBoxes(length) {
  for (let i = 0; i < length; i++) {
    let input = document.createElement("input");
    input.classList.add("inputBox");
    input.type = "text";
    input.id = i;
    input.disabled = true;
    document.getElementById("inputBoxes").append(input);
  }
}

function getAllIndexes(letter) {
  var indexes = [],
    i;
  for (i = 0; i < randomTestWord.word.length; i++)
    if (randomTestWord.word[i] === letter) {
      indexes.push(i);
    }
  return indexes;
}

function fillInputBoxes(letter, indexes) {
  indexes.forEach((index) => {
    inputCount++;
    document.querySelector(`#inputBoxes input[id='${index}']`).value = letter;
    if (inputCount === randomTestWord.word.length) {
      document.getElementById("gameStatus").innerHTML = "You won, game over";
      document.getElementById("correctAnswer").innerHTML = randomTestWord.word;
      startGameBtn.value = "Restart Game";
      disableAllAlphaButtons();
      inputCount = 0;
      killCount = 0;
      console.log("You won, game over");
    }
  });
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

function killTheMan() {
  switch (killCount) {
    case 1:
      drawGallows();
      break;
    case 2:
      drawHead();
      break;
    case 3:
      drawBody();
      break;
    case 4:
      drawArm1();
      break;
    case 5:
      drawArm2();
      break;
    case 6:
      drawLeg1();
      break;
    case 7:
      drawLeg2();
      break;
  }
  if (killCount === 7) {
    document.getElementById("gameStatus").innerHTML = "Game Over, You lost";
    document.getElementById("correctAnswer").innerHTML = randomTestWord.word;
    startGameBtn.value = "Restart Game";
    disableAllAlphaButtons();
    inputCount = 0;
    killCount = 0;
    console.log("game over");
  }
}

function enterLetter(letter) {
  let indexes = getAllIndexes(letter);
  if (indexes.length === 0) {
    killCount++;
    killTheMan();
  }
  fillInputBoxes(letter, indexes);
  let enteredLetterElement = document.getElementById(letter);
  enteredLetterElement.classList.remove("btnOrange");
  enteredLetterElement.classList.remove("btnBorder");
  enteredLetterElement.disabled = true;
}

function enableAllAlphaButtons() {
  let tdList = document.querySelectorAll(`.btnAlpha`);
  tdList.forEach((ele) => {
      ele.classList.add("btnBorder", "btnOrange");
      ele.disabled = false;
  });
}

function disableAllAlphaButtons() {
  let tdList = document.querySelectorAll(`.btnAlpha`);
  tdList.forEach((ele) => {
    ele.classList.remove("btnBorder", "btnOrange");
    ele.disabled = true;
  });
}

function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  if(eleClass !== ''){
    element.setAttribute('class', eleClass);
  }
  if(eleId !== ''){
    element.setAttribute('id', eleId); 
  }
  
  return element;
}

function createAlphaButton(buttonId){
  const button = document.createElement('button');
  button.id = buttonId;
  button.classList = 'btnAlpha btnBorder btnOrange';
  button.setAttribute('onclick', `enterLetter("${buttonId}")`);
  const buttonText = document.createTextNode(`${buttonId}`);
  button.append(buttonText);
  return button;
}

const containerInput = createDomElement('div', 'container mt-5');
const containerInputRow = createDomElement('div', 'row');
containerInput.append(containerInputRow);


const containerInputRowCol1 = createDomElement('div', 'col-md-6 col-12');
const containerInputRowCol2Row1 = createDomElement('div', 'row');

const startButton = createDomElement('input', 'btn btn-primary', 'startGameBtn');
startButton.type = 'button';
startButton.value = 'Start Game';
containerInputRowCol2Row1.append(startButton);

const containerInputRowCol2Row2 = createDomElement('div', 'row');
const inputBoxesLabel = createDomElement('label', 'col-lg-3');
inputBoxesLabel.for = 'userInput';
inputBoxesLabelText = document.createTextNode('User Input');
inputBoxesLabel.append(inputBoxesLabelText);

const inputBoxesDiv = createDomElement('div', 'col-lg-9', 'inputBoxes');
containerInputRowCol2Row2.append(inputBoxesLabel, inputBoxesDiv);


const containerInputRowCol2Row3 = createDomElement('div', 'row');
const hintLabel = createDomElement('label', 'col-lg-3');
hintLabel.for = 'testWordHint';
hintLabelText = document.createTextNode('Hint');
hintLabel.append(hintLabelText);

const hintDiv = createDomElement('div', 'col-lg-9', 'testWordHint');
containerInputRowCol2Row3.append(hintLabel, hintDiv);


const containerInputRowCol2Row4 = createDomElement('div', 'row');
const correctAnswerLabel = createDomElement('label', 'col-lg-3');
correctAnswerLabel.for = 'correctAnswer';
correctAnswerLabelText = document.createTextNode('Correct Answer');
correctAnswerLabel.append(correctAnswerLabelText);

const correctAnswerDiv = createDomElement('div', 'col-lg-9', 'correctAnswer');
containerInputRowCol2Row4.append(correctAnswerLabel, correctAnswerDiv);


const containerInputRowCol2Row5 = createDomElement('div', 'row');
const gameStatusDiv = createDomElement('div', 'col-lg-12', 'gameStatus');
containerInputRowCol2Row5.append(gameStatusDiv);

containerInputRowCol1.append(containerInputRowCol2Row1, containerInputRowCol2Row2, containerInputRowCol2Row3,containerInputRowCol2Row4, containerInputRowCol2Row5);
containerInputRow.append(containerInputRowCol1);


const containerInputRowCol2 = createDomElement('div', 'col-md-6 col-12');

const canvas = createDomElement('canvas', '', 'hangmanCanvas');
canvas.height = 300;
canvas.width = 400;

containerInputRowCol2.append(canvas);
containerInputRow.append(containerInputRowCol2);
////////////////////

const containerAlpha = createDomElement('div', 'container mt-5');

const containerAlphaRowCol = createDomElement('div', 'offset-md-3 col-md-6 border pt-5');
const containerAlphaRowColDiv1 = createDomElement('div', 'divAlpha');
const buttonA = createAlphaButton('a');
const buttonB = createAlphaButton('b');
const buttonC = createAlphaButton('c');
const buttonD = createAlphaButton('d');
const buttonE = createAlphaButton('e');
const buttonF = createAlphaButton('f');
const buttonG = createAlphaButton('g');
containerAlphaRowColDiv1.append(buttonA, buttonB, buttonC, buttonD, buttonE, buttonF, buttonG);

const containerAlphaRowColDiv2 = createDomElement('div', 'divAlpha');
const buttonH = createAlphaButton('h');
const buttonI = createAlphaButton('i');
const buttonJ = createAlphaButton('j');
const buttonK = createAlphaButton('k');
const buttonL = createAlphaButton('l');
const buttonM = createAlphaButton('m');
const buttonN = createAlphaButton('n');
containerAlphaRowColDiv2.append(buttonH, buttonI, buttonJ, buttonJ, buttonL, buttonM, buttonN);

const containerAlphaRowColDiv3 = createDomElement('div', 'divAlpha');
const buttonO = createAlphaButton('o');
const buttonP = createAlphaButton('p');
const buttonQ = createAlphaButton('q');
const buttonR = createAlphaButton('r');
const buttonS = createAlphaButton('s');
const buttonT = createAlphaButton('t');
const buttonU = createAlphaButton('u');
containerAlphaRowColDiv3.append(buttonO, buttonP, buttonQ, buttonR, buttonS, buttonT, buttonU);

const containerAlphaRowColDiv4 = createDomElement('div', 'divAlpha');
const buttonV = createAlphaButton('v');
const buttonW = createAlphaButton('w');
const buttonX = createAlphaButton('x');
const buttonY = createAlphaButton('y');
const buttonZ = createAlphaButton('z');
containerAlphaRowColDiv4.append(buttonV, buttonW, buttonX, buttonY, buttonZ);

containerAlphaRowCol.append(containerAlphaRowColDiv1,containerAlphaRowColDiv2,containerAlphaRowColDiv3,containerAlphaRowColDiv4);


const containerAlphaRow = createDomElement('div', 'row');

containerAlphaRow.append(containerAlphaRowCol);
containerAlpha.append(containerAlphaRow);

document.body.append(containerInput, containerAlpha);
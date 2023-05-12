const topLeftPanel = document.querySelector(".panel-top-left ");
const topRightPanel = document.querySelector(".panel-top-right ");
const bottomRightPanel = document.querySelector(".panel-bottom-right ");
const bottomLeftPanel = document.querySelector(".panel-bottom-left");

const generateRandomNumber = () => {
  const panel = [
    topLeftPanel,
    topRightPanel,
    bottomLeftPanel,
    bottomRightPanel,
  ];
  var randomNumber = Math.floor(Math.random() * 4);
  return panel[randomNumber];
};
let sequence = [generateRandomNumber()]; // this array is used to memoise teh sequence that the panel  has to flash.initially has only one panel number

let sequenceToGuess = [...sequence]; // this is a clone of sequence array.this array is used to guess the sequence

const flash = async (currPanel) => {
  currPanel.classList.add("active");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // duration for whic the light will be on
  currPanel.classList.remove("active");
  await new Promise((resolve) => setTimeout(resolve,900)); // time gap between two ligh ons
};

let canClick = false;

const panelClicked = (panel) => {
  if (!canClick) {
    return;
  }

  const expectedPanel = sequenceToGuess.shift();

  if (expectedPanel === panel) {
    if (sequenceToGuess.length === 0) {
        
      sequence.push(generateRandomNumber());
      sequenceToGuess = [...sequence];
      start();
    }
  } else {
    alert("gmae is over");
  }
};
const start = async () => {
  canClick = false;

  for (const panel of sequence) { // flash the whole sequence array which is filled using all randomly generated panel numbers
    await flash(panel);
  }

  canClick = true;
};

start();

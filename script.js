const topLeftPanel = document.querySelector('.panel-top-left ');
const topRightPanel = document.querySelector('.panel-top-right ');
const bottomRightPanel = document.querySelector('.panel-bottom-right ');
const bottomLeftPanel = document.querySelector('.panel-bottom-left');

const generateRandomNumber = () => {

    const panel = [
        topLeftPanel, topRightPanel, bottomLeftPanel, bottomRightPanel
    ];
    var randomNumber = Math.floor(Math.random() * 4);
    return panel[randomNumber];
}
let sequence = [
    generateRandomNumber()
];


let sequenceToGuess = [...sequence];
// const flash = (currPanel) => {

//     const promise = new Promise((resolve, reject) => {
//         currPanel.classList.add("active");
//         setTimeout(() => {
//             currPanel.className = currPanel.className.replace('active', '');
//             setTimeout(() => {
//                 resolve();
//             }, 250)

//         }, 1000)




//     })

//     return promise;
// }

const flash = async (currPanel) => {
    currPanel.classList.add("active");
    await new Promise(resolve => setTimeout(resolve, 1000));
    currPanel.classList.remove("active");
    await new Promise(resolve => setTimeout(resolve, 250));
  };


let canClick = false;
const panelClicked = (panel) => {
    if (!canClick)
        return;

    const expectedPanel = sequenceToGuess.shift();
    if (expectedPanel === panel) {
        if (sequenceToGuess.length === 0) {
            sequence.push(generateRandomNumber())
            sequenceToGuess = [...sequence];
            start();
        }
    }
    else {
        alert("game is over");

    }


}
const start = async () => {
    canClick = false;


    for (const panel of sequence) {

        await flash(panel);
    }

    canClick = true;
}

start();

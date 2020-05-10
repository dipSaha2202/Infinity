let theNumber;
let chances;
let inputBox = document.getElementById("inputNumber");

inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkGuess();
    }
});

function checkGuess() {
    let input = inputBox.value;
    let outputParagraphTag = document.getElementById("outputMessage");

    if (input.length === 0) {
        alert("insert something");
        return
    }
    if (input < 1 || input > 100){
        alert("insert between 1 and 100");
        return;
    }
    chances--;

    if (input < theNumber){
        outputParagraphTag.innerText = "low and " + chances + " left";
    } else if (input > theNumber){
        outputParagraphTag.innerText = "high and " + chances + " left";
    } else {
        outputParagraphTag.innerText = "win! Play Again";
        newGame();
    }
    inputBox.focus();
    inputBox.select();

    if (chances < 1){
        alert("You have lost all chances. Number was " + theNumber + ". Play again");
        outputParagraphTag.innerText = "Play again";
        newGame();
    }
}

function newGame() {
    chances = 7;
    theNumber = parseInt(Math.random()*100 + 1);
    console.log(theNumber);
}
newGame();
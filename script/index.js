let theNumber;
let chances;
let inputBox = document.getElementById("inputNumber");
let outputParagraphTag = document.getElementById("outputMessage");

inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkGuess();
    }
});

function checkGuess() {
    let input = inputBox.value;

    if (input.length === 0) {
        alert("insert something");
        return
    }
    if (input < 1 || input > 100){
        alert("insert between 1 and 100");
        return;
    }
    chances--;
    let d;
    chances !== 1? d="s": d = "";

    if (input < theNumber){
        outputParagraphTag.style.color= "red";
        outputParagraphTag.innerText = input + " is lower, and " + chances + " chance" + d + " left.";
    } else if (input > theNumber){
        outputParagraphTag.style.color= "red";
        outputParagraphTag.innerText = input + " is higher, and " + chances + " chance" + d + " left.";
    } else {
        outputParagraphTag.style.color= "green";
        outputParagraphTag.innerText = "Win! The correct number was " + theNumber + ". Play Again?";
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
   // console.log(theNumber);
}
newGame();
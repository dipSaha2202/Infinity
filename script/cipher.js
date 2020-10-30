let inputText;
let inputBox = document.getElementById("inputText");
let outputParagraphTag = document.getElementById("outputText");

inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        convertCipher();
    }
});

function convertCipher() {
    let shift = 2;

    let inputText = inputBox.value;

    outputParagraphTag.innerText = codeTheText(inputText, shift);
}

function codeTheText(inputText, shift) {

    let codedString = "";

    for (let i = 0; i < inputText.length ; i++){

        let char = inputText.charCodeAt(i);

        if (char >= 65 && char <= 90){
            shift = shift % 26;
            char += shift;


            if (char > 90){
                char -= 26;
            }  else if (char < 65){
                char -= 26;
            }


        }

        if (char >= 97 && char <= 122){
            shift = shift % 26;
            char += shift;

            if (char > 122){
                char -= 26;
            }  else if (char < 97){
                char -= 26;
            }
        }

        if (char >= 48 && char <= 57){
            shift = shift % 10;
            char += shift;
            if (char > 57){
                char -= 10;
            }  else if (char < 48){
                char += 10;
            }
        }
        codedString = codedString + String.fromCharCode(char);
    }

    return codedString;

}
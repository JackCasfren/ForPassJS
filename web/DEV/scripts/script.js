//*Interacting with HTML

// add value to the Dynamic values list
function addDynVal() {
//does it work?
    console.log("addDynVal called");
//getting the input value
    let inputValue = document.getElementById("inputTextDyn").value;
    console.log("inputValue:" + inputValue)
//geting where the result will land
    let  resultDiv = document.getElementById("result");
//creating the new html code for the new variable.
    const button = document.createElement("button");

    button.textContent = inputValue;
    button.id = inputValue;
    button.className = "dynValBtn";

    resultDiv.appendChild(button);
}
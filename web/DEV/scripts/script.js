//*Interacting with HTML







/*
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
}*/ //this is how the code is geting upgraded:

function addDynVal() {
    console.log("addDynVal called");

    // Getting the input value
    let inputValue = document.getElementById("inputTextDyn").value.trim();
    console.log("inputValue:", inputValue);

    // Check if the input value is empty
    if (!inputValue) {
        console.log("Input is empty. Button will not be created.");
        return;
    }

    // Get the container where the result will land
    let resultDiv = document.getElementById("result");

    // Check if a button with the same ID already exists
    if (document.getElementById(inputValue)) {
        console.log("Button with the same ID already exists.");
        return;
    }

    // Creating the new HTML button
    const button = document.createElement("button");
    button.textContent = inputValue;
    button.id = inputValue; // Avoid using non-unique IDs
    button.className = "dynValBtn";

    // Append the new button to the resultDiv
    resultDiv.appendChild(button);

    //delete the content from the input field
    document.getElementById("inputTextDyn").value = "";

    console.log("Button added successfully.");
}


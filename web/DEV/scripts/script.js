//*Interacting with HTML

function addDynVal() {
    console.log("addDynVal called");

    //! Getting the input value
    //let inputValue = document.getElementById("inputTextDyn").value.trim();
    let inputValue = String(document.getElementById("inputTextDyn").value.trim());

    console.log("inputValue:", inputValue);
    
    // Check if the input value is empty
    if (!inputValue) {
        console.log("Input is empty. Button will not be created.");
        return;
    }

    // Get the container where the result will land
    let resultDiv = document.getElementById("dynValList");
    
    // Check if a button with the same ID already exists within resultDiv
    //! for some reason this query selector does something to the value that it doesnt allow numbers
    //! We will burn this code when we get to it.    
    //if (resultDiv.querySelector(`#${inputValue.toString()}`)) {
    /*
       if (resultDiv.querySelector(`#${inputValue}`)) {
        console.log("Button with the same ID already exists inside the result div.");
        return;
    }
    */
    if (resultDiv.querySelector(`#ID-${inputValue}`)) {
        console.log("Button with the same value already exists inside the result div.");
        return;
    }
    
    console.log("inputValue:", inputValue)
    // Creating the new HTML button
    const button = document.createElement("button");
    button.textContent = inputValue;
    
    // "item-" needs to be there, becasue other wise query selector does like it.
    button.id = "ID-" + inputValue; // Avoid using non-unique IDs
    button.className = "dynValBtn"; // added this to be able to consult if the val is Dyn or Base

    // Append the new button to the resultDiv
    resultDiv.appendChild(button);

    //delete the content from the input field
    document.getElementById("inputTextDyn").value = "";

    console.log("Button added successfully.");
}

function addBaseVal() {
    console.log("addBaseVal called");

    // Getting the input value
    let inputValue = document.getElementById("inputTextBase").value.trim();
    console.log("inputValue:", inputValue);

    // Check if the input value is empty
    if (!inputValue) {
        console.log("Input is empty. Button will not be created.");
        return;
    }

    // Get the container where the result will land
    let resultDiv = document.getElementById("baseValList");

    // Check if a button with the same ID already exists within resultDiv
    if (resultDiv.querySelector(`#${inputValue}`)) {
        console.log("Button with the same ID already exists inside the result div.");
        return;
    }

    // Creating the new HTML button
    const button = document.createElement("button");
    button.textContent = inputValue;
    button.id = inputValue; // Avoid using non-unique IDs
    button.className = "baseValBtn"; // added this to be able to consult if the val is Dyn or Base

    // Append the new button to the resultDiv
    resultDiv.appendChild(button);

    //delete the content from the input field
    document.getElementById("inputTextBase").value = "";

    console.log("Button added successfully.");
}





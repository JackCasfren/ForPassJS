

// counter so every new element has a unique ID.
let paragraphCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Elements needed:
    const textInput = document.getElementById('text-input');
    const addButton = document.getElementById('add-button');
    const outputDiv = document.getElementById('output');

    // when the button is clicked
    addButton.addEventListener('click', () => {
        //get the value of the input
        const inputValue = textInput.value.trim();
        // check if its ok
        if (inputValue !== '') {// add it as a valid variable            
            paragraphCounter++; // Increment the counter
            const newParagraph = document.createElement('button'); // the variable is a button
            newParagraph.id = `userPara-${paragraphCounter}`; // Set a unique ID
            newParagraph.textContent = inputValue; // but the value inside the button
            outputDiv.appendChild(newParagraph); // add the button to the output div
            
            // Clear the input field after adding the text so the next is ready.
            textInput.value = '';
        } else {
            alert('Please enter some text before clicking the button.');
        }
        console.log("this is the new para added:",inputValue )
        
    });
  
    
});

//listen for clicks
document.addEventListener('click', function(event) {
    //get the target of the click
    const targetElement = event.target;
    //if the click is from one of the userPara continue
    if (targetElement.id && targetElement.id.includes('userPara')) {
        //log the button clicked
        console.log(`---Clicked element with ID: ${targetElement.id}`);
        console.log('with the content:', targetElement.textContent)
//! LETS HAVE A CLEAR OBJECTIVE. 
//* Pick up button, multiply content and drop it in the finalRes div. 
//
        
        const finalRes = document.getElementById('finalRes'); //final Res div
        const newContent = targetElement.textContent + 'lkas'; //multiply content
        const newText = document.createElement('t'); //create paragraph
        newText.textContent = newContent; //add content to paragraph
        finalRes.appendChild(newText); //add paragraph to the finalRes div




    }
});










/*
// Get all elements with 'userPara' in their ID
const userParaElements = document.querySelectorAll('[id^="userPara"]');
document.addEventListener('click', function(event) {
    const targetElement = event.target;
    
    // Check if the clicked element's ID includes "userPara"
    if (targetElement.id && targetElement.id.includes('userPara')) {
        console.log(`Clicked element with ID: ${targetElement.id}`);
        
        // Add your custom logic here
        handleUserParaClick(targetElement);
    }
});

function handleUserParaClick(element) {
    // Implement your desired action when a "userPara" element is clicked
    console.log(`You clicked: ${element.textContent || 'an empty paragraph'}`);
    
    const finalRes = document.getElementById('finalRes');

    //.textContent("yeah lmao")
    finalRes.appendChild(document.createElement('button'))
    

}
*/


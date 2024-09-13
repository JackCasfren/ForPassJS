// Get all elements with 'userPara' in their ID
const userParaElements = document.querySelectorAll('[id^="userPara"]');
let paragraphCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const addButton = document.getElementById('add-button');
    const outputDiv = document.getElementById('output');

    addButton.addEventListener('click', () => {
        const inputValue = textInput.value.trim();
        
        if (inputValue !== '') {
            paragraphCounter++; // Increment the counter
            const newParagraph = document.createElement('button');
            newParagraph.id = `userPara-${paragraphCounter}`; // Set a unique ID
            newParagraph.textContent = inputValue;
            
            outputDiv.appendChild(newParagraph);
            
            // Clear the input field after adding the text
            textInput.value = '';
        } else {
            alert('Please enter some text before clicking the button.');
        }
        console.log("this is the new para added: ",inputValue )
        
    });
    // Get all elements with 'userPara' in their IDS
    
});

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



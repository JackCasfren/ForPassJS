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
            const newParagraph = document.createElement('p');
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



// Function to handle clicks on userPara elements
function handleClick(event) {
  console.log('Clicked on userPara element:', event.target)
  console.log("selectedElement", selectedElement.id)
  
    // Clear any previously selected element
  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }

  // Store the clicked element in the variable
  selectedElement = event.target;

  // Add 'selected' class to the clicked element
  selectedElement.classList.add('selected');
  console.log("browtone has been seleted")
  
}

// Initialize variables
let selectedElement = null;

// Add click listeners to all userPara elements
userParaElements.forEach(element => {
  element.addEventListener('click', handleClick);
});

// Create a variable to store the counter value
let counter = 0;

// Get the DOM element for the counter display
const counterDisplay = document.getElementById('counter');

// Get the DOM elements for the increment and decrement buttons
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
// Function to update the counter display
function updateCounterDisplay() {
    counterDisplay.textContent = counter;
    if (counter < 0) {
        counterDisplay.style.color = 'red';
        }
        else if (counter === 0){
        counterDisplay.style.color = 'black';   
        }

        else{
            counterDisplay.style.color = 'green';
        }
}

function resetCounter(){
    counter = 0;
    updateCounterDisplay();
}

// Function to increment the counter
function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

// Function to decrement the counter
function decrementCounter() {
    counter--;
    updateCounterDisplay();
   
}
// Add event listeners to the buttons
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
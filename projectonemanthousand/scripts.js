// import { welcomeView } from "./welcomeView";
document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0; // Initialize counter

    // Function to get a random dog image from the Dog CEO API
    async function getRandomDog() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            const dogImage = document.getElementById('imageArea');
            dogImage.src = data.message;
            clickCount++; // Increment counter
            updateClickCounter(); // Update counter display
        } catch (error) {
            console.error('Error fetching random dog image:', error);
        }
    }

    // Function to update the click counter display
    function updateClickCounter() {
        const counterElement = document.getElementById('clickCounter');
        counterElement.textContent = `You tried to find MARS: ${clickCount} times`;
        const main = document.querySelector('main');
        main.appendChild(counterElement);
    }

    // Event listener for the button to get a random dog image
    const randomDogButton = document.getElementById('button');
    randomDogButton.addEventListener('click', getRandomDog);

    // Create and append the click counter element to the DOM
    function welcomePage() {
        const counterElement = document.createElement('p');
        counterElement.id = 'clickCounter';
        counterElement.textContent = 'wellcome to app its a story heyy';
        document.body.appendChild(counterElement);
    }
    welcomePage();
});

import { getRandomDog } from './pages/randomDogPage.js';
import { randomDogElement } from './views/randomDogView.js';

// Create a function that returns a promise for the loading page
function showLoadingPage() {
    return new Promise((resolve) => {
        // Simulate a loading delay of 2 seconds
        setTimeout(() => {
            resolve();
            console.log('Loading complete!');
        }, 12000);
    });
}

// Use the promise to show the loading page
showLoadingPage()
.then(getRandomDog)
.then(randomDogElement);

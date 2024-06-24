// import from file
import {apiKey}  from './apiKey.js';  // Ensure the correct path to the apiKey.js file

document.addEventListener("DOMContentLoaded", () => {
  // Function to get a random dog image from the Dog CEO API
  function getRandomDog() {
    // use as a fetch url to veriable
    fetch(apiKey)
      .then((response) => response.json())
      .then((data) => {
        const dogImage = document.getElementById("imageArea");
        const colorfulDiv = document.getElementById("colorful-div");
        dogImage.src = data.message;

        // Assuming Vibrant.js is included in your project
        Vibrant.from(dogImage.src)
          .getPalette()
          .then((palette) => {
            let dominantColor = palette.Vibrant.rgb;
            console.log(
              `The dominant color in the dog image is: rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`
            );

            colorfulDiv.style.backgroundColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.7)`;
          })
          .catch((error) => {
            console.error("Error fetching color palette:", error);
          });
      })
      .catch((error) => 
        console.error("Error fetching random dog image:", error)
      );
  }

  // Event listener for the button to get a random dog image
  const randomDogButton = document.getElementById("button");
  randomDogButton.addEventListener("click", getRandomDog);
});

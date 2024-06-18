document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random dog image from the Dog CEO API
    function getRandomDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById('imageArea');
                dogImage.src = data.message;

                // After setting the dog image, apply Vibrant.js to get dominant color
                Vibrant.from(dogImage.src).getPalette().then(palette => {
                    let dominantColor = palette.Vibrant.rgb;
                    console.log(`The dominant color in the dog image is: rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`);

                    // Apply the dominant color as a box-shadow on the image
                    dogImage.style.boxShadow = `0 0 10px 5px rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.7)`;

                    // Update the text content of colorful-div with the dominant color information
                    // const colorfulDiv = document.getElementById('colorful-div');
                    // colorfulDiv.textContent = `The vibrant color in the dog image is: rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
                }).catch(error => {
                    console.error('Error fetching color palette:', error);
                });
            })
            .catch(error => console.error('Error fetching random dog image:', error));
    }

    // Event listener for the button to get a random dog image
    const randomDogButton = document.getElementById('button');
    randomDogButton.addEventListener('click', getRandomDog);
});

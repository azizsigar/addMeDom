document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random dog image from the Dog CEO API
    function getRandomDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById('imageArea');
                dogImage.src = data.message;

            })
            .catch(error => console.error('Error fetching random dog image:', error));
    }

    // Event listener for the button to get a random dog image
    const randomDogButton = document.getElementById('button');
    randomDogButton.addEventListener('click', getRandomDog);
});

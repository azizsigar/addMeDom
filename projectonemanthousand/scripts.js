
    function getRandomDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById('imageArea');
                dogImage.src = data.message;
            })
            .catch(error => console.log(error));
    }

    document.addEventListener('DOMContentLoaded', () => {
        const randomDogButton = document.querySelector('button');
        randomDogButton.addEventListener('click', getRandomDog);
    });
// function getRandomDog() {
//     return fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => {
//             const dogImage = document.getElementById('imageArea');
//             dogImage.src = data.message;
//         })
//         .catch(error => console.log(error))
//         .finally(() => console.log('getRandomDog operation completed'));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const randomDogButton = document.querySelector('#buttonRandomDog'); // assuming buttonRandomDog is an id
//     if (randomDogButton) {
//         randomDogButton.addEventListener('click', () => {
//             getRandomDog();
//         });
//     } else {
//         console.log('Button not found');
//     }
// });
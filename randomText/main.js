import { people } from './data.js';
const nextButton = document.getElementById('nextButton');
const nameElement = document.getElementById('name');
const ageElement = document.getElementById('age');

nextButton.addEventListener('click',() => {

    const randomIndex = Math.floor(Math.random() * people.length);
    nameElement.textContent = people[randomIndex].name;
    ageElement.textContent = people[randomIndex].age;
});

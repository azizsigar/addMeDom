// randomViews.js

function createRandomDogElements() {
  const newElement = document.createElement('div');
  newElement.innerHTML = `
    <h1>Random Dog Pics</h1>
    <img src="" alt="Click the button to start" class="dog-img" id="imageArea">
    <button id="buttonRandomDog">Random Dog</button>
  `;

  // Append the new element to the body
  document.body.appendChild(newElement);
}

export { createRandomDogElements };

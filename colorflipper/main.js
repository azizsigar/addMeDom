const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', async function() {
    const randomColor = await getRandomColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function getRandomColor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('#' + Math.floor(Math.random() * 16777215).toString(16));
        }, 1000);
    });
}
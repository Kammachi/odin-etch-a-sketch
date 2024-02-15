const container = document.querySelector('.container');
let squares;

createGrid(16)

let darkening = false;
let rainbow = false;
let lightness = 100;

listenForHover()

const darkeningButton = document.querySelector('#darkeningButton');
const sizeButton = document.querySelector('#sizeButton');
const colorButton = document.querySelector('#colorButton');


function createGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const squareToAdd = document.createElement('div');

        squareToAdd.classList.add('gridSquare');
        squareToAdd.style.width = `${100 / numberOfSquares}%`;
        squareToAdd.style.heigth = `${100 / numberOfSquares}%`;

        container.appendChild(squareToAdd);

        squares = document.querySelectorAll('.gridSquare');
    }
}


function removeGrid() {
    for (let i = 0; i < squares.length; i++) {
        const squareToRemove = document.querySelector('.gridSquare');
        container.removeChild(squareToRemove);
    }
}


function listenForHover() {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            const color = Math.floor(Math.random() * 360);

            if (rainbow === false) lightness = 0;
            
            square.style.backgroundColor = `hsl(${color}, 50%, ${lightness}%)`;

            if (darkening === true) lightness -= 10;
            else lightness = 50;
        });
    });
}


darkeningButton.addEventListener('click', () => {
    darkening = !darkening;
    lightness = 100;

    switch (darkening) {
        case true:
            darkeningButton.textContent = "Darkening: On";
            return;
        case false:
            darkeningButton.textContent = "Darkening: Off";
    }
});


sizeButton.addEventListener('click', () => {
    const numberOfSquares = parseInt(prompt("Number of squares on the side:"));

    if (isNaN(numberOfSquares)) {
        alert("Please input a number.");
        return;
    }

    if (numberOfSquares <= 0) {
        alert("Plese input a vaild number.");
        return;
    } else if (numberOfSquares > 100) {
        alert("Your number is too big.");
        return;
    }

    removeGrid()
    createGrid(numberOfSquares)

    listenForHover()
});


colorButton.addEventListener('click', () => {
    rainbow = !rainbow;
    lightness = 100;

    switch (rainbow) {
        case true:
            colorButton.textContent = "Black";
            return;
        case false:
            colorButton.textContent = "Rainbow";
    }
});
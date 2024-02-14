const container = document.querySelector('.container');


function createGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const squareToAdd = document.createElement('div');

        squareToAdd.classList.add('gridSquare');
        squareToAdd.style.width = `${100 / numberOfSquares}%`;
        squareToAdd.style.heigth = `${100 / numberOfSquares}%`;

        container.appendChild(squareToAdd);
    }
}


function listenForHover() {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    });
}


createGrid(16)

let squares = document.querySelectorAll('.gridSquare');

listenForHover()


function removeGrid() {
    for (let i = 0; i < squares.length; i++) {
        const squareToRemove = document.querySelector('.gridSquare');
        container.removeChild(squareToRemove);
    }
}


const sizeButton = document.querySelector('#sizeButton');

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

    squares = document.querySelectorAll('.gridSquare');

    listenForHover()
});
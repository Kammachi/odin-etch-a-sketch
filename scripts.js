const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('gridSquare');

    container.appendChild(div);
}


const squares = document.querySelectorAll('.gridSquare');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
    });
});
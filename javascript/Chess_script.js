const chessboard = document.getElementById('chessboard');

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if ((i + j) % 2 === 0) {
            cell.style.backgroundColor = 'white';
        } else {
            cell.style.backgroundColor = 'black';
        }
        chessboard.appendChild(cell);
    }
}

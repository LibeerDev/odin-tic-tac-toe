// rendering.js

const ticTacGrid = document.getElementById('ticTacGrid');

function renderBoard(gameBoard) {
    ticTacGrid.innerHTML = `
    <div class="cell">${gameBoard[0]}</div>
    <div class="cell">${gameBoard[1]}</div>
    <div class="cell">${gameBoard[2]}</div>
    <div class="cell">${gameBoard[3]}</div>
    <div class="cell">${gameBoard[4]}</div>
    <div class="cell">${gameBoard[5]}</div>
    <div class="cell">${gameBoard[6]}</div>
    <div class="cell">${gameBoard[7]}</div>
    <div class="cell">${gameBoard[8]}</div>
    `;
}

export { renderBoard };
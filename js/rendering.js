// rendering.js

const ticTacGrid = document.getElementById('ticTacGrid');

function renderBoard(gameBoard) {
    ticTacGrid.innerHTML = `
    <div onclick="placeMark(0)" class="cell">${gameBoard[0]}</div>
    <div onclick="placeMark(1)" class="cell">${gameBoard[1]}</div>
    <div onclick="placeMark(2)" class="cell">${gameBoard[2]}</div>
    <div onclick="placeMark(3)" class="cell">${gameBoard[3]}</div>
    <div onclick="placeMark(4)" class="cell">${gameBoard[4]}</div>
    <div onclick="placeMark(5)" class="cell">${gameBoard[5]}</div>
    <div onclick="placeMark(6)" class="cell">${gameBoard[6]}</div>
    <div onclick="placeMark(7)" class="cell">${gameBoard[7]}</div>
    <div onclick="placeMark(8)" class="cell">${gameBoard[8]}</div>
    `;
}

export { renderBoard };
// rendering.js

import { placeMark } from "./main.js";
import { gameBoard } from "./gameBoard.js";

const ticTacGrid = document.getElementById('ticTacGrid');

function renderBoard(board) {
    
    ticTacGrid.innerHTML = ''; // Clear the grid

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => { placeMark(i)});
        cell.textContent = gameBoard[i];
        ticTacGrid.appendChild(cell);
    }
}

export { renderBoard };
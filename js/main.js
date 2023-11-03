// main.js
import { placeMark, createGrid } from './gameLogic.js';

function addEventListenersToCells() {
    const allCells = document.querySelectorAll('.cell');

    allCells.forEach((cell, index) => {
        cell.addEventListener('click', () => { placeMark(index) });
    });
}

createGrid();
addEventListenersToCells();
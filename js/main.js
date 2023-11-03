// main.js
import { placeMark, display } from './gameLogic.js';
import { gameState } from './stateManager.js';
import { gameBoard } from './gameBoard.js';
 
function addListenersToCells() {
    const allCells = document.querySelectorAll('.cell');
    
    allCells.forEach((cell, index) => {
        cell.addEventListener('click', () => { placeMark(index) });
    });
}

display();
addListenersToCells();
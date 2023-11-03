// gameLogic.js

import { renderBoard } from './rendering.js';
import { gameBoard } from './gameBoard.js';
import { gameState } from './stateManager.js';


function placeMark(index) {
    const { currentPlayer } = gameState;
    console.log(currentPlayer);
    gameBoard[index] = currentPlayer;
    console.log(gameBoard[index]);
    display();
}

function display() {
    renderBoard(gameBoard);
}

export { placeMark, display };
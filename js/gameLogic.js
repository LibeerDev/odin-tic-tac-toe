// gameLogic.js

import { renderBoard } from './rendering.js';
import { getGameBoard } from './gameBoard.js';
import { gameState } from './stateManager.js';


function placeMark(index, currentPlayer) {
    gameBoard = getGameBoard();
}

function gameLoop() {
    renderBoard(getGameBoard());
}

export { gameLoop };
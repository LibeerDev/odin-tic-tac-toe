// gameLogic.js

import { renderBoard } from './rendering.js';
import { gameBoard } from './gameBoard.js';
import { gameState } from './stateManager.js';

function createGrid() {
    renderBoard(gameBoard);
}

function placeMark(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = gameState.currentPlayer;
    }

    switchPlayers();
    checkWin();
    createGrid();
    console.log(gameBoard);
}

function switchPlayers() {
    if (gameState.currentPlayer === 'X') {
        gameState.currentPlayer = 'O';
    }
    else if (gameState.currentPlayer === 'O') {
        gameState.currentPlayer = 'X';
    }
}

function checkWin() {
    gameBoard.forEach((index) => {
        console.log(gameBoard[index]);
        if( gameBoard[index + 1] === gameBoard.currentPlayer && gameBoard[index - 1] === gameBoard.currentPlayer ) {
            announceWinner(gameBoard.currentPlayer);
        }
        if( gameBoard[index + 4] === gameBoard.currentPlayer && gameBoard[index - 4] === gameBoard.currentPlayer ) {
            announceWinner(gameBoard.currentPlayer);
        }
    });
}

function announceWinner(winner) {
    if (winner === 'X')
    {
        alert('Player 1 has won the game!');
    }
    else if (winner === 'O')
    {
        alert('Player 2 has won the game!');
    }
}

export { placeMark, createGrid };

createGrid();
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
    createGrid();
    checkWin();
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
    // Define the winning combinations (rows, columns, and diagonals)
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Iterate through the winning combinations
    for (const combination of winCombinations) {
        const [a, b, c] = combination;

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            announceWinner(gameBoard[a]);
            return;
        }
    }

    // Check for a draw (if the board is full and no one has won)
    if (!gameBoard.includes('')) {
        announceDraw();
    }
}

function announceWinner(winner) {
    console.log('announce winner function runs');
    const winnerScreen = document.getElementById('winnerScreen');
    const winnerText = document.getElementById('winnerText');

    winnerScreen.classList.toggle('hidden');

    if (winner === 'X')
    {
        winnerText.innerHTML = "Player 1 has won";
    }
    else if (winner === 'O')
    {
        winnerText.innerHTML = "Player 2 has won";
    }
}

export { placeMark, createGrid };

createGrid();
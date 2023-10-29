// Creating DOM elements

function playGameMenu() {
    gameWindow = document.getElementById('gameWindow');

    title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = "Tic Tac Toe";

    playButton
    
    gameWindow.appendChild(title);
}

// Game Logic

function gameBoard() {
    gameState = [];
    return { gameState };
}


// calling the functions

playGameMenu();
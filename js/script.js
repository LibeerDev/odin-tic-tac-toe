
// Define your game states
const GAME_STATE = {
    START_MENU: 'start_menu',
    CHOOSE_PLAYER: 'choose_player',
    GAME_WINDOW: 'game_window',
};

let currentState = GAME_STATE.START_MENU;

function changeGameState(newState) {
    currentState = newState;
}

// Function to update the game based on the current state
function updateGame() {
    gameWindow = document.getElementById('gameWindow');

    switch (currentState) {
        case GAME_STATE.START_MENU:
            toggleStartMenu().initialized;
            break;
        case GAME_STATE.CHOOSE_PLAYER:
            // Code for the choose player state
            // Display player selection options
            break;
        case GAME_STATE.GAME_WINDOW:
            // Code for the game window state
            // Handle the actual game logic
            break;
        default:
            console.error('Invalid game state');
    }

    function toggleStartMenu() {
        const startMenu = document.getElementById('startMenu');
        startMenu.classList.toggle('hidden');
    }


}

  
  // Call the updateGame function in your game loop or event loop
  function gameLoop() {
    updateGame();
    // Add any necessary animations or rendering here
    requestAnimationFrame(gameLoop);
  }
  
  // Start the game loop
  gameLoop();
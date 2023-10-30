const startMenuWindow = document.getElementById('startMenuWindow');
const choosePlayersWindow = document.getElementById('choosePlayersWindow');
const gameWindow = document.getElementById('gameWindow');
const startGameBtn = document.getElementById('startGameBtn');

  // Add listeners to buttons
  startGameBtn.addEventListener('click', () => {
    changeGameState(GAME_STATE.CHOOSE_PLAYER);
});


// Define your game states
const GAME_STATE = {
    START_MENU: 'start_menu',
    CHOOSE_PLAYER: 'choose_player',
    GAME_WINDOW: 'game_window',
};

let currentState = GAME_STATE.START_MENU;

function changeGameState(newState) {

        // Toggle "hidden" class based on the current state
        if (currentState === GAME_STATE.START_MENU) {
            startMenuWindow.classList.toggle('hidden');
        } else if (currentState === GAME_STATE.CHOOSE_PLAYER) {
            choosePlayersWindow.classList.toggle('hidden');
        } else if (currentState === GAME_STATE.GAME_WINDOW) {
            gameWindow.classList.toggle('hidden');
        }
        

    currentState = newState;
}

// Function to update the game based on the current state
function updateGame() {
    console.log(currentState);
    switch (currentState) {
        case GAME_STATE.START_MENU:

            break;
        case GAME_STATE.CHOOSE_PLAYER:
            choosePlayersWindow.classList.remove('hidden');

            break;
        case GAME_STATE.GAME_WINDOW:
            
            break;
        default:
            console.error('Invalid game state');
    }
}
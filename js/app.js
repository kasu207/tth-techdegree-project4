/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.querySelector('#btn__reset');
const game = new Game();
startButton.addEventListener('click', () => {
    game.startGame();
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', (e) => game.handleInteraction(e.target)));

/*check if game is completed
- if so remove all li elements from phrase element
- Enable all of the onscreen keyboard buttons and update each 
to use the key CSS class, and not use the chosen or wrong CSS classes.
Reset all of the heart images (i.e. the player's lives) in the scoreboard 
at the bottom of the gameboard to display the liveHeart.png image.
*/
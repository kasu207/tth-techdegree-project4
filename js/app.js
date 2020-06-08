/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
document.addEventListener('DOMContentLoaded', () => {
    let game;
    const startButton = document.querySelector('#btn__reset');
    const keys = document.querySelectorAll('.key');
    /*
     * Calles new Hame Object
     * resets the Stylung on the keys
     * resets lives
     */
    startButton.addEventListener('click', () => {
        game = new Game();
        game.startGame();
    });

    /**adds handleInteraction to the keys */
    keys.forEach(key => key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    }));

})
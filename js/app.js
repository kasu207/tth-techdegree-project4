/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
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
    const phraseLi = document.querySelector('#phrase ul');
    if(phraseLi.children.length > 0){
        const key = document.querySelectorAll('.key');
        for(let i = 0; i < key.length; i++){
            key[i].classList.remove('chosen');
            key[i].classList.remove('wrong');
        };
        const newTries = document.querySelectorAll('.tries');
        for(let i = 0; i < newTries.length; i++){
            newTries[i].firstElementChild.setAttribute('src', 'images/liveHeart.png');
        }
        while (phraseLi.lastElementChild) {
            phraseLi.removeChild(phraseLi.lastElementChild);
          }
    }
    keys.forEach(key => {
        key.disabled = false;
    });
    game.startGame();
});

/**adds handleInteraction to the keys */
keys.forEach(key => key.addEventListener('click', (e) => {
    game.handleInteraction(e.target);
}));
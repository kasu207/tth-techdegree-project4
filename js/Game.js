/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Hello World'), 
            new Phrase('Goodbye Lenin'), 
            new Phrase('Aus die Maus'), 
            new Phrase('Fridays For Future'), 
            new Phrase('Hey Ho lets go')
        ];
        this.activePhrase = null;
    }
    
    startGame() {
        //hides start screen overlay
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        console.log(overlay);
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomPhrase];
    }
    handleInteraction(key){
            key.disabled = true;
            if (this.phrases.checkLetter(key) == false){
                key.setAttribute('class','wrong');
                this.removeLife();
            } else {
                key.setAttribute('class','choosen');
                this.phrases.showMatchedLetter();
                this.checkForWin();
                this.gameOver();
            }
        };
    
    removeLife(){
        //img replacement
        // missed +1
        //gameOver()
    }
    checkForWin(){
        //check if all letters are shown
    }
    gameOver(){
        /* 
        - show start screen overlay
        - if won show win
        - if lost show lost
        - replace the overlays "start" CSS with
        win or lose CSS Class
        */
    }
}
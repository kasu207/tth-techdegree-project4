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
        const phrases = this.phrases;
        this.activePhrase = this.getRandomPhrase(phrases);
        console.log(this.activePhrase);
        phrases.addPhraseToDisplay(this.activePhrase);
    }

    
    getRandomPhrase(phrases) {
        const randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
        return randomPhrase.phrase;
    }
    handleInteraction(){
        //disable the selected letters onscreen keyboard button
        //if clicked letter is not in phrase
            /* 
            - add ClassName wrong
            - removeLife();
            */
        //if clicked Letter in in Phrase
        /*
         - add CSS className chosen
         - showMatchedLetter()
         - checkForWin()
         - gameOver() 
         */
    }
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
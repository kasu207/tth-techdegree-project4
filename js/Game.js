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
    /**
     * hides overlay
     * gets randomphrase
     * calls addPhrasetoDisplay
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
    
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    /**
     * returns a Randomphrase
     */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomPhrase];
    }
    /**
     * 
     * uses the inserter parameter (key)
     * to add classes wrong and chosen
     */
    handleInteraction(key){
            key.disabled = true;
            if (this.activePhrase.checkLetter(key.textContent) == false){
                key.className +=' wrong';
                this.removeLife();
            } else if ((this.activePhrase.checkLetter(key.textContent))) {
                key.className += ' chosen';
                this.activePhrase.showMatchedLetter(key.textContent);
                if(this.checkForWin() === true){
                    this.gameOver();
                };          
            }
        };
    /**
     * remove life and addes 1 to midded property
     * if missed property is over 5 - call gameOver function
     */
    removeLife(){
        const tries = document.querySelectorAll('.tries');
        tries[this.missed].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        if(this.missed === 5 ){
            this.gameOver();
        };
    }
    /*
    * Checks if user has won or lost
    */
    checkForWin(){
        const chosen = document.querySelectorAll('.show');
        const space = document.querySelectorAll('.space');
        if(this.activePhrase.phrase.length === (chosen.length + space.length)){
            return true;
        }else{
            return false;
        } 
    }
    /**
     * displays start overlay and adds win or lose to screen
     */
    gameOver(){
        const overlay = document.querySelector('#overlay');
        const h1 = document.querySelector('#game-over-message');
        
        if(this.checkForWin() === true){
            overlay.style.display = '';
            h1.textContent = 'WIN';
            overlay.className = 'win';
        } else {
            overlay.style.display = '';
            h1.textContent = 'LOST';
            overlay.className = 'lose';
        }
    }
}
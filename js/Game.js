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
        const phraseLi = document.querySelector('#phrase ul');
        if(phraseLi.hasChildNodes()){
            overlay.style.display = 'none';
            for(let i = 0; i < phraseLi.length; i++){
                phraseLi.removeChild(phraseLi.childNodes[0]);
            };
        }else{
            overlay.style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();
        }
    }

    
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomPhrase];
    }
    handleInteraction(key){
            key.disabled = true;
            if (this.activePhrase.checkLetter(key.textContent) == false){
                key.setAttribute('class','wrong');
                this.removeLife();
            } else if ((this.activePhrase.checkLetter(key.textContent))) {
                key.setAttribute('class','chosen');
                this.activePhrase.showMatchedLetter(key.textContent);
                if(this.checkForWin() === true){
                    this.gameOver();
                };          
            }
        };
    
    removeLife(){
        let liveHeart = document.querySelector('.tries img');
        liveHeart.setAttribute('src', 'images/lostHeart.png');
        liveHeart.className= '';
        this.missed += 1;
        if(this.missed === 5 ){
            this.gameOver();
        };
    }
    checkForWin(){
        console.log('check for win called');
        const chosen = document.querySelectorAll('.show');
        const space = document.querySelectorAll('.space');
        if(this.activePhrase.phrase.length === (chosen.length + space.length)){
            return true;
        }else{
            return false;
        } 
    }
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
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/*
  * Phrase Class 
  ** constructor phrase Parameter "phrase" paramter in LowerCase
  
  ** Methods
  ** addPhraseToDisplay()
  *** adds placeholdrs to the display, when the game starts, regarding to word
*/



class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');
    const splitPhrase = this.phrase.split('');
    console.log(this.phrase);
    for (let i = 0; i < this.phrase.length; i++) {
      const letterLi = document.createElement('li');
      letterLi.innerHTML = splitPhrase[i];
      phraseDiv.appendChild(letterLi);
      letterLi.setAttribute('id', splitPhrase[i]);
      letterLi.setAttribute('class', splitPhrase[i]);
      if (this.phrase[i] == ' ') {
        letterLi.className = 'space';
      } else if (this.phrase[i] == splitPhrase[i]) {
        letterLi.className += ' hide letter';
      }
    }
  }
  /**
   *checkLetter()
   * checks to see if the letter selected by the player matches a letter in the phrase.
   */
  checkLetter(letter) {
    const splitPhrase = this.phrase.split('');
    if (splitPhrase.includes(letter)) {
      return true
    } else {
      return false;
    }
  }
  /** showMatchedLetter()
  *** reveals the letter on the board that match 
  *** select DOM elements that have a CSS class that
  matches the selected letter and replace each selected elements 
  hide CSS class with the show CSS class
  */
  showMatchedLetter(letter) {
    console.log(letter);
    const showLetter = document.querySelectorAll('.' + letter);
    for (let i = 0; i < showLetter.length; i++) {
      showLetter[i].setAttribute('class', 'show');
    }
  }

}
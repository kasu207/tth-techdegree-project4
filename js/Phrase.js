/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /*
  * Phrase Class 
  ** constructor phrase Parameter "phrase" paramter in LowerCase
  
  ** Methods
  ** addPhraseToDisplay()
  *** adds placeholdrs to the display, when the game starts, regarding to word

  ** checkLetter()
  *** checks to see if the letter selected by the player matches a letter in the phrase.
  
  ** showMatchedLetter()
  *** reveals the letter on the board that match 
  *** select DOM elements that have a CSS class that
  matches the selected letter and replace each selected elements 
  hide CSS class with the show CSS class
  */

  class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(phrase){
        const phraseDiv = document.querySelector('#phrase ul');
        const letterLi = document.createElement('li');
        //for each Letter in phrase add 
        phrase.forEach(letter => { console.log( letter )} )
    }
    checkLetter(){

    }
    showMatchedLetter(){

    }

  }

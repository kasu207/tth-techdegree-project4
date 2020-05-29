# tth-techdegree-project4
OOP Game Show App

Goal is to create a Game Show Guessing Word App

# Files
* An index.html file with the basic HTML markup.
* A css folder containing two CSS files with the basic CSS styles for the game.
* An images folder containing two image files that are used for the game's scoreboard.
* A js folder containing the following JavaScript files:
** app.js to create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
** Phrase.js to create a Phrase class to handle the creation of phrases.
** Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
** An example_phrase_html.txt text file containing an example of the HTML for displaying a phrase.

# Rules
* The player’s goal is to guess all the letters in a hidden, random phrase.
* At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
* The player clicks an onscreen keyboard to guess letters in the phrase.
* The letter is disabled on the onscreen keyboard and a player can't select that letter again.
* If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
* If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
* The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

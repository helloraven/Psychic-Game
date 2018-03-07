
// variables for wins, losses and guesses
var wins = 0;
var losses = 0;
var guessRemaining = 10;
var guessesSoFar = [];
// creating an array of all possible choices for computer
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


// function runs when user chooses a letter (presses a key)
document.onkeyup = function(event) {
    // determines which key was pressed by user
    var userGuess = event.key;
    guessesSoFar.push(userGuess);
    // random choice options of computer
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (userGuess === computerGuess) {
        wins++; //increase win counter by 1
        guessRemaining = 10; //reset counter back to 10
        guessesSoFar.length = 0; //reset guesses so far for new game
    } else if (guessRemaining === 0) {
        losses++; //increase loss counter by 1
        guessRemaining = 10;
        guessesSoFar.length = 0;
    } else if (userGuess !== computerGuess){
        guessRemaining--; //decrease guesses remaining by 1
    }
    
    document.getElementById('win').innerText = wins;
    document.getElementById('loss').innerText = losses;
    document.getElementById('guess-counter').innerText = guessRemaining;
    document.getElementById('current-guess').innerText = guessesSoFar;

}     

/**
 * 
 * Rock > Scissors > Paper > Rock
 */


function computerPlay (n) {
    var randNum = Math.floor(Math.random() * 10);
    var play = '';

    if(randNum <= 3){
        play = 'Rock';
    } else if (randNum <= 6 && randNum > 3) {
        play = 'Paper';
    } else {
        play = 'Scissors';
    }

    console.log(play);
}

computerPlay();

var playerSelection = '';
var computerSelection = '';
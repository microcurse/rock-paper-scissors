function computerPlay () {
    var randNum = Math.floor(Math.random() * 10);
    var play = '';

    if(randNum <= 3){
        play = 'rock';
    } else if (randNum <= 6 && randNum > 3) {
        play = 'paper';
    } else {
        play = 'scissors';
    }

    return play;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        
    }
    console.log('Computer picks: ' + computerSelection );
    console.log('Player picks: ' + playerSelection );
}

console.log('Rock..\nPaper..\nScissors..\nSHOOT!');
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
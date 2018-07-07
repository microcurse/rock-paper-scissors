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
    console.log('Computer picks: ' + computerSelection );
    console.log('Player picks: ' + playerSelection );
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win!');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose!');
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log("It's a tie!");
    } else if (' ') {

    }
}

console.log('Rock..\nPaper..\nScissors..\nSHOOT!');
const computerSelection = computerPlay();
const playerSelection = prompt('Type one: rock, paper, scissors');
console.log(playRound(playerSelection, computerSelection));
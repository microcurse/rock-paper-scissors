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

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'You win!';
            //return winMessage;
        } else if (playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'rock' && computerSelection == 'paper') {
            return 'You lose!';
            //return loseMessage;
        } else {
            return "It's a tie..";
        }
}

function game() {
    /** This is where we keep score of the game. First to 5 wins */
}

console.log('Rock..\nPaper..\nScissors..\nSHOOT!');

const computerSelection = computerPlay();
const playerSelection = prompt('Type one: rock, paper, scissors').toLowerCase();

console.log('Player picks: ' + playerSelection );
console.log('Computer picks: ' + computerSelection );

console.log(playRound(playerSelection, computerSelection));
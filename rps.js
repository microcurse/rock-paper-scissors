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

}

function game() {
    /** This is where we keep score of the game. First to 5 wins */
    let rounds = 0;
    while (rounds < 5) {
        var winner = playRound();
        rounds++;
        console.log('Test ' + rounds + " " + winner);
    }
}
console.log('Rock..\nPaper..\nScissors..\nSHOOT!');
var playerWins = 0;
var computerWins = 0;
var victory = false;
var defeat = false;
var tie = false;
const computerSelection = computerPlay();
const playerSelection = prompt('Type one: rock, paper, scissors').toLowerCase();
console.log('Player picks: ' + playerSelection );
console.log('Computer picks: ' + computerSelection );
console.log(game());
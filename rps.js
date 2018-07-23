function computerSelection(){
    computer = (Math.floor((Math.random() * 3 ) + 1));
    if (computer == 1) {
        computer = 'rock';
    } else if (computer == 2) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }
    return computer;
}
function playerSelection(){
    player = prompt("To play, type: 'rock', 'paper', or 'scissors'");
    return player.toLowerCase();
}
function playRound(player, computer) {
    switch (player) {
        case 'rock':
            if (computer == 'scissors') {
               return 'You win! Rock beats scissors';
            } else if (computer == 'paper') {
                return 'You lose! Paper beats rock';
            } else {
                return "It's a tie";
            }
        case 'paper':
            if (computer == 'rock') {
                return 'You win! Paper beats rock';
            } else if (computer == 'scissors') {
                return 'You lose! Scissors beats paper';
            } else {
                return "It's a tie";
            }
        case 'scissors':
            if (computer == 'paper') {
                return 'You win! Scissors beats paper';
            } else if (computer == 'rock') {
                return 'You lose! Rock beats scissors';
            } else {
                return "It's a tie";
            }
    }
}
var computer = computerSelection();
var player = playerSelection();

console.log(player);
console.log(computer);
console.log(playRound(player, computer));
// rock = 1, scissors = 2, paper = 3
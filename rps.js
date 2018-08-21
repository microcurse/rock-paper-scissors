// Randomly choose rock paper or scissors for the computer
function computerPlay(){
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

// Ask the player what they want to play
function playerPlay(){
    player = prompt("To play, type: 'rock', 'paper', or 'scissors'");
    return player.toLowerCase();
}

// Check to see who won the round
function playRound(player, computer) {
    switch (player) {
        case 'rock':
            if (computer == 'scissors') {
                wins += 1;
                return 'You win! Rock beats scissors';
            } else if (computer == 'paper') {
                losses += 1;
                return 'You lose! Paper beats rock';
            } else {
                return "It's a tie";
            }
        case 'paper':
            if (computer == 'rock') {
                wins += 1;
                return 'You win! Paper beats rock';
            } else if (computer == 'scissors') {
                losses += 1;
                return 'You lose! Scissors beats paper';
            } else {
                return "It's a tie";
            }
        case 'scissors':
            if (computer == 'paper') {
                wins += 1;
                return 'You win! Scissors beats paper';
            } else if (computer == 'rock') {
                losses += 1;
                return 'You lose! Rock beats scissors';
            } else {
                return "It's a tie";
            }
    }
}

// Plays 5 rounds and returns the scores for the game
// function game() {
//     var rounds = 0;
//     while (rounds < 5) {
//         computer = computerPlay();
//         player = playerPlay();

//         console.log("You picked: " + player);
//         console.log("The computer picks: " + computer );
//         console.log(playRound(player, computer));
//         rounds += 1;
//     }

//     console.log("Your score is: " + wins);
//     console.log("The computer's score is: " + losses);

//     if (wins < losses) {
//         console.log("The computer wins the game!");
//     } else {
//         console.log("You win the game!");
//     }
// }

const results = document.querySelector('.results');
const game = document.createElement('div');
game.classList.add('game');
results.appendChild(game);

const scores = document.querySelector('.scores');
const human_s = document.createElement('div');
human_s.classList.add('human-score');
scores.appendChild(human_s);

const computer_s = document.createElement('div');
computer_s.classList.add('computer-score');
scores.appendChild(computer_s);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        var computer = computerPlay();
        game.textContent = (playRound(button.id, computer));
        human_s.textContent = wins;
        computer_s.textcontent = losses;
    });
});

let wins = 0;
let losses = 0;

// game();
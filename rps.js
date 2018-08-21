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

const results = document.querySelector('.results');
const game = document.createElement('div');
game.classList.add('game');
results.appendChild(game);

const human_cont = document.querySelector('.human');
const human_s = document.createElement('span');
human_s.classList.add('human-score');
human_cont.appendChild(human_s);

const computer_cont = document.querySelector('.computer');
const computer_s = document.createElement('span');
computer_s.classList.add('computer-score');
computer_cont.appendChild(computer_s);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game.textContent = (playRound(button.id, computerPlay()));
        
        if (wins < 5 && losses < 5) {
            human_s.textContent = wins;
            computer_s.textContent = losses;
        } else if (wins < 5 && losses == 5) {
            computer_s.textContent = losses;
            game.textContent = "Computer wins the game!";
            window.alert("Computer wins the game! \nBetter luck next time!");
        } else if (wins == 5 && losses < 5) {
            human_s.textContent = wins;
            game.textContent = "You won the game!";
            window.alert("You won the game!");
        }
    });

});

let wins = 0;
let losses = 0;
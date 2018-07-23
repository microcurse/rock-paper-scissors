function computerPlay(){
    var choice = (Math.floor((Math.random() * 3 ) + 1));
    if (choice == 1) {
        choice = 'rock';
    } else if (choice == 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}
function player(){

}
console.log(computerPlay());
// rock = 1, scissors = 2, paper = 3
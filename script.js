// Variables
let humanScore = 0;
let computerScore = 0;

// Logic for a single round of play.
function playRound(player,computer){
    if(player === computer){
        tieRound();
    }else if(player === 'rock' && computer === 'scissors'){
        roundWon();
    }else if(player === 'paper' && computer === 'rock'){
        roundWon();
    }else if(player === 'scissors' && computer === 'paper'){
        roundWon();
    }else{
        roundLost()
    }
}
// Handles rounds where the player wins
function roundWon(){
    console.log('You win!');
}
// Handles rounds where the player ties
function tieRound(){
    console.log('You got a tie!');
}
//Handles rounds where player loses
function roundLost(){
    console.log('You lost!')
}
// Get either rock,paper or scissors as a return value when called.
function getcomputerChoice(){
    const board = ['rock','paper','scissors'];
    let choice = board[Math.floor(Math.random()*3)];
    return choice;
}
// Gets users choice and returns it.
function gethumanChoice(){
    let choice = prompt('Rock,Paper,Scissors?');
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
        return choice;
    }else{
        gethumanChoice();
    }
}


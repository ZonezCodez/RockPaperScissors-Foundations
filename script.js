// Variables
let humanScore = 0;
let computerScore = 0;
let rounds = 5;
let roundsPlayed = 0;

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
        return gethumanChoice();
    }
}
// Logic for rounds of play.
function playRound(player,computer){
    // Game logic handles here
    if(player === computer){
        tieRound(player,computer);
    }else if(player === 'rock' && computer === 'scissors'){
        roundWon(player,computer);
    }else if(player === 'paper' && computer === 'rock'){
        roundWon(player,computer);
    }else if(player === 'scissors' && computer === 'paper'){
        roundWon(player,computer);
    }else{
        roundLost(player,computer);
    }
}
// Handles rounds where the player wins
function roundWon(p,c){
    console.log(`You win ${p} beats ${c}!`);
    humanScore++;
}
// Handles rounds where the player ties
function tieRound(p,c){
    console.log(`${p} equals ${c} its a tie!`);
}
//Handles rounds where player loses
function roundLost(p,c){
    console.log(`You lost ${p} loses to ${c}!`)
    computerScore++;
}
// This function finishes the game and reports each score!
function finishGame(p,c){
    if(p < c){
        console.log(`You lost ${c} to ${p}!`);
    }else if(c < p) {
        console.log(`You won ${p} to ${c}!`);
    }else{
        console.log(`Tie Game! ${c} to ${p}`);
    }
}

// This log handles the game loop you can set custom amount of rounds to play.
while(roundsPlayed < rounds){
    roundsPlayed++;
    playRound(gethumanChoice(),getcomputerChoice());
}
// This logic handles calling a game over
finishGame(humanScore,computerScore);

    

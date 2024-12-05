// Variables
let humanScore = 0;
let computerScore = 0;
let rounds = 5;
let roundsPlayed = 0;
// Variables connected to the ui
const rock = document.getElementById("rImg");
const paper =  document.getElementById("pImg");
const scissors = document.getElementById("sImg");
const uipScore = document.getElementById("pScore");
const uicScore = document.getElementById("cScore");
const winner = document.getElementById("winMessage");

// added event listeners
rock.addEventListener('click', (e) => {
    return playGame('rock');
})
paper.addEventListener('click', (e) => {
    return playGame('paper');
})
scissors.addEventListener('click', (e) => {
    return playGame('scissors');
})
// PlayGame function to start 
function playGame(player){
    // Check if we finished all rounds and said winner if so this will reset the ui.
    if(roundsPlayed >= rounds){
         resetGame();
    }
    // Get either rock,paper or scissors as a return value when called.
    function getcomputerChoice(){
        const board = ['rock','paper','scissors'];
        let choice = board[Math.floor(Math.random()*3)];
        return choice;
    }
    // Logic for rounds of play.
    function playRound(player,computer){
        // Increase the roundplayed variable to help track how many rounds have been played.
        roundsPlayed++;
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
        winner.textContent = `You win ${p} beats ${c}!`;
        humanScore++;
    }
    // Handles rounds where the player ties
    function tieRound(p,c){
        console.log(`${p} equals ${c} its a tie!`);
        winner.textContent = `${p} equals ${c} its a tie!`
    }
    //Handles rounds where player loses
    function roundLost(p,c){
        console.log(`You lost ${p} loses to ${c}!`)
        winner.textContent = `You lost ${p} loses to ${c}!`
        computerScore++;
    }
    // This function finishes the game and reports each score!
    function finishGame(p,c){
        if(p < c){
            console.log(`You lost ${c} to ${p}!`);
            winner.textContent = `You lost ${c} to ${p}!`
        }else if(c < p) {
            console.log(`You won ${p} to ${c}!`);
            winner.textContent = `You won ${p} to ${c}!`
        }else{
            console.log(`Tie Game! ${c} to ${p}`);
            winner.textContent = `Tie Game! ${c} to ${p}`
        }
    }
    // This function will update the ui scores
    function updateScores(p,c){
        uipScore.textContent = p;
        uicScore.textContent = c;
    };
    // This function will reset the ui to continue playing in 5 round intervals.
    function resetGame(){
        uipScore.textContent = 0;
        uicScore.textContent = 0;
        winner.textContent = "";
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    }
    playRound(player,getcomputerChoice());
    updateScores(humanScore,computerScore);
    // Check to see if we need to finish game based on rounds
    if(roundsPlayed === rounds){
        return finishGame(humanScore,computerScore);
    }
}

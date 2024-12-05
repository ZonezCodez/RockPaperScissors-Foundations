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


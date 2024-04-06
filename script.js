function getComputerChoice(){
    let num = Math.random() * 100;
    if(num<33.33){
        return 'rock';
    }
    else if(num>33.33 && num<66.66){
        return 'paper';
    }
    else if(num>66.66){
        return 'scissor';
    }
}

let computerSelection = getComputerChoice();

let playerSelection = function(){
    let playerMove = prompt("Enter your move: ");
    return playerMove.toLowerCase();
};

console.log(`Computer Move -> ${computerSelection} 
playerSelection -> ${playerSelection()}`);
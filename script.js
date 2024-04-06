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

function getPlayerChoice(){
    let playerMove = prompt("Enter your move: ");
    return playerMove.toLowerCase();
};

function playRound(playerSelection, computerSelection){

    //playerSelection -> rock

    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'Tie';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Won';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        return 'You Lose';
    }

    //playerSelection -> paper

    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Won';
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return 'Tie';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You Lose';
    }

    //playerSelection -> scissor

    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You Lose';
    }
    else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You Won';
    }
    else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        return 'Tie';
    }

}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();


console.log(playRound(playerSelection,computerSelection));
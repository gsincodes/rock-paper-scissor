// rock paper scissor click Event Listener

let rock = document.getElementById('rock');
rock.addEventListener('click',() => {
    playerSelection = 'rock';
    playRound(playerSelection,getComputerChoice());
});

let paper = document.getElementById('paper');
paper.addEventListener('click', () =>{
    playerSelection = 'paper';
    playRound(playerSelection,getComputerChoice());

});

let scissor = document.getElementById('scissor');
scissor.addEventListener('click',() => {
    playerSelection = 'scissor';
    playRound(playerSelection,getComputerChoice());

})

//some variables

let div = document.querySelector('div');
let playerScore = 0;
let compScore = 0;
let round = 1;

//computer choice generator

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

//play round function

function playRound(playerSelection, computerSelection){

    let result = '';

    //playerSelection -> rock

    if(playerSelection === 'rock' && computerSelection === 'rock'){
        result = 'Tie';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You Lose';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        result = 'You Won';
    }

    //playerSelection -> paper

    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        result = 'You Won';
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        result = 'Tie';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        result = 'You Lose';
    }

    //playerSelection -> scissor

    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        result = 'You Lose';
    }
    else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        result = 'You Won';
    }
    else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        result = 'Tie';
    }

    //New Game Announcement

    if(playerScore == 0 && compScore == 0 && round == 1){
        let gameStart = document.createElement('h1');
        gameStart.textContent = 'New Game';
        div.appendChild(gameStart);
    }

    // Tracks Score

    if(result == 'You Won'){
        playerScore++;
    }
    else if(result == 'You Lose'){
        compScore++;
    }

    // Displays Rounds, player Selection, comp Selection and Scores

    let heading = document.createElement('h2');
    heading.textContent = `Round ${round++}`;
    div.appendChild(heading);

    let compMove = document.createElement('p');
    compMove.textContent = `Computer Selection => ${computerSelection}`;
    div.appendChild(compMove);

    let playerMove = document.createElement('p');
    playerMove.textContent = `Player Selection => ${playerSelection}`;
    div.appendChild(playerMove);

    let roundResult = document.createElement('p');
    roundResult.textContent = result;
    div.appendChild(roundResult);

    let scoreBoard = document.createElement('h3');
    scoreBoard.textContent = `Player Score => ${playerScore} Computer Score => ${compScore}`;
    div.appendChild(scoreBoard);

    // Declares results 

    if(playerScore == 5 && compScore<5){
        let finalResult = document.createElement('h1');
        finalResult.textContent = 'Victory'
        div.appendChild(finalResult);
        alert('Victory');
    }
    else if(compScore==5 && playerScore<5){
        let finalResult = document.createElement('h1');
        finalResult.textContent = 'Defeat'
        div.appendChild(finalResult);
        alert('Defeat');
    }
    
    //Game Over Announcement

    if(playerScore >= 5 || compScore >= 5){
        playerScore = 0;
        compScore = 0;
        round = 1;
        let gameOver = document.createElement('h1');
        gameOver.textContent = 'Game Ended';
        div.appendChild(gameOver);   
    }
    
}

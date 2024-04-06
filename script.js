function getComputerChoice(){
    let num = Math.random() * 100;
    if(num<33.33){
        console.log('rock');
    }
    else if(num>33.33 && num<66.66){
        console.log('paper');
    }
    else if(num>66.66){
        console.log('scissor');
    }
}

getComputerChoice();
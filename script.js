function computerPlay(){
    let random = Math.random()*8;
    random = Math.round(random, 1);
    if(random>=0 && random < 3){
        return "paper";
    }
    else if(random>=3 && random < 6){
        return "rock";
    }
    else{
        return "scissors";
    }
}

function winner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection){
        return "DRAW!";
    }
    else{
        if(playerSelection=="paper" && computerSelection=="rock"){
            return "Paper beats rock, player wins";
        }
        else if(playerSelection=="paper" && computerSelection=="scissors"){
            return "Paper loses to Scissors, COM wins"
        }
        else if(playerSelection=="rock" && computerSelection=="scissors"){
            return "Rock beats Scissors, PLAYER wins"
        }
        else if(playerSelection=="rock" && computerSelection=="paper"){
            return "Rock loses to Paper, COM wins"
        }
        else if(playerSelection=="scissors" && computerSelection=="paper"){
            return "Scissors beats paper, PLAYER wins"
        }
        else if(playerSelection=="scissors" && computerSelection=="rock"){
            return "Scissors loses to rock, COM wins"
        }
        else{
            return "ENTER A VALID HAND!"
        }
    }
}

function game(){
    for(let i = 0; i<5; i++){
        let playerPlay= prompt("Enter your hand");                                                      
        var response = computerPlay();
        var winnerMessage = winner(playerPlay,response);
        console.log(winnerMessage);
    }
}
game();

let cpu=0;
let player=0;
let playerChoice=0;
let cpuChoice=0;
let repeat=1;
function randomCpu(){
    return Math.floor(Math.random()*3)+1;
}

function getPlayerChoice(playerChoice){
    playerChoice=prompt("plese enter a number 1, 2, 3");
    playerChoice=parseInt(playerChoice);
    while(repeat===1){ 
        playerChoice=parseInt(playerChoice);
    if(playerChoice===1){
        repeat=0;
    }
    else if(playerChoice===2){
        repeat=0;
    }
    else if(playerChoice===3){
        repeat=0;
    }
    else{
        playerChoice=prompt("invalid choice pick between 1-3");
    }
}
    return playerChoice;
}


console.log(randomCpu());
playerChoice=getPlayerChoice(getPlayerChoice);
console.log(playerChoice);

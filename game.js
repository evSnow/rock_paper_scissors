let cpu=0;
let player=0;
let playerChoice=0;
let cpuChoice=0;
let repeat=1;
let whoWon=0;
function randomCpu(){
    return Math.floor(Math.random()*3)+1;
}

function getPlayerChoice(playerChoice){
    playerChoice=prompt("plese enter a number 1:rock , 2:paper, 3:scissors");
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
        playerChoice=prompt("invalid choice pick 1:rock , 2:paper, 3:scissors");
    }
}
    return playerChoice;
}
//1=player  2==cpu   3= none/tie
function compareChoice(playerChoice,cpuChoice){
    if(playerChoice === 1 && cpuChoice === 2){
        return 2;
    }
    else if(playerChoice === 1 && cpuChoice === 3){
        return 1;
    }
    else if(playerChoice === 2 && cpuChoice === 1){
        return 1;
    }
    else if(playerChoice === 2 && cpuChoice === 3){
        return 2;
    }
    else if(playerChoice === 3 && cpuChoice === 1){
        return 2;
    }
    else if(playerChoice === 3 && cpuChoice === 2){
        return 1;
    }
    else{
        return 3;
    }
}

while(1==1){ 
cpuChoice=randomCpu();
                        //console.log(cpuChoice);
playerChoice=getPlayerChoice(getPlayerChoice);
                        //console.log(playerChoice);
whoWon=compareChoice(playerChoice,cpuChoice);
if(whoWon===1){
player=player+1;
alert("the person who won is player" + "      player score: "+player+" cpu score: "+cpu);
}
else if(whoWon===2){
cpu=cpu+1;
console.log(cpu);
alert("the person who won is cpu" + "     player score: "+player+" cpu score: "+cpu);
}
else if(whoWon===3){
alert("both choice the same choice");
if(player===5){ 
    alert("game is over the winer is player\n Thamks for playing");
    break;
    }
    else if(cpu===5){
        alert("Game is over and the cpu won\n Thamks for playing")
        break;
    }
}

}
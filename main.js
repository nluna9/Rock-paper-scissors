let words = ['rock', 'paper', 'scissors'],
    rand = Math.floor(Math.random()*3);

function computerPlay(){
    return words[rand]
}


function singleRound(playerSelection, computerSelection = computerPlay()){
    if(playerSelection === computerSelection){
        return 'You draw';
    } else if(words.indexOf(playerSelection)- words.indexOf(computerSelection) == 1 || words.indexOf(playerSelection)- words.indexOf(computerSelection) == 2  ){
        return 'You won!, ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lost!, ' + computerSelection + ' beats ' + playerSelection;
    }
}

console.log(computerPlay());
console.log(singleRound('paper'));
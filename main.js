let words = ['rock', 'paper', 'scissors'];

function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    return words[rand]
}



function singleRound(playerSelection, computerSelection = computerPlay()){
    if (typeof playerSelection === 'string' && words.includes(playerSelection.toLowerCase())){
        playerSelection = playerSelection.toLowerCase();
          if(playerSelection === computerSelection){
              return ['You draw.', 0];
          } else if(words.indexOf(playerSelection)- words.indexOf(computerSelection) == 1 || words.indexOf(playerSelection)- words.indexOf(computerSelection) == -2  ){
        return ['You win! ' + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '.', 1];
    } else {
        return ['You lose! ' + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '.', 2];
    }} else {
        return ['This is not a valid option, try again.', 4];
    }
}


function game(){
    let option;
    let j = 0;
    let k = 0;
    for (let i = 1; i <= 5; i++){
        computerPlay();
        option = prompt('Rock, paper or scissors?');
        singleRound(option);
        if (singleRound(option)[1] == 1){
            j++;
            console.log(singleRound(option)[0] + ' Result is ' + j + ' to ' + k + '.');
        } else if (singleRound(option)[1] == 2){
            k++;
            console.log(singleRound(option)[0] + ' Result is ' + j + ' to ' + k + '.');
        } else if (singleRound(option)[1] == 0){
            console.log(singleRound(option)[0] + ' Result is ' + j + ' to ' + k + '.');
            i--;
        } else {
            console.log(singleRound(option)[0]);
            i--;
        }
    }
    console.log('The final result is ' + j + ' to ' + k + '.' );
}



game();




let words = ['rock', 'paper', 'scissors'],
    rand = Math.floor(Math.random()*3);

function computerPlay(){
    return words[rand]
}



function singleRound(playerSelection, computerSelection = computerPlay()){
    if (typeof playerSelection === 'string' && words.includes(playerSelection.toLowerCase())){
        playerSelection = playerSelection.toLowerCase();
          if(playerSelection === computerSelection){
              return 'You draw.';
          } else if(words.indexOf(playerSelection)- words.indexOf(computerSelection) == 1 || words.indexOf(playerSelection)- words.indexOf(computerSelection) == -2  ){
        return 'You win! ' + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '.';
    } else {
        return 'You lose! ' + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '.';
    }} else {
        return 'This is not a valid option, try again.'
    }
}


function game(){
    let j = 0;
    let k = 0;
    let option;
    for(let i = 0; i = 4; i++){
        option = prompt('Rock, paper or scissors?');
        computerPlay();
        singleRound(option);
        if (singleRound(option).includes('win')){
            j += 1;
            console.log(singleRound(option) + ' Result is ' + j + ' to ' + k + '.');
        } else if (singleRound(option).includes('lose')){
            k += 1;
            console.log(singleRound(option) + ' Result is ' + j + ' to ' + k + '.');
        } else if (singleRound(option).includes('draw')){
            console.log(singleRound(option) + ' Result is ' + j + ' to ' + k + '.');
        } else {
            console.log(singleRound(option));
        }
    }
    console.log('The final result is' + j + ' to ' + k + '.' );
}



// game();






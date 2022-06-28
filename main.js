let words = ['rock', 'paper', 'scissors'],
    rand = Math.floor(Math.random()*3);

function computerPlay(){
    return words[rand]
}

console.log(computerPlay());
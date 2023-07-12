// caching the DOM
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector('.Score-board');
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
function getComputerChoice(){
    const choices=['r','p','s'];
   const random_number= Math.floor(Math.random()*3); // math .random gives the number 0 to 1 we need 0 to 3 thats why we use *3
   return choices[random_number];
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML= computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_div.innerHTML=`${convertTOWord(userChoice)}${(smallUserWord)}beats  ${convertTOWord(computerChoice)}${(smallCompWord)} . You Win!  🔥`;
    userChoice_div.classList.add('green-glow')
    setTimeout(function(){
        userChoice_div.classList.remove('green-glow')
    },300);
}
function convertTOWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors"
}
function loose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML= computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_div.innerHTML=`${convertTOWord(userChoice)}${(smallUserWord)}loses to  ${convertTOWord(computerChoice)}${(smallCompWord)} . You Lost...  💩💩💩`;
    userChoice_div.classList.add('red-glow')
    setTimeout(function(){
        userChoice_div.classList.remove('red-glow')
    },300);
}
function draw(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_div.innerHTML=`${convertTOWord(userChoice)}${(smallUserWord)}equals  ${convertTOWord(computerChoice)}${(smallCompWord)} . It's a draw`;
    userChoice_div.classList.add('black-glow')
    setTimeout(function(){
        userChoice_div.classList.remove('black-glow')
    },300);
}



function game(userChoice){
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    loose(userChoice,computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice,computerChoice);
        break;
  }
  
}
  function main(){
rock_div.addEventListener('click',()=>{
game("r");
});

paper_div.addEventListener('click',()=>{
    game("p");
});
scissors_div.addEventListener('click',()=>{
    game("s");
});
  }
  main();
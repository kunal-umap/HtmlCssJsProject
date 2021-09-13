let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelectorAll(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const seissors_div = document.getElementById("s");

function getComputerChoice(){

    const choices =['r','p','s'];
    const randomNummber = (Math.floor(Math.random()*3));

    return choices[randomNummber];

}
function convertToWord(letter){
    if(letter=="r"){
        return "rock";
    }else if(letter == "p"){
        return "paper";
    }else{
        return "scissor";
    }
}
function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user" .fontsize(3);
    const smallCompWord = "comp"  .fontsize(3);
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord}   beats   ${convertToWord(computer)} ${smallCompWord}  you win !🎈`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("green-glow") },400);
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user" .fontsize(3);
    const smallCompWord = "comp"  .fontsize(3);
    result_p.innerHTML = ` ${convertToWord(computer)} ${smallCompWord}   beats ${convertToWord(user)} ${smallUserWord}   you loose !😭😭 `;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("red-glow") },400);

}
function draw(user, computer){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user" .fontsize(3);
    const smallCompWord = "comp"  .fontsize(3);
    result_p.innerHTML = ` ${convertToWord(computer)} ${smallCompWord}   same ${convertToWord(user)} ${smallUserWord}   it's draw ! 😁😎😆"`;
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("grey-glow") },400);
}

function game(userChoise){

    const computerChoice = getComputerChoice();
    switch (userChoise + computerChoice){
        case "rs":

        case "pr":

        case "sp":
            win(userChoise,computerChoice);
            break;

        case "rp":

        case "ps":

        case "sr":
            lose(userChoise,computerChoice);
            break; 
            
        case "rr":

        case "pp":
        
        case "ss":
            draw(userChoise,computerChoice);
           break;
    }

}

function main(){

    rock_div.addEventListener('click',function(){
        game("r");
    });
    paper_div.addEventListener('click',function(){
        game("p");
    });
    seissors_div.addEventListener('click',function(){
        game("s");
    });

}

main();
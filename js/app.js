let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p       = document.querySelector('.result > p');
const rock_div       = document.getElementById('rock');
const paper_div      = document.getElementById('paper');
const scissors_div   = document.getElementById('scissors');
const smallUserWord  = "user".fontsize(3).sup();
const smallCompWord  = "comp".fontsize(3).sup();


function getComputerChoice(){
 const choices = ['rock','paper','scissors'];
 var randomChoice = Math.floor(Math.random()*3);
 console.log("randomChoice",randomChoice);
 return choices[randomChoice];
}

function win(userChoice,computerChoice){
    userScore++;
    console.log("win");
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = userChoice+smallUserWord+" beats "+computerChoice+smallCompWord+", You win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){
        userChoice_div.classList.remove('green-glow');
    },300)
}

function lose(userChoice,computerChoice){
    compScore++;
    console.log("lose");
    console.log(compScore);
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = computerChoice+smallCompWord+" beats "+userChoice+smallUserWord+", You Lose..";
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){
        userChoice_div.classList.remove('red-glow');
    },300)
}

function draw(userChoice,computerChoice){
    result_p.innerHTML = computerChoice+smallCompWord+" equals "+userChoice+smallUserWord+", it`s a draw!";
    console.log("draw");
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){
        userChoice_div.classList.remove('gray-glow');
    },300)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("userChoice => ",userChoice);
    console.log("computerChoice => ",computerChoice);
    switch(userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click",function(){
        game("rock");
        console.log("rock");
    });

    paper_div.addEventListener("click",function(){
        game("paper");
        console.log("paper");
    });

    scissors_div.addEventListener("click",function(){
        game("scissors");
        console.log("scissors");
    });
}

main();

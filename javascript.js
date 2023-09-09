let userScore =  0;
let computerScore =   0;
let tieScore = 0;
const userScoreClass = document.getElementById("player-score");
const computerScoreClass = document.getElementById("computer-score");
const tieScoreClass = document.getElementById("tie-score");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const result = document.querySelector('.result > p');


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function getPlayerChoice() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

getPlayerChoice();

function win(player, computer) {
    userScore++;
    userScoreClass.innerHTML = userScore;
    computerScoreClass.innerHTML = computerScore;
    result.innerHTML = `NICE! ${player} beats ${computer} you win... This time :>`; 
}

function lose(player, computer) {
    computerScore++;
    computerScoreClass.innerHTML = computerScore;
    result.innerHTML = `OH NO! ${computer} beats ${player} you lose :(`
}

function tie(player, computer) {
    tieScore++;
    tieScoreClass.innerHTML = tieScore;
    result.innerHTML = `hm thats weird a draw.... try again!`
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
        switch(playerChoice + computerChoice) {
            case "rockscissors" :
            case "paperrock":
            case "scissorspaper":
                win(playerChoice, computerChoice);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(playerChoice, computerChoice)
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                tie(playerChoice, computerChoice)
                break;
        
        }
}

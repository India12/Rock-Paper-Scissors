// 1. get all DOM elements. 
let userScore = 0;
let computerScore = 0;
const userScore_p = document.getElementById('user-score');
const computerScore_p = document.getElementById('computer-score');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
const result_h2 = document.getElementById('result');
  

// 4. create computerSelection function
function computerChoice () {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// 3./5.create playRound function with playerSelection argument 
//that comes from eventlistener
function playRound (playerSelection, computerSelection) {
    computerSelection = computerChoice();
    document.getElementById("computerChoice").innerHTML =  computerSelection; 
    document.getElementById("userChoice").innerHTML =  playerSelection; 

    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result.textContent = "You Win!";
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result.textContent = "You lose!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.textContent = "It's a draw!";
            break
    }
    /*
    if (computerSelection === playerSelection) {
        result.textContent = "It is a tie";
        return;
      }
        //Check for Rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          result.textContent = "User Wins";
          return;
        } else {
          result.textContent = "Computer Wins";
          return;
        }
    }
      //Check for Paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          result.textContent = "Computer Wins";
          return;
        } else {
          result.textContent = "User Wins";
          return;
        }
    }
      //Check for Scissors
      if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          result.textContent = "Computer Wins";
          return;
        } else {
          result.textContent = "User Wins";
          return;
        }
    }  */
    
}
// 2. create function and add an event listener on buttons
// then put a function in it (create this function - playRound() ) 
function main () {
    rock_btn.addEventListener("click", function (){
        playRound("rock");
    });
    paper_btn.addEventListener("click", function (){
        playRound("paper");
    });
    scissors_btn.addEventListener("click", function (){
        playRound("scissors");
    });
}
main();

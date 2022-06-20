
let computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    let i = Math.floor(3 * Math.random());
    if (i === 3) i = 2;
    return choices[i];
};

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    switch (computerSelection.toUpperCase()) {
        case playerSelection.toUpperCase(): {
            return "It's a tie";
        }
        case 'ROCK': {
            if (playerSelection.toUpperCase() === "SCISSORS") {
                playerScore++;
                return "You Lose!, Rock beats Scissors";
            } else {
                computerScore++
                return "You Win! Paper beats Rock";
            }
        }
        case 'SCISSORS': {
            if (playerSelection.toUpperCase() === "PAPER") {
                computerScore++;
                return "You Lose!, Scissors beats Paper";
            } else {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
        }
        case 'PAPER': {
            if (playerSelection.toUpperCase() === "SCISSORS") {
                playerScore++;
                return "You Win!, Scissors beats Paper";
            } else {
                computerScore++;
                return "You lose! Paper beats Rock";
            }
        }
    }
}

function game() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Pick Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}

let winner = playerScore > computerScore ? "You Win!" : "You Lose!";

console.log(winner);
/* Get DOM */

const btnNode = document.querySelectorAll('#selectn-btn > button');
const winner = document.querySelector('#winner');
const displayScore = document.querySelector('#score');
const contentDiv = document.querySelector('#content-div');

/* Game logic */
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

let round = 0;
let computerSelection;

btnNode.forEach((button) => {
    // For each button we added an event listener
    button.addEventListener('click', () => {
        // Got the computer play
        computerSelection = computerPlay();
        const newPara = document.createElement('p');
        ++round;
        newPara.textContent = `Round ${round} Result: ${playRound(button.id, computerSelection)}`;
        newPara.style.cssText = 'border: 1px solid blue; color: green'
        contentDiv.insertBefore(newPara, displayScore)
        displayScore.textContent += `Player: ${playerScore} vs Computer: ${computerScore}`;
        if (playerScore == 5 || computerScore == 5) {
            winner.textContent += playerScore > computerScore ? "You Win!" : "You Lose!";
        }
    })
});
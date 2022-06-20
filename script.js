let choices = ['Rock', 'Paper', 'Scissors']

let playerSelection = prompt("Rock, Paper or Scissors? : ")

let computerPlay = () => Math.round(2 * Math.random());

let computerChoice = computerPlay => {
    if (computerPlay === 0) {
        return choices[0]
    } else if (computerPlay === 1) {
        return choices[1]
    } else return choices[2]
};

let computerSelection = computerChoice(computerPlay)

let computerScore = 0;
let playerScore = 0;

let getWinner = (computerSelection, playerSelection) => {
    if (computerSelection === 'Rock' && playerSelection.toUpperCase() === "ROCK" 
    || computerSelection === 'Paper' && playerSelection.toUpperCase() === "PAPER"
    || computerSelection === 'Scissors' && playerSelection.toUpperCase() === "SCISSORS") {
        return "That is a tie!"
    } else if (computerSelection === 'Rock' && playerSelection.toUpperCase() === "SCISSORS") {
        computerScore++
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerSelection === 'Scissors' && playerSelection.toUpperCase() === "PAPER") {
        computerScore++
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerSelection === 'Paper' && playerSelection.toUpperCase() === "ROCK") {
        computerScore++
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }  else if (computerSelection === 'Scissors' && playerSelection.toUpperCase() === "ROCK") {
        playerScore++
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerSelection === 'Paper' && playerSelection.toUpperCase() === "SCISSORS") {
        playerScore++
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerSelection === 'Rock' && playerSelection.toUpperCase() === "PAPER") {
        playerScore++
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }
}

function gameOn() {
    console.log(`${getWinner(computerSelection, playerSelection)}`)
}

let winner = playerScore > computerScore ? "You win" : playerScore === computerScore ? "It is a tie" : "Computer wins"

console.log(winner)
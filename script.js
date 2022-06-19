let choices = ['Rock', 'Paper', 'Scissors']

let computerPlay = () => Math.round(2 * Math.random());

let computerChoice = computerPlay => {
    if (computerPlay === 0) {
        return choices[0]
    } else if (computerPlay === 1) {
        return choices[1]
    } else return choices[2]
};

function gameOn() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection = prompt("Rock, Paper or Scissors? : ")
    console.log(playerSelection)

    let getWinner = (computerChoice, playerSelection) => {
        if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "ROCK" 
        || computerChoice === 'Paper' && playerSelection.toUpperCase() === "PAPER"
        || computerChoice === 'Scissors' && playerSelection.toUpperCase() === "SCISSORS") {
            return "That is a tie!"
        } else if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "SCISSORS") {
            computerScore++
            return "Computer wins, you chose Scissors and computer chose Rock"
        } else if (computerChoice === 'Scissors' && playerSelection.toUpperCase() === "PAPER") {
            computerScore++
            return "Computer wins, you chose Paper and computer chose Scissors"
        } else if (computerChoice === 'Paper' && playerSelection.toUpperCase() === "ROCK") {
            computerScore++
            return "Opps. you lost. Computer chose Paper and you chose Rock"
        }  else if (computerChoice === 'Scissors' && playerSelection.toUpperCase() === "ROCK") {
            playerScore++
            return "Computer wins, you chose Scissors and computer chose Rock"
        } else if (computerChoice === 'Paper' && playerSelection.toUpperCase() === "SCISSORS") {
            playerScore++
            return "Computer wins, you chose Paper and computer chose Scissors"
        } else if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "PAPER") {
            playerScore++
            return "Opps. you lost. Computer chose Paper and you chose Rock"
        }
    }
    console.log(`${getWinner(computerChoice(computerPlay()), playerSelection)}`)
}

let i;
for (i = 0; i < 5; i++){
    gameOn()
}

let winner = playerScore > computerScore ? "You win" : playerScore === computerScore ? "It is a tie" : "Computer wins"

console.log(winner)
let choices = ['Rock', 'Paper', 'Scissors']

let computerPlay = () => Math.round(2 * Math.random());

let computerChoice = computerPlay => {
    if (computerPlay === 0) {
        return choices[0]
    } else if (computerPlay === 1) {
        return choices[1]
    } else return choices[2]
};

let playerSelection = prompt("Rock, Paper or Scissors? : ")
console.log(playerSelection)

let getWinner = (computerChoice, playerSelection) => {
    if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "ROCK" 
    || computerChoice === 'Paper' && playerSelection.toUpperCase() === "PAPER"
    || computerChoice === 'Scissors' && playerSelection.toUpperCase() === "SCISSORS") {
        return "That is a tie!"
    } else if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "SCISSORS") {
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerChoice === 'Scissors' && playerSelection.toUpperCase() === "PAPER") {
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerChoice === 'Paper' && playerSelection.toUpperCase() === "ROCK") {
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }  else if (computerChoice === 'Scissors' && playerSelection.toUppercase() === "ROCK") {
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerChoice === 'Paper' && playerSelection.toUpperCase() === "SCISSORS") {
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerChoice === 'Rock' && playerSelection.toUpperCase() === "PAPER") {
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }
}
console.log(`${getWinner(computerChoice(computerPlay()), playerSelection)}`)

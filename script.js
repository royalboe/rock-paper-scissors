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
    if (computerChoice === 'Rock' && playerSelection === /Rock/ 
    || computerChoice === 'Paper' && playerSelection === /Paper/
    || computerChoice === 'Scissors' && playerSelection === /Scissors/) {
        return "That is a tie!"
    } else if (computerChoice === 'Rock' && playerSelection === "Scissors") {
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerChoice === 'Scissors' && playerSelection === "Paper") {
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerChoice === 'Paper' && playerSelection === "Rock") {
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }  else if (computerChoice === 'Scissors' && playerSelection === "Rock") {
        return "Computer wins, you chose Scissors and computer chose Rock"
    } else if (computerChoice === 'Paper' && playerSelection === "Scissors") {
        return "Computer wins, you chose Paper and computer chose Scissors"
    } else if (computerChoice === 'Rock' && playerSelection === "Paper") {
        return "Opps. you lost. Computer chose Paper and you chose Rock"
    }
}
console.log(`${getWinner(computerChoice(computerPlay()), playerSelection)}`)

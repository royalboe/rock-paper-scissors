let choices = ['Rock', 'Paper', 'Scissors']

let computerPlay = () => Math.round(2 * Math.random());

let computerChoice = computerPlay => {
    if (computerPlay === 0) {
        return choices[0]
    } else if (computerPlay === 1) {
        return choices[1]
    } else return choices[2]
};


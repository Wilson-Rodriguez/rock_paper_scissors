console.log('banana')
let rpsChoices = ['Rock', 'Paper', 'Scissor']

function getComputerChoice() {
    let number = Math.random()
    if (number >= 0 && number <= 0.3333) {
        console.log(rpsChoices[0])
    }
    else if (number > 0.3333 && number <= 0.6666) {
        console.log(rpsChoices[1])
    }
    else {
        console.log(rpsChoices[2])
    }
}

getComputerChoice()
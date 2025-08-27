let rpsChoices = ['rock', 'paper', 'scissor']

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let number = Math.random()
    if (number >= 0 && number <= 0.3333) {
        return rpsChoices[0]
    }
    else if (number > 0.3333 && number <= 0.6666) {
        return rpsChoices[1]
    }
    else {
        return rpsChoices[2]
    }
}

function getHumanChoice() {
    return prompt()
}

function playRound(compChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()
    if(compChoice == 'rock') {
        if (humanChoice == 'rock') {
            console.log('You Tie')
        }
        else if (humanChoice == 'paper') {
            console.log('You Win')
            humanScore++
        }
        else if (humanChoice == 'scissor') {
            console.log('You Lose')
            computerScore++
        }
    }

    else if (compChoice == 'paper') {
        if (humanChoice == 'rock') {
            console.log('You Lose')
            computerScore++
        }
        else if (humanChoice == 'paper') {
            console.log('You Tie')
        }
        else if (humanChoice == 'scissor') {
            console.log('You Win')
            humanScore++
        }
    }

    else if (compChoice == 'scissor') {
        if (humanChoice = 'rock') {
            console.log('You Win')
            humanScore++
        }
        else if (humanChoice == 'paper') {
            console.log('You Lose')
            computerScore++
        }
        else if (humanChoice == 'scissor') {
            console.log('You Tie')
        }
    }

    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

function playGame() {
    for(let i=0; i<5; i++) {
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        playRound(computerChoice, humanChoice)
    }

    if (computerScore > humanScore) {
        console.log('The computer wins')
    }
    
    if (humanScore > computerScore) {
        console.log('The player wins')
    }

    if (humanScore == computerScore) {
        console.log('Game Tie')
    }

}

playGame()
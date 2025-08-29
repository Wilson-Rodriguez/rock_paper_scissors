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

function playRound(compChoice, humanChoice) {
    if(compChoice == 'rock') {
        if (humanChoice == 'rock') {
            roundWinner.innerText = "You Tie"
        }
        else if (humanChoice == 'paper') {
            roundWinner.innerText = "You Win"
            humanScore++
        }
        else if (humanChoice == 'scissor') {
            roundWinner.innerText = "You Lose"
            computerScore++
        }
    }

    else if (compChoice == 'paper') {
        if (humanChoice == 'rock') {
            roundWinner.innerText = "You Lose"
            computerScore++
        }
        else if (humanChoice == 'paper') {
            roundWinner.innerText = "You Tie"
        }
        else if (humanChoice == 'scissor') {
            roundWinner.innerText = "You Win"
            humanScore++
        }
    }

    else if (compChoice == 'scissor') {
        if (humanChoice == 'rock') {
            roundWinner.innerText = "You Win"
            humanScore++
        }
        else if (humanChoice == 'paper') {
            roundWinner.innerText = "You Lose"
            computerScore++
        }
        else if (humanChoice == 'scissor') {
            roundWinner.innerText = "You Tie"
        }
    }

    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

function playGame(choice) {

    const computerChoice = getComputerChoice()
    const humanChoice = choice
    playRound(computerChoice, humanChoice)

    if (computerScore == 5) {
        gameWinner.innerText = "The Computer Wins"
    }
    
    if (humanScore == 5) {
        gameWinner.innerText = "The Player Wins"
    }

}



const btnRock = document.querySelector("#btnRock")
const btnPaper = document.querySelector("#btnPaper")
const btnScissor = document.querySelector("#btnScissor")

btnRock.addEventListener("click", () => {
    playGame(rpsChoices[0])
})

btnPaper.addEventListener("click", () => {
    playGame(rpsChoices[1])
})

btnScissor.addEventListener("click", () => {
    playGame(rpsChoices[2])
})

const roundWinner = document.createElement("p")
const gameWinner = document.createElement("p")

const gameResults = document.querySelector("#gameResults")
gameResults.appendChild(roundWinner)
gameResults.appendChild(gameWinner)

const randomNum = Math.round(Math.random()*100+1)

const submit = document.getElementById('button')
const userInput = document.getElementById('inputBox')
const guessSlot = document.getElementsByClassName('guesses')[0]
const remaining = document.getElementsByClassName('results')[0]
const lowOrHigh = document.getElementsByClassName('lowOrHigh')[0]
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    }
    else if(guess<1){
        alert("Please enter a number greater than 0");
    }
    else if(guess>100){
        alert("Number shouldn't be greater than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuesses===11){
            displayGuess(guess)
            displayMessage(`Game Over, random number was ${randomNum}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right, Random number was ${randomNum}`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`Number is low, guess higher`)
    }
    else if(guess>randomNum){
        displayMessage(`Number is high, guess lower`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10-numGuesses}`
    numGuesses++;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = Math.round(Math.random()*100+1)
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML=""
        remaining.innerHTML = `${10-numGuesses}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true
    })
}

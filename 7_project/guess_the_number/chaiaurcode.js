let randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessCount = document.querySelector('.lastResult');
// console.log(guessCount.value);
const lowHigh  = document.querySelector('.lowOrHi'); // the result will be pass here
const startOver = document.querySelector('.resultParas'); // the result will be pass here

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playgame = true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // validating  the guess
    if(isNaN(guess) ){
        alert ('please enter a valid input.')
    }
    else if (guess<1){
        alert('enter guess bigger than 1')
    }
    else if (guess>100){
        alert('enter guess less than 100')
    }
    else{
        prevGuess.push(guess)
        if (numGuess >= 10 ){
            cleanupGuess(guess)
            displayMessage(`Game Over!! , random number was : ${randomNum} `)
            endGame()
        }
        else {
            cleanupGuess(guess)
            checkguess(guess)
        }
    }
} 

function checkguess(guess){
    // display the validation
    if ( guess === randomNum){
        displayMessage(`Congrats! You guessed it rigth.`)
    }
    else if (guess < randomNum){
        displayMessage(`${guess} is tooo low from the randomNumber.`)
    }
    else if (guess > randomNum){
        displayMessage(`${guess} is tooo high from the randomNumber.`)
    }
}

// the displayGuess () is kind of a cleanup method to clean the inputfield
function cleanupGuess (guess){
    // it will display the guess 
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    guessCount.innerHTML = ` ${11- numGuess}`
    
}

function displayMessage (message){
    // it will clean the messag ein the input field 
    // upadate the guess and also updates the guess count
    lowHigh.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute( 'disabled' , '')
    p.classList.add('buton')
    p.innerHTML = `<h2 id = "newgame"> Start new game</h2>`
    startOver.appendChild(p);
    playgame =false
    newgame();
    
}

function newgame (){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click' , function (e){
        randomNum = Math.floor(Math.random() * 100 + 1);
        prevGuess =[]
        numGuess =1
        playgame = true
        guessSlot.innerHTML="";
        guessCount.innerHTML = ` ${11- numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
    })
}


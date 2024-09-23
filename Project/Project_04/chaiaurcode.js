let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){ //to check whether available to play game
    submit.addEventListener('click',function(e){
        e.preventDefault(); //to prevent it from sending value .
        const guess = parseInt(userInput.value); //user enter number 
        validateGuess(guess);
    });

}

function validateGuess(guess)
{
    //check whether number guess satisfy condition like number is less than 1 or negative etc  
   if(isNaN(guess))
   {
    alert(`Please enter a valid number`);
   }
   else if(guess < 1)
   {
    alert('Please enter a number greater than 1');
   }
   else if(guess > 100)
   {
    alert('Please enter a number less than 100');
   }
   else{
    prevGuess.push(guess) // pushing number in array

    if(numGuess === 11){ // when number of guess made is 11
      displayGuess(guess);  //check if its game is over
      displayMessage(`Game Over . Random Number was ${randomNumber}`)
      endGame();  // it will end game
    }
    else{ // number of guess made is not 11
    displayGuess(guess) //displaying a guess number i guess ?
    checkGuess(guess) //check whether guessed number is greater or smaller than random number.
    }
       }
 }

function checkGuess(guess){
    //check whether guessed number is greater or smaller than random number.
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Tooo Low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}

function displayGuess(guess){
 userInput.value = '' // update the value of userInput
 guessSlot.innerHTML += `${guess},  `    //we will use innerHtml here bcz we want to make direct changes in it . We add value
 numGuess++;

 remaining.innerHTML = `${11 - numGuess}` //for Guessremaining
}

function displayMessage(guess){
    //it will interact with dom
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 userInput.value = '';
 userInput.setAttribute('disabled',''); // when number of guess is 10 then user will not be able to add number
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
 startOver.appendChild(p);
 playGame = false;
 newGame();
}

//when the game end then to reset every field this function is used
function newGame(){
    //reference of new game is passed
const newGameButton = document.querySelector('#newGame');// id  of start new game is passed here so it works
// click event is added on start new game
newGameButton.addEventListener('click', function(e){
randomNumber = parseInt(Math.random() * 100 + 1);
prevGuess = [] // previous guess is reset
numGuess = 1
guessSlot.innerHTML = '' //empty guess slot
remaining.innerHTML = `${11 - numGuess}` ; 
userInput.removeAttribute('disabled') //removing that attribute so that user can input the value
startOver.removeChild(p)

playGame = true;
});

}


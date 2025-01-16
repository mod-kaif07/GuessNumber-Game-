const rand = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const guessField = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (z) {
    z.preventDefault();
    const userInput = parseInt(guessField.value); // Update user input
    validdatesguess(userInput);
  });
}

function validdatesguess(guess) {
  if (guess <= 0 || guess == " " || guess > 100 || isNaN(guess)) {
    alert("Enter valid number");
   
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`Game OVER !! Random number ${rand}`);
      endGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess == rand) {
    displaymessage("YOU GUESS RIGHT !! CONGRATULATIONS");
    endGame();
  } else if (guess > rand) {
    displaymessage("Guess is too high, try again");
  } else if (guess < rand) {
    displaymessage("Guess is too low, try again");
  }
}

function displayguess(guess) {
  guessField.value = ""; // Clear input field
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `Remaing chance: ${11 - numGuess}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.disabled = true; // Disable the input field
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    rand = Math.floor(Math.random() * 100 + 1); // Reset random number
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    guessField.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

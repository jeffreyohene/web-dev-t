// Variable declarations
let target; // Represents the target number for each round

// Retrieving HTML elements
const humanGuessInput = document.getElementById('human-guess');
const roundNumberDisplay = document.getElementById('round-number');
const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');
const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

// Event listener for guess button click
guessButton.addEventListener('click', () => {
  // Generate the target value
  target = generateTarget();

  // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value;

  // Make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 10);

  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;
  
  // Determine if the human or computer wins
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target);
  const winner = humanIsWinner ? 'human' : 'computer';

  // Update the correct score
  updateScore(winner);

  // Display the winner
  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text');
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  // Display the current scores
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
  // Set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true);
  nextRoundButton.removeAttribute('disabled');
});

// Event listener for next round button click
nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();

  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

// Event listeners for add and subtract buttons
addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

// Function to handle value change event of the input
const handleValueChange = value => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value > 9) {
    addButton.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', true);
  }
};

// Event listener for input change event
humanGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});

// Function to generate the target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Function to compare guesses and determine the winner
function compareGuesses(humanGuess, computerGuess, targetNumber) {
  const userDifference = getAbsoluteDistance(humanGuess, targetNumber);
  const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

  if (userDifference === computerDifference) {
    return true; // Human wins in the event of a tie
  } else if (userDifference < computerDifference) {
    return true; // Human wins if closer to the target
  } else {
    return false; // Computer wins if closer to the target
  }
}

// Function to calculate the absolute distance between two numbers
function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

// Function to update the score based on the winner
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

// Function to advance to the next round
function advanceRound() {
  currentRoundNumber += 1;
}

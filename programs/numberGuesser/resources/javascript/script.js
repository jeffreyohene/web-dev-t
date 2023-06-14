// Variable declarations
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate the target number at the start of each round
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Function to calculate the absolute distance between two numbers
function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

// Function to compare guesses and determine the winner
function compareGuesses(humanGuess, computerGuess, targetNumber) {
  // Check if human guess is out of range
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range (0-9)!');
    return false;
  }

  // Calculate the difference between guesses and target
  const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
  const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);

  if (humanDifference === computerDifference) {
    return true; // Human wins in the event of a tie
  } else if (humanDifference < computerDifference) {
    return true; // Human wins if closer to the target
  } else {
    return false; // Computer wins if closer to the target
  }
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

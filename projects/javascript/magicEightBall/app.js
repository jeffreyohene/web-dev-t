// Array of names
const names = ['Kojo', 'Adwoa', 'Kwabena', 'Abena', 'Kwaku', 'Akua', 'Yaw', 'Yaa', 'Kofi'];
const index = Math.floor(Math.random() * names.length);

let userName = names[index];

// Check if user entered a name and display appropriate greeting
userName ? console.log(`Hello ${userName}!`): console.log('Hello!');

// Array of questions
const questions = ['Will I get laid?', 'Will the pain end?', 'Am I going to be fucking rich?']
const whichQuestion = Math.floor(Math.random() * questions.length);

let userQuestion = questions[whichQuestion];

console.log(`${userName} asked: ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);

eightBall = randomNumber;


// Use a switch statement to assign a Magic Eight Ball reply

switch (randomNumber) {
  case 0:
        eightBall = 'It is certain';
  break;
  case 1:
        eightBall ='It is decidedly so';
  break;
  case 2:
        eightBall ='Reply hazy try again';
  break;
  case 3:
        eightBall ='Cannot predict now';
  break;
  case 4:
        eightBall = 'Do not count on it';
  break;
  case 5:
        eightBall = 'You will DIE within the next 24 hours';
  break;
  case 6:
        eightBall = 'It is not looking good brev';
  break;
  case 7:
        eightBall = 'Signs point to yes';
  break;
  default:
        eightBall = 'The gods have forsaken you!';
  break;
}

console.log(eightBall);
let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = true;

let runnerAge = 18;

if (earlyReg && runnerAge > 18) {
  console.log('Your race begins at 9:30 am');
} else if (!earlyReg && runnerAge > 18) {
  console.log(`Your number is ${raceNumber} and your race begins at 11:00 am`);
} else {
  console.log('Kindly go to the registration desk.');
}
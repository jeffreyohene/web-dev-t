// Initializing with my age
const myAge = Math.floor(Math.random() * 100) + 1;
// Early years in human terms
let earlyYears = 2;

// In doggo years
earlyYears = earlyYears *= 10.5;

// First 2 years in human terms
let laterYears = myAge - 2;

// my age later in doggo years
laterYears = laterYears *= 4;

// results to console
console.log(earlyYears);
console.log(laterYears);

// what will my age be if I were a german shepherd
let myAgeInDogYears = earlyYears + laterYears

// who dis?
let myName = 'BIGbonsam'.toLowerCase()

// WOOF! What old am I in doggo years?
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

const input = "Hello, whales!";  // The input string to be translated to whale talk

const vowels = ['a', 'e', 'i', 'o', 'u'];  // Array containing the vowels

const resultArray = [];  // Array to store the translated vowels

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);  // Store the vowel in the result array

      if (input[i] === 'e') {
        resultArray.push(input[i]);  // Double 'e'
      }

      if (input[i] === 'u') {
        resultArray.push(input[i]);  // Double 'u'
      }
    }
  }
}

console.log(resultArray);  // Output the translated vowels

const resultString = resultArray.join('').toUpperCase();  // Join the translated vowels and convert to uppercase
console.log(resultString);  // Output the final whale talk

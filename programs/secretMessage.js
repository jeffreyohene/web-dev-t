let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last element from the array
secretMessage.pop();

// Print the length of the array to confirm change
// console.log(secretMessage.length);

// Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Change the element at index 7 to 'right'
secretMessage[7] = 'right';

// Remove the first element from the array
secretMessage.shift();

// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Remove elements from index 7 to 10 (inclusive) from the array
secretMessage.splice(7, 4);

// Print the array as a string with space-separated elements
console.log(secretMessage.join(' '));

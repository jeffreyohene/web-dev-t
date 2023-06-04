// Today's forecast measured in Kelvin
const kelvin = 293;

// Converting to Celsius
let celsius = kelvin - 273;

// How can we forget Fahrenheit?
let fahrenheit = Math.round(celsius * (9/5) + 32);

// Gotta floor it lads? Why? Instructions say so init
fahrenheit = Math.floor(fahrenheit);

// Hi JS, What is the temperature in Fahrenheit?
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Ouuu my my! What about expressing celsius in a Newton scale?
let newton = celsius * (33/100);
newton = Math.floor(newton)

// We did it, Isaac!
console.log(`The temperature is ${newton} degrees Fahrenheit.`)


/*
We're creating a javascript program that:
- generates a code of 6 numbers
- refreshes every 30 seconds

portfolio project by jeffreyohene

*/


// Define first function
function generateTwoFactorCode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

// Define main function and adding time limit
function generateAndPrintCode() {
  const twoFactorCode = generateTwoFactorCode();
  console.log(twoFactorCode);

  setTimeout(generateAndPrintCode, 30000); // Generate and print new code after 30 seconds
}

generateAndPrintCode(); // Generate and print the initial code
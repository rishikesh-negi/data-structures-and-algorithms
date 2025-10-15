const originalString = ["h", "e", "l", "l", "o"];

function reverseString(inputString) {
  for (let i = 1; i <= Math.floor(inputString.length / 2); i++) {
    const element1 = inputString[i - 1];

    inputString[i - 1] = inputString[inputString.length - i];
    inputString[inputString.length - i] = element1;
  }
}
reverseString(originalString);

console.log(originalString);

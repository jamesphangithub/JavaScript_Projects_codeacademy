//James Phan
//Converting human language to whale language

//input human language
let input = "Life is like a box of chocolates. You'll never know what you're gonna get!";

//whale talk only in vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

let whaleOutput = [];

for (let i = 0; i < input.length; i++) {
  
//doubles e and u
  if (input[i] === 'e') {
    whaleOutput.push('e');
  } else if (input[i] === 'u') {
    whaleOutput.push('u');
  } 
  
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      whaleOutput.push(vowels[j]);
    }
  }
}

console.log(whaleOutput.join('').toUpperCase());





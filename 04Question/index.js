// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.
let sentence = 'I am full stack developer'
const word = 'full'
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Expected output: "The word "full" is in the sentence"
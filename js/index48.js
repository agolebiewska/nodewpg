
let message ='3.14 it\'s a great number but 42 it\'s the answer to life.';
let pi = parseFloat(message.slice(0,4));

let answerToLife = parseFloat(message.slice(29,32));
let result = pi + answerToLife;
console.log(typeof result, result);

let resultString = result.toString();

console.log(resultString.concat (' is the result of adding ', pi, ' and ', answerToLife));
console.log(typeof resultString, resultString);

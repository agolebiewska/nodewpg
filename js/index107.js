
// let firstNumber = 3;
// let secondNumber = 5;

function biggerNumber(firstNumber, secondNumber) {
    
    if ((firstNumber > secondNumber) && (typeof firstNumber === 'number' && typeof secondNumber === 'number')) {
        return `Number ${firstNumber} is bigger than ${secondNumber}`
}   
    else if ((firstNumber < secondNumber) && (typeof firstNumber === 'number' && typeof secondNumber === 'number')) {
        return `Number ${secondNumber} is bigger than ${firstNumber}`
}
    else if ((firstNumber === secondNumber) && (typeof firstNumber === 'number' && typeof secondNumber === 'number'))  {
        return `Both numbers are ${firstNumber}`
}
    else {
        return `Error - parameters are not an numbers`
}
}
console.log(biggerNumber(2,2));
console.log(biggerNumber(6,3));
console.log(biggerNumber(2,5));
console.log(biggerNumber('2',5));
console.log(biggerNumber('2','3'))
// The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
// In this case you need to validate which number is bigger than the other to get the right feature and output
// Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
// Make sure that the parameters are numbers, you can use typeof for it
// Show a error message in case any of the parameters are not number
// Call the biggerNumber with the following parameters: 6 and 3
// Call the biggerNumber with the following parameters: 2 and 2


// const biggerNumber = function (firstNumber, secondNumber) {
//     return (firstNumber > secondNumber) ? false : (secondNumber > firstNumber);
// } 

// {
//     console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
// }
// biggerNumber(3,5);
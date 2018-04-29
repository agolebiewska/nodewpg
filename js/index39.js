const firstName = 'Anna';
const lastName = 'Golebiewska';
const result = firstName.length > lastName.length;

console.log(`My first name is ${firstName} and it has ${firstName.length} characters long.`);
console.log(`My last name is ${lastName} and it has ${lastName.length} characters long.`);
console.log("The character difference between my first name and last name is " + (-firstName.length + lastName.length)); 
console.log(`My first name is longer than my last name: ${result} `);

// Math.abs(firstName.length - lastName.length) zmienia wartośc z - na + absolute?
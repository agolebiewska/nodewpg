
const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!' 
};

console.log(`username: ${user.username}, password: ${user.password}`);

console.log('username: ' + (user.username.toUpperCase()) +  ' password: ' + (user.password.replace('1960','')) );


// Now show the users username and password as output again but with the following format:
// username: must be capitalize: example: Batman
// password: replace 1960 for an empty space so it looks this way: Alfred ROCKS!
// In both cases use the user object properties to get the final output
const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!' 
};

const shouldOpenBatCave = function(zbych) {
    return (zbych.username === 'batman' && zbych.password === 'Alfred1960ROCKS!')
}

    if (shouldOpenBatCave(user) === true) {
       return console.log('Welcome back batman!!');
    } else {
       return console.log('Sorry, you can\'t enter the Batcave, try again.');
    }

// console.log(shouldOpenBatCave());


// do skonsultowania 

// The shouldOpenBatCave function not longer accepts two parameters
// Now the shouldOpenBatCave function only accepts a user parameter
// Instead of calling the shouldOpenBatCave function passing username and passowrd now we only pass the user object
// The rest of the code should still work the same way and show the proper output
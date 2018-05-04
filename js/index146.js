const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!' 
};

const shouldOpenBatCave = function() {
    if ((user.username === 'batman') && (user.password === 'Alfred1960ROCKS!') ) {
        return true;

        } else { 
            return false;
        }
    }

    if (shouldOpenBatCave() === true) {
        console.log('Welcome back batman!!')
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again.')
    }

// console.log(shouldOpenBatCave());

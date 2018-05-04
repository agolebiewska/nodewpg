const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!' 
};
    
const shouldOpenBatCave = function(bee) {
    if ((bee.username === 'batman') && (bee.password === 'Alfred1960ROCKS!') ) {
        return true;
        
    } else { 
        return false;
    }
}
    
    if (shouldOpenBatCave(user) === true) {
        console.log('Welcome back batman!!')
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again.')
    }
    

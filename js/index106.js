function getUserId() {
    return 50;
}

function isUserValid() {
    if ((getUserId()) > 30) {
        return true;
    } 
    else {
        return false;
    }   
}

if (isUserValid()) {
    console.log(`User valid`);
} else {
    console.log(`User not valid`);
}

// let isUserValid

// If the user id is higher than 30 return true, if not return false
// Then outside the functions write the following code
// If isUserValid then show the following message: User valid
// Else show the following message: User not valid

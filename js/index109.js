const username = 'nacho';
const password = 'Nerd1979';
let message = '';

function validateUser(username, password) {
    return (username === 'nacho' && password === 'Nerd1979') || (username === 'pedro' && password === 'Batman0217') || (username ==='marta' && password === 'Mother2312'); 
}
        if (validateUser (username === password)){
            message = (`Wellcome ${username}, nice to see you again`);
    }   else {
            message = (`Please input valid credentials`);}
    
console.log(validateUser('pedro', 'Batman0217'));

const username = 'pepe2017';
const password = '12345';

if (username !== 'pepe2107' && password === '12345') {
    console.log(`Logged in user, show user home page.`)
} else { (username !== 'pepe2107' || password === '12345')
    console.log(`Sorry, there has been a problem, please try it again.`);
}



// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator
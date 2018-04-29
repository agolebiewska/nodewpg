let showUser = function() {
    let name = 'Ania';
    let age = 21;
    let phone = 123456789;
    let street = 'Street';
    let postal = 'X1X 1X1';
    let married = true;

    console.log(`Your name: ${name}`);
    console.log(`Your age: ${age}`);
    console.log(`Your phone number: ${phone}`);
    console.log(`Your street: ${street}`);
    console.log(`Your postal code: ${postal}`);
    console.log(`Are you married: ` + typeof married);
}
showUser();
